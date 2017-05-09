#!/bin/bash

#*/1 * * * * /bin/bash /home/mapp/meili-base-merchant-component/start.sh

DOC_PATH=/home/mapp/meili-base-merchant-component/
BRANCH=v1.0.0

cd $DOC_PATH && /usr/bin/git reset . && /usr/bin/git checkout $BRANCH && /usr/bin/git pull

exit 1
