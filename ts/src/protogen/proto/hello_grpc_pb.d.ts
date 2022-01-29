// GENERATED CODE -- DO NOT EDIT!

// package: main
// file: proto/hello.proto

import * as proto_hello_pb from "../proto/hello_pb";
import * as grpc from "grpc";

interface IHelloWorldService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  sayHello: grpc.MethodDefinition<proto_hello_pb.HelloRequest, proto_hello_pb.HelloReply>;
}

export const HelloWorldService: IHelloWorldService;

export interface IHelloWorldServer extends grpc.UntypedServiceImplementation {
  sayHello: grpc.handleUnaryCall<proto_hello_pb.HelloRequest, proto_hello_pb.HelloReply>;
}

export class HelloWorldClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  sayHello(argument: proto_hello_pb.HelloRequest, callback: grpc.requestCallback<proto_hello_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: proto_hello_pb.HelloRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<proto_hello_pb.HelloReply>): grpc.ClientUnaryCall;
  sayHello(argument: proto_hello_pb.HelloRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<proto_hello_pb.HelloReply>): grpc.ClientUnaryCall;
}
