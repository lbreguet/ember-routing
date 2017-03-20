import Ember from 'ember';

export default Ember.Route.extend({
  model(params) {
    const employees = [
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
      },
      {
        id: 3,
        givenName: 'Maura',
        surname: 'Pine',
        role: 'Chief Executive Officer'
      },
      {
        id: 1,
        givenName: 'Louis',
        surname: 'Breguet',
        role: 'Chief Financial Officer'
      }
    ];

    const id = params.employee_id;

    return employees.find((employee) => employee.id === +id);
  }
});
