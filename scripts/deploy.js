const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
  const Hello = await ethers.getContractFactory("Hello");
  const hello = await Hello.deploy();

  console.log("address", hello.address);
  console.log("Get Hello: ", await hello.getHello());
  await hello.setHello("Sunday");
  console.log("Get New Hello: ", await hello.getHello());
}

main()
  .then(() => {
    process.exit(0);
  })
  .catch((error) => {
    console.log(error);
    process.exit(1);
  });
