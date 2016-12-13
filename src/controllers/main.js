import BlogPost from '../models/BlogPost'; // Import the model so we can query the DB

let mainController = {
    getIndex: (req, res) => {
        res.render('index'); // Compiles the file named "index" in the views directory (`/views`) using the view engine (Jade).
    },
    getTemplate: (req, res) => {
        res.render('templates/' + req.params.template);
    },
    // This gets all BlogPosts in the collection and sends it back in JSON format
    getAllBlogPosts: (req, res) => {
        BlogPost.find({}, (err, blogposts) => {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send blogposts in JSON format
            res.json(blogposts);
        });
    },
    //  updateBlogPost:(req,res) => {
//  BlogPost.update({
//     title:req.body.title,
//     text: req.body.text,
//     date_updated:Date.now()
//   }, (err, blogpost) => {
// if(err) {
//    return res.send(err);
// }
// BlogPost.find({}, (err, blogposts) => {
//    if(err) {
//    return res.send(err);
//    }
//    res.json(blogposts);
//    });
//    });
// },
  postNewBlogPost: (req, res) => {
    // This creates a new blogpost using POSTed data (in req.body)
    BlogPost.create({
      title:req.body.title,
      text: req.body.text,
      date_added: Date.now(),
      date_updated:Date.now()
    }, (err, blogpost) => {
      if (err) {
        return res.send(err);
      }
      BlogPost.find({}, (err, blogposts) => {
        if (err) {
          return res.send(err);
        }
        // Send list of all blogposts after new one has been created and saved
        res.json(blogposts);
      });
    });
  },
  deleteBlogPost: (req, res) => {
    BlogPost.remove({
      _id: req.params.id
    }, (err, blogpost) => {
      if (err) {
        return res.send(err);
      }
      BlogPost.find({}, (err, blogposts) => {
        if (err) {
          return res.send(err);
        }
        res.json(blogposts);
      });
    });
  },
  deleteAllBlogPosts: (req, res) => {
    BlogPost.remove({}, (err, blogpost) => {
      if (err) {
        return res.send(err);
      }
      BlogPost.find({}, (err, blogposts) => {
        if (err) {
          return res.send(err);
        }
        res.json(blogposts);
      });
    });
  }
}

export default mainController;
