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