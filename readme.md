## Order System Sample Project (Evergreen)

This is a variation of the sample project used in the course [Upgrading AngularJS](https://www.upgradingangularjs.com). It won't sync up with the videos, but provides a more evergreen and up-to-date starting point for hybrid ngUpgrade apps.

It'll also be the experimental playground as new features and best practices evolve for migration.

Currnt features:

* Express server for testing with an API
* Webpack development and AOT builds
* Hybrid setup with AngularJS 1.6 & Angular 5
* Angular services use HttpClient
* Yarn lock files

Coming soon:

* Webpack 4
* AngularJS 1.7 (when released)
* Angular 6 (when released)
* Updates to Karma setup and tests

### Client

To get started with the client:

```
cd public
yarn install
yarn dev
```

### Server

To run the Express server:

```
cd server
yarn install
yarn start
```
