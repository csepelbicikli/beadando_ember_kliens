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