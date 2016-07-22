import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('demo', function() {
    this.route('ef-list');
    this.route('ef-nav');
  });
});

export default Router;
