import test from 'node:test';
import assert from 'node:assert/strict';
import fs from 'node:fs';

const common = fs.readFileSync(new URL('../coach/prompts/common.md', import.meta.url), 'utf8');

test('the shared prompt tells the Coach how to program the power goal', () => {
  assert.match(common, /`coachProfile\.goal` is `power`/);
  assert.match(common, /`prog: "off"`/);
});
