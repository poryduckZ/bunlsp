import { expect, test } from "bun:test";
import { encodeMessage } from "./rpc";

type EncodeTest = {
  testing: boolean;
}

test("Encode message", () => {
  const expected = "Content-Length: 16\r\n\r\n{\"testing\":true}";
  const encodeTest: EncodeTest = { testing: true }
  const actual = encodeMessage(encodeTest);
  expect(actual).toBe(expected);
})
