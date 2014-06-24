module.exports = function(data) {
  var rx = /^---[\s]+([\s\S]*?)[\s]+---([\s\S]*?)$/;
  var rxFm = /(.*?)\s*:\s*(?:(?:\[\s*(.*?)(?=\s*\]))|(.*))/g;
  var rxArr = /\s?,\s?/g;
  var res = rx.exec(data) || [null, null, data];
  var tmp;
  var fm = {
    attributes: {},
    body: res[2].trim()
  };

  while (tmp = rxFm.exec(res[1]), tmp) {
    fm.attributes[tmp[1]] = tmp[2] ? tmp[2].split(rxArr) : tmp[3];
  }

  return fm;
};
