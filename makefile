# Path to this plugin
PROTOC_GEN_TS_PATH="./ts/node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_TS_DIR="./ts/src/protogen"

# Path to go proto generated files
OUT_GO_DIR="./go/protogen"

gen_ts:
	protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_TS_DIR}" \
    --ts_out="${OUT_TS_DIR}" \
    proto/hello.proto

gen_go:
	protoc \
	--go_out=${OUT_GO_DIR} \
	proto/hello.proto

	protoc \
	--go-grpc_out=${OUT_GO_DIR} \
	proto/hello.proto

run_client:
	cd ts; yarn; yarn build; yarn start

run_server:
	cd go; go run main.go