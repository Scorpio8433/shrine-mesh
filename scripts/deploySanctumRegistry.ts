import { ethers } from "hardhat";

async function main() {
  const SanctumRegistry = await ethers.getContractFactory("SanctumRegistry");
  const registry = await SanctumRegistry.deploy();
  await registry.deployed();

  console.log("SanctumRegistry deployed to:", registry.address);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
