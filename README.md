# My Personal Portfolio in React and Material UI.

[![build](https://github.com/arshad-shah/Portfolio-v2/actions/workflows/publish.yml/badge.svg)](https://github.com/arshad-shah/Portfolio-v2/actions/workflows/publish.yml)

[![codecov](https://codecov.io/gh/arshad-shah/Portfolio-v2/branch/master/graph/badge.svg?token=JVIBKZ5AWF)](https://codecov.io/gh/arshad-shah/Portfolio-v2)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=arshad-shah_Portfolio-v2&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=arshad-shah_Portfolio-v2)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=arshad-shah_Portfolio-v2&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=arshad-shah_Portfolio-v2)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=arshad-shah_Portfolio-v2&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=arshad-shah_Portfolio-v2)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=arshad-shah_Portfolio-v2&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=arshad-shah_Portfolio-v2)

---

# The structure of the app

The app is structured into several folders to separate code as much as possible.\
The main structure is as follows:

- [**workflows**](.github)
- [**e2e**](e2e)
- [**public**](public)
- [**src**](src)

  - [**tests**](src/_tests_)
    - [**snapshots**](src/_tests_/__snapshots__)
  - [**assets**](src/assets)
  - [**components**](src/components)
    - [**navigation**](src/components/navigation)
  - [**data**](src/data)
  - [**pages**](src/pages)

# To start off

Open source directory in terminal,

1. Run:

```shell
yarn install:deps
```

This installs all the deps it needs in the source directory and e2e directory.

2. After All the dependencies are installed, Run:

```shell
yarn start
```

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

---

# To run the unit tests

### Run

```shell
yarn test
```

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

---

# To run End to End tests

You need to setup chromedriver for it to work.
See this article i found About [Set up chrome driver](https://chromedriver.chromium.org/getting-started)

After chromedriver is setup:

- Run the command below in the src directory

```shell
yarn run e2e
```

if everythings goes correct 🤞 You should see the tests executed.

# To build the project

### Run

```shell
yarn run build
```

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!
