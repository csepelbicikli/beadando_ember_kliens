/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'error-list',
  'Integration: ErrorListComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#error-list}}
      //     template content
      //   {{/error-list}}
      // `);

      this.render(hbs`{{error-list}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
