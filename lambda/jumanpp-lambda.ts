import * as childProcess from "child_process";
import * as util from "util";

exports.jumanppHandler = async (event: { content: string }) => {
  const out = await util
    .promisify(childProcess.exec)(`echo "${event.content}" | jumanpp`)
    .then((result) => result.stdout)
    .then((output) => output.split("\n"))
    .then((output) => output.filter((s) => s.length > 0));

  return {
    result: out,
  };
};
