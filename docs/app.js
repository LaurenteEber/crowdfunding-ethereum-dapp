const CONTRACT_ABI = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "nameProject",
        type: "string",
      },
      {
        indexed: false,
        internalType: "enum Crowdfunding.FundraisingState",
        name: "newState",
        type: "uint8",
      },
    ],
    name: "ChangeState",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "nameProject",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address",
        name: "authorProject",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "descriptionProject",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fundraisingGoal",
        type: "uint256",
      },
    ],
    name: "NewProject",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "string",
        name: "nameProject",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fundRaising",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "mensaje",
        type: "string",
      },
    ],
    name: "RaisingFundGoal",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "fund",
        type: "uint256",
      },
    ],
    name: "SendFunding",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "enum Crowdfunding.FundraisingState",
        name: "newState",
        type: "uint8",
      },
      {
        internalType: "string",
        name: "nameProject",
        type: "string",
      },
    ],
    name: "changeProjectState",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_name",
        type: "string",
      },
      {
        internalType: "string",
        name: "_description",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_fundraisingGoal",
        type: "uint256",
      },
    ],
    name: "createProject",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "nameProject",
        type: "string",
      },
    ],
    name: "fundProject",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "funders",
    outputs: [
      {
        internalType: "address",
        name: "funder",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "nameProject",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "idFunder",
        type: "uint256",
      },
    ],
    name: "getFunder",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "funder",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "amount",
            type: "uint256",
          },
        ],
        internalType: "struct Crowdfunding.Funder",
        name: "funder",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "nameProject",
        type: "string",
      },
    ],
    name: "getProject",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "description",
            type: "string",
          },
          {
            internalType: "address payable",
            name: "author",
            type: "address",
          },
          {
            internalType: "enum Crowdfunding.FundraisingState",
            name: "state",
            type: "uint8",
          },
          {
            internalType: "uint256",
            name: "fundraisingGoal",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "funds",
            type: "uint256",
          },
          {
            internalType: "uint256",
            name: "numFunders",
            type: "uint256",
          },
        ],
        internalType: "struct Crowdfunding.Project",
        name: "project",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getProjectsNameList",
    outputs: [
      {
        internalType: "string[]",
        name: "",
        type: "string[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    name: "projects",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "description",
        type: "string",
      },
      {
        internalType: "address payable",
        name: "author",
        type: "address",
      },
      {
        internalType: "enum Crowdfunding.FundraisingState",
        name: "state",
        type: "uint8",
      },
      {
        internalType: "uint256",
        name: "fundraisingGoal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "funds",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "numFunders",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "projectsNameList",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];
const CONTRACT_ADDRESS = "0xd27d2488c964C3aDB9Be64dF3aaA45A68Bd40548";
let signer;
let contract;

// Setting provider
const provider = new ethers.providers.Web3Provider(window.ethereum);

provider.send("eth_requestAccounts", []).then(() => {
  provider.listAccounts().then((accounts) => {
    signer = provider.getSigner(accounts[0]);
    contract = new ethers.Contract(CONTRACT_ADDRESS, CONTRACT_ABI, signer);
  });
});

// Register project
async function createProject() {
  const name = document.getElementById("project-name").value;
  const description = document.getElementById("project-description").value;
  const fundraisingGoal = document.getElementById(
    "project-fundraisingGoal"
  ).value;
  await contract.createProject(name, description, fundraisingGoal);
}

// Getting list of registed projects
async function getProjectList() {
  const nameList = await contract.getProjectsNameList();
  const selectProject = document.getElementById("projects-list");

  const defaulOption = document.createElement("option");
  selectProject.innerHTML = "";
  defaulOption.value = "Select";
  defaulOption.textContent = "Select";
  selectProject.appendChild(defaulOption);

  for (let i = 0; i < nameList.length; i++) {
    const option = nameList[i];
    const optionElement = document.createElement("option");
    optionElement.value = option;
    optionElement.textContent = option;
    selectProject.appendChild(optionElement);
  }
}

const selected = document.getElementById("projects-list");
selected.addEventListener("change", projectSelected);

// Selecting project
async function projectSelected() {
  // cleaning funders list
  const list = document.getElementById("list-funders");
  list.innerHTML = "";

  // getting data about selected project
  const options = document.getElementById("projects-list");
  const optionSelected = options.value;
  if (optionSelected == "Select") {
    document.getElementById("name-project").value = "";
    document.getElementById("description-project").value = "";
    document.getElementById("author-project").value = "";
    document.getElementById("fundraisingGoal-project").value = "";
    document.getElementById("funds-project").value = "";
    document.getElementById("numFunders-project").value = "";
    document.getElementById("state-project").value = "";
  } else {
    const project = await contract.getProject(optionSelected);
    document.getElementById("name-project").value = optionSelected;
    document.getElementById("description-project").value = project[1];
    document.getElementById("author-project").value = project[2];
    document.getElementById("fundraisingGoal-project").value = project[4];
    document.getElementById("funds-project").value = project[5];
    document.getElementById("numFunders-project").value = project[6];
    if (project[3] === 0) {
      document.getElementById("state-project").value = "Opened";
    } else {
      document.getElementById("state-project").value = "Closed";
    }
  }
}

// Funding selected project
async function fundProject() {
  const nameProjectSelected = document.getElementById("name-project").value;
  if (nameProjectSelected !== "") {
    await contract.fundProject(nameProjectSelected);
  }
}

// Getting funder of selected project
async function getFunders() {
  const projectName = document.getElementById("name-project").value;
  if (projectName !== "") {
    const numFunders = document.getElementById("numFunders-project").value;
    const list = document.getElementById("list-funders");
    list.innerHTML = "";
    for (let i = 0; i <= numFunders; i++) {
      const funder = await contract.getFunder(projectName, i);
      const element = document.createElement("li");
      element.textContent = "Address: " + funder[0] + "\tAmount: " + funder[1];
      list.appendChild(element);
    }
  }
}

// Changing state of selected project
async function changeState() {
  const nameProjectSelected = document.getElementById("name-project").value;
  if (nameProjectSelected !== "") {
    const stateProjectSelected = document.getElementById("state-project").value;
    let newState;
    if (stateProjectSelected === "Opened") {
      newState = 1;
    } else {
      newState = 0;
    }
    alert("You will change the state of selected project");
    await contract.changeProjectState(newState, nameProjectSelected);
  }
}
