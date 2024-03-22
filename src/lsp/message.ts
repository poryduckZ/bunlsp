interface Message {
  jsonrpc: string;
}

interface RequestMessage extends Message {
  id: number;
  method: string;
}

interface ResponseMessage extends Message {
  id: number | null;
}

interface Notification extends Message {
  method: string;
}
