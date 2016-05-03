import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType,
  rootURL: '/en/'
});

Router.map(function() {
  this.route('test');
  this.route('not-found', { path: '*path'});
});

export default Router;
