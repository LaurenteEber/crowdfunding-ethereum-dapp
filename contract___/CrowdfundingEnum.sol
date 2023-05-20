// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity >= 0.7.0;

contract crowdfunding {
    enum State {Opened, Closed}
    struct Project {
        string id;
        string name;
        string description;
        address payable author; //who create o represent the project
        State state; 
        uint funds; // to acumulate project funds
        uint fundraisingGoal; // the goal of the funding
    }


    Project public project;
    constructor(string memory _id, string memory _name, string memory _description, uint  _fundraisingGoal) {
        project = Project(
            _id,
            _name,
            _description,
            payable(msg.sender),
            State.Opened,
            0,
            _fundraisingGoal
        );
    }

    modifier notFundFronAuthor {
        require(
            msg.sender != project.author,
             "Author don't funding his ouw project"
        );
        _;
    }

    event SendFunding(
        address funder,
        uint fund
    );

    event RaisingFundGoal(
        string idProject,
        uint fundRaising,
        string mensaje
    );

    function fundProject() public payable notFundFronAuthor{
        require(msg.value > 0,"Fund value must be greater then 0");
        //require(project.state != 1,"The project can not receive funds, it's closed");
        project.author.transfer(msg.value);
        project.funds += msg.value;
        emit SendFunding(msg.sender, msg.value);
        if (project.funds >= project.fundraisingGoal) {
            emit RaisingFundGoal(
                project.id, 
                project.funds,
                "fundRaisingGoal reached");
        }
    }

    modifier onlyAuthorOrRaisingGoal {
        require(
            msg.sender == project.author || project.funds >= project.fundraisingGoal,
            "Only author can change state or if the fundraidingGoal is raising"
        );
        _; // identifica desde donde se inserta la función, define cuando se continua la función
    }

    event ChangeState(
        string idProject,
        State newState
    );

    function changeProjectState(State newState) public onlyAuthorOrRaisingGoal {
        //require(
        //    newState == 1 || newState == 0,
        //    "Invalid new state. It'll be 0 to Opened and 1 to Closed"
        //);
        project.state = newState;
        emit ChangeState(project.id, newState);
    }
}