# Bunch JavaScript challenge


## Background

The coding challenge is based on the culture assessment that you have already taken. The goal of this assessment is to evaluate someone’s culture using a methodology developed by Charles O’Reilly at the Stanford GSB Institute for Organizational Behavior.

This methodology measures 6 dimensions to understand an individual’s culture norms:

-	Adaptability: Readily takes advantage of new opportunities
-	Results-orientation: Gets things done
-	Collaboration: Is a great team player
-	Attention to detail: Values precision and accuracy
-	Principles: Holds high ethical standards
-	Customer-orientation: Always keeps the customer in mind


## Requirements

### Functional

1. The assessment consists of 30 questions in total.
2. The questions of the assessment should give two options for the answer. Each
of these options should be one of the provided answers (see `dimensions.js`). This is called [Ipsative questions](https://en.wikipedia.org/wiki/Ipsative).
3. Dimension should be matched exactly two times. For example, the user must choose between options related to Adaptability and Collaboration twice.
4. Each time a user chooses an answer, his score for the corresponding dimension is incremented by 1.
5. Each answer should only be shown once.
5. The result of the assessment is represented by the amount of times each dimension was chosen. Here is a JSON representation:

```json
dimensions: {
  Adaptive: 3,
  Integrity: 7,
  Collaborative: 5,
  Result: 5,
  Customer:8,
  Detail: 2
}
```

### Technical

- Have >90% of code coverage. A suggested test suite is provided in `assessment.test.js`, feel free to rewrite it if you would rather start with your own tests.
- You are allowed to use any third party libraries.
- You do not have to build a UI or an API/Server, having a self descriptive test suite is enough.
- No linter or lint config has been included. Feel free to add one if it makes you more efficient.
- Make use of modern JavaScript syntax. The test code goes through babel using the `env` preset.

> Without any configuration options, @babel/preset-env behaves exactly the same as @babel/preset-latest (or @babel/preset-es2015, @babel/preset-es2016, and @babel/preset-es2017 together).

## Installation

```bash
yarn install
```

## Running the tests

```bash
yarn test
# show coverage
yarn test:cover
```

Or you can use built-in watch mode (coverage is also included in watch mode):

```bash
yarn test:watch
```
