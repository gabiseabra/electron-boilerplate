# Electron Boilerplate

[![Build Status](https://travis-ci.org/gabiseabra/electron-boilerplate.svg?branch=master)](https://travis-ci.org/gabiseabra/electron-boilerplate)

## Getting Started

### Installing

```bash
git clone https://github.com/gabiseabra/electron-boilerplate.git
cd electron-boilerplate
yarn install
```

### Building

Use a `build:*` command to build the application with webpack:

```bash
yarn run build
```

Build commands:

| Command            | Description
|--------------------|-------------------------------
| `build:main`       | Build electron main script
| `build:renderer`   | Build electron renderer files
| `build`            | Build all
| `build:prod`       | Build all for production
| `build:dev`        | Build all for development
| `build:test`       | Build all for tests

### Running

After building a main script, run `start` to run the unpacked application with electron:

```bash
yarn run start
```

### Packaging

To build a distributable package run `pack` or a `dist:*` command:

```bash
yarn run pack
```

Packaging commands:

| Command       | Description
|---------------|-------------------------------
| `pack`        | Build unpacked dir for current platform
| `dist`        | Build distributables for current platform
| `dist:win`    | Build distributables for Windows
| `dist:mac`    | Build distributables for Mac Os
| `dist:linux`  | Build distributables for Linux

## Development

### Hot Module Replacement

Hot module replacement can be enabled using webpack dev server to serve renderer files.
First, build the main script and start the dev server:

```bash
yarn run build:main
yarn run watch
```

Then run the electron client:

```bash
yarn run 
```

### Translations

After modifying react-intl messages, the `scr/locales/translations` folder must be updated to reflect those changes.
Use the `translate` script for extracting translations from react-intl and update `descriptions.json` and the default language file.

```bash
yarn run translate
```
