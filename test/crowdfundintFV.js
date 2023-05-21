const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Crowdfunding contract', () => {
  it('It should create a new project', async() => {
    const Crowdfunding = await ethers.getContractFactory('Crowdfunding');
    const crowdfunding = await Crowdfunding.deploy();
    await crowdfunding.createProject("app1", "An amazing app1", 1000);
    const projects = await crowdfunding.getProjectsNameList();

    expect(projects[0]).to.equal("app1");
  })
})