
JSON.serialize = JSON.stringify;

JSON.minify = function(data) {
  data = data.replace(/\/\*[\s\S]*?\*\/|\/\/[\s\S]*?(?=\n)/g, '');

  return data;
}


module.exports = JSON;
