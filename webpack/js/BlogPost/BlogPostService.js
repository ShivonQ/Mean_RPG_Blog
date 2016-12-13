import {Inject} from 'angular2/core';
import {Http, Headers} from 'angular2/http';
import 'rxjs/add/operator/map'

class BlogPostService {
  constructor(http) {
    this.http = http;
  }
  getAllBlogPosts() {
    return this.http.get('/blogposts')
      .map((res) => {
        return JSON.parse(res._body);
      });
  }
  postNewBlogPost(data) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.post('/blogposts', JSON.stringify(data), {
      headers: headers
    }).map((res) => {
        return JSON.parse(res._body);
      });
  }
  deleteBlogPost(id) {
    return this.http.delete('/blogposts/' + id)
      .map((res) => {
        return JSON.parse(res._body);
      });
  }
}

BlogPostService.parameters = [new Inject(Http)];

export {BlogPostService}
