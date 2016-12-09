import mongoose from 'mongoose';
// Create a schema for the blogpost object
let blogpostSchema = new mongoose.Schema({
    title: String,
    text: String,
    date_added: Date,
    date_updated:Date
});
// Expose the model so that it can be imported and used in the controller
export default mongoose.model('BlogPost', blogpostSchema);
