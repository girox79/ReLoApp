Person = require('./persons');

//index
exports.index = (req, res) => {
    Person.get((err, pers) => {
        if (err) {
            res.json({
                status: "error",
                message: err
            });
        }
        res.json({
            status: "success",
            message: "Received persons successfully!",
            data: pers
        });
    });
};

//create a person
exports.addPerson = (req, res) => {
    let pers = new Person();
    pers.name = req.body.name ? req.body.name : pers.name;
    pers.age = req.body.age ? req.body.age : pers.age;
    pers.location = req.body.location ? req.body.location : pers.location;

    pers.save((err) => {
        if (err) {
            res.json(err);
        }
        res.json({
            message: 'New Person added!',
            data: pers
        });
    });
}

// view a person
exports.getPersonById = (req, res) => {
    Person.findById(req.params.pers_id, (err, pers) => {
        if (err) {
            res.send(err);
        }
        res.json({
            message: 'Person details',
            data: pers
        });
    });
};

//update a person
exports.updatePerson = (req, res) => {
    Person.findById(req.params.pers_id, (err, pers) => {
        if (err) {
            res.send(err);
        }
        pers.name = req.body.name ? req.body.name : pers.name;
        pers.age = req.body.age ? req.body.age : pers.age;
        pers.location = req.body.location ? req.body.location : pers.location
        
        pers.save((err) => {
            if(err) res.json(err);
            res.json({
                message: 'Person updated successfully!',
                data: pers
            });
        });
    });
};

//delete a person
exports.deletePerson = (req, res) => {
    Person.deleteOne({
        _id: req.params.pers_id 
    }, (err, person) => {
        if (err) res.send(err);
        res.json({
            status: 'success',
            message: 'Person deleted!'
        });
    });
};