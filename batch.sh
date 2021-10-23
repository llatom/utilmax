#!/bin/bash
pathList=("./src/")
for p in ${pathList[*]}
do
	find $p -type f -name '*.js' > file.txt
done
for f in `cat ./file.txt`
do
	path=${f/\.js/\.ts}
	mv $f $path
done
rm -rf ./file.txt