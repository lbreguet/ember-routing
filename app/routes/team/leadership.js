import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        id: 1,
        givenName: 'Maura',
        surname: 'Pine',
        role: 'Chief Executive Officer'
      }
    ];
  }
});
