let router = require('express').Router();
let personController = require('./personController');

// set default response
router.get('/', (req, res) => {
    res.json({
        status: 'API is working...',
        message: 'Welcome to ReLoApp!'
    });
});

router.route('/persons')
      .get(personController.index)
      .post(personController.addPerson);

router.route('/person/:pers_id')
      .get(personController.getPersonById)
      .put(personController.updatePerson)
      .delete(personController.deletePerson);

module.exports = router;