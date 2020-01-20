# Dictionary Manager

A single page React application to create dictionaries and manage domain range mappings.

## Live Demo

The project build is hosted on Github pages: https://mmapplebeck.github.io/dictionary-manager/

The project is built and deployed to the [gh-pages branch](https://github.com/mmapplebeck/dictionary-manager/tree/gh-pages) using [gh-pages](https://github.com/tschaub/gh-pages).

## Running Locally

Clone the project locally:

```
git clone git@github.com:mmapplebeck/dictionary-manager.git

cd dictionary-manager
```

Install dependencies and start the app:

```
yarn install

yarn start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Technologies Used

- **Create React App** for initial bootstrap
- **Redux** for application state
- **Immutable.js** for immutable data structures
- **Redux Thunk** for dispatching multiple actions from a single action creator. I used this to validate all dictionary items after adding, updating, or deleting a dictionary item
- **Reselect** for derived state data (e.g. current dictionary, error count, etc.)
- **React Router** for application routing
- **Material-UI** for the pattern library. This gives the application some styling consistincy, responsiveness, and gave me some base components to leverage.
- **material-table** to support the dictionary items table
- **gh-pages** for deployment to Github Pages
- **Jest** for unit tests
- **Prettier** for code formatting

## Tests

I added a Jest test suite to support dictionary item validation.

To launch the test runner in interactive watch mode:

```
yarn test
```

I would have also liked to add Enzyme tests for some components but did not get to it.

## Future Additions

Some thoughts on possible additions:

- TypeScript for static type-checking
- Enzyme tests for components
- Editing dictionary names
- Internationalization
- Accessibility audit
- Cross-browser & cross-device testing
- Branding and styling updates
