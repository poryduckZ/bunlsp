export function encodeMessage(msg: any): string {
  const content = JSON.stringify(msg);
  return "Content-Length: " + content.length + "\r\n\r\n" + content;
}

export type BaseMessage = {
  method: string;
};

export type DecodedMessage = {
  method: string;
  content: string;
};

export function decodeMessage(msg: string): DecodedMessage {
  const msgSplit = msg.split("\r\n\r\n");
  if (msgSplit[0] === msg) {
    throw new Error("Separator \r\n\r\n not found in message.")
  }
  const head = msgSplit[0];
  const contentLength = +head.split("Content-Length: ")[1];
  const content = msgSplit[1];
  if (contentLength !== content.length) {
    throw new Error("Content-Length does not match actual content length");
  }
  try {
    const contentJson: BaseMessage = JSON.parse(content);
    return {
      method: contentJson.method,
      content,
    }
  } catch (err) {
    throw new Error("Unable to parse content as JSON.");
  }
}
