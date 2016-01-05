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

    exports['default'] = DS['default'].JSONAPIAdapter.extend({
        host: 'http://rest-test-csepelbicikli.c9users.io',
        namespace: ''
    });

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
        var el8 = dom.createTextNode("Receptek és hozzávalók");
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
        var el8 = dom.createComment("<li><a href=\"/login\">Bejelentkezés</a></li>\n                      <li><a href=\"/about\">About</a></li>");
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
define('client1/pods/components/ingredient-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        ingredients: Ember['default'].Object.create(),
        hasErrors: false,

        /*
        name:    null,
         initialize() {
            this.set('name', this.get('ingredient').get('name'));
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
                    name: this.$('#nev').val()
                });
            },
            validate: function validate() {
                this.validate();
            }
        },

        validate: function validate() {
            var name = this.$('#nev').val();

            console.log(name);
            this.set('ingredients.name', name === '' ? 'Nevet kötelező megadni' : '');

            if (this.get('ingredients.name') !== '') {
                this.set('hasErrors', true);
            } else {
                this.set('hasErrors', false);
            }
        }
    });

});
define('client1/pods/components/ingredient-form/template', ['exports'], function (exports) {

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
            "line": 19,
            "column": 15
          }
        },
        "moduleName": "client1/pods/components/ingredient-form/template.hbs"
      },
      arity: 0,
      cachedFragment: null,
      hasRendered: false,
      buildFragment: function buildFragment(dom) {
        var el0 = dom.createDocumentFragment();
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
        dom.setAttribute(el4,"for","nev");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Név");
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
        dom.setAttribute(el5,"id","nev");
        dom.setAttribute(el5,"name","nev");
        dom.setAttribute(el5,"placeholder","pl. 1 kiló krumpli...");
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
        var el6 = dom.createTextNode("Mégsem");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","submit");
        dom.setAttribute(el5,"class","btn btn-primary");
        var el6 = dom.createTextNode("Felvisz");
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
        var element0 = dom.childAt(fragment, [1]);
        var element1 = dom.childAt(element0, [1, 1]);
        var element2 = dom.childAt(element1, [4]);
        var element3 = dom.childAt(element2, [1]);
        var morphs = new Array(5);
        morphs[0] = dom.createElementMorph(element0);
        morphs[1] = dom.createAttrMorph(element1, 'class');
        morphs[2] = dom.createAttrMorph(element3, 'value');
        morphs[3] = dom.createElementMorph(element3);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
        return morphs;
      },
      statements: [
        ["element","action",["submit"],["on","submit"],["loc",[null,[2,44],[2,75]]]],
        ["attribute","class",["concat",["form-group ",["subexpr","if",[["get","ingredients.name",["loc",[null,[4,36],[4,52]]]],"has-error"],[],["loc",[null,[4,31],[4,66]]]]]]],
        ["attribute","value",["concat",[["get","ingredient.name",["loc",[null,[8,121],[8,136]]]]]]],
        ["element","action",["validate"],["on","change"],["loc",[null,[8,140],[8,173]]]],
        ["content","ingredients.name",["loc",[null,[9,41],[9,61]]]]
      ],
      locals: [],
      templates: []
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
define('client1/pods/components/recipe-detail/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteIngredient: function deleteIngredient(ingredient) {
                //console.log(ingredient);
                ingredient.deleteRecord();
                ingredient.save();
            }
        }
    });
    /* init: function() {
         this.set('alma', 'piros');
     }.on('didInsertElement')*/

});
define('client1/pods/components/recipe-detail/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 9,
              "column": 2
            },
            "end": {
              "line": 11,
              "column": 2
            }
          },
          "moduleName": "client1/pods/components/recipe-detail/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("  ");
          dom.appendChild(el0, el1);
          var el1 = dom.createElement("dd");
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(" [");
          dom.appendChild(el1, el2);
          var el2 = dom.createComment("");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode(";");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("a");
          var el3 = dom.createTextNode("Törlés");
          dom.appendChild(el2, el3);
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("]");
          dom.appendChild(el1, el2);
          dom.appendChild(el0, el1);
          var el1 = dom.createTextNode("\n");
          dom.appendChild(el0, el1);
          return el0;
        },
        buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
          var element0 = dom.childAt(fragment, [1]);
          var element1 = dom.childAt(element0, [4]);
          var morphs = new Array(3);
          morphs[0] = dom.createMorphAt(element0,0,0);
          morphs[1] = dom.createMorphAt(element0,2,2);
          morphs[2] = dom.createElementMorph(element1);
          return morphs;
        },
        statements: [
          ["content","name",["loc",[null,[10,6],[10,14]]]],
          ["inline","link-to",["Módosítás","ingredients.edit",["get","this",["loc",[null,[10,57],[10,61]]]]],[],["loc",[null,[10,16],[10,63]]]],
          ["element","action",["deleteIngredient",["get","this",["loc",[null,[10,95],[10,99]]]]],[],["loc",[null,[10,67],[10,101]]]]
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
            "column": 59
          }
        },
        "moduleName": "client1/pods/components/recipe-detail/template.hbs"
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
        var el3 = dom.createTextNode("Név");
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
        var el3 = dom.createTextNode("Hozzávalók");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n  ");
        dom.appendChild(el1, el2);
        var el2 = dom.createElement("dd");
        var el3 = dom.createTextNode(" ");
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
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("  ");
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
        var el2 = dom.createTextNode("\n  \n  \n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
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
        var element2 = dom.childAt(fragment, [0]);
        var morphs = new Array(7);
        morphs[0] = dom.createMorphAt(dom.childAt(element2, [3]),0,0);
        morphs[1] = dom.createMorphAt(dom.childAt(element2, [7]),0,0);
        morphs[2] = dom.createMorphAt(dom.childAt(element2, [13]),0,0);
        morphs[3] = dom.createMorphAt(element2,15,15);
        morphs[4] = dom.createMorphAt(dom.childAt(element2, [19]),0,0);
        morphs[5] = dom.createMorphAt(fragment,2,2,contextualElement);
        morphs[6] = dom.createMorphAt(fragment,4,4,contextualElement);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["content","recipe.id",["loc",[null,[3,6],[3,19]]]],
        ["content","recipe.name",["loc",[null,[5,6],[5,21]]]],
        ["content","alma",["loc",[null,[8,6],[8,14]]]],
        ["block","each",[["get","ings",["loc",[null,[9,10],[9,14]]]]],[],0,null,["loc",[null,[9,2],[11,11]]]],
        ["content","recipe.description",["loc",[null,[13,6],[13,28]]]],
        ["inline","link-to",["Új hozzávaló","ingredients.new",["get","recipe.id",["loc",[null,[17,43],[17,52]]]]],[],["loc",[null,[17,0],[17,54]]]],
        ["inline","link-to",["Vissza","recipes.list"],["class","btn btn-default"],["loc",[null,[18,0],[18,59]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('client1/pods/components/recipe-form/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        recipes: Ember['default'].Object.create(),
        hasErrors: false,

        /*
        name:    null,
        description: null,
         initialize() {
            this.set('name', this.get('recipe').get('name'));
            this.set('description', this.get('recipe').get('description'));
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
                    name: this.$('#nev').val(),
                    description: this.$('#leiras').val()
                });
            },
            validate: function validate() {
                this.validate();
            }
        },

        validate: function validate() {
            var name = this.$('#nev').val();
            var description = this.$('#leiras').val();

            console.log(name, description);
            this.set('recipes.name', name === '' ? 'Nevet kötelező megadni' : '');
            this.set('recipes.description', description === '' ? 'Leírást kötelező megadni' : '');

            if (this.get('recipes.name') !== '' || this.get('recipes.description') !== '') {
                this.set('hasErrors', true);
            } else {
                this.set('hasErrors', false);
            }
        }
    });

});
define('client1/pods/components/recipe-form/template', ['exports'], function (exports) {

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
        "moduleName": "client1/pods/components/recipe-form/template.hbs"
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
        dom.setAttribute(el4,"for","nev");
        dom.setAttribute(el4,"class","col-lg-2 control-label");
        var el5 = dom.createTextNode("Név");
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
        dom.setAttribute(el5,"id","nev");
        dom.setAttribute(el5,"name","nev");
        dom.setAttribute(el5,"placeholder","pl. Tárkányos raguleves...");
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
        var el6 = dom.createTextNode("Add meg a recept hozzávalóit, elkészítésének leírását.");
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
        var el6 = dom.createTextNode("Mégsem");
        dom.appendChild(el5, el6);
        dom.appendChild(el4, el5);
        var el5 = dom.createTextNode("\n                ");
        dom.appendChild(el4, el5);
        var el5 = dom.createElement("button");
        dom.setAttribute(el5,"type","submit");
        dom.setAttribute(el5,"class","btn btn-primary");
        var el6 = dom.createTextNode("Felvisz");
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
        ["inline","log",[["get","recipe",["loc",[null,[1,6],[1,12]]]]],[],["loc",[null,[1,0],[1,14]]]],
        ["element","action",["submit"],["on","submit"],["loc",[null,[2,44],[2,75]]]],
        ["attribute","class",["concat",["form-group ",["subexpr","if",[["get","recipes.name",["loc",[null,[4,36],[4,48]]]],"has-error"],[],["loc",[null,[4,31],[4,62]]]]]]],
        ["attribute","value",["concat",[["get","recipe.name",["loc",[null,[8,126],[8,137]]]]]]],
        ["element","action",["validate"],["on","change"],["loc",[null,[8,141],[8,174]]]],
        ["content","recipes.name",["loc",[null,[9,41],[9,57]]]],
        ["attribute","class",["concat",["form-group ",["subexpr","if",[["get","recipes.description",["loc",[null,[12,36],[12,55]]]],"has-error"],[],["loc",[null,[12,31],[12,69]]]]]]],
        ["element","action",["validate"],["on","change"],["loc",[null,[15,82],[15,115]]]],
        ["content","recipe.description",["loc",[null,[15,116],[15,138]]]],
        ["content","recipes.description",["loc",[null,[17,41],[17,64]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/components/recipe-list/component', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Component.extend({
        actions: {
            deleteRecipe: function deleteRecipe(recipe) {
                //console.log(recipe);
                recipe.deleteRecord();
                recipe.save();
            }
        }
    });

});
define('client1/pods/components/recipe-list/template', ['exports'], function (exports) {

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
          "moduleName": "client1/pods/components/recipe-list/template.hbs"
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
          var el2 = dom.createTextNode("\n");
          dom.appendChild(el1, el2);
          var el2 = dom.createTextNode("            ");
          dom.appendChild(el1, el2);
          var el2 = dom.createElement("td");
          var el3 = dom.createComment("");
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
          var el4 = dom.createTextNode("Törlés");
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
          var element1 = dom.childAt(element0, [8]);
          var element2 = dom.childAt(element1, [5]);
          var morphs = new Array(6);
          morphs[0] = dom.createMorphAt(dom.childAt(element0, [1]),0,0);
          morphs[1] = dom.createMorphAt(dom.childAt(element0, [4]),0,0);
          morphs[2] = dom.createMorphAt(dom.childAt(element0, [6]),0,0);
          morphs[3] = dom.createMorphAt(element1,1,1);
          morphs[4] = dom.createMorphAt(element1,3,3);
          morphs[5] = dom.createElementMorph(element2);
          return morphs;
        },
        statements: [
          ["content","date",["loc",[null,[15,16],[15,24]]]],
          ["content","name",["loc",[null,[17,16],[17,24]]]],
          ["content","description",["loc",[null,[18,16],[18,31]]]],
          ["inline","link-to",["Megtekintés","recipes.view",["get","this",["loc",[null,[20,55],[20,59]]]]],["class","btn btn-sm btn-default"],["loc",[null,[20,16],[20,92]]]],
          ["inline","link-to",["Módosítás","recipes.edit",["get","this",["loc",[null,[21,53],[21,57]]]]],["class","btn btn-sm btn-default"],["loc",[null,[21,16],[21,90]]]],
          ["element","action",["deleteRecipe",["get","this",["loc",[null,[22,79],[22,83]]]]],[],["loc",[null,[22,55],[22,85]]]]
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
        "moduleName": "client1/pods/components/recipe-list/template.hbs"
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
        var el5 = dom.createTextNode("Dátum");
        dom.appendChild(el4, el5);
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("\n");
        dom.appendChild(el3, el4);
        var el4 = dom.createTextNode("            ");
        dom.appendChild(el3, el4);
        var el4 = dom.createElement("th");
        var el5 = dom.createTextNode("Név");
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
        var el5 = dom.createTextNode("Műveletek");
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
        ["block","each",[["get","recipes",["loc",[null,[13,16],[13,23]]]]],[],0,null,["loc",[null,[13,8],[25,17]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('client1/pods/index/template', ['exports'], function (exports) {

  'use strict';

  exports['default'] = Ember.HTMLBars.template((function() {
    var child0 = (function() {
      return {
        meta: {
          "revision": "Ember@1.13.7",
          "loc": {
            "source": null,
            "start": {
              "line": 5,
              "column": 10
            },
            "end": {
              "line": 5,
              "column": 48
            }
          },
          "moduleName": "client1/pods/index/template.hbs"
        },
        arity: 0,
        cachedFragment: null,
        hasRendered: false,
        buildFragment: function buildFragment(dom) {
          var el0 = dom.createDocumentFragment();
          var el1 = dom.createTextNode("listázáshoz");
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
            "line": 7,
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
        var el3 = dom.createTextNode("Receptek és hozzávalók");
        dom.appendChild(el2, el3);
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n\n");
        dom.appendChild(el0, el1);
        var el1 = dom.createElement("p");
        var el2 = dom.createTextNode("Menj a ");
        dom.appendChild(el1, el2);
        var el2 = dom.createComment("");
        dom.appendChild(el1, el2);
        var el2 = dom.createTextNode("!\n");
        dom.appendChild(el1, el2);
        dom.appendChild(el0, el1);
        var el1 = dom.createTextNode("\n");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(dom.childAt(fragment, [2]),1,1);
        return morphs;
      },
      statements: [
        ["block","link-to",["recipes.list"],[],0,null,["loc",[null,[5,10],[5,60]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('client1/pods/ingredient/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var IngredientModel = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    r: DS['default'].belongsTo('recipe')
  });

  exports['default'] = IngredientModel;

});
define('client1/pods/ingredients/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            saveIngredient: function saveIngredient(properties) {
                var _this = this;

                var ingredient = this.get('model');
                console.log(ingredient);
                ingredient.setProperties(properties);
                // ingerdient.set('name', properties.name);

                return ingredient.save().then(function () {
                    _this.transitionToRoute('ingredients.list');
                });
            }
        }
    });

});
define('client1/pods/ingredients/edit/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            return this.store.findRecord('ingredient', params.ingredient_id);
        }
    });

});
define('client1/pods/ingredients/edit/template', ['exports'], function (exports) {

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
            "column": 69
          }
        },
        "moduleName": "client1/pods/ingredients/edit/template.hbs"
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
        var el3 = dom.createTextNode("Hozzávaló módosítása");
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
        ["inline","ingredient-form",[],["ingredient",["subexpr","@mut",[["get","model",["loc",[null,[6,29],[6,34]]]]],[],[]],"onSave",["subexpr","action",["saveIngredient"],[],["loc",[null,[6,42],[6,67]]]]],["loc",[null,[6,0],[6,69]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/ingredients/listDOBDKI/controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('client1/pods/ingredients/listDOBDKI/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model() {
            return this.store.findAll('ingredient');
        }
    });

});
define('client1/pods/ingredients/listDOBDKI/template', ['exports'], function (exports) {

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
          "moduleName": "client1/pods/ingredients/listDOBDKI/template.hbs"
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
            "line": 16,
            "column": 10
          }
        },
        "moduleName": "client1/pods/ingredients/listDOBDKI/template.hbs"
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
        var el3 = dom.createTextNode("Felvitt hozzávalók");
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
        var el1 = dom.createTextNode("\n\n");
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
        morphs[3] = dom.createMorphAt(fragment,8,8,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","each",[["get","messages",["loc",[null,[1,8],[1,16]]]]],[],0,null,["loc",[null,[1,0],[6,9]]]],
        ["inline","ingredients-list",[],["ingredients",["subexpr","@mut",[["get","model",["loc",[null,[12,31],[12,36]]]]],[],[]]],["loc",[null,[12,0],[12,38]]]],
        ["inline","link-to",["Új hozzávaló felvitele","ingredients.list.new"],["class","btn btn-default"],["loc",[null,[14,3],[14,86]]]],
        ["content","outlet",["loc",[null,[16,0],[16,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('client1/pods/ingredients/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newIngredient: function newIngredient(properties, params) {
                var _this = this;

                var recipe = this.get('model');
                console.log(recipe);
                var ing = this.store.createRecord('ingredient', Object.assign({
                    r: recipe
                }, properties)).save().then(function () {

                    //recipe.get('ings').then((ings)=>{ings.pushObject(ing).save().then(()=>{
                    _this.transitionToRoute('recipes.list');
                    //});});
                });
            }
        }
    });

});
define('client1/pods/ingredients/new/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            return this.store.findRecord('recipe', params.recipe_id);
        }
    });

});
define('client1/pods/ingredients/new/template', ['exports'], function (exports) {

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
            "column": 52
          }
        },
        "moduleName": "client1/pods/ingredients/new/template.hbs"
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
        var el3 = dom.createTextNode("Új hozzávaló felvitele");
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
        ["inline","ingredient-form",[],["onSave",["subexpr","action",["newIngredient"],[],["loc",[null,[5,25],[5,50]]]]],["loc",[null,[5,0],[5,52]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/ingredients/viewDOBDKI/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            // console.log(params)
            return this.store.findRecord('ingredient', params.ingredient_id);
        }
    });

});
define('client1/pods/ingredients/viewDOBDKI/template', ['exports'], function (exports) {

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
            "column": 39
          }
        },
        "moduleName": "client1/pods/ingredients/viewDOBDKI/template.hbs"
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
        ["inline","ingredients-detail",[],["ingredient",["subexpr","@mut",[["get","model",["loc",[null,[2,32],[2,37]]]]],[],[]]],["loc",[null,[2,0],[2,39]]]]
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
define('client1/pods/recipe/model', ['exports', 'ember-data'], function (exports, DS) {

  'use strict';

  var RecipeModel = DS['default'].Model.extend({
    name: DS['default'].attr('string'),
    description: DS['default'].attr('string'),
    date: DS['default'].attr('string'),
    //  status: DS.attr('string'),
    ings: DS['default'].hasMany('ingredient' /*, { async: true }*/)
  });

  exports['default'] = RecipeModel;

});
define('client1/pods/recipes/edit/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            saveRecipe: function saveRecipe(properties) {
                var _this = this;

                var recipe = this.get('model');
                console.log(recipe);
                recipe.setProperties(properties);
                // recipe.set('name', properties.name);
                // recipe.set('description', properties.description);

                return recipe.save().then(function () {
                    _this.transitionToRoute('recipes.list');
                });
            }
        }
    });

});
define('client1/pods/recipes/edit/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        model: function model(params) {
            return this.store.findRecord('recipe', params.recipe_id);
        }
    });

});
define('client1/pods/recipes/edit/template', ['exports'], function (exports) {

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
            "column": 57
          }
        },
        "moduleName": "client1/pods/recipes/edit/template.hbs"
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
        var el3 = dom.createTextNode("Recept módosítása");
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
        ["inline","recipe-form",[],["recipe",["subexpr","@mut",[["get","model",["loc",[null,[6,21],[6,26]]]]],[],[]],"onSave",["subexpr","action",["saveRecipe"],[],["loc",[null,[6,34],[6,55]]]]],["loc",[null,[6,0],[6,57]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/recipes/list/controller', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Controller.extend({});

});
define('client1/pods/recipes/list/new/controller', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Controller.extend({
        actions: {
            newRecipe: function newRecipe(properties) {
                var _this = this;

                this.store.createRecord('recipe', Object.assign({
                    //status: 'new',
                    date: Date.now().toString()
                }, //ings: [] ,
                properties)).save().then(function () {
                    _this.transitionToRoute('recipes.list');
                });
            }
        }
    });

});
define('client1/pods/recipes/list/new/route', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('client1/pods/recipes/list/new/template', ['exports'], function (exports) {

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
            "column": 43
          }
        },
        "moduleName": "client1/pods/recipes/list/new/template.hbs"
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
        var el3 = dom.createTextNode("Új recept felvitele");
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
        ["inline","recipe-form",[],["onSave",["subexpr","action",["newRecipe"],[],["loc",[null,[5,21],[5,41]]]]],["loc",[null,[5,0],[5,43]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/pods/recipes/list/route', ['exports', 'ember'], function (exports, Ember) {

  'use strict';

  exports['default'] = Ember['default'].Route.extend({
    model: function model(params) {
      return this.store.findAll('recipe');
    }
  });

});
define('client1/pods/recipes/list/template', ['exports'], function (exports) {

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
          "moduleName": "client1/pods/recipes/list/template.hbs"
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
            "line": 16,
            "column": 10
          }
        },
        "moduleName": "client1/pods/recipes/list/template.hbs"
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
        var el3 = dom.createTextNode("Felvitt receptek");
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
        var el1 = dom.createTextNode("\n\n");
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
        morphs[3] = dom.createMorphAt(fragment,8,8,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["block","each",[["get","messages",["loc",[null,[1,8],[1,16]]]]],[],0,null,["loc",[null,[1,0],[6,9]]]],
        ["inline","recipe-list",[],["recipes",["subexpr","@mut",[["get","model",["loc",[null,[12,22],[12,27]]]]],[],[]]],["loc",[null,[12,0],[12,29]]]],
        ["inline","link-to",["Új recept felvitele","recipes.list.new"],["class","btn btn-default"],["loc",[null,[14,3],[14,79]]]],
        ["content","outlet",["loc",[null,[16,0],[16,10]]]]
      ],
      locals: [],
      templates: [child0]
    };
  }()));

});
define('client1/pods/recipes/view/route', ['exports', 'ember'], function (exports, Ember) {

    'use strict';

    exports['default'] = Ember['default'].Route.extend({
        /* model(params) {
             // console.log(params)
             
             this.store.findRecord('recipe', params.recipe_id).then((recipe)=>{
                 this.store.query('ingredient',{r:recipe}).then((ings)=>{
                   console.log(ings);
                   console.log(recipe);
                 
                   
                   return recipe;  
                 })
             });
         },*/
        /*getings(params) {
            console.log('alma');
             console.log(params);
            this.store.findRecord('recipe', params.recipe_id).then((recipe)=>{
                this.store.query('ingredient', {r: recipe}).then((ings)=>{
                    console.log('ings:'+ings);
                    return ings;
                });
            });
        }*/
    });

});
define('client1/pods/recipes/view/template', ['exports'], function (exports) {

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
            "column": 46
          }
        },
        "moduleName": "client1/pods/recipes/view/template.hbs"
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
        var el1 = dom.createComment("");
        dom.appendChild(el0, el1);
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(2);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        morphs[1] = dom.createMorphAt(fragment,2,2,contextualElement);
        dom.insertBoundary(fragment, 0);
        dom.insertBoundary(fragment, null);
        return morphs;
      },
      statements: [
        ["inline","log",[["get","model",["loc",[null,[1,6],[1,11]]]]],[],["loc",[null,[1,0],[1,13]]]],
        ["inline","recipe-detail",[],["recipe",["subexpr","@mut",[["get","model",["loc",[null,[2,23],[2,28]]]]],[],[]],"ings",["subexpr","@mut",[["get","model.ings",["loc",[null,[2,34],[2,44]]]]],[],[]]],["loc",[null,[2,0],[2,46]]]]
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

    this.route('recipes', function () {
      this.route('list', function () {
        this.route('new');
      });
      this.route('new');
      this.route('view', { path: '/:recipe_id' });
      this.route('edit', { path: '/edit/:recipe_id' });
    });
    this.route('ingredients', function () {
      this.route('new', { path: '/new/:recipe_id' });
      this.route('edit', { path: '/edit/:ingredient_id' });
    });
    this.route('modal');
  });

  exports['default'] = Router;

});
define('client1/routes/application', ['exports', 'ember'], function (exports, Ember) {

	'use strict';

	exports['default'] = Ember['default'].Route.extend({});

});
define('client1/routes/recipes', ['exports', 'ember'], function (exports, Ember) {

   'use strict';

   exports['default'] = Ember['default'].Route.extend({
      model: function model() {
         this.store.findAll('recipe');
         return this.store.findAll('ingredient');
      }
   });

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
            "line": 40,
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
        var el8 = dom.createTextNode("Receptek és hozzávalók");
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
        var el7 = dom.createComment(" \n                  <ul class=\"nav navbar-nav navbar-right\">\n                      <li><a href=\"/login\">Bejelentkezés</a></li>\n                      <li><a href=\"/about\">About</a></li>\n                  </ul>\n                  ");
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
        ["content","outlet",["loc",[null,[33,12],[33,22]]]]
      ],
      locals: [],
      templates: []
    };
  }()));

});
define('client1/templates/recipes', ['exports'], function (exports) {

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
            "column": 0
          }
        },
        "moduleName": "client1/templates/recipes.hbs"
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
        return el0;
      },
      buildRenderNodes: function buildRenderNodes(dom, fragment, contextualElement) {
        var morphs = new Array(1);
        morphs[0] = dom.createMorphAt(fragment,0,0,contextualElement);
        dom.insertBoundary(fragment, 0);
        return morphs;
      },
      statements: [
        ["content","outlet",["loc",[null,[1,0],[1,10]]]]
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
    expect(false, 'app.js should pass jshint.\napp.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 3, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 4, col 1, \'import\' is only available in ES6 (use esnext option).\napp.js: line 18, col 1, \'export\' is only available in ES6 (use esnext option).\n\n5 errors').to.be.ok; 
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
    expect(false, 'pods/application/adapter.js should pass jshint.\npods/application/adapter.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/application/adapter.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/application/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/application/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/application/route.js should pass jshint.\npods/application/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/application/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/components/ingredient-form/component.jshint', function () {

  'use strict';

  describe('JSHint - pods/components/ingredient-form/component.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/components/ingredient-form/component.js should pass jshint.\npods/components/ingredient-form/component.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/components/ingredient-form/component.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/components/ingredient-form/component.js: line 16, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/components/ingredient-form/component.js: line 22, col 30, [\'onSave\'] is better written in dot notation.\npods/components/ingredient-form/component.js: line 26, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/components/ingredient-form/component.js: line 31, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n6 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/components/my-modal/component.jshint', function () {

  'use strict';

  describe('JSHint - pods/components/my-modal/component.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/components/my-modal/component.js should pass jshint.\npods/components/my-modal/component.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/components/my-modal/component.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/components/recipe-detail/component.jshint', function () {

  'use strict';

  describe('JSHint - pods/components/recipe-detail/component.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/components/recipe-detail/component.js should pass jshint.\npods/components/recipe-detail/component.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/components/recipe-detail/component.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/components/recipe-detail/component.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/components/recipe-form/component.jshint', function () {

  'use strict';

  describe('JSHint - pods/components/recipe-form/component.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/components/recipe-form/component.js should pass jshint.\npods/components/recipe-form/component.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/components/recipe-form/component.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/components/recipe-form/component.js: line 18, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/components/recipe-form/component.js: line 24, col 30, [\'onSave\'] is better written in dot notation.\npods/components/recipe-form/component.js: line 29, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/components/recipe-form/component.js: line 34, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n6 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/components/recipe-list/component.jshint', function () {

  'use strict';

  describe('JSHint - pods/components/recipe-list/component.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/components/recipe-list/component.js should pass jshint.\npods/components/recipe-list/component.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/components/recipe-list/component.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/components/recipe-list/component.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/ingredient/model.jshint', function () {

  'use strict';

  describe('JSHint - pods/ingredient/model.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/ingredient/model.js should pass jshint.\npods/ingredient/model.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/ingredient/model.js: line 3, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/ingredient/model.js: line 10, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/ingredients/edit/controller.jshint', function () {

  'use strict';

  describe('JSHint - pods/ingredients/edit/controller.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/ingredients/edit/controller.js should pass jshint.\npods/ingredients/edit/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/ingredients/edit/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/ingredients/edit/controller.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/ingredients/edit/controller.js: line 11, col 44, \'arrow function syntax (=>)\' is only available in ES6 (use esnext option).\n\n4 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/ingredients/edit/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/ingredients/edit/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/ingredients/edit/route.js should pass jshint.\npods/ingredients/edit/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/ingredients/edit/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/ingredients/edit/route.js: line 4, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/ingredients/listDOBDKI/controller.jshint', function () {

  'use strict';

  describe('JSHint - pods/ingredients/listDOBDKI/controller.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/ingredients/listDOBDKI/controller.js should pass jshint.\npods/ingredients/listDOBDKI/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/ingredients/listDOBDKI/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/ingredients/listDOBDKI/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/ingredients/listDOBDKI/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/ingredients/listDOBDKI/route.js should pass jshint.\npods/ingredients/listDOBDKI/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/ingredients/listDOBDKI/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/ingredients/listDOBDKI/route.js: line 4, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/ingredients/new/controller.jshint', function () {

  'use strict';

  describe('JSHint - pods/ingredients/new/controller.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/ingredients/new/controller.js should pass jshint.\npods/ingredients/new/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/ingredients/new/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/ingredients/new/controller.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/ingredients/new/controller.js: line 12, col 42, \'arrow function syntax (=>)\' is only available in ES6 (use esnext option).\n\n4 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/ingredients/new/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/ingredients/new/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/ingredients/new/route.js should pass jshint.\npods/ingredients/new/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/ingredients/new/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/ingredients/new/route.js: line 4, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/ingredients/viewDOBDKI/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/ingredients/viewDOBDKI/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/ingredients/viewDOBDKI/route.js should pass jshint.\npods/ingredients/viewDOBDKI/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/ingredients/viewDOBDKI/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/ingredients/viewDOBDKI/route.js: line 4, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/modal/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/modal/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/modal/route.js should pass jshint.\npods/modal/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/modal/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/recipe/model.jshint', function () {

  'use strict';

  describe('JSHint - pods/recipe/model.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/recipe/model.js should pass jshint.\npods/recipe/model.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipe/model.js: line 3, col 1, \'const\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/recipe/model.js: line 13, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/recipes/edit/controller.jshint', function () {

  'use strict';

  describe('JSHint - pods/recipes/edit/controller.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/recipes/edit/controller.js should pass jshint.\npods/recipes/edit/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipes/edit/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/recipes/edit/controller.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/recipes/edit/controller.js: line 12, col 40, \'arrow function syntax (=>)\' is only available in ES6 (use esnext option).\n\n4 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/recipes/edit/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/recipes/edit/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/recipes/edit/route.js should pass jshint.\npods/recipes/edit/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipes/edit/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/recipes/edit/route.js: line 4, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/recipes/list/controller.jshint', function () {

  'use strict';

  describe('JSHint - pods/recipes/list/controller.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/recipes/list/controller.js should pass jshint.\npods/recipes/list/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipes/list/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/recipes/list/new/controller.jshint', function () {

  'use strict';

  describe('JSHint - pods/recipes/list/new/controller.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/recipes/list/new/controller.js should pass jshint.\npods/recipes/list/new/controller.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipes/list/new/controller.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\npods/recipes/list/new/controller.js: line 5, col 9, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\npods/recipes/list/new/controller.js: line 10, col 42, \'arrow function syntax (=>)\' is only available in ES6 (use esnext option).\n\n4 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/recipes/list/new/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/recipes/list/new/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/recipes/list/new/route.js should pass jshint.\npods/recipes/list/new/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipes/list/new/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/recipes/list/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/recipes/list/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/recipes/list/route.js should pass jshint.\npods/recipes/list/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipes/list/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
define('client1/tests/pods/recipes/view/route.jshint', function () {

  'use strict';

  describe('JSHint - pods/recipes/view/route.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'pods/recipes/view/route.js should pass jshint.\npods/recipes/view/route.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\npods/recipes/view/route.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
define('client1/tests/router.jshint', function () {

  'use strict';

  describe('JSHint - router.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'router.js should pass jshint.\nrouter.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 2, col 1, \'import\' is only available in ES6 (use esnext option).\nrouter.js: line 26, col 1, \'export\' is only available in ES6 (use esnext option).\n\n3 errors').to.be.ok; 
  })});

});
define('client1/tests/routes/application.jshint', function () {

  'use strict';

  describe('JSHint - routes/application.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'routes/application.js should pass jshint.\nroutes/application.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/application.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\n\n2 errors').to.be.ok; 
  })});

});
define('client1/tests/routes/recipes.jshint', function () {

  'use strict';

  describe('JSHint - routes/recipes.js', function(){
  it('should pass jshint', function() { 
    expect(false, 'routes/recipes.js should pass jshint.\nroutes/recipes.js: line 1, col 1, \'import\' is only available in ES6 (use esnext option).\nroutes/recipes.js: line 3, col 1, \'export\' is only available in ES6 (use esnext option).\nroutes/recipes.js: line 4, col 5, \'concise methods\' is available in ES6 (use esnext option) or Mozilla JS extensions (use moz).\n\n3 errors').to.be.ok; 
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
define('client1/tests/unit/models/alma-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModel('alma', 'Alma', {
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
define('client1/tests/unit/models/alma-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/models/alma-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/models/alma-test.js should pass jshint.').to.be.ok; 
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
define('client1/tests/unit/routes/alma-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:alma', 'AlmaRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/routes/alma-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/routes/alma-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/routes/alma-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/routes/application-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

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
define('client1/tests/unit/routes/application-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/routes/application-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/routes/application-test.js should pass jshint.').to.be.ok; 
  })});

});
define('client1/tests/unit/routes/recipes-test', ['chai', 'ember-mocha'], function (chai, ember_mocha) {

  'use strict';

  /* jshint expr:true */
  ember_mocha.describeModule('route:recipes', 'RecipesRoute', {
    // Specify the other units that are required for this test.
    // needs: ['controller:foo']
  }, function () {
    ember_mocha.it('exists', function () {
      var route = this.subject();
      chai.expect(route).to.be.ok;
    });
  });

});
define('client1/tests/unit/routes/recipes-test.jshint', function () {

  'use strict';

  describe('JSHint - unit/routes/recipes-test.js', function(){
  it('should pass jshint', function() { 
    expect(true, 'unit/routes/recipes-test.js should pass jshint.').to.be.ok; 
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
  require("client1/app")["default"].create({"LOG_RESOLVER":true,"LOG_ACTIVE_GENERATION":true,"LOG_TRANSITIONS":true,"LOG_TRANSITIONS_INTERNAL":true,"LOG_VIEW_LOOKUPS":true,"name":"client1","version":"0.0.0+"});
}

/* jshint ignore:end */
//# sourceMappingURL=client1.map