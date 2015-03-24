# hljs-bigfix-relevance

This is a [highlight.js](https://highlightjs.org/) language definition for the
BigFix Relevance language.

# Usage

```javascript
var hljs = require('highlight.js');
hljs.registerLanguage('bigfix-relevance', require('hljs-bigfix-relevance'));

function highlightRelevance(relevance) {
  return hljs.highlight('bigfix-relevance', relevance).value;
}
```
