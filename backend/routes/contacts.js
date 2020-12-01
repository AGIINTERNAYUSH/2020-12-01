const router = require('express').Router();
let Contact = require('../models/contact.model');

router.route('/').get((req, res) => {
    Contact.find()
        .then(contacts => res.json(contacts))
        .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const review = req.body.review;

    const newContact = new Contact({name, email, review});

    newContact.save()
        .then(() => res.json('Contact added!'))
        .catch(err => res.status(400).jason('Error: ' + err));
});

module.exports = router;