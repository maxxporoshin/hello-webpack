import './index.html';
import './style/style.scss';

import assert from 'assert';
import deepCopy from './deep_copy';

let a = 5;
assert.equal(a, deepCopy(a));

a = 'qwe';
assert.equal(a, deepCopy(a));

a = [1,2,3];
assert.notEqual(a, deepCopy(a));
assert.deepEqual(a, deepCopy(a));

a = {a: 1, b: 2};
assert.notEqual(a, deepCopy(a));
assert.deepEqual(a, deepCopy(a));

a = {a: 1, b: {v: 'asd', b: [5, 6, {5: [[[{t: 1}]]]}]}};
assert.notEqual(a, deepCopy(a));
assert.deepEqual(a, deepCopy(a));
