---
sidebar_position: 4
---

# MacOS (amd64)

Install **fyictl** on macOS (amd64).

## Requirements

To install the tool using this method you'll require:

* cURL
* tar
* wget (optional)

Present on your host machine.

## Installation

Simply run, in your terminal:

```shell
curl -s -L https://github.com/tfadeyi/errors/releases/latest/download/fyictl-darwin-amd64.tar.gz | tar xzv
# might require sudo
mv fyictl-darwin-amd64/fyictl /usr/local/bin
```

This will install the latest **fyictl** binary under the path: `/usr/local/bin/fyictl`.

> You can install different versions by setting the tag to the target version: https://github.com/tfadeyi/errors/releases/download/v0.1.0-alpha.1/fyictl-darwin-amd64.tar.gz

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

## Uninstall 😢

To uninstall the tool you can simply delete the binary from the following directory.

```shell
# might require sudo
rm /usr/local/bin/fyictl
```
