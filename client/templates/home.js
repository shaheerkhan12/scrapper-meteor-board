import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';

import './home.html';

Template.home.onCreated(function homeOnCreated() {
  this.counter = new ReactiveVar(0);
});

Template.home.helpers({
  counter() {
    return Template.instance().counter.get();
  },
});

Template.home.events({
  'click button'(event, instance) {
    instance.counter.set(instance.counter.get() + 1);
  },
});
