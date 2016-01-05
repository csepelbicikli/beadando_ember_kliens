/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'my-list',
  'Integration: MyListComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#my-list}}
      //     template content
      //   {{/my-list}}
      // `);

      this.render(hbs`{{my-list}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
