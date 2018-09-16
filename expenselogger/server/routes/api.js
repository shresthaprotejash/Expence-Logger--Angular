const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;

// Connect
const connection = (closure) => {
    return MongoClient.connect('mongodb://localhost:27017/expensedb', (err, db) => {
        if (err) return console.log(err);
        console.log("Connected");
        closure(db);
    });
};

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get expenses
router.get('/expenses', (req, res) => {
    connection((db) => {
        console.log(db.collection);
        db.collection('expenses')
            .find()
            .toArray()
            .then((expenses) => {
                response.data = expenses;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;