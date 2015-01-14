# &lt;google-books-search&gt;

A [Polymer](http://www.polymer-project.org/) element for searching Google Books.

This is not an official Google web component. You can find those [here](https://github.com/GoogleWebComponents).

## Demo

[Check it live.](http://codejet.github.io/google-books-search)

Alternatively you can follow [this link](http://codejet.github.io/google-books-search/vulcanized.html) to load a "vulcanized" version. [Vulcanize](https://github.com/polymer/vulcanize) is a tool provided by the Polymer folks, and it "recursively pulls in all your imports, flattens their dependencies and spits out something that can potentially reduce the number of network requests your app makes." In other words: it should help with performance.

## Info

At least for now this is a pretty simple element with minimal styling.

Apart from what Polymer provides, I also use the [juicy-html](https://github.com/Juicy/juicy-html) element to correctly display text snippets that contain HTML (see [this discussion](https://github.com/Polymer/TemplateBinding/issues/57) for example).

For better performance I only request the fields from Google Books that are actually being displayed in the results. What's being returned is thus called a "[partial response](https://developers.google.com/site-verification/v1/performance#partial-response)".

Hat tip to [paranoida](https://github.com/paranoida/) for pointing out ```::-webkit-search-decoration``` to me.

## Install

1. Clone the repository
2. Go to the project folder and use [Bower](http://bower.io) to fetch the dependencies:

    ```
    $ bower install
    ```

## Usage

1. Import Web Components' polyfill:

    ```html
    <script src="bower_components/webcomponentsjs/webcomponents.min.js"></script>
    ```

2. Import Custom Element:

    ```html
    <link rel="import" href="bower_components/google-books-search/dist/google-books-search.html">
    ```

3. Start using it!

    ```html
    <google-books-search></google-books-search>
    ```

## Setup

In order to run it locally you have to launch a web server.

If you have Ruby installed:

```sh
$ ruby -run -e httpd . -p 8000 # choose whichever port you prefer
```

If you have Python installed:

```sh
$ python -m SimpleHTTPServer # uses port 8000 by default
```

Then just navigate to http://localhost:8000 using any modern browser.

## Tests

To run the tests navigate to [http://localhost:8000/test/](http://localhost:8000/test/) or install [Web Component Tester](https://github.com/Polymer/web-component-tester) (follow the link for more information).

## Options

Attribute     | Options              | Default      | Description
---           | ---                  | ---          | ---
`query`       | *string*             | ``           | The text to query for.
`maxResults`  | *integer*             | 5            | The max number of results to return.
`orderBy`     | *relevance, newest*  | `relevance`  | The parameter to order the results by.
`maxSubtitleLength`     | *integer* | 75  | The max number of characters of the subtitle to be displayed.
`maxSnippetLength`     | *integer*  | 250  | The max number of characters of the text snippets to be displayed.

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
