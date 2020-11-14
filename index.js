    const express = require('express');
    const app = express();
    const bodyParser = require('body-parser');
    const mongoose = require('mongoose');
    const routes = require('./routes');

    const PORT = 3001;
    app.use(bodyParser.urlencoded({ extended:  false}));
    app.use(bodyParser.json());

    app.use('/api', routes);

    // connect to MongoDB
    const dbPath = 'mongodb://localhost/ReLoAppDB';
    const options = {
        useNewUrlParser: true,
        useUnifiedTopology: true
    };
    const mongo = mongoose.connect(dbPath, options);

    mongo.then(() => {
        console.log('connected');
    }).catch((error) => {
        console.error('error: ', error);
    });


    app.listen(PORT, () => {
        console.log(`Server listen on ${PORT}`);
    });