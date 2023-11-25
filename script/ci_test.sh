#!/bin/bash

set -euxo pipefail

srcPath=`pwd`
nginxPath=`/web/xxx/`

cd ${srcPath}

git reset --hard && git pull && git checkout test && git pull

pnpm install && pnpm run build-test

sudo rm -rf ${nginxPath}* && sudo cp -r ./build/* ${nginxPath}
