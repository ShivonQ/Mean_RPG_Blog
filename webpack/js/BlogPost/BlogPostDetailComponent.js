/**
 * Created by School on 12/12/2016.
 */
import {Component, View} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http'; // We're using http in our BlogPostService
import {BlogPostDetailService} from './BlogPostDetailService'

class BlogPostDetailComponent {
    constructor(blogpostdetailService) {
        // So it isn't undefined
        this.blogpost = [];
        this.blogpostData = {
            text: ''
        };
        this.blogpostdetailService = blogpostdetailService;
        this.blogpostdetailService.getBlogPost(req.params._id)
            .subscribe((res) => {
                this.blogpost = res;
            });
    }
    getBlogPost(){
        this.blogpostdetailService.getBlogPost(this.blogpostData)
            .subscribe((res) => {
                this.blogpost=res;
            })
    }
    updateBlogPost(id) {
        this.blogpostdetailService.updateBlogPost(this.blogpostData)
            .subscribe((res) => {
                this.blogpost = res;
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

