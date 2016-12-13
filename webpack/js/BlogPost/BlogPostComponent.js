import {Component, View} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http'; // We're using http in our BlogPostService
import {BlogPostService} from './BlogPostService'

class BlogPostComponent {
  constructor(blogpostService) {
    // So it isn't undefined
    this.blogposts = [];
    this.blogpostData = {
      text: ''
    };
    this.blogpostService = blogpostService;
    this.blogpostService.getAllBlogPosts()
      .subscribe((res) => {
        this.blogposts = res;
      });
  }
  createBlogPost() {
    this.blogpostService.postNewBlogPost(this.blogpostData)
      .subscribe((res) => {
        this.blogposts = res;
        this.blogpostData.text = '';
      });
  }
  deleteBlogPost(id) {
    this.blogpostService.deleteBlogPost(id)
      .subscribe((res) => {
        this.blogposts = res;
      })
  }
};

BlogPostComponent.annotations = [
  new Component({
    selector: 'blogpost-app',
    providers: [BlogPostService, HTTP_PROVIDERS],
    templateUrl: 'templates/BlogPostComponent'
  }),
];

BlogPostComponent.parameters = [[BlogPostService]];

export {BlogPostComponent};
