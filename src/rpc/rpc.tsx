export function encodeMessage(msg: any): string {
  const content = JSON.stringify(msg);
  return "Content-Length: " + content.length + "\r\n\r\n" + content;
}
