import Ember from 'ember';

export default Ember.Component.extend({
    ingredients: Ember.Object.create(),
    hasErrors: false,
    
    /*
    name:    null,

    initialize() {
        this.set('name', this.get('ingredient').get('name'));
    },
    */
    
    actions: {
        submit() {
            console.log('submit');
            this.validate();
            if (this.get('hasErrors')) {
                return;
            }
            return this.attrs['onSave']({
                name: this.$('#nev').val(),
            });
        },
        validate() {
            this.validate();
        }
    },
    
    validate() {
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
