## DEMO

Deployed [here](https://mozio-travel.vercel.app/)

## How to run in dev mode

`npm run start`

## How to build

`npm run build`

## Tests

For tests I used Cypress. Cypress provides more advanced features than React Testing Library.
A couple of cypress component tests are included. To run them:

`npx cypress open --component`

Happy path e2e tests are also included. To run it:

First run the app in dev mode:
`npm run start`

Then run the tests:
`npx cypress open --e2e`
