const grpc = require('@grpc/grpc-js');
const { HelloWorldClient } = require('./gen/proto/hello_grpc_pb');
const { HelloRequest } = require('./gen/proto/hello_pb');

const main = () => {
  const request = new HelloRequest();
  const client = new HelloWorldClient(
    '0.0.0.0:50051',
    grpc.credentials.createInsecure()
  );
  request.setName('HELLO WORLD!');
  client.sayHello(request, function (err, response) {
    console.log(response.getMessage());
  });
};

main();
