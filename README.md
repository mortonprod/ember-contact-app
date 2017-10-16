# Introduction

This is a small contact ember app. You can visit the app on github [here](https://mortonprod.github.io/ember-contact-app/)

It is not a production build since it is missing a few things

* CSS vendor prefixes.
* CSS not normalised
* Documentation is not put online
* No tests

However these can be easily added if you would like to.

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](http://git-scm.com/)
* [Node.js](http://nodejs.org/) (with NPM)
* [Bower](http://bower.io/)
* [Ember CLI](http://ember-cli.com/)
* [PhantomJS](http://phantomjs.org/)

## Installation

* `git clone https://github.com/mortonprod/ember-contact-app . && cd ember-contact-app`
* `npm install`
* `bower install`

## Running / Development

To start the app in development run:
```
npm run start
```
Then visit the site at [http://localhost:4200](http://localhost:4200).

## Updating gh-pages

This app is just a simple example so we deploy to github pages. If you would like to update the app the use the  (github addon)[https://github.com/poetic/ember-cli-github-pages]. 

When you have this setup following installation instruction on the website. you just need to run the command below each time.
```
git checkout master
ember github-pages:commit --message "<Your commit>"
```

## Running Tests

There are no tests for this simple app. However the build tools allow for this. Just run the command below to see them run.

* `ember test`
* `ember test --server`

## Building

* `ember build` (development)
* `ember build --environment production` (production)

## Further Reading / Useful Links

* [ember.js](http://emberjs.com/)
* [ember-cli](http://ember-cli.com/)
* Development Browser Extensions
  * [ember inspector for chrome](https://chrome.google.com/webstore/detail/ember-inspector/bmdblncegkenkacieihfhpjfppoconhi)
  * [ember inspector for firefox](https://addons.mozilla.org/en-US/firefox/addon/ember-inspector/)

