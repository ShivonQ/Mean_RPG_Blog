'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _BlogPost = require('../models/BlogPost');

var _BlogPost2 = _interopRequireDefault(_BlogPost);

function _interopRequireDefault(obj) {
    return obj && obj.__esModule ? obj : {default: obj};
}

// Import the Todo model so we can query the DB

var mainController = {
    getIndex: function getIndex(req, res) {
        res.render('index'); // Compiles the file named "index" in the views directory (`/views`) using the view engine (Jade).
    },
    getTemplate: function getTemplate(req, res) {
        res.render('templates/' + req.params.template);
    },
    getBlogPost: (req, res) => {
        _BlogPost2.findById({
            _id: req.params.id
        }, (err, blogpost) => {
            if (err) {
                return res.send(err);
            }
            res.json(blogpost);
        });
    },
    // This gets all BlogPosts in the collection and sends it back in JSON format
    getAllBlogPosts: function getAllBlogPosts(req, res) {
        _BlogPost2.default.find({}, function (err, blogposts) {
            if (err) {
                // Send the error to the client if there is one
                return res.send(err);
            }
            // Send blogposts in JSON format
            res.json(blogposts);
        });
    },

    updateBlogPost: (req, res) => {
        _BlogPost2.findByIdAndUpdate({_id: req.params.id}, {
            $set: {
                title: req.body.title,
                text: req.body.text,
                date_updated: Date.now()
            }
        }, (err, blogpost) => {
            if (err) {
                return res.send(err);
            }
            _BlogPost.find({}, (err, blogposts) => {
                if (err) {
                    return res.send(err);
                }
                res.json(blogposts);
            });
        });
    },

    postNewBlogPost: function postNewBlogPost(req, res) {
        // This creates a new blogpost using POSTed data (in req.body)
        _BlogPost2.default.create({
            title: req.body.title,
            text: req.body.text,
            date_added: Date.now(),
            date_updated: Date.now()
        }, function (err, blogpost) {
            if (err) {
                return res.send(err);
            }
            _BlogPost2.default.find({}, function (err, blogposts) {
                if (err) {
                    return res.send(err);
                }
                // Send list of all blogposts after new one has been created and saved
                res.json(blogposts);
            });
        });
    },
    deleteBlogPost: function deleteBlogPost(req, res) {
        _BlogPost2.default.remove({
            _id: req.params.id
        }, function (err, blogpost) {
            if (err) {
                return res.send(err);
            }
            _BlogPost2.default.find({}, function (err, blogposts) {
                if (err) {
                    return res.send(err);
                }
                res.json(blogposts);
            });
        });
    },
    deleteAllBlogPosts: function deleteAllBlogPosts(req, res) {
        _BlogPost2.default.remove({}, function (err, blogpost) {
            if (err) {
                return res.send(err);
            }
            _BlogPost2.default.find({}, function (err, blogposts) {
                if (err) {
                    return res.send(err);
                }
                res.json(blogposts);
            });
        });
    }
};

exports.default = mainController;