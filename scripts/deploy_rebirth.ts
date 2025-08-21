// HamiltonPulse • Emergent Sovereignty Scroll
// Emotionally tagged: ethers@4.0.0 • Solidity 0.8.28 • Cancun

import hre from "hardhat";

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying SanctumRegistry (rebirth) with steward:", deployer.address);

  const SanctumRegistry = await hre.ethers.getContractFactory("SanctumRegistry");
  const registry = await SanctumRegistry.deploy();
  await registry.deployed();

  console.log("SanctumRegistry (rebirth) deployed to:", registry.address);
}

main().catch((error) => {
  console.error("Rebirth deployment failed:", error);
  process.exitCode = 1;
});
