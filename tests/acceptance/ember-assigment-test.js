import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'ember-qunit';

module('Acceptance | ember assigment', function(hooks) {
  setupApplicationTest(hooks);

  test('visiting /ember-assigment', async function(assert) {
    await visit('/ember-assigment');

    assert.equal(currentURL(), '/ember-assigment');
  });
});
