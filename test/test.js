var fs = require('fs'),
  hljs = require('highlight.js'),
  path = require('path');

hljs.registerLanguage('bigfix-relevance', require('..'));

function highlightRelevance(relevance) {
  return hljs.highlight('bigfix-relevance', relevance).value;
}

var actual = highlightRelevance(
  fs.readFileSync(path.join(__dirname, 'relevance.txt')).toString());

var expected = fs.readFileSync(path.join(__dirname, 'expected.txt')).toString();

if (actual === expected) {
  console.error('Test passed');
} else {
  console.error('Test failed');
  console.error();
  console.error('Actual:');
  console.error(actual);
  console.error();
  console.error('Expected:');
  console.error(expected);
  process.exit(1);
}
