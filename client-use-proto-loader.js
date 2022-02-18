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

const main = () => {
  const client = new hello_proto.HelloWorld(
    '0.0.0.0:50051',
    grpc.credentials.createInsecure()
  );
  client.sayHello({ name: 'HELLO WORLD!' }, function (err, response) {
    console.log(response.message);
  });
};

main();
