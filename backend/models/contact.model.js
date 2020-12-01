const mongoose = require('mongoose');

const Schema = mongoose.Schema

const contactSchema = new Schema({
    name: {type: String, trim: true},
    email: {type: String, required: true},
    review: {type: String, required: true},
}, {
    timestamps: true,
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;