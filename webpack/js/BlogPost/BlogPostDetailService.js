/**
 * Created by School on 12/13/2016.
 */
import {Inject} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map'

class BlogPostDetailService {
    constructor(http) {
        this.http = http;
    }
    updateBlogPost(id){
        return this.http.get('/blogpostsdetail/'+id)
            .map((res)=> {
                return JSON.parse(res._body);
            });
    }
}

BlogPostDetailService.parameters = [new Inject(Http)];

export {BlogPostDetailService}