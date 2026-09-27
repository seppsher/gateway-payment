# Payment Remote

Standalone Angular microfrontend for the payment step. It is exposed through Native Federation as
`./PaymentComponent` under the remote name `payment-remote`.

## Development server

To start a local development server, run:

```bash
npm start
```

The remote is served at `http://localhost:4201/` and publishes `remoteEntry.json`. The host loads it
at runtime, so this repository can be built and deployed independently.

The component expects to be mounted under a route containing `:orderId`. Closing the payment view
navigates one level up relative to that route, without depending on a host-specific URL.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
npm run build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.
