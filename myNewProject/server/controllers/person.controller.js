// import necessary models
const Person = require('../models/person.model'); // this is new

// handlers

// Create
const createPerson = (req, res) => {
    const { firstName, lastName } = req.body;
    Person.create({
        firstName,
        lastName
    })
        .then((person) => res.json(person))
        .catch((err) => console.log(err));
};

// Read All and for One
const getAllPeople = (req, res) => {
    Person.find({})
        .then((persons) => res.json(persons))
        .catch((err) => res.json(err));
};

const getPerson = (req, res) => {
    Person.findOne({ _id: req.params.id })
        .then((person) => res.json(person))
        .catch((err) => res.json(err));
};

const updatePerson = (req, res) => {
    Person.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
        .then((updatedPerson) => res.json(updatedPerson))
        .catch((err) => res.json(err));
};

const deletePerson = (req, res) => {
    Person.deleteOne({ _id: req.params.id })
        .then((deleteConfirmation) => res.json(deleteConfirmation))
        .catch((err) => res.json(err));
};

// export
module.exports = {
    // list handlers here
    createPerson,
    getAllPeople,
    getPerson,
    updatePerson,
    deletePerson
};