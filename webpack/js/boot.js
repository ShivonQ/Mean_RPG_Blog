import {bootstrap} from 'angular2/platform/browser';
import {BlogPostComponent} from './BlogPostComponent';

let boot = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(BlogPostComponent);
});

// Expose boot so it can be required by webpack.
module.exports = boot;
