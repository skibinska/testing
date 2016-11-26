# testing

[![Build Status](https://travis-ci.org/skibinska/testing.svg?branch=master)](https://travis-ci.org/skibinska/testing)
[![Code Climate](https://codeclimate.com/github/skibinska/testing/badges/gpa.svg)](https://codeclimate.com/github/skibinska/testing)
[![Test Coverage](https://codeclimate.com/github/skibinska/testing/badges/coverage.svg)](https://codeclimate.com/github/skibinska/testing/coverage)
[![Issue Count](https://codeclimate.com/github/skibinska/testing/badges/issue_count.svg)](https://codeclimate.com/github/skibinska/testing)
[![codecov](https://codecov.io/gh/skibinska/testing/branch/master/graph/badge.svg)](https://codecov.io/gh/skibinska/testing)


A sample project on setting up continuous integration with GitHub, Travis CI, Istanbul, Code Climate and Codecov.
## Requirements for project setup:

* automatic builds
* run tests
* generate coverage reports
* automated code review

### Other requirements:

* tests should run successfully to execute commits
* coverage limits should be checked to successfully push code

## Tools

* **Istanbul**: Javascript coverage tool
* **Travis**: Continuous Integration service
* **Code Climate**: Automated code review tool and coverage reporting
* **CodeCov**: Automated code review tool and coverage reporting

## Setup

* Clone this repo and cd into it
* Run ```npm install``` to install all dependencies
* To run the tests, run ```npm test watch```
* To run coverage, run ```npm run coverage```

## Steps
1. create github repo with readme and clone it;
2. register or signup in [travis-ci.org](https://travis-ci.org/)
3. link github repo on travis;
4. register or signup in [codeclimate](https://codeclimate.com) and/or [codecov](https://codecov.io)
5. link github repo on codeclimate and/or codecov
6. add .travis.yml
7. encrypt your codeclimate token;
8. push to master;
9. build should pass;
10. add some module and specs;
11. execute test and check they are passing and check coverage report;
12. push to master and check codeclimate information;



## What is continuous integration (CI)?

* is a software engineering practice in which isolated changes are immediately tested and reported on when they are added to a larger code base.


## What is Istanbul?

* is a code coverage analysis script you run when executing your unit tests.

## What is Travis CI?

* Travis sets up “hooks” with GitHub to automatically run tests at specified times.
  By default, these are set up to run after a pull request is created or when code is pushed up to GitHub.


## What is Code Climate?

* Links to your github account, and examines every commit you do, letting you know if your code got better, or worse.
* Allows you to keep an eye on your code test coverage.
* Uses for code quality analysis.

## Resources
* [Continuous integration](https://www.thoughtworks.com/continuous-integration)
* [dwyl tutorial on Travis CI](https://github.com/dwyl/learn-travis)
* [dwyl tutorial on istanbul](https://github.com/dwyl/learn-istanbul)
