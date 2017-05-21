# &lt;google-books-search&gt;

A [Polymer](http://www.polymer-project.org/) element for searching Google Books.

This is not an official Google web component. You can find those [here](https://github.com/GoogleWebComponents).

Note: the current version uses the preview of Polymer 2, so even more than the previous versions, this is just meant for exploration of Polymer.

## Demo

[Check it live.](http://codejet.github.io/google-books-search)

Alternatively you can follow [this link](http://codejet.github.io/google-books-search/bundled.html) to load a "bundled" version. [polymer-bundler](https://github.com/polymer/polymer-bundler) (formerly called vulcanize) is a tool provided by the Polymer folks, and it "recursively pulls in all your imports, flattens their dependencies and spits out something that can potentially reduce the number of network requests your app makes." In other words: it should help with performance.

## Info

This is a pretty simple element with minimal styling.

For better performance I only request the fields from Google Books that are actually being displayed in the results. What's being returned is thus called a "[partial response](https://developers.google.com/site-verification/v1/performance#partial-response)".

Hat tip to [paranoida](https://github.com/paranoida/) for pointing out ```::-webkit-search-decoration``` to me.

## Reactive Element

I also created a "reactive version" of this element using [React](http://facebook.github.io/react/) and [ReactiveElements](https://github.com/PixelsCommander/ReactiveElements). You can find it in the [reactive-element branch](https://github.com/codejet/google-books-search/tree/reactive-element).

## Install

1. Clone the repository
2. Go to the project folder and use [Bower](http://bower.io) to fetch the dependencies:

    ```
    $ bower install
    ```

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="path/to/webcomponents-lite.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="path/to/google-books-search.html">
    ```

3. Start using it!

    ```html
    <google-books-search></google-books-search>
    ```

## Setup

To run it locally, use the [Polymer CLI](https://www.npmjs.com/package/polymer-cli):

```sh
$ polymer serve
```

Then just navigate to the URL given by the CLI using any modern browser.

## Tests

To run the tests you can navigate to the URL given by the CLI (see above) followed by "/test", or use the [Polymer CLI](https://www.npmjs.com/package/polymer-cli):

```sh
$ polymer test
```

## Options

Attribute     | Options              | Default      | Description
---           | ---                  | ---          | ---
`query`       | *string*             | ``           | The text to query for.
`max-results`  | *integer*             | 5            | The max number of results to return.
`order-by`     | *relevance, newest*  | `relevance`  | The parameter to order the results by.
`subtitle-max-length`     | *integer* | 75  | The max number of characters of the subtitle to be displayed.
`snippet-max-length`     | *integer*  | 250  | The max number of characters of the text snippets to be displayed.

## Events

Event         | Description
---           | ---
`google-books-search-success` | Triggers when search results were received successfully.
`google-books-search-error` | Triggers when something with the search goes wrong.

## Contributing

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -m 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## History

For detailed changelog, check [Releases](https://github.com/codejet/google-books-search/releases).

## License

[MIT License](http://opensource.org/licenses/MIT)
