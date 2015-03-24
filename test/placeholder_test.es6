const fs = require('fs');

const metalsmith = require('metalsmith');
const placeholder = require("../src/placeholder")
const test = require('tap').test

test("should create placeholder files from the data", (t) => {
  metalsmith('fixtures')
  .use(placeholder())
  .use((files, ms, next) => {
    [ ['1.html', {title: 'One'}],
      ['2.html', {title: 'Two'}],
      ['3.html', {title: 'Three'}]
    ].forEach(function([filename, metadata]) {
      var page = files[filename];
      var theseKeys = Object.keys(metadata).sort();
      var thoseKeys = Object.keys(page).sort();
      t.deepEqual(thoseKeys, theseKeys);
      theseKeys.forEach(key => {
        t.equal(page[key], metadata[key]);
        t.equal(page.contents.toString(), "");
      });
      next();
    });
  })
  .build(e => t.end(e));
})
