# metalsmith-placeholder

<img src="https://travis-ci.org/mattly/metalsmith-placeholder.svg" data-bindattr-818="818" title="Build Status Images">

A metalsmith plugin to allow stub metadata files, such as `index.html.yaml`. The plugin parses files having extension `.yml`, `.yaml`, and `.json`, strips this extension from metalsmith's representation of the file, and replaces the file's unparsed data with the parsed data in the form of per-file metadata. The contents (buffer) of the resulting pipeline file is an empty string.

The implementation requires support for ES6.

## Usage

metalsmith-placeholder has no options currently, so for the javascript api
it's simply:

``` javascript
metalsmith.use(require('metalsmith-placeholder')())
```

and the CLI Api:

``` json
  "plugins": {
    "metalsmith-placeholder": {}
  }
```

