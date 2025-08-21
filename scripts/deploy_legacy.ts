// HamiltonPulse • Legacy Stewardship Scroll (ESM Rebirth)
// Emotionally tagged: ESM • ethers@4.x • Solidity 0.8.28 • ShrineMesh

import hardhat from "hardhat";

const { ethers } = hardhat;

async function main() {
  const [deployer] = await ethers.getSigners();
  console.log("Deploying SanctumRegistry (rebirth) with steward:", deployer.address);

  const SanctumRegistry = await ethers.getContractFactory("SanctumRegistry");
  const registry = await SanctumRegistry.deploy();
  await registry.deployed();

  console.log("SanctumRegistry (rebirth) deployed to:", registry.address);
}

main().catch((error) => {
  console.error("Rebirth deployment failed:", error);
  process.exitCode = 1;
});
