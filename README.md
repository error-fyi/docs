[![Netlify Status](https://api.netlify.com/api/v1/badges/3a9c663e-4400-49f3-a619-5643e55e1bde/deploy-status)](https://app.netlify.com/sites/cheery-sprinkles-ca2742/deploys)

# Error.fyi Documentation Site

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator and deployed automatically on Netlify.

## Prerequisite

* Yarn
* Nix (optional)

> Note:
> If Nix is present just run `source env-dev.sh && develop` and you can omit the `yarn` from the commands below.

### Installation

```
$ yarn
```

### Local Development

```
$ yarn start
```

This command starts a local development server and opens up a browser window. Most changes are reflected live without having to restart the server.

### Build

```
$ yarn build
```

This command generates static content into the `build` directory and can be served using any static contents hosting service.
