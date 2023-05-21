// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity >= 0.8.0;

contract crowdfunding {
    enum FundraisingState {Opened, Closed}
    
    struct Project {
        uint id;
        string description;
        address payable author; //who create o represent the project
        FundraisingState state; 
        uint fundraisingGoal; // the goal of the funding
        uint funds;
        uint numFunders;
    }

    mapping(string => Project) public projects;
    uint idProjects = 0;
    string[] public projectsNameList;

    event NewProject(
        string nameProject,
        address authorProject,
        string descriptionProject,
        uint fundraisingGoal
    );

    function createProject(string memory _name, string memory _description, uint  _fundraisingGoal) public {
        require(_fundraisingGoal > 0, "Fundraising goal must be greater then 0");
        Project memory newProject = Project({
            id: idProjects,
            description: _description,
            author: payable(msg.sender),
            state: FundraisingState.Opened,
            fundraisingGoal: _fundraisingGoal,
            funds: 0,
            numFunders: 0
        });
        projects[_name]=newProject;
        emit NewProject(_name, msg.sender, _description, _fundraisingGoal);
        projectsNameList.push(_name);
        idProjects ++;
    }
    // mapping´s key is the project´s name

    event SendFunding(
        address funder,
        uint fund
    );

    event RaisingFundGoal(
        string nameProject,
        uint fundRaising,
        string mensaje
    );

    struct Funder{
        address funder;
        uint amount;
    }
    mapping(string => mapping(uint => Funder)) public funders;

    function fundProject(string calldata nameProject) public payable {
        require(projects[nameProject].author != msg.sender,"Author don't funding his ouw project");
        require(projects[nameProject].state != FundraisingState.Closed,"The project can not receive funds, it's closed");
        require(msg.value > 0,"Fund value must be greater then 0");

        projects[nameProject].author.transfer(msg.value);
        projects[nameProject].funds += msg.value;
        emit SendFunding(msg.sender, msg.value);
        
        funders[nameProject][projects[nameProject].numFunders] = Funder(msg.sender, msg.value);
        projects[nameProject].numFunders ++;

        if (projects[nameProject].funds >= projects[nameProject].fundraisingGoal) {
            emit RaisingFundGoal(
                nameProject,
                projects[nameProject].funds,
                "fundRaisingGoal reached");
        }
        
    }

    event ChangeState(
        string nameProject,
        FundraisingState newState
    );

    function changeProjectState(FundraisingState newState, string calldata nameProject) public {
        require(msg.sender == projects[nameProject].author, "You sould be the author for this project");
        projects[nameProject].state = newState;
        emit ChangeState(nameProject, newState);
    }

    function getProject(string memory nameProject) public view returns (Project memory project){
    project = projects[nameProject];
    }

    function getFunder(string memory nameProject, uint idFunder) public view returns (Funder memory funder){
        require(idFunder <= projects[nameProject].numFunders, "That funder in this project doesn't exist");
        funder = funders[nameProject][idFunder];
    }

    function getProjectsNameList() public view returns (string[] memory){
      return projectsNameList;
    }
}