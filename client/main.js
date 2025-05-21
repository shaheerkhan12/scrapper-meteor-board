import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './main.html';
import './pages/about.html';

// Router configuration
FlowRouter.route('/', {
  name: 'home',
  action() {
    document.getElementById('main-content').innerHTML = Blaze.toHTMLWithData(Template.home);
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    document.getElementById('main-content').innerHTML = Blaze.toHTMLWithData(Template.about);
  }
});

Template.hello.onCreated(function helloOnCreated() {
  // counter starts at 0
  this.counter = new ReactiveVar(0);
});

Template.hello.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.hello.events({
  'click button'(event, instance) {
    // increment the counter when button is clicked
    instance.counter.set(instance.counter.get() + 1);
  },
});
