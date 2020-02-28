oclif-boilerplate
==================

A Basic OCLIF CLI Boilerplate.

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@emjimadhu/oclif-boilerplate.svg)](https://npmjs.org/package/@emjimadhu/oclif-boilerplate)
[![Downloads/week](https://img.shields.io/npm/dw/@emjimadhu/oclif-boilerplate.svg)](https://npmjs.org/package/@emjimadhu/oclif-boilerplate)
[![License](https://img.shields.io/npm/l/@emjimadhu/oclif-boilerplate.svg)](https://github.com/emjimadhu/oclif-boilerplate/blob/develop/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g oclif-boilerplate
$ oclifsample COMMAND
running command...
$ oclifsample (-v|--version|version)
oclif-boilerplate/0.0.0 darwin-x64 node-v12.14.1
$ oclifsample --help [COMMAND]
USAGE
  $ oclifsample COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`oclifsample hello [FILE]`](#oclifsample-hello-file)
* [`oclifsample help [COMMAND]`](#oclifsample-help-command)

## `oclifsample hello [FILE]`

describe the command here

```
USAGE
  $ oclifsample hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ oclifsample hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/emjimadhu/oclif-boilerplate/blob/v1.0.0/src/commands/hello.ts)_

## `oclifsample help [COMMAND]`

display help for oclifsample

```
USAGE
  $ oclifsample help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
