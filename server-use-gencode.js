const grpc = require('@grpc/grpc-js');
const { HelloWorldService } = require('./gen/proto/hello_grpc_pb');
const { HelloReply } = require('./gen/proto/hello_pb');

const sayHello = (call, callback) => {
  const reply = new HelloReply();
  console.log('Server: Call sayHello RPC method');
  const message = 'gRPC Sample: ' + call.request.getName();
  reply.setMessage(message);
  callback(null, reply);
};

const main = () => {
  const server = new grpc.Server();
  server.addService(HelloWorldService, { sayHello: sayHello });
  server.bindAsync(
    '0.0.0.0:50051',
    grpc.ServerCredentials.createInsecure(),
    () => {
      server.start();
      console.log('Server: Start');
    }
  );
};

main();
