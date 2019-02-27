'use strict';

const assert = require('assert');
const path = require('path');
const fs = require('fs');

describe('cli', () => {
  it('cli should work!', () => {
    const out = fs.readFileSync(path.join(__dirname, '../fixtures/input-out.js'), 'utf-8');
    const expected = fs.readFileSync(path.join(__dirname, '../fixtures/expected.js'), 'utf-8');

    assert.strictEqual(out, expected);
  });
})
;
