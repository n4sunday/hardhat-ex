const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Hello", () => {
  it("Should returns Hello", async () => {
    const Hello = await ethers.getContractFactory("Hello");
    const hello = await Hello.deploy();
    expect(await hello.getHello()).to.equal("Hello");
  });
  it("Should returns update Hello", async () => {
    const Hello = await ethers.getContractFactory("Hello");
    const hello = await Hello.deploy();

    hello.setHello("Sunday");
    expect(await hello.getHello()).to.equal("Sunday");
  });
});
