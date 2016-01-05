import Ember from 'ember';

export default Ember.Component.extend({
    recipes: Ember.Object.create(),
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
        submit() {
            console.log('submit');
            this.validate();
            if (this.get('hasErrors')) {
                return;
            }
            return this.attrs['onSave']({
                name: this.$('#nev').val(),
                description: this.$('#leiras').val(),
            });
        },
        validate() {
            this.validate();
        }
    },
    
    validate() {
        var name = this.$('#nev').val();
        var description = this.$('#leiras').val();
        
        console.log(name, description);
        this.set('recipes.name', name === '' ? 'Nevet kötelező megadni' : '');
        this.set('recipes.description', description === '' ? 'Leírást kötelező megadni' : '');
        
        if (this.get('recipes.name') !== '' ||
            this.get('recipes.description') !== '') {
            this.set('hasErrors', true);
        } else {
            this.set('hasErrors', false);
        }
    }
});
