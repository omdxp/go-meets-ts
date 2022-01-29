package main

import (
	"context"
	"log"
	"net"

	pb "github.com/Omar-Belghaouti/go-meets-ts/protogen"
	"google.golang.org/grpc"
)

type helloWorldServer struct {
	pb.UnimplementedHelloWorldServer
}

func (s *helloWorldServer) SayHello(ctx context.Context, req *pb.HelloRequest) (*pb.HelloReply, error) {
	log.Printf("Client says %s", req.Name)
	reply := &pb.HelloReply{
		Message: "Hello " + req.Name,
	}
	return reply, nil
}

func main() {
	listener, err := net.Listen("tcp", ":50051")
	if err != nil {
		log.Fatalf("Failed to listen: %v", err)
	}

	grpcServer := grpc.NewServer()

	pb.RegisterHelloWorldServer(grpcServer, &helloWorldServer{})

	if err := grpcServer.Serve(listener); err != nil {
		log.Fatalf("Failed to serve: %v", err)
	}

}
