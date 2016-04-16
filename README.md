## INI parser
一个简单的 INI 文件解析器。

## Usage
	var iniParser = require('./index);
	var fs = require('fs');

	fs.readFile('xxx.ini', (err, data) => {
		//return a json
		const result = iniParser(data);
	})

## Test
	npm run test
