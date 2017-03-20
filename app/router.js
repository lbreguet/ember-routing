import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: config.rootURL,
});

Router.map(function() {
  this.route('about');
  this.route('team', function() {
    this.route('engineering');
    this.route('leadership');
    this.route('sales');
    this.route('employees');
    this.route('employee', { path: '/employees/:employee_id'});
  });
  this.route('contact', function() {
    this.route('boston');
    this.route('nyc');
  });
  this.route('products');
  this.route('product', { path: '/products/:product_id'});
});

export default Router;
