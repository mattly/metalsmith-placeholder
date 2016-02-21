const path = require('path');
const yaml = require('js-yaml');

export default function(config) {
  return function(files, metalsmith, done) {
    Object.keys(files)
    .filter(f => f.match(/\.\w+\.(yml|yaml|json)$/))
    .forEach(filename => {
      var extName = path.extname(filename)
        , newFilename = filename.replace(new RegExp(`\\${extName}$`),'')
        , page = files[filename]
        , metadata
      ;
      try {
        if (extName.match(/\.ya?ml/)) {
          metadata = yaml.safeLoad( page.contents.toString() );
        } else if (extName == '.json') {
          metadata = JSON.parse(page.contents.toString());
        }
      }
      catch(e) { done(e); }
      Object.keys(metadata).forEach(k => page[k] = metadata[k]);
      page.contents = new Buffer("");
      files[newFilename] = page;
      delete files[filename];
    })
    done();
  }
}
