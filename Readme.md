# Bounty name
> Short blurb about what the bounty does.

[![NPM Version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]
[![Downloads Stats][npm-downloads]][npm-url]

Hi, this is a boilerplate project with a demo app inside it that fetches trough an oracle the exchange rate between the RON and USD, it's made to help you understand how you could bring external data into the blockchain.

Inside you will find a truffle project and a modex.ini file that will help analyze the code that you are writing

## Installation

Install truffle and the ethereumjs-testrpc:

```sh
npm install -g truffle ethereumjs-testrpc
```

Install the dependencies required:

```sh
npm install
```

## Development setup

Start the test net:

```sh
testrpc
```

Compile the project:

```sh
truffle compile
```

Migrate the oracle:

```sh
truffle migrate
```

Start the oracle:

```sh
node oracle.js
```

Run the client(in this case you would want to start more than one instance)

```sh
node client.js
```

## Release History

* 0.0.1
    * Initial commit

## Contributing or working in teams

1. Fork it (<https://github.com/yourname/yourproject/fork>)
2. Create your feature branch (`git checkout -b feature/fooBar`)
3. Commit your changes (`git commit -am 'Add some fooBar'`)
4. Push to the branch (`git push origin feature/fooBar`)
5. Create a new Pull Request

<!-- Markdown link & img dfn's -->
[npm-image]: https://img.shields.io/npm/v/datadog-metrics.svg?style=flat-square
[npm-url]: https://npmjs.org/package/datadog-metrics
[npm-downloads]: https://img.shields.io/npm/dm/datadog-metrics.svg?style=flat-square
[travis-image]: https://img.shields.io/travis/dbader/node-datadog-metrics/master.svg?style=flat-square
[travis-url]: https://travis-ci.org/dbader/node-datadog-metrics
[wiki]: https://github.com/yourname/yourproject/wiki
