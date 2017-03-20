import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        id: 1,
        givenName: 'Louis',
        surname: 'Breguet',
        role: 'Chief Financial Officer'
      }
    ];
  }
});
