export function encodeMessage(msg: any): string {
  const content = JSON.stringify(msg);
  return "Content-Length: " + content.length + "\r\n\r\n" + content;
}

export type BaseMessage = {
  Method: string;
};

export type DecodedMessage = {
  method: string;
  length: number;
};

export function decodeMessage(msg: string): DecodedMessage {
  const head = msg.split("\r\n\r\n")[0];
  const length = parseInt(head.split("Content-Length: ")[1], 10);
  const content = msg.split("\r\n\r\n")[1];
  const contentJson: BaseMessage = JSON.parse(content);
  return {
    method: contentJson.Method,
    length,
  }
}
