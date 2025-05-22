import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';
import { Blaze } from 'meteor/blaze';

// Import all necessary files
import './main.html';
import './main.css';
import './templates/home.html';
import './templates/home.js';
import './pages/about.html';

let currentView = null;

function renderTemplate(templateName) {
  // Remove previous view
  if (currentView) {
    Blaze.remove(currentView);
  }
  
  // Render new template
  const container = document.getElementById('content');
  if (container) {
    currentView = Blaze.render(Template[templateName], container);
  }
}

FlowRouter.route('/home', {
  name: 'home',
  action() {
    renderTemplate('home');
  }
});

FlowRouter.route('/about', {
  name: 'about',
  action() {
    renderTemplate('about');
  }
});