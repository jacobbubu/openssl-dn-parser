function convertValue(v) {
  var tokens = [], pos = 0, ord;
  while(pos < v.length) {
    if (v[pos] === '\\' && v[pos+1] === 'x') {
      pos += 2;
      ord = parseInt(v.slice(pos, pos + 2), 16);
      if (!Number.isNaN(ord)) {
        tokens.push(ord);
        pos += 2;
      }
    } else if (v[pos] === '\\') {
      tokens.push(v[pos+1].charCodeAt(0));
      pos += 2;
    } else {
      tokens.push(v[pos].charCodeAt(0));
      pos += 1;
    }
  }
  return (new Buffer.from(tokens)).toString();
}

module.exports = function parse(subject) {
  return subject.split('/').reduce(function (parsed, rdn) {
    var kv = rdn.split('=');
    if (kv[0] && kv[1]) {
      parsed[kv[0]] = convertValue(kv[1]);
    }
    return parsed;
  }, {});
}