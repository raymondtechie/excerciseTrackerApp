const router = require('express').Router();
let Excercise = require('../models/excercise.model');

//first route - first endpoint that handles incoming HTTP GET request on the /user route path
router.route('/').get((req, res) =>{
    Excercise.find() //mongoose method gets a list of all the users
        .then(users => res.json(excercises)) //results are retrune in JSON format
        .catch(err => res.status(400).json('Error: ' +err)); //Catches erros
});

//HTTP post requests
router.route('/add').post((req,res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(re.body.duration);
    const date = Date.parse(req.body.date);


    const newUser = new Excercise({
        username,
        description,
        duration,
        date,
    });

    newUser.save() //user is saved to the db
        .then(users => res.json('User added!'))
        .catch(err => res.status(400).json('Error: ' +err));
});

//:id is a variable "object id" with a get will return information
router.route('/:id').get((req, res) =>{
    Excercise.findById(req.params.id)
        .then(excercise => res.json(excercise))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/:id').delete((req, res) =>{
    Excercise.findByIDAndDelete(req.params.id)
        .then(() => res.json('Excercise deleted. '))
        .catch(err => res.status(400).json('Error: ' + err));
});


router.route('/update/:id').post((req, res) => {
    Excercise.findById(req.params.id)
    .then(exercise => {
        exercise.username = re.body.username;
        exercise.description = req.body.description;
        exercise.duration = Number(req.body.duration);
        exercise.date = Date.parse(req.body.date);

        exercise.save()
            .then(() => res.json('Exercise updated!'))
            .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;