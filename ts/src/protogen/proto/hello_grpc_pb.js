// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('grpc');
var proto_hello_pb = require('../proto/hello_pb.js');

function serialize_main_HelloReply(arg) {
  if (!(arg instanceof proto_hello_pb.HelloReply)) {
    throw new Error('Expected argument of type main.HelloReply');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_main_HelloReply(buffer_arg) {
  return proto_hello_pb.HelloReply.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_main_HelloRequest(arg) {
  if (!(arg instanceof proto_hello_pb.HelloRequest)) {
    throw new Error('Expected argument of type main.HelloRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_main_HelloRequest(buffer_arg) {
  return proto_hello_pb.HelloRequest.deserializeBinary(new Uint8Array(buffer_arg));
}


var HelloWorldService = exports.HelloWorldService = {
  sayHello: {
    path: '/main.HelloWorld/SayHello',
    requestStream: false,
    responseStream: false,
    requestType: proto_hello_pb.HelloRequest,
    responseType: proto_hello_pb.HelloReply,
    requestSerialize: serialize_main_HelloRequest,
    requestDeserialize: deserialize_main_HelloRequest,
    responseSerialize: serialize_main_HelloReply,
    responseDeserialize: deserialize_main_HelloReply,
  },
};

exports.HelloWorldClient = grpc.makeGenericClientConstructor(HelloWorldService);
