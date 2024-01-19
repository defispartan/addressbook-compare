/* eslint-disable @typescript-eslint/no-var-requires */
const execSync = require("child_process").execSync;
const path = require("path");

function executeScriptAndGetOutput(scriptPath) {
  return JSON.parse(execSync(`node ${scriptPath}`, { encoding: "utf8" }));
}

function compareOutputs(output1, output2) {
  const differences = [];
  for (const key in output1) {
    let a = "";
    let b = "";
    try {
      a = output1[key];
    } catch (e) {
      console.log(`key ${key} not found in version 1`);
    }
    try {
      b = output2[key];
    } catch (e) {
      console.log(`key ${key} not found in version 2`);
    }
    if (a !== b) {
      differences.push(
        `Difference found in ${key}: ${output1[key]} vs ${output2[key]}`
      );
    }
  }
  return differences;
}

function main() {
  const script1Path = path.join(__dirname, "v1/v1script.js");
  const script2Path = path.join(__dirname, "v2/v2script.js");

  const output1 = executeScriptAndGetOutput(script1Path);
  const output2 = executeScriptAndGetOutput(script2Path);

  const differences = compareOutputs(output1, output2);

  if (differences.length === 0) {
    console.log("No differences found.");
  } else {
    console.log("Differences found:");
    differences.forEach((diff) => console.log(diff));
  }
}

main();
