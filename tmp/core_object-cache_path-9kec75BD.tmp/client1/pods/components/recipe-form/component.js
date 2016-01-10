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