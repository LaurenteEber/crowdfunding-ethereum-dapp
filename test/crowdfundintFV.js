const { expect } = require("chai");
const { ethers } = require("hardhat");

describe('Crowdfunding contract', () => {
  it('It should create a new project', async() => {
    const Crowdfunding = await ethers.getContractFactory('Crowdfunding');
    const crowdfunding = await Crowdfunding.deploy();
    await crowdfunding.createProject("app1", "An amazing app1", 1000);
    const project = await crowdfunding.getProject("app1");

    expect(project[0]).to.equal(0);
  })
})