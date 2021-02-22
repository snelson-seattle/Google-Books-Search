const Book = require("../models/book");

module.exports = {
    findAll: (req, res) => {
        Book
        .find(req.query)
        .sort({date: -1})
        .then(queryResult => res.json(queryResult))
        .catch(err => res.status(422).json(err));
    },
    findById: (req, res) => {
        Book
        .findById(req.params.id)
        .then(queryResult => res.json(queryResult))
        .catch(err => res.status(422).json(err));
    },
    create: (req, res) => {
        Book
        .create(req.body)
        .then(queryResult => res.json(queryResult))
        .catch(err => res.status(422).json(err));
    },
    update: (req, res) => {
        Book
          .findOneAndUpdate({ _id: req.params.id }, req.body)
          .then(queryResult => res.json(queryResult))
          .catch(err => res.status(422).json(err));
      },
      remove: (req, res) => {
        Book
          .findById({ _id: req.params.id })
          .then(dbModel => dbModel.remove())
          .then(dbModel => res.json(dbModel))
          .catch(err => res.status(422).json(err));
      }
};