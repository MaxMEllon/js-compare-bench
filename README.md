Result
----

```
=== x 68,624,083 ops/sec ±1.38% (88 runs sampled)
deep-equal x 30,023 ops/sec ±2.37% (85 runs sampled)
Immutable.is x 1,942,651 ops/sec ±2.38% (81 runs sampled)
Object.is x 72,970,238 ops/sec ±1.83% (84 runs sampled)
_.isEqual x 96,490 ops/sec ±1.40% (87 runs sampled)

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
$$[] === $$[]  -----------------------------------------------
===          :  true
deep-equal   :  true
Immutable.is :  true
Object.is    :  true
_.isEqual    :  true
```

LICENSE
---

Public domain
