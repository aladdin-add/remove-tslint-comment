'use strict';

const assert = require('assert');
const replace = require('../../lib/index.js');
let input,
  output;

describe('replace', () => {
  it('remove block tslint:enable', () => {
    input = '/*tslint:enable*/';
    output = '';
    assert.strictEqual(replace(input), output);

    input = '/*tslint:enable*/foo';
    output = 'foo';
    assert.strictEqual(replace(input), output);

    input = 'foo/*tslint:enable*/';
    output = 'foo';
    assert.strictEqual(replace(input), output);
  });

  it('remove block tslint:disable', () => {
    input = '/*tslint:disable*/';
    output = '';
    assert.strictEqual(replace(input), output);

    input = '/*tslint:disable*/foo';
    output = 'foo';
    assert.strictEqual(replace(input), output);

    input = 'foo/*tslint:disable*/';
    output = 'foo';
    assert.strictEqual(replace(input), output);
  });

  it('remove inline tslint:disable', () => {
    input = '// tslint:disable-next-line';
    output = '';
    assert.strictEqual(replace(input), output);

    input = 'foo// tslint:disable-next-line';
    output = 'foo';
    assert.strictEqual(replace(input), output);

    input = '// tslint:disable-next-line:rule\nfoo';
    output = '\nfoo';
    assert.strictEqual(replace(input), output);
  });

  it('not remove string', () => {
    input = '\'tslint:enable\'';

    assert.strictEqual(replace(input), input);
  });
});

