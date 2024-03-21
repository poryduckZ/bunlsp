import { BunFile } from "bun";

export class Logger {
  private logFile: BunFile;

  constructor(filePath: string) {
    this.logFile = Bun.file(filePath);
  }

  async log(msg: string) {
    const date = new Date().toISOString();
    const logMsg = `[bunlsp] ${date} - ${msg}\n`;
    await Bun.write(this.logFile, logMsg);
  }
}
