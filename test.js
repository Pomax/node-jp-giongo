var lookup = require("./index"),
    lodash = require("lodash");

function test(test, match) {
  if(!lodash.isEqual(test, match))
  	exit(1);
}

test(lookup.get("やんわり"), { action: [ 'calm and gentle' ], onomatopoeia: [ 'soft, gentle' ], speech: [ 'gently advising' ] });
test(lookup.get("あー"), { onomatopoeia: [ 'yes, okay' ] });
test(lookup.find("や"), { 'やきもき':
   { onomatopoeia: [ 'fretting, worrying' ],
     mood: [ 'anxiety caused when things dont go the way as intended' ] },
  'やほ': { onomatopoeia: [ 'yoohoo!, hey!' ] },
  'やっほ': { onomatopoeia: [ 'yoohoo!, hey!' ] },
  'やっほー': { onomatopoeia: [ 'yoohoo!, hey!' ] },
  'やほい': { onomatopoeia: [ 'yoohoo!, hey!' ] },
  'やっほい': { onomatopoeia: [ 'yoohoo!, hey!' ] },
  'やれやれ': { onomatopoeia: [ 'dear oh dear' ] },
  'やんわり':
   { action: [ 'calm and gentle' ],
     onomatopoeia: [ 'soft, gentle' ],
     speech: [ 'gently advising' ] } });
test(lookup.find("chat"), { 'きゃぴきゃぴ': { onomatopoeia: [ 'happy noisy girlish chatter' ] },
  'べちゃくちゃ': { speech: [ 'chatter, babble' ] },
  'ぺちゃくちゃ': { speech: [ 'chatter, babble in voices less dull than べちゃくちゃ' ] },
  'べちゃべちゃ':
   { 'physical state': [ 'muddy' ],
     speech: [ 'chatter, babble' ],
     texture: [ 'mushy, soggy' ] },
  'ぺちゃぺちゃ': { speech: [ 'chatter, babble in voices less dull than べちゃべちゃ' ] } });

console.log("no errors");
