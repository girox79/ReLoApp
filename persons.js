let mongoose = require('mongoose');

let personSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    location: {
        type: String,
        default: "Bucuresti"
    }
});

var Person = module.exports = mongoose.model('person', personSchema);

module.exports.get = (callback, limit) => {
    Person.find(callback).limit(limit);
}