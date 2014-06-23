module.exports = function(data) {
  var rx = /^---[\s]+([\s\S]*?)[\s]+---[\s]*([\s\S]*?)[\s]*$/;
  var rxFm = /(.*?)\s*:\s*(?:(?:\[\s*(.*?)(?=\s*\]))|(.*))/g;
  var rxArr = /\s?,\s?/g;
  var res = rx.exec(data) || [null, null, data];
  var tmp;
  var fm = {};
  fm.attributes = {};
  fm.body = res[2];

  while (tmp = rxFm.exec(res[1]), tmp) {
    fm.attributes[tmp[1]] = tmp[2] ? tmp[2].split(rxArr) : tmp[3];
    elapsedTime('rx');
  }

  return fm;
};
