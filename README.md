# Quasar App (awesome-todo)

A Quasar Framework app

## Useful links
- [Quasar docs](https://quasar.dev/start/pick-quasar-flavour)
- [Material Design icons](https://material.io/resources/icons/?style=baseline)

## Install the dependencies
```bash
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)
```bash
quasar dev
```


### Build the app for production
```bash
quasar build
```

### Customize the configuration
See [Configuring quasar.conf.js](https://quasar.dev/quasar-cli/quasar-conf-js).

### Sign application
``
keytool -genkey -v -keystore quasar-release-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias quasar-release
keytool -importkeystore -srckeystore quasar-release-key.jks -destkeystore quasar-release-key.jks -deststoretype pkcs12
keytool -genkey -v -keystore quasar-debug-key.jks -keyalg RSA -keysize 2048 -validity 10000 -alias quasar-debug
keytool -importkeystore -srckeystore quasar-debug-key.jks -destkeystore quasar-debug-key.jks -deststoretype pkcs12
``
