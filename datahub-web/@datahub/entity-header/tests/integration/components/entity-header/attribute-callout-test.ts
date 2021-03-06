import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | entity-header/attribute-callout', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`{{entity-header/attribute-callout}}`);

    assert.equal(this.element.textContent!.trim(), '');

    await render(hbs`
      {{#entity-header/attribute-callout}}
        text
      {{/entity-header/attribute-callout}}
    `);

    assert.equal(this.element.textContent!.trim(), 'text');
  });
});
