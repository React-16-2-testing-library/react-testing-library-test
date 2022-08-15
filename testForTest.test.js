const util = require("node:util");
const exec = util.promisify(require("node:child_process").exec);

// jest.useFakeTimers();

jest.setTimeout(18000);

describe("Check students' tests", () => {
  it("App test finds 2 errors", async () => {
    let result = "";
    try {
      let { stdout } = await exec(
        "npm test App.test.js",
        // "npm test ^((?!testFotTest.test.js).)*$",
        {
          encoding: "utf-8",
          timeout: 15000,
          detached: true,
        }
      );
      result = stdout;
    } catch (error) {
      console.log("\x1B[34m student's tests");
      console.log(error.stderr);
      console.info("\x1B[34m end of student's tests");
      result = error.stderr;
    }   
    expect(result).toEqual(expect.stringContaining("2 failed"));    
  });

  it("Calculations test finds 2 errors", async () => {
    let result = "";
    try {
      let { stdout } = await exec(
        "npm test Calculations.test.js",
        // "npm test ^((?!testFotTest.test.js).)*$",
        {
          encoding: "utf-8",
          timeout: 15000,
          detached: true,
        }
      );
      result = stdout;
    } catch (error) {
      console.log("\x1B[34m student's tests");
      console.log(error.stderr);
      console.info("\x1B[34m end of student's tests");
      result = error.stderr;
    }
    expect(result).toEqual(expect.stringContaining("2 failed"));
  });

  it("ButtonGroup test finds an error", async () => {
    let result = "";
    try {
      let { stdout } = await exec(
        "npm test ButtonGroup.test.js",
        // "npm test ^((?!testFotTest.test.js).)*$",
        {
          encoding: "utf-8",
          timeout: 15000,
          detached: true,
        }
      );
      result = stdout;
    } catch (error) {
      console.log("\x1B[34m student's tests");
      console.log(error.stderr);
      console.info("\x1B[34m end of student's tests");
      result = error.stderr;
    }
    expect(result).toEqual(expect.stringContaining("failed"));
  });
});
