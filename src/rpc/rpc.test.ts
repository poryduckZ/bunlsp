import { expect, test } from "bun:test";
import { decodeMessage, encodeMessage } from "./rpc";

type EncodeTest = {
  testing: boolean;
}

test("Test encode", () => {
  const expected = "Content-Length: 16\r\n\r\n{\"testing\":true}";
  const encodeTest: EncodeTest = { testing: true }
  const actual = encodeMessage(encodeTest);
  expect(actual).toBe(expected);
})

test("Test decode", () => {
  const incomingMessage = "Content-Length: 17\r\n\r\n{\"method\":\"test\"}";
  const decodedMessage = decodeMessage(incomingMessage);
  const contentLength = decodedMessage.content.length;
  expect(decodedMessage.method).toBe("test");
  expect(contentLength).toBe(17);
})
