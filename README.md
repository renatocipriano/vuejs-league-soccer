## Run terminal
`docker run --rm -v "${PWD}:/$(basename `pwd`)" -w "/$(basename `pwd`)" -it node:16-alpine /bin/sh`