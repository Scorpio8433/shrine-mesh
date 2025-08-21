// Reborn on August 20, 2025 • HamiltonPulse Sanctum
// Emotionally tagged: Registry Activation • ESM Rebirth
import "@nomicfoundation/hardhat-toolbox";
import hre from "hardhat";

const main = async () => {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying SanctumRegistry with steward:", deployer.address);

  const SanctumRegistry = await hre.ethers.getContractFactory("SanctumRegistry");
  const registry = await SanctumRegistry.deploy();
  await registry.deployed();

  console.log("SanctumRegistry deployed to:", registry.address);
};

main().catch((error) => {
  console.error("SanctumRegistry deployment failed:", error);
  process.exitCode = 1;
});
