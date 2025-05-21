import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { BlazeLayout } from 'meteor/kadira:blaze-layout';

// Import all necessary files
import './main.html';
import './main.css';
import './templates/home.html';
import './templates/home.js';
import './templates/about.html';

// Wait for the DOM to be ready
Meteor.startup(() => {
  // Initialize BlazeLayout
  BlazeLayout.setRoot('body');

// Router configuration
FlowRouter.route('/', {
  name: 'home',
  action() {
    BlazeLayout.render('main', { content: 'home' });
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    BlazeLayout.render('main', { content: 'about' });
  }
});
