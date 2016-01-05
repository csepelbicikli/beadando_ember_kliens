/* jshint expr:true */
import { expect } from 'chai';
import {
  describeComponent,
  it
} from 'ember-mocha';
import hbs from 'htmlbars-inline-precompile';

describeComponent(
  'list-item',
  'Integration: ListItemComponent',
  {
    integration: true
  },
  function() {
    it('renders', function() {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#list-item}}
      //     template content
      //   {{/list-item}}
      // `);

      this.render(hbs`{{list-item}}`);
      expect(this.$()).to.have.length(1);
    });
  }
);
