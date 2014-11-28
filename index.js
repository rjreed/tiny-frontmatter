module.exports = function(data) {
  var basePattern = /^---[\s]+([\s\S]*?)[\s]+---([\s\S]*?)$/;
  var fmPattern = /(.*?)\s*:\s*(?:(?:\[\s*(.*?)(?=\s*\]))|(.*))/g;
  var arrayPattern = /\s?,\s?/g;
  var results = basePattern.exec(data) || [null, null, data];
  var temp;
  var fm = {
    attributes: {},
    body: results[2].trim()
  };

  while (temp = fmPattern.exec(results[1]), temp) {
    fm.attributes[temp[1]] = temp[2] ? temp[2].split(arrayPattern) : temp[3];
  }

  return fm;
};
