define('client1/tests/integration/pods/error-detail/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('error-detail', 'Integration: ErrorDetailComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#error-detail}}
      //     template content
      //   {{/error-detail}}
      // `);

      this.render(Ember.HTMLBars.template((function () {
        return {
          meta: {
            'revision': 'Ember@1.13.7',
            'loc': {
              'source': null,
              'start': {
                'line': 1,
                'column': 0
              },
              'end': {
                'line': 1,
                'column': 16
              }
            }
          },
          arity: 0,
          cachedFragment: null,
          hasRendered: false,
          buildFragment: function buildFragment(dom) {
            var el0 = dom.createDocumentFragment();
            var el1 = dom.createComment('');
            dom.appendChild(el0, el1);
            return el0;
          },
          buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
            var morphs = new Array(1);
            morphs[0] = dom.createMorphAt(fragment, 0, 0, contextualElement);
            dom.insertBoundary(fragment, 0);
            dom.insertBoundary(fragment, null);
            return morphs;
          },
          statements: [['content', 'error-detail', ['loc', [null, [1, 0], [1, 16]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});