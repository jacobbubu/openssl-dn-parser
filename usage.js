var dnParser = require('./lib/parser');
var subject = '/C=CN/ST=Beijing Shi/O=SkinAT/OU=web/CN=\\xE8\\xAF\\x97\\xE4\\xBE\\xAC/emailAddress=a@b.com';
console.log(dnParser(subject));
