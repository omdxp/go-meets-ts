import { HelloReply, HelloRequest } from "./protogen/proto/hello_pb";

import { HelloWorldClient } from "./protogen/proto/hello_grpc_pb";

const client = new HelloWorldClient("http://localhost:8080", null);
const req = new HelloRequest();
req.setName("World");
client.sayHello(req, (err: any, response: HelloReply) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(response.getMessage());
});
