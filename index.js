#!/usr/bin/env node
/*
A simple command line tool to find the width and height a video
Copyright (C) 2016 Oli Evans

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU Affero General Public License as published
by the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU Affero General Public License for more details.

You should have received a copy of the GNU Affero General Public License
along with this program.  If not, see <http://www.gnu.org/licenses/>.
*/

/*
Usage:
```
video-dimensions foo.mp4
{ name:foo.mp4, width:160, height:240 }
```
*/
var fs = require('fs')
var path = require('path')
var getDimensions = require('get-video-dimensions');
var argv = require('yargs')
  .usage('Usage: $0 [file]')
  .demand(1).argv

function exit(msg) {
  if (!msg) process.exit(0)
  console.error(JSON.stringify({error:msg}))
  process.exit(-1)
}

try {
  var stats = fs.statSync(argv._[0])
  if (!stats.isFile()) exit(argv._[0] + ' isn\'t a file.')
} catch (e) {
  exit(argv._[0] + ' doesn\'t exist, or I don\'t have permission to read it')
}

getDimensions(argv._[0]).then(function (dimensions) {
  console.log(JSON.stringify({
    name: path.basename(argv._[0]),
    width: dimensions.width,
    height: dimensions.height
  }))
}).catch(exit)
