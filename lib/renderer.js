var reg = /(\s*)(```) *(.*?) *\n?\[hide\]([\s\S]+?)\s*(\2)(\n+|$)/g;

function ignore(data) {
  var source = data.source;
  var ext = source.substring(source.lastIndexOf('.')).toLowerCase();
  return ['.js', '.css', '.html', '.htm'].indexOf(ext) > -1;
}

exports.render = function (data) {
  if (!ignore(data)) {

    data.content = data.content
      .replace(reg, function (raw, start, startQuote, lang, content, endQuote, end) {
        return start + end;
      });
  }
};
