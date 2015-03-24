# metalsmith-placeholder

<img src="https://travis-ci.org/mattly/metalsmith-placeholder.svg" data-bindattr-818="818" title="Build Status Images">

A metalsmith plugin to allow stub metadata files, such as `index.html.yaml`.

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

