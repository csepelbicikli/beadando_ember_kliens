"use strict";
/* jshint ignore:start */

/* jshint ignore:end */

define('client1/app', ['exports', 'ember', 'ember/resolver', 'ember/load-initializers', 'client1/config/environment'], function (exports, Ember, Resolver, loadInitializers, config) {

  'use strict';

  var App;

  Ember['default'].MODEL_FACTORY_INJECTIONS = true;

  App = Ember['default'].Application.extend({
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix,
    Resolver: Resolver['default']
  });

  loadInitializers['default'](App, config['default'].modulePrefix);

  exports['default'] = App;

});
define('client1/components/app-version', ['exports', 'ember-cli-app-version/components/app-version', 'client1/config/environment'], function (exports, AppVersionComponent, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = AppVersionComponent['default'].extend({
    version: version,
    name: name
  });

});
define('client1/controllers/array', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('client1/controllers/object', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller;

});
define('client1/initializers/app-version', ['exports', 'ember-cli-app-version/initializer-factory', 'client1/config/environment'], function (exports, initializerFactory, config) {

  'use strict';

  var _config$APP = config['default'].APP;
  var name = _config$APP.name;
  var version = _config$APP.version;

  exports['default'] = {
    name: 'App Version',
    initialize: initializerFactory['default'](name, version)
  };

});
define('client1/initializers/export-application-global', ['exports', 'ember', 'client1/config/environment'], function (exports, Ember, config) {

  'use strict';

  exports.initialize = initialize;

  function initialize() {
    var application = arguments[1] || arguments[0];
    if (config['default'].exportApplicationGlobal !== false) {
      var value = config['default'].exportApplicationGlobal;
      var globalName;

      if (typeof value === 'string') {
        globalName = value;
      } else {
        globalName = Ember['default'].String.classify(config['default'].modulePrefix);
      }

      if (!window[globalName]) {
        window[globalName] = application;

        application.reopen({
          willDestroy: function willDestroy() {
            this._super.apply(this, arguments);
            delete window[globalName];
          }
        });
      }
    }
  }

  exports['default'] = {
    name: 'export-application-global',

    initialize: initialize
  };

});
define('client1/pods/application/adapter', ['exports', 'ember-data'], function (exports, DS) {

	'use strict';

	exports['default'] = DS['default'].FixtureAdapter.extend({});

});
define('client1/pods/application/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    actions: {
      showModal: function showModal(name, model) {
        this.render('logout-modal', {
          into: 'application',
          outlet: 'modal',
          model: model
        });
      },
      removeModal: function removeModal() {
        this.disconnectOutlet({
          outlet: 'modal',
          parentView: 'application'
        });
      }
    }
  });

});
define('client1/pods/application/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 40,
            "column": 0
          }
        },
        "moduleName": "client1/pods/application/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-12");
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("nav");
        dom.setAttribute(el4,"class","navbar navbar-default");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","container-fluid");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","navbar-header");
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("button");
        dom.setAttribute(el7,"type","button");
        dom.setAttribute(el7,"class","navbar-toggle collapsed");
        dom.setAttribute(el7,"data-toggle","collapse");
        dom.setAttribute(el7,"data-target","#bs-example-navbar-collapse-1");
        dom.setAttribute(el7,"aria-expanded","false");
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","sr-only");
        var el9 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","icon-bar");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","icon-bar");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","icon-bar");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","navbar-brand");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Hibabejelentő");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","collapse navbar-collapse");
        dom.setAttribute(el6,"id","bs-example-navbar-collapse-1");
        var el7 = dom.createTextNode("\n                  \n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7,"class","nav navbar-nav navbar-right");
        var el8 = dom.createTextNode("\n                      ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"href","/login");
        var el10 = dom.createTextNode("Bejelentkezés");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                      ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"href","/about");
        var el10 = dom.createTextNode("About");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            \n                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n              ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"id","bodyContent");
        var el5 = dom.createTextNode("\n                \n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 3]),1,1);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[31,12],[31,22]]]],
        ["inline","outlet",["modal"],[],["loc",[null,[39,0],[39,18]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/components/error-detail/component', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Component.extend({});

});
define('client1/pods/components/error-detail/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 9,
            "column": 58
          }
        },
        "moduleName": "client1/pods/components/error-detail/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("dl");
        dom.setAttribute(el1,"class","dl-horizontal");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("id");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("Hely");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dt");
        var el3 = dom.createTextNode("Leírás");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [3]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [7]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element0, [11]),0,0);
        morphs[3] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["content","error.id",["loc",[null,[3,6],[3,18]]]],
        ["content","error.location",["loc",[null,[5,6],[5,24]]]],
        ["content","error.description",["loc",[null,[7,6],[7,27]]]],
        ["inline","link-to",["Vissza","errors.list"],["class","btn btn-default"],["loc",[null,[9,0],[9,58]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/components/error-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        errors: Ember['default'].Object.create(),
        hasErrors: false,

        /*
        location:    null,
        description: null,
         initialize() {
            this.set('location', this.get('error').get('location'));
            this.set('description', this.get('error').get('description'));
        },
        */

        actions: {
            submit: function submit() {
                console.log('submit');
                this.validate();
                if (this.get('hasErrors')) {
                    return;
                }
                return this.attrs['onSave']({
                    location: this.$('#helyszin').val(),
                    description: this.$('#leiras').val()
                });
            },
            validate: function validate() {
                this.validate();
            }
        },

        validate: function validate() {
            var location = this.$('#helyszin').val();
            var description = this.$('#leiras').val();

            console.log(location, description);
            this.set('errors.location', location === '' ? 'Név kötelező' : '');
            this.set('errors.description', description === '' ? 'Leírás kötelező' : '');

            if (this.get('errors.location') !== '' || this.get('errors.description') !== '') {
                this.set('hasErrors', true);
            } else {
                this.set('hasErrors', false);
            }
        }
    });

});
define('client1/pods/components/error-form/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 27,
            "column": 15
          }
        },
        "moduleName": "client1/pods/components/error-form/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("form");
        dom.setAttribute(el1,"class","form-horizontal");
        dom.setAttribute(el1,"method","post");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("fieldset");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4,"for","helyszin");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Helyszín");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("input");
        dom.setAttribute(el5,"class","form-control");
        dom.setAttribute(el5,"id","helyszin");
        dom.setAttribute(el5,"name","helyszin");
        dom.setAttribute(el5,"placeholder","pl. PC6, Lovarda, 2. emeleti folyosó...");
        dom.setAttribute(el5,"type","text");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","help-block");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("label");
        dom.setAttribute(el4,"for","leiras");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Leírás");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("textarea");
        dom.setAttribute(el5,"class","form-control");
        dom.setAttribute(el5,"rows","3");
        dom.setAttribute(el5,"id","leiras");
        dom.setAttribute(el5,"name","leiras");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","help-block");
        var el6 = dom.createTextNode("Meg kell adni a helyszínt, ha pedig konkrét géppel van probléma, akkor azt is.");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("span");
        dom.setAttribute(el5,"class","help-block");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","form-group");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","col-lg-10 col-lg-offset-2");
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","reset");
        dom.setAttribute(el5,"class","btn btn-default");
        var el6 = dom.createTextNode("Cancel");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","submit");
        dom.setAttribute(el5,"class","btn btn-primary");
        var el6 = dom.createTextNode("Submit");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("        ");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [2]);
        var element1 = dom.childAt(element0, [1]);
        var element2 = dom.childAt(element1, [1]);
        var element3 = dom.childAt(element2, [4]);
        var element4 = dom.childAt(element3, [1]);
        var element5 = dom.childAt(element1, [3]);
        var element6 = dom.childAt(element5, [3]);
        var element7 = dom.childAt(element6, [1]);
        var morphs = new Array(10);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createElementMorph(element0);
        morphs[2] = dom.createAttrMorph(element2, 'class');
        morphs[3] = dom.createAttrMorph(element4, 'value');
        morphs[4] = dom.createElementMorph(element4);
        morphs[5] = dom.createMorphAt(dom.childAt(element3, [3]),0,0);
        morphs[6] = dom.createAttrMorph(element5, 'class');
        morphs[7] = dom.createElementMorph(element7);
        morphs[8] = dom.createMorphAt(element7,0,0);
        morphs[9] = dom.createMorphAt(dom.childAt(element6, [5]),0,0);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["inline","log",[["get","error",["loc",[null,[1,6],[1,11]]]]],[],["loc",[null,[1,0],[1,13]]]],
        ["element","action",["submit"],["on","submit"],["loc",[null,[2,44],[2,75]]]],
        ["attribute","class",["concat",["form-group ",["subexpr","if",[["get","errors.location",["loc",[null,[4,36],[4,51]]]],"has-error"],[],["loc",[null,[4,31],[4,65]]]]]]],
        ["attribute","value",["concat",[["get","error.location",["loc",[null,[8,149],[8,163]]]]]]],
        ["element","action",["validate"],["on","change"],["loc",[null,[8,167],[8,200]]]],
        ["content","errors.location",["loc",[null,[9,41],[9,60]]]],
        ["attribute","class",["concat",["form-group ",["subexpr","if",[["get","errors.description",["loc",[null,[12,36],[12,54]]]],"has-error"],[],["loc",[null,[12,31],[12,68]]]]]]],
        ["element","action",["validate"],["on","change"],["loc",[null,[15,82],[15,115]]]],
        ["content","error.description",["loc",[null,[15,116],[15,137]]]],
        ["content","errors.description",["loc",[null,[17,41],[17,63]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/components/error-list/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteError: function deleteError(error) {
                console.log(error);
                error.deleteRecord();
                error.save();
            }
        }
    });

});
define('client1/pods/components/error-list/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 13,
              "column": 8
            },
            "end": {
              "line": 25,
              "column": 8
            }
          },
          "moduleName": "client1/pods/components/error-list/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("        ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("tr");
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createElement("span");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createElement("span");
          dom.setAttribute(el3,"class","badge");
          var el4 = dom.createComment("");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode(" ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createComment("");
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n                ");
          dom.appendChild(el2, el3);
          var el3 = dom.createElement("button");
          dom.setAttribute(el3,"class","btn btn-sm btn-default");
          var el4 = dom.createTextNode("Delete");
          dom.appendChild(el3, el4);
          dom.appendChild(el2, el3);
          var el3 = dom.createTextNode("\n            ");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n        ");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [3, 0]);
          var element2 = dom.childAt(element0, [7]);
          var element3 = dom.childAt(element0, [9]);
          var element4 = dom.childAt(element3, [5]);
          var morphs = new Array(9);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          morphs[1] = dom.createAttrMorph(element1, 'class');
          morphs[2] = dom.createMorphAt(element1,0,0);
          morphs[3] = dom.createMorphAt(dom.childAt(element0, [5]),0,0);
          morphs[4] = dom.createMorphAt(dom.childAt(element2, [0]),0,0);
          morphs[5] = dom.createMorphAt(element2,2,2);
          morphs[6] = dom.createMorphAt(element3,1,1);
          morphs[7] = dom.createMorphAt(element3,3,3);
          morphs[8] = dom.createElementMorph(element4);
          return morphs;
        },
        statements: [
          ["content","date",["loc",[null,[15,16],[15,24]]]],
          ["attribute","class",["concat",["label label-",["get","statusClass",["loc",[null,[16,43],[16,54]]]]]]],
          ["content","statusText",["loc",[null,[16,58],[16,72]]]],
          ["content","location",["loc",[null,[17,16],[17,28]]]],
          ["content","numberOfMessages",["loc",[null,[18,36],[18,56]]]],
          ["content","description",["loc",[null,[18,64],[18,79]]]],
          ["inline","link-to",["View","errors.view",["get","this",["loc",[null,[20,47],[20,51]]]]],["class","btn btn-sm btn-default"],["loc",[null,[20,16],[20,84]]]],
          ["inline","link-to",["Edit","errors.edit",["get","this",["loc",[null,[21,47],[21,51]]]]],["class","btn btn-sm btn-default"],["loc",[null,[21,16],[21,84]]]],
          ["element","action",["deleteError",["get","this",["loc",[null,[22,78],[22,82]]]]],[],["loc",[null,[22,55],[22,84]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 42,
            "column": 8
          }
        },
        "moduleName": "client1/pods/components/error-list/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("table");
        dom.setAttribute(el1,"class","table table-striped table-hover ");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("thead");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("tr");
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Időpont");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Státusz");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Helyszín");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Leírás");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Funkciók");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("   \n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("tbody");
        var el3 = dom.createTextNode("\n\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createComment("");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 3]),1,1);
        return morphs;
      },
      statements: [
        ["block","each",[["get","errors",["loc",[null,[13,16],[13,22]]]]],[],0,null,["loc",[null,[13,8],[25,17]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('client1/pods/components/my-modal/component', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Component.extend({
    actions: {
      ok: function ok() {
        this.$('.modal').modal('hide');
        this.sendAction('ok');
      }
    },
    show: (function () {
      this.$('.modal').modal().on('hidden.bs.modal', (function () {
        this.sendAction('close');
      }).bind(this));
    }).on('didInsertElement')
  });

});
define('client1/pods/components/my-modal/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 17,
            "column": 22
          }
        },
        "moduleName": "client1/pods/components/my-modal/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","modal fade");
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","modal-dialog");
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","modal-content");
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-header");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","close");
        dom.setAttribute(el5,"data-dismiss","modal");
        dom.setAttribute(el5,"aria-label","Close");
        var el6 = dom.createElement("span");
        dom.setAttribute(el6,"aria-hidden","true");
        var el7 = dom.createTextNode("×");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("h4");
        dom.setAttribute(el5,"class","modal-title");
        var el6 = dom.createComment("");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-body");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n      ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"class","modal-footer");
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","btn btn-default");
        dom.setAttribute(el5,"data-dismiss","modal");
        var el6 = dom.createTextNode("Close");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n        ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","button");
        dom.setAttribute(el5,"class","btn btn-primary");
        var el6 = dom.createTextNode("OK");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n      ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n    ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createComment(" /.modal-content ");
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n  ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createComment(" /.modal-dialog ");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createComment(" /.modal ");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0, 1, 1]);
        var element1 = dom.childAt(element0, [5, 3]);
        var morphs = new Array(3);
        morphs[0] = dom.createMorphAt(dom.childAt(element0, [1, 3]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element0, [3]),1,1);
        morphs[2] = dom.createElementMorph(element1);
        return morphs;
      },
      statements: [
        ["content","title",["loc",[null,[6,32],[6,41]]]],
        ["content","yield",["loc",[null,[9,8],[9,17]]]],
        ["element","action",["ok"],[],["loc",[null,[13,54],[13,69]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/error/model', ['exports', 'ember-data'], function (exports, DS) {

    'use strict';

    var ErrorModel = DS['default'].Model.extend({
        location: DS['default'].attr('string'),
        description: DS['default'].attr('string'),
        date: DS['default'].attr('string'),
        status: DS['default'].attr('string')
    });

    ErrorModel.reopenClass({
        FIXTURES: [{
            id: 1,
            date: '2021.12.12',
            location: 'pc1',
            description: 'rossz',
            status: 'new'
        }, {
            id: 2,
            date: '2012.12.12',
            location: 'pc2',
            description: 'rossz',
            status: 'assigned'
        }, {
            id: 3,
            date: '2015.12.12',
            location: 'pc9',
            description: 'rossz',
            status: 'success'
        }]
    });

    exports['default'] = ErrorModel;

});
define('client1/pods/errors/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            saveError: function saveError(properties) {
                var _this = this;

                var error = this.get('model');
                console.log(error);
                error.setProperties(properties);
                // error.set('location', properties.location);
                // error.set('description', properties.description);

                return error.save().then(function () {
                    _this.transitionToRoute('errors.list');
                });
            }
        }
    });

});
define('client1/pods/errors/edit/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            return this.store.findRecord('error', params.error_id);
        }
    });

});
define('client1/pods/errors/edit/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 6,
            "column": 54
          }
        },
        "moduleName": "client1/pods/errors/edit/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Hiba módosítása");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","log",[["get","model",["loc",[null,[5,6],[5,11]]]]],[],["loc",[null,[5,0],[5,13]]]],
        ["inline","error-form",[],["error",["subexpr","@mut",[["get","model",["loc",[null,[6,19],[6,24]]]]],[],[]],"onSave",["subexpr","action",["saveError"],[],["loc",[null,[6,32],[6,52]]]]],["loc",[null,[6,0],[6,54]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/errors/list/controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('client1/pods/errors/list/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newError: function newError(properties) {
                this.store.createRecord('error', Object.assign({
                    status: 'new',
                    date: Date.now().toString()
                }, properties));
                this.transitionToRoute('errors.list');
            }
        }
    });

});
define('client1/pods/errors/list/new/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('client1/pods/errors/list/new/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 5,
            "column": 41
          }
        },
        "moduleName": "client1/pods/errors/list/new/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Új hiba bejelentése");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","error-form",[],["onSave",["subexpr","action",["newError"],[],["loc",[null,[5,20],[5,39]]]]],["loc",[null,[5,0],[5,41]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/errors/list/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('error');
        }
    });

});
define('client1/pods/errors/list/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 6,
              "column": 0
            }
          },
          "moduleName": "client1/pods/errors/list/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createElement("div");
          dom.setAttribute(el1,"class","alert alert-dismissible alert-success");
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("button");
          dom.setAttribute(el2,"type","button");
          dom.setAttribute(el2,"class","close");
          dom.setAttribute(el2,"data-dismiss","alert");
          var el3 = dom.createTextNode("×");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n    ");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var morphs = new Array(1);
          morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0]),3,3);
          return morphs;
        },
        statements: [
          ["content","this",["loc",[null,[4,4],[4,12]]]]
        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 18,
            "column": 10
          }
        },
        "moduleName": "client1/pods/errors/list/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Bejelentett hibáim");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(4);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,4,4,contextualElement);
        morphs[2] = dom.createMorphAt(dom.childAt(fragment, [6]),0,0);
        morphs[3] = dom.createMorphAt(fragment,9,9,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","each",[["get","messages",["loc",[null,[1,8],[1,16]]]]],[],0,null,["loc",[null,[1,0],[6,9]]]],
        ["inline","error-list",[],["errors",["subexpr","@mut",[["get","model",["loc",[null,[12,20],[12,25]]]]],[],[]]],["loc",[null,[12,0],[12,27]]]],
        ["inline","link-to",["Új hiba felvitele","errors.list.new"],["class","btn btn-default"],["loc",[null,[15,3],[15,76]]]],
        ["content","outlet",["loc",[null,[18,0],[18,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('client1/pods/errors/view/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            // console.log(params)
            return this.store.findRecord('error', params.error_id);
        }
    });

});
define('client1/pods/errors/view/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 2,
            "column": 28
          }
        },
        "moduleName": "client1/pods/errors/view/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","error-detail",[],["error",["subexpr","@mut",[["get","model",["loc",[null,[2,21],[2,26]]]]],[],[]]],["loc",[null,[2,0],[2,28]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 8,
            "column": 0
          }
        },
        "moduleName": "client1/pods/index/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","page-header");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("h1");
        var el3 = dom.createTextNode("Hibabejelentés az IK-n");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("\n    Blabla blabla blabla\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes() { return []; },
      statements: [

      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/logout-modal/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 1,
              "column": 0
            },
            "end": {
              "line": 3,
              "column": 0
            }
          },
          "moduleName": "client1/pods/logout-modal/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  Are you sure you want to logout?\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes() { return []; },
        statements: [

        ],
        locals: [],
        templates: []
      };
    }());
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 3,
            "column": 13
          }
        },
        "moduleName": "client1/pods/logout-modal/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","my-modal",[],["title","Logout","ok","logout","close","removeModal"],0,null,["loc",[null,[1,0],[3,13]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('client1/pods/modal/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    actions: {
      logout: function logout() {
        alert('logout');
      }
    }
  });

});
define('client1/pods/modal/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 1,
            "column": 61
          }
        },
        "moduleName": "client1/pods/modal/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("button");
        var el2 = dom.createTextNode("logout");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var element0 = dom.childAt(fragment, [0]);
        var morphs = new Array(1);
        morphs[0] = dom.createElementMorph(element0);
        return morphs;
      },
      statements: [
        ["element","action",["showModal","logout-modal"],[],["loc",[null,[1,8],[1,45]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/router', ['exports', 'ember', 'client1/config/environment'], function (exports, Ember, config) {

  'use strict';

  var Router = Ember['default'].Router.extend({
    location: config['default'].locationType
  });

  Router.map(function () {
    this.route('index', { path: '/' });

    this.route('errors', function () {
      this.route('list', function () {
        this.route('new');
      });
      this.route('new');
      this.route('view', { path: '/:error_id' });
      this.route('edit', { path: '/edit/:error_id' });
    });
    this.route('modal');
  });

  exports['default'] = Router;

});
define('client1/templates/application', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    return {
      meta: {
        "revision": "Ember@1.13.7",
        "loc": {
          "source": null,
          "start": {
            "line": 1,
            "column": 0
          },
          "end": {
            "line": 38,
            "column": 0
          }
        },
        "moduleName": "client1/templates/application.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
        var el1 = dom.createElement("div");
        dom.setAttribute(el1,"class","container-fluid");
        var el2 = dom.createTextNode("\n    ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("div");
        dom.setAttribute(el2,"class","row");
        var el3 = dom.createTextNode("\n        ");
        dom.appendChild(el2, el3);
        var el3 = dom.createElement("div");
        dom.setAttribute(el3,"class","col-md-12");
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("nav");
        dom.setAttribute(el4,"class","navbar navbar-default");
        var el5 = dom.createTextNode("\n              ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("div");
        dom.setAttribute(el5,"class","container-fluid");
        var el6 = dom.createTextNode("\n");
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","navbar-header");
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("button");
        dom.setAttribute(el7,"type","button");
        dom.setAttribute(el7,"class","navbar-toggle collapsed");
        dom.setAttribute(el7,"data-toggle","collapse");
        dom.setAttribute(el7,"data-target","#bs-example-navbar-collapse-1");
        dom.setAttribute(el7,"aria-expanded","false");
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","sr-only");
        var el9 = dom.createTextNode("Toggle navigation");
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","icon-bar");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","icon-bar");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                    ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("span");
        dom.setAttribute(el8,"class","icon-bar");
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("a");
        dom.setAttribute(el7,"class","navbar-brand");
        dom.setAttribute(el7,"href","#");
        var el8 = dom.createTextNode("Hibabejelentő");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n\n                ");
        dom.appendChild(el5, el6);
        var el6 = dom.createElement("div");
        dom.setAttribute(el6,"class","collapse navbar-collapse");
        dom.setAttribute(el6,"id","bs-example-navbar-collapse-1");
        var el7 = dom.createTextNode("\n                  \n                  ");
        dom.appendChild(el6, el7);
        var el7 = dom.createElement("ul");
        dom.setAttribute(el7,"class","nav navbar-nav navbar-right");
        var el8 = dom.createTextNode("\n                      ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"href","/login");
        var el10 = dom.createTextNode("Bejelentkezés");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                      ");
        dom.appendChild(el7, el8);
        var el8 = dom.createElement("li");
        var el9 = dom.createElement("a");
        dom.setAttribute(el9,"href","/about");
        var el10 = dom.createTextNode("About");
        dom.appendChild(el9, el10);
        dom.appendChild(el8, el9);
        dom.appendChild(el7, el8);
        var el8 = dom.createTextNode("\n                  ");
        dom.appendChild(el7, el8);
        dom.appendChild(el6, el7);
        var el7 = dom.createTextNode("\n            \n                ");
        dom.appendChild(el6, el7);
        dom.appendChild(el5, el6);
        var el6 = dom.createTextNode("\n              ");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("div");
        dom.setAttribute(el4,"id","bodyContent");
        var el5 = dom.createTextNode("\n                \n            ");
        dom.appendChild(el4, el5);
        var el5 = dom.createComment("");
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n            \n            ");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n\n        ");
        dom.appendChild(el3, el4);
        dom.appendChild(el2, el3);
        var el3 = dom.createTextNode("\n    ");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [0, 1, 1, 3]),1,1);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[31,12],[31,22]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/tests/app.jshint', function () {

  'use strict';

  describe('JSHint - app.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'app.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/helpers/resolver', ['exports', 'ember/resolver', 'client1/config/environment'], function (exports, Resolver, config) {

  'use strict';

  var resolver = Resolver['default'].create();

  resolver.namespace = {
    modulePrefix: config['default'].modulePrefix,
    podModulePrefix: config['default'].podModulePrefix
  };

  exports['default'] = resolver;

});
define('client1/tests/helpers/resolver.jshint', function () {

  'use strict';

  describe('JSHint - helpers/resolver.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'helpers/resolver.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/helpers/start-app', ['exports', 'ember', 'client1/app', 'client1/config/environment'], function (exports, Ember, Application, config) {

  'use strict';



  exports['default'] = startApp;
  function startApp(attrs) {
    var application;

    var attributes = Ember['default'].merge({}, config['default'].APP);
    attributes = Ember['default'].merge(attributes, attrs); // use defaults, but you can override;

    Ember['default'].run(function () {
      application = Application['default'].create(attributes);
      application.setupForTesting();
      application.injectTestHelpers();
    });

    return application;
  }

});
define('client1/tests/helpers/start-app.jshint', function () {

  'use strict';

  describe('JSHint - helpers/start-app.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'helpers/start-app.js should pass jshint.').to.be.ok; 
  })});

});
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
define('client1/tests/integration/pods/error-detail/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/pods/error-detail/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/pods/error-detail/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/integration/pods/error-form/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('error-form', 'Integration: ErrorFormComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#error-form}}
      //     template content
      //   {{/error-form}}
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
                'column': 14
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
          statements: [['content', 'error-form', ['loc', [null, [1, 0], [1, 14]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('client1/tests/integration/pods/error-form/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/pods/error-form/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/pods/error-form/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/integration/pods/error-list/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('error-list', 'Integration: ErrorListComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#error-list}}
      //     template content
      //   {{/error-list}}
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
                'column': 14
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
          statements: [['content', 'error-list', ['loc', [null, [1, 0], [1, 14]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('client1/tests/integration/pods/error-list/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/pods/error-list/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/pods/error-list/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/integration/pods/list-item/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('list-item', 'Integration: ListItemComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#list-item}}
      //     template content
      //   {{/list-item}}
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
                'column': 13
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
          statements: [['content', 'list-item', ['loc', [null, [1, 0], [1, 13]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('client1/tests/integration/pods/list-item/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/pods/list-item/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/pods/list-item/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/integration/pods/my-comp/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('my-comp', 'Integration: MyCompComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#my-comp}}
      //     template content
      //   {{/my-comp}}
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
                'column': 11
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
          statements: [['content', 'my-comp', ['loc', [null, [1, 0], [1, 11]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('client1/tests/integration/pods/my-comp/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/pods/my-comp/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/pods/my-comp/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/integration/pods/my-list/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('my-list', 'Integration: MyListComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#my-list}}
      //     template content
      //   {{/my-list}}
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
                'column': 11
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
          statements: [['content', 'my-list', ['loc', [null, [1, 0], [1, 11]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('client1/tests/integration/pods/my-list/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/pods/my-list/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/pods/my-list/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/integration/pods/my-modal/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('my-modal', 'Integration: MyModalComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#my-modal}}
      //     template content
      //   {{/my-modal}}
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
                'column': 12
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
          statements: [['content', 'my-modal', ['loc', [null, [1, 0], [1, 12]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('client1/tests/integration/pods/my-modal/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/pods/my-modal/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/pods/my-modal/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/integration/pods/new-error-form/component-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeComponent('new-error-form', 'Integration: NewErrorFormComponent', {
    integration: true
  }, function () {
    ember_mocha.it('renders', function () {
      // Set any properties with this.set('myProperty', 'value');
      // Handle any actions with this.on('myAction', function(val) { ... });
      // Template block usage:
      // this.render(hbs`
      //   {{#new-error-form}}
      //     template content
      //   {{/new-error-form}}
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
                'column': 18
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
          statements: [['content', 'new-error-form', ['loc', [null, [1, 0], [1, 18]]]]],
          locals: [],
          templates: []
        };
      })()));
      chai.expect(this.$()).to.have.length(1);
    });
  });

});
define('client1/tests/integration/pods/new-error-form/component-test.jshint', function () {

  'use strict';

  describe('JSHint - integration/pods/new-error-form/component-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'integration/pods/new-error-form/component-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/application/adapter.jshint', function () {

  'use strict';

  describe('JSHint - pods/application/adapter.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/application/adapter.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/application/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/application/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/application/route.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/components/error-detail/component.jshint', function () {

  'use strict';

  describe('JSHint - pods/components/error-detail/component.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/components/error-detail/component.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/components/error-form/component.jshint', function () {

  'use strict';

  describe('JSHint - pods/components/error-form/component.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/components/error-form/component.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/components/error-list/component.jshint', function () {

  'use strict';

  describe('JSHint - pods/components/error-list/component.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/components/error-list/component.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/components/my-modal/component.jshint', function () {

  'use strict';

  describe('JSHint - pods/components/my-modal/component.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/components/my-modal/component.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/error/model.jshint', function () {

  'use strict';

  describe('JSHint - pods/error/model.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/error/model.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/errors/edit/controller.jshint', function () {

  'use strict';

  describe('JSHint - pods/errors/edit/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/errors/edit/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/errors/edit/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/errors/edit/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/errors/edit/route.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/errors/list/controller.jshint', function () {

  'use strict';

  describe('JSHint - pods/errors/list/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/errors/list/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/errors/list/new/controller.jshint', function () {

  'use strict';

  describe('JSHint - pods/errors/list/new/controller.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/errors/list/new/controller.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/errors/list/new/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/errors/list/new/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/errors/list/new/route.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/errors/list/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/errors/list/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/errors/list/route.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/errors/view/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/errors/view/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/errors/view/route.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/pods/modal/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/modal/route.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'pods/modal/route.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/router.jshint', function () {

  'use strict';

  describe('JSHint - router.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'router.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/test-helper', ['client1/tests/helpers/resolver', 'ember-mocha'], function (resolver, ember_mocha) {

	'use strict';

	ember_mocha.setResolver(resolver['default']);

});
define('client1/tests/test-helper.jshint', function () {

  'use strict';

  describe('JSHint - test-helper.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'test-helper.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/about/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:about', 'AboutRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/about/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/about/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/about/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/application/adapter-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('adapter:application', 'ApplicationAdapter', {
    // Specify the other units that are required for this test.
    // needs: ['serializer:foo']
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var adapter = this.subject();
      chai.expect(adapter).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/application/adapter-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/application/adapter-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/application/adapter-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/application/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:application', 'ApplicationRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/application/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/application/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/application/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/error/model-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModel('error', 'Error', {
    // Specify the other units that are required for this test.
    needs: []
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var model = this.subject();
      // var store = this.store();
      chai.expect(model).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/error/model-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/error/model-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/error/model-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/errors/edit/controller-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('controller:errors/edit', 'ErrorsEditController', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var controller = this.subject();
      chai.expect(controller).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/errors/edit/controller-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/errors/edit/controller-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/errors/edit/controller-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/errors/edit/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:errors/edit', 'ErrorsEditRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/errors/edit/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/errors/edit/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/errors/edit/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/errors/list/new/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:errors/list/new', 'ErrorsListNewRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/errors/list/new/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/errors/list/new/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/errors/list/new/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/errors/list/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:errors/list', 'ErrorsListRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/errors/list/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/errors/list/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/errors/list/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/errors/new/controller-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('controller:errors/new', 'ErrorsNewController', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var controller = this.subject();
      chai.expect(controller).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/errors/new/controller-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/errors/new/controller-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/errors/new/controller-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/errors/new/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:errors/new', 'ErrorsNewRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/errors/new/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/errors/new/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/errors/new/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/errors/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:errors', 'ErrorsRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/errors/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/errors/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/errors/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/errors/view/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:errors/view', 'ErrorsViewRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/errors/view/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/errors/view/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/errors/view/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/modal/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:modal', 'ModalRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/modal/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/modal/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/modal/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/proba/controller-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('controller:proba', 'ProbaController', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var controller = this.subject();
      chai.expect(controller).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/proba/controller-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/proba/controller-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/proba/controller-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/proba/proba2/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:proba/proba2', 'ProbaProba2Route', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/proba/proba2/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/proba/proba2/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/proba/proba2/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/proba/route-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:proba', 'ProbaRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/proba/route-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/proba/route-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/proba/route-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/pods/probamodel/model-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModel('probamodel', 'Probamodel', {
    // Specify the other units that are required for this test.
    needs: []
  }, function () {
    // Replace this with your real tests.
    ember_mocha.it('exists', function () {
      var model = this.subject();
      // var store = this.store();
      chai.expect(model).to.be.ok;
    });
  });

});
define('client1/tests/unit/pods/probamodel/model-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/pods/probamodel/model-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/pods/probamodel/model-test.js should pass jshint.').to.be.ok; 
  })});

});
/* jshint ignore:start */

/* jshint ignore:end */

/* jshint ignore:start */

define('client1/config/environment', ['ember'], function(Ember) {
  var prefix = 'client1';
/* jshint ignore:start */

try {
  var metaName = prefix + '/config/environment';
  var rawConfig = Ember['default'].$('meta[name="' + metaName + '"]').attr('content');
  var config = JSON.parse(unescape(rawConfig));

  return { 'default': config };
}
catch(err) {
  throw new Error('Could not read config from meta tag with name "' + metaName + '".');
}

/* jshint ignore:end */

});

if (runningTests) {
  require("client1/tests/test-helper");
} else {
  require("client1/app")["default"].create({"name":"client1","version":"0.0.0+103482c3"});
}

/* jshint ignore:end */
//# sourceMappingURL=client1.map