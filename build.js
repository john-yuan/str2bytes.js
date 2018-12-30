var fs = require('fs');
var src = fs.readFileSync('./str2bytes.js').toString();

src += '\nexports.str2bytes = str2bytes;';
src += '\nexports.bytes2str = bytes2str;\n';

fs.writeFileSync('./str2bytes.node.js', src);