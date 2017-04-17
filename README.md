# openssl-dn-parser

This is a non-strict openssl style distinguished name parser.

## Usage

``` bash
npm i openssl-dn-parser --save
```

``` js
var dnParser = require('./lib/parser');
var subject = '/C=CN/ST=Beijing Shi/O=SkinAT/OU=web/CN=\\xE8\\xAF\\x97\\xE4\\xBE\\xAC/emailAddress=a@b.com';
console.log(dnParser(subject));

/*
{ C: 'CN',
  ST: 'Beijing Shi',
  O: 'SkinAT',
  OU: 'web',
  CN: '诗侬',
  emailAddress: 'a@b.com' }
*/
```

I've not found the specification of OpenSSL distinguished name, just write the parser by guessing. I'd really appreciate that anyone can give me a clue about the spec..