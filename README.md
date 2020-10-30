# NxLib

This project was generated using [Nx](https://nx.dev).

_This assumes you have `nx` installed globally_


### Run container application

1. `npm install`
2. `nx serve test-app`
3. Navigate to  http://localhost:4200/

### Build and publish

1. `nx build nx-publishable --withDeps --skip-nx-cache`
2. `cd ./dist/libs/nx-publishable`
3. Remove `nx-buildable` from generated `package.json`. (This is a bug with nx, the buildable is already included in the bundle).
4. `npm publish`
