#!/bin/bash
covpath="./coverage/coverage-summary.json"
if [ -f $covpath ];

then
	lines=`cat $covpath | grep "\"total\": {" | awk -F"\"pct\":" '{print $2}' |awk -F"}," '{print $1}'`
	statements=`cat $covpath | grep "\"total\": {" | awk -F"\"pct\":" '{print $3}' |awk -F"}," '{print $1}'`
	functions=`cat $covpath | grep "\"total\": {" | awk -F"\"pct\":" '{print $4}' |awk -F"}," '{print $1}'`
	branches=`cat $covpath | grep "\"total\": {" | awk -F"\"pct\":" '{print $5}' |awk -F"}}" '{print $1}'`
	`sed -i "" 's/\"lines\":0/\"lines\":'$lines'/g' ./package.json`
	`sed -i "" 's/\"statements\":0/\"lines\":'$statements'/g' ./package.json`
	`sed -i "" 's/\"functions\":0/\"lines\":'$functions'/g' ./package.json`
	`sed -i "" 's/\"branches\":0/\"lines\":'$branches'/g' ./package.json`
fi
abPath=`pwd`
path=$abPath"/package.json"
keyword=`cat $path | grep -i "keyword" |awk -F":" '{print $2}'`
echo "您的keyword为：" $keyword
#要将$a分割开，可以这样：
OLD_IFS="$IFS"
IFS=","
arr=($keyword)
IFS="$OLD_IFS"
if test ${#arr[@]} -lt 3
then
	echo "package.json中的keyword需要3个或以上描述词汇，如技术选型(React,Vue,jQuery)、业务分组、组件分类(form,table等),请完善package.json中的keyword字段。";
else
	npm publish
fi
#end

