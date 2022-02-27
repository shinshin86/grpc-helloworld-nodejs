# grpc-helloworld-nodejs

hello world sample

## Setup

```sh
yarn install

# If you are using the M1 mac
npm_config_target_arch=x64 yarn install
```

## Usage sample with using @grpc/proto-loader

Start server

```sh
yarn start:server
```

Run client code

```sh
yarn start:client
# => gRPC Sample: HELLO WORLD!
```

## Usage sample with using generated code

Generate code

```sh
yarn proto:gen
```

Start serevr with use generated code

```sh
yarn start2:server
```

Run client code with use generated code

```sh
yarn start2:client
# => gRPC Sample: HELLO WORLD!
```
