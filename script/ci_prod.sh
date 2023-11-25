#!/bin/bash

set -euxo pipefail

srcPath=`pwd`
nginxPath=`/web/xxx/`
config=`~/data/org_name/project_name/prod.ts`

cd ${srcPath}

configFile=`./src/config/env/prod.ts`

rm -rf ${configFile}

git reset --hard && git pull && git checkout main && git pull

cp -r ${config} ${configFile}

pnpm install && pnpm build-prod

sudo rm -rf ${nginxPath}* && sudo cp -r ./build/* ${nginxPath}
