// SPDX-License-Identifier: SEE LICENSE IN LICENSE

pragma solidity >= 0.7.0;

contract crowdfunding {
  string public id;
  string public name;
  string public description;
  address payable public author; //who create o represent the project
  uint public state; 
  uint public funds; // to acumulate project funds
  uint public fundraisingGoal; // the goal of the funding

  constructor(string memory _id, string memory _name, string memory _description, uint  _fundraisingGoal) {
    id = _id;
    name = _name;
    description = _description;
    fundraisingGoal = _fundraisingGoal;
    author = payable(msg.sender); // sender isn't payable, to became we use payeble
  }

  modifier notFundFronAuthor {
      require(
          msg.sender != author,
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
    require(state != 1,"The project can not receive funds, it's closed");
    author.transfer(msg.value);
    funds += msg.value;
    emit SendFunding(msg.sender, msg.value);
    if (funds >= fundraisingGoal) {
        emit RaisingFundGoal(
            id, 
            funds,
            "fundRaisingGoal reached");
    }
  }

    modifier onlyAuthorOrRaisingGoal {
        require(
            msg.sender == author || funds >= fundraisingGoal,
            "Only author can change state or if the fundraidingGoal is raising"
        );
        _; // identifica desde donde se inserta la función, define cuando se continua la función
    }

    event ChangeState(
        string idProject,
        uint newState
    );

    function changeProjectState(uint newState) public onlyAuthorOrRaisingGoal {
        require(
            newState == 1 || newState == 0,
            "Invalid new state. It'll be 0 to Opened and 1 to Closed"
        );
        state = newState;
        emit ChangeState(id, newState);
    }
}