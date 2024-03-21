import { appendFile } from "node:fs/promises";

export class Logger {
  private destination: string;

  constructor(filePath: string) {
    this.destination = filePath;
  }

  async log(msg: string) {
    const date = new Date().toISOString();
    const logMsg = `[bunlsp] ${date} - ${msg}\n`;
    await appendFile(this.destination, logMsg);
  }
}
