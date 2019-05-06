# Grunt pHTML [<img src="https://phtml.io/logo.svg" alt="pHTML" width="90" height="90" align="right">][pHTML]

[![NPM Version][npm-img]][npm-url]
[![Build Status][cli-img]][cli-url]
[![Support Chat][git-img]][git-url]

[Grunt pHTML] lets you use [pHTML] with [Grunt].

## Install

Add [Grunt pHTML] to your project:

```bash
npm install grunt-phtml --save-dev
```

## Usage

Use [Grunt pHTML] in your Gruntfile:

```js
grunt.loadNpmTasks('grunt-phtml')

grunt.initConfig({
  phtml: {
    options: {
      /* pHTML Plugins */
      plugins: [], // Array | Plugin | Function

      /* pHTML Plugins */
      processOptions: {} // Object
    },
    dist: {
      /* One or more files processed as one destination */
      src: 'src/*.html',
      dest: 'build/index.html'

      /* One or more files processed as multiple destinations */
      /* files: [{
        expand: true,
        src: 'src/*.html',
        dest: 'dest'
      }] */
    }
  }
})
```

## Options

### options.plugins

The `plugins` array determines which [pHTML plugins] are applied.

```js
{
  phtml: {
    options: {
      plugins: require('@phtml/image-alt')
    }
  }
}
```

```js
{
  phtml: {
    options: {
      plugins: [
        require('@phtml/image-alt'),
        require('@phtml/image-size')({ intrinsicsize: 'intrinsic' })
      ]
    }
  }
}
```

### processOptions

The `processOptions` property determines which [pHTML custom settings] are
applied.

```js
{
  phtml: {
    options: {
      processOptions: {
        voidElements: ['path', 'source', 'use']
      }
    }
  }
}
```

### options.separator

The `separator` string determines how value multiple sources are joined
together. By default, sources are combined with a newline (`\n`).

```js
{
  phtml: {
    options: {
      separator: ''
    }
  }
}
```

[cli-img]: https://img.shields.io/travis/phtmlorg/grunt-phtml.svg
[cli-url]: https://travis-ci.org/phtmlorg/grunt-phtml
[git-img]: https://img.shields.io/badge/support-chat-blue.svg
[git-url]: https://gitter.im/phtmlorg/phtml
[npm-img]: https://img.shields.io/npm/v/grunt-phtml.svg
[npm-url]: https://www.npmjs.com/package/grunt-phtml

[Grunt]: https://github.com/gruntjs/grunt
[Grunt pHTML]: https://github.com/phtmlorg/grunt-phtml
[pHTML]: https://github.com/phtmlorg/phtml
[pHTML custom settings]: https://phtml.io/global.html#ProcessOptions
[pHTML plugins]: https://www.npmjs.com/search?q=keywords:phtml-plugin
