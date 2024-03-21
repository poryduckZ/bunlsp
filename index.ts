import { decodeMessage } from "./src/rpc/rpc";
import { Logger } from "./src/logger/logger";
import { stdin } from "bun";

// TODO
function handleMessage(msg: any, logger: Logger) {
  logger.log(msg);
}


async function main() {
  const logger = new Logger("/Users/gyj1112/projects/bunlsp/log.txt");
  logger.log("Logging started");
  for await (const line of stdin.stream()) {
    const msg = Buffer.from(line).toString();
    handleMessage(msg, logger);
  }
}


await main();
