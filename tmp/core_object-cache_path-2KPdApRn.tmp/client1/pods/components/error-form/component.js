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