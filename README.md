# Japanese onomatopoeia and mimesis

This is the giongo/gitaigo data for nihongoresources.com

This data was compiled from various sources, including
but not limited to many web pages from the early 2000's
internet (since no longer extant), as well as Andrew C.
Chang's most excellent "A Thesaurus of Japanese Mimesis
and Onomatopoeia: Usage by Categories", Seiichi Makino's
"Nakama" series of books, and whatever random giongo
and gitaigo I happened across while browsing the various
dictionaries on my shelf.

## Installation

`npm install jp-giongo`

## Use

`var lookup = require('jp-giongo');`

## API

> .get(kana) -> object

get an onomatopoeia or mimesis definition. The resulting
object is of the form:

```
{
	"context category": <array of contextual English meanings>,
}
```
one entry can have multiple context categories, and each
context category can have multiple English meanings.
Note that this object will not contain the term itself.

> .find(input) -> {key : entry, key2: entry, ...} object

finds all entries that either start with the input string
(if kana), or contains the input string as part of the
English meaning(s).
