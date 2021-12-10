# My Personal Portfolio in React and Material UI.

<<<<<<< HEAD
[![Publish](https://github.com/arshad-shah/Portfolio-v2/actions/workflows/publish.yml/badge.svg)](https://github.com/arshad-shah/Portfolio-v2/actions/workflows/publish.yml)
=======
[![build](https://github.com/arshad-shah/Portfolio-v2/actions/workflows/publish.yml/badge.svg)](https://github.com/arshad-shah/Portfolio-v2/actions/workflows/publish.yml)
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> ae3da47 (Update README.md)
=======


>>>>>>> 0be2540 (Update README.md)
=======
>>>>>>> d90ecd0 (read me updated)
[![CodeQL](https://github.com/arshad-shah/portfolio-v2.0/actions/workflows/codeql-analysis.yml/badge.svg)](https://github.com/arshad-shah/portfolio-v2.0/actions/workflows/codeql-analysis.yml)
[![SonarScan](https://github.com/arshad-shah/Portfolio-v2/actions/workflows/sonarScan.yml/badge.svg)](https://github.com/arshad-shah/Portfolio-v2/actions/workflows/sonarScan.yml)


[![codecov](https://codecov.io/gh/arshad-shah/Portfolio-v2/branch/master/graph/badge.svg?token=JVIBKZ5AWF)](https://codecov.io/gh/arshad-shah/Portfolio-v2)

[![Quality Gate Status](https://sonarcloud.io/api/project_badges/measure?project=arshad-shah_Portfolio-v2&metric=alert_status)](https://sonarcloud.io/summary/new_code?id=arshad-shah_Portfolio-v2)

[![Maintainability Rating](https://sonarcloud.io/api/project_badges/measure?project=arshad-shah_Portfolio-v2&metric=sqale_rating)](https://sonarcloud.io/summary/new_code?id=arshad-shah_Portfolio-v2)
[![Reliability Rating](https://sonarcloud.io/api/project_badges/measure?project=arshad-shah_Portfolio-v2&metric=reliability_rating)](https://sonarcloud.io/summary/new_code?id=arshad-shah_Portfolio-v2)
[![Security Rating](https://sonarcloud.io/api/project_badges/measure?project=arshad-shah_Portfolio-v2&metric=security_rating)](https://sonarcloud.io/summary/new_code?id=arshad-shah_Portfolio-v2)

---

# The structure of the app
The app is structured into several folders to separate code as much as possible.
The main structure is as follows:
    
    Folders:
        1. .github
            All the github actions go here.
                you need to make the following tokens in the repo to make them work
                1.  WEBSITESECRET
                    The codecov token
                2.  GITHUB_TOKEN
                    Automatically created (dont worry about this)
                3.  PORTFOLIO_SITE_SERVER
                    The hosting server name
                4.  PORTFOLIO_SITE_USER
                    The hosting server username
                5.  PORTFOLIO_SITE_PASS
                    The hosting server password

        2.  e2e
            All the E2E test, config are here.
        3.  src
                divided into:
                    -   _tests
                        all the tests
                    -   assets
                        The static assets
                    -   components
                        The parts of the app
                    -   pages
                        sections of the app
                    -   styles
                        all the styles for the whole app
# To start off
Open source directory in terminal,

1. Run:

        yarn

    This installs all the deps it needs in the source directory.

2.  Next change directory using:

        cd ./e2e
    
    - And Run:

            yarn

3.  After All the dependencies are installed, Run:

        yarn start

    Runs the app in the development mode.\
    Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

    The page will reload when you make changes.\
    You may also see any lint errors in the console.

---
# To run the unit tests

### Run

     yarn test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

---
# To run End to End tests

You need to setup chromedriver for it to work.
See this article i found About [Set up chrome driver](https://chromedriver.chromium.org/getting-started)

After chromedriver is setup:
    
- Run the command below in the src directory
    
        yarn e2e

if everythings goes correct 🤞 You should see the tests executed. 

# To build the project

### Run
    yarn run build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)
