vue-schematics-cli
==================

A CLI for @emjimadhu/vue-schematics

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/@emjimadhu/vue-schematics-cli.svg)](https://npmjs.org/package/@emjimadhu/vue-schematics-cli)
[![Downloads/week](https://img.shields.io/npm/dw/@emjimadhu/vue-schematics-cli.svg)](https://npmjs.org/package/@emjimadhu/vue-schematics-cli)
[![License](https://img.shields.io/npm/l/@emjimadhu/vue-schematics-cli.svg)](https://github.com/emjimadhu/vue-schematics-cli/blob/develop/LICENSE)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g vue-schematics-cli
$ vueschematics COMMAND
running command...
$ vueschematics (-v|--version|version)
vue-schematics-cli/1.0.0 darwin-x64 node-v12.14.1
$ vueschematics --help [COMMAND]
USAGE
  $ vueschematics COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`vueschematics hello [FILE]`](#vueschematics-hello-file)
* [`vueschematics help [COMMAND]`](#vueschematics-help-command)

## `vueschematics hello [FILE]`

describe the command here

```
USAGE
  $ vueschematics hello [FILE]

OPTIONS
  -f, --force
  -h, --help       show CLI help
  -n, --name=name  name to print

EXAMPLE
  $ vueschematics hello
  hello world from ./src/hello.ts!
```

_See code: [src/commands/hello.ts](https://github.com/emjimadhu/vue-schematics-cli/blob/v1.0.0/src/commands/hello.ts)_

## `vueschematics help [COMMAND]`

display help for vueschematics

```
USAGE
  $ vueschematics help [COMMAND]

ARGUMENTS
  COMMAND  command to show help for

OPTIONS
  --all  see all commands in CLI
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v2.2.3/src/commands/help.ts)_
<!-- commandsstop -->
