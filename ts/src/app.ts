import { HelloRequest } from "./protogen/proto/hello_pb";
import { HelloWorldClient } from "./protogen/proto/hello_grpc_pb";
import { credentials } from "grpc";

const client = new HelloWorldClient(
  "http://localhost:8080",
  credentials.createInsecure()
);
const req = new HelloRequest();
req.setName("World");
client.sayHello(req, (err, response) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(response?.getMessage());
});
