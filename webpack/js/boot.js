import {bootstrap} from 'angular2/platform/browser';
import {BlogPostComponent} from './BlogPost/BlogPostComponent';
import {BlogPostDetailComponent} from './BlogPost/BlogPostDetailComponent'

let boot = document.addEventListener('DOMContentLoaded', () => {
  bootstrap(BlogPostComponent);
    bootstrap(BlogPostDetailComponent);
});

// Expose boot so it can be required by webpack.
module.exports = boot;
