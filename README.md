# hubot-startup

A Hubot script that greets us when this script loaded.

![](http://img.f.hatena.ne.jp/images/fotolife/b/bouzuya/20141006/20141006001533.gif)

## Installation

    $ npm install git://github.com/bouzuya/hubot-startup.git

or

    $ # TAG is the package version you need.
    $ npm install 'git://github.com/bouzuya/hubot-startup.git#TAG'

## Example

      (hubot start)
      Hello, cruel world!

## Configuration

See [`src/scripts/startup.coffee`](src/scripts/startup.coffee).

`HUBOT_STARTUP_ROOM` can be one of 3 formats:
1. either a room name, e.g. "general"
2. or a room name preceded by "#", e.g. "#general"
3. or a username preceded by "@", e.g. "@somebody"

## Development

`npm run`

## License

[MIT](LICENSE)

## Author

[bouzuya][user] &lt;[m@bouzuya.net][mail]&gt; ([http://bouzuya.net][url])

## Badges

[![Build Status][travis-badge]][travis]
[![Dependencies status][david-dm-badge]][david-dm]
[![Coverage Status][coveralls-badge]][coveralls]

[travis]: https://travis-ci.org/bouzuya/hubot-startup
[travis-badge]: https://travis-ci.org/bouzuya/hubot-startup.svg?branch=master
[david-dm]: https://david-dm.org/bouzuya/hubot-startup
[david-dm-badge]: https://david-dm.org/bouzuya/hubot-startup.png
[coveralls]: https://coveralls.io/r/bouzuya/hubot-startup
[coveralls-badge]: https://img.shields.io/coveralls/bouzuya/hubot-startup.svg
[user]: https://github.com/bouzuya
[mail]: mailto:m@bouzuya.net
[url]: http://bouzuya.net
