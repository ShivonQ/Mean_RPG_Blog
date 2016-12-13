/**
 * Created by School on 12/12/2016.
 */
import {Component, View} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http'; // We're using http in our BlogPostService
import {BlogPostDetailService} from './BlogPostDetailService'

class BlogPostDetailComponent {
    constructor(blogpostdetailService) {
        // So it isn't undefined
        this.blogposts = [];
        this.blogpostData = {
            text: ''
        };
        this.blogpostdetailService = blogpostdetailService;
        this.blogpostdetailService.getAllBlogPosts()
            .subscribe((res) => {
                this.blogposts = res;
            });
    }
    updateBlogPost(id) {
        this.blogpostdetailService.updateBlogPost(this.blogpostData)
            .subscribe((res) => {
                this.blogposts = res;
                this.blogpostData.text = '';
                this.blogpostData.title = '';
            });
    }}

BlogPostDetailComponent.annotations = [
    new Component({
        selector: 'blogpost-detail-app',
        providers: [BlogPostDetailService, HTTP_PROVIDERS],
        templateUrl: 'templates/BlogPostDetailComponent'
    }),
];

BlogPostDetailComponent.parameters = [[BlogPostDetailService]];

export {BlogPostDetailComponent};

