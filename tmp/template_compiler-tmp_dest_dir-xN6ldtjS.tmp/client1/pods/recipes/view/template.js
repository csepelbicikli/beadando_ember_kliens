export default Ember.HTMLBars.template((function() {
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