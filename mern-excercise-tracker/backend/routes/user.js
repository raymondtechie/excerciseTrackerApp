const router = require('express').Router();
let User = require('../models/user.model');

//first route - first endpoint that handles incoming HTTP GET request on the /user route path
router.route('/').get((req, res) =>{
    User.find() //mongoose method gets a list of all the users
        .then(users => res.json(users)) //results are retrune in JSON format
        .catch(err => res.status(400).json('Error: ' +err)); //Catches erros
});

//HTTP post requests
router.route('/add').post((req,res) => {
    const username = req.body.username;

    const newUser = new User({username});

    newUser.save() //user is saved to the db
        .then(users => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' +err));
})

module.exports = router;