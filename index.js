const _ = require('lodash');
const Benchmark = require('benchmark');
const deepEqual = require('deep-equal');
const Immutable = require('immutable');
const suite = new Benchmark.Suite();

const props = {
  a: 1,
  b: "hoge",
  c: {
    ca: 1,
    cb: "poge",
  }
};

const $$props = Immutable.fromJS(props);

const nextProps = {
  a: 2,
  b: "poge",
  c: {
    ca: 2,
    cb: "poge",
  }
};

const $$nextProps = Immutable.fromJS(nextProps);

suite
  .add('===', () => $$props === $$nextProps)
  .add('deep-equal', () => deepEqual($$props, $$nextProps))
  .add('Immutable.is', () => Immutable.is($$props, $$nextProps))
  .add('Object.is', () => $$props, $$nextProps)
  .add('_.isEqual', () => _.isEqual($$props, $$nextProps))
  .on('cycle', (event, bench) => console.log(String(event.target)))
  .on('complete', function() {
    console.log('\nFastest is ' + this.filter('fastest').map('name'));
  })

  .run({async: false});


console.log("===          : ", $$props === $$nextProps);
console.log("deep-equal   : ", $$props === $$nextProps);
console.log("Immutable.is : ", $$props === $$nextProps);
console.log("Object.is    : ", $$props === $$nextProps);
console.log("_.isEqual    : ", $$props === $$nextProps);

console.log("[ ] === [ ]    -------------------------------------------------");

console.log("===          : ", [] === []);
console.log("deep-equal   : ", [] === []);
console.log("Immutable.is : ", [] === []);
console.log("Object.is    : ", [] === []);
console.log("_.isEqual    : ", [] === []);

console.log("[1] === [1]    -------------------------------------------------");

console.log("===          : ", [1] === [1]);
console.log("deep-equal   : ", [1] === [1]);
console.log("Immutable.is : ", [1] === [1]);
console.log("Object.is    : ", [1] === [1]);
console.log("_.isEqual    : ", [1] === [1]);

console.log("$$[1] === $$[1]  -----------------------------------------------");

const a = Immutable.fromJS([1]);

console.log("===          : ", a === a);
console.log("deep-equal   : ", a === a);
console.log("Immutable.is : ", a === a);
console.log("Object.is    : ", a === a);
console.log("_.isEqual    : ", a === a);

console.log("$$[] === $$[]  -----------------------------------------------");

const b = Immutable.fromJS([]);

console.log("===          : ", b === b);
console.log("deep-equal   : ", b === b);
console.log("Immutable.is : ", b === b);
console.log("Object.is    : ", b === b);
console.log("_.isEqual    : ", b === b);

/* result

=== x 68,509,592 ops/sec ±1.76% (82 runs sampled)
deep-equal x 30,659 ops/sec ±1.23% (89 runs sampled)
Immutable.is x 2,127,332 ops/sec ±1.48% (90 runs sampled)
Object.is x 79,200,941 ops/sec ±1.66% (83 runs sampled)
_.isEqual x 98,724 ops/sec ±1.16% (85 runs sampled)

Fastest is Object.is
===          :  false
deep-equal   :  false
Immutable.is :  false
Object.is    :  false
_.isEqual    :  false
[ ] === [ ]    -------------------------------------------------
===          :  false
deep-equal   :  false
Immutable.is :  false
Object.is    :  false
_.isEqual    :  false
[1] === [1]    -------------------------------------------------
===          :  false
deep-equal   :  false
Immutable.is :  false
Object.is    :  false
_.isEqual    :  false
$$[1] === $$[1]  -----------------------------------------------
===          :  true
deep-equal   :  true
Immutable.is :  true
Object.is    :  true
_.isEqual    :  true

*/
