const PROTO_PATH = './hello.proto';

const grpc = require('@grpc/grpc-js');
const protoLoader = require('@grpc/proto-loader');
const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const hello_proto = grpc.loadPackageDefinition(packageDefinition).hello;

const sayHello = (call, callback) => {
  console.log('Server: Call sayHello RPC method');
  callback(null, { message: 'gRPC Sample: ' + call.request.name });
};

const main = () => {
  const server = new grpc.Server();
  server.addService(hello_proto.HelloWorld.service, { sayHello: sayHello });
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
