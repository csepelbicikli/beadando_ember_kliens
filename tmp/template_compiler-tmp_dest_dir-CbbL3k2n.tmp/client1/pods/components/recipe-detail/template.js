export default Ember.HTMLBars.template((function() {
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