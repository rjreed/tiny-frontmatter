module.exports = function(data) {
  var fm = {};
  var rx = /^---[\s]+([\s\S]*?)[\s]+---[\s]+([\s\S]*?)[\s]*$/;
  var rxFm = /(.*?)\s*:\s*(?:(?:\[\s*(.*?)(?=\s*\]))|(.*))/g;
  var rxArr = /\s*,\s*/g;
  var res = rx.exec(data);
  fm.attributes = {};

  while (tmp = rxFm.exec(res[1]), tmp) {
    fm.attributes[tmp[1]] = tmp[2] ? tmp[2].split(rxArr) : tmp[3];
  }
  fm.body = res[2];

  return fm;
};
