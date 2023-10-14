---
sidebar_position: 1
---

# Installer script

You can install `fyictl` using the installer script present in the repository.
This will install the `fyictl` binary for your host machine OS and architecture (**linux and macOS**),
under `~/.fyictl/bin` directory.

## Requirements

To install the tool using this method you'll require:

* tar
* cURL

Present on your host machine.

## Installation

Simply run, in your terminal:

```shell
curl -sfL https://raw.githubusercontent.com/error-fyi/fyictl/main/install.sh | sh -
```

Then follow the instruction returned to the terminal.

## Verify Installation

```shell
fyictl --help
```

The binary should return something similar to:

```shell
fyictl is the tool used to simplify the creation and documentation of user facing errors

Usage:
  fyictl [command]

Available Commands:
  annotate    Annotates the target file with error.fyi comments
  completion  Generate the autocompletion script for the specified shell
  docs        Documentation
  help        Help about any command
  init        Initializes the current project to use error.fyi
  manifest    manifest command
  version     Returns the binary build information.

Flags:
  -h, --help               help for fyictl
      --log-level string   Only log messages with the given severity or above. One of: [none, debug, info, warn], errors will always be printed (default "warn")

Use "fyictl [command] --help" for more information about a command.
```
