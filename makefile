# Path to this plugin
PROTOC_GEN_TS_PATH="./ts/node_modules/.bin/protoc-gen-ts"

# Directory to write generated code to (.js and .d.ts files)
OUT_TS_DIR="./ts/src/protogen"

gen_ts:
	protoc \
    --plugin="protoc-gen-ts=${PROTOC_GEN_TS_PATH}" \
    --js_out="import_style=commonjs,binary:${OUT_TS_DIR}" \
    --ts_out="${OUT_TS_DIR}" \
    proto/hello.proto