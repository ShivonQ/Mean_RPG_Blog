'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _mongoose = require('mongoose');

var _mongoose2 = _interopRequireDefault(_mongoose);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Create a schema for the blogpost object
var blogpostSchema = new _mongoose2.default.Schema({
    title: String,
    text: String,
    date_added: Date,
    date_updated: Date
});
// Expose the model so that it can be imported and used in the controller
exports.default = _mongoose2.default.model('BlogPost', blogpostSchema);