# &lt;google-books-search&gt;

A reactive custom element for searching Google Books.

It's a port of my Polymer element (in the [master branch](https://github.com/codejet/google-books-search)) to React.

## Demo

[Check it live.](http://codejet.github.io/google-books-search/reactive-element/)


## Info

Looks and behaves pretty much the same as the [Polymer version](https://github.com/codejet/google-books-search), except that I don't fire a success or error event depending on the response from Google Books.

To make the custom element work with React I use [ReactiveElements](https://github.com/PixelsCommander/ReactiveElements).

Besides that I decided to go with [document-register-element](https://github.com/WebReflection/document-register-element), a lightweight custom elements polyfill, and [qwest](https://github.com/pyrsmk/qwest), an ajax library based on promises behaviour.

The React components are written in CommonJS format and made available in the browser using [Browserify](http://browserify.org/).

If you wonder about the styles being written in JavaScript, check [this presentation](https://speakerdeck.com/vjeux/react-css-in-js) by [vjeux](https://github.com/vjeux) of Facebook for a broader discussion of the topic. I mainly used this approach here because it provides scoped styles, just like the shadow DOM does for the Polymer element.

## Install

You need [Node.js](http://nodejs.org/). Since [Jest](https://facebook.github.io/jest/), the testing framework I'm using, still seems to have some issues with version 0.12.0 of Node.js, you have to go with 0.10.36 here (to manage multiple active Node.js versions you can use [nvm](https://github.com/creationix/nvm)). Then:

1. Clone the repository
2. Go to the project folder and get the dependencies:

    ```
    $ npm install
    ```

You don't need to fire up a server to check the element. Just open the index.html inside the dist folder in a modern browser of your choice.

## Development

During development run:

```
$ gulp
```

To get a production build run:

```
$ gulp production
```

See the `gulpfile.js` for details.

## Usage

1. Import the JS:

    ```html
    <script src="path/to/file/build.min.js"></script>
    ```

2. Start using it!

    ```html
    <google-books-search></google-books-search>
    ```


## Tests

I'm using [Jest](https://facebook.github.io/jest/) for testing.

To run the whole test suite:

```
$ npm test
```

You can also run single tests:

```
$ npm test <filename of test (i.e. items etc.)>
```

This might cause an error if you're using nvm though. In that case you have to run the full suite for now.

## Options

Attribute     | Options              | Default      | Description
---           | ---                  | ---          | ---
`query`       | *string*             | ``           | The text to query for.
`maxResults`  | *integer*             | 5            | The max number of results to return.
`orderBy`     | *relevance, newest*  | `relevance`  | The parameter to order the results by.
`maxSubtitleLength`     | *integer* | 75  | The max number of characters of the subtitle to be displayed.
`maxSnippetLength`     | *integer*  | 250  | The max number of characters of the text snippets to be displayed.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## License

[MIT License](http://opensource.org/licenses/MIT)
