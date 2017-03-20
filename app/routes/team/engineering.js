import Ember from 'ember';

export default Ember.Route.extend({
  model: function () {
    return [
      {
        id: 1,
        givenName: 'Andrew',
        surname: 'Goode',
        role: 'Chief Information Officer'
      },
      {
        id: 2,
        givenName: 'Wei',
        surname: 'Liu',
        role: 'Chief Technical Officer'
      }
    ];
  }
});
