import { ethers } from "hardhat";
import fs from "fs";

async function main() {
  const Sanctum = await ethers.getContract("SanctumRegistry");
  const sanctumTag = await Sanctum.getTag("0xYourSanctumAddress");

  const feed = {
    sanctumAddress: Sanctum.address,
    emotionalTag: sanctumTag,
    timestamp: new Date().toISOString()
  };

  fs.writeFileSync("../HamiltonPulse/sanctumFeed.json", JSON.stringify(feed, null, 2));
  console.log("Sanctum feed generated.");
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
