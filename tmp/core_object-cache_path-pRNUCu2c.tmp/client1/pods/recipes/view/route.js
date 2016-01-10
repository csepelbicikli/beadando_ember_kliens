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