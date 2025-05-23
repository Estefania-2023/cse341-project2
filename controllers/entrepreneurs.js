const mongodb = require ('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async(req, res) => {
    const result = await mongodb.getDatabase().db().collection('entrepreneurs').find();
    result.toArray().then((entrepreneurs) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(entrepreneurs);
    } )
};

const getSingle = async(req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('entrepreneurs').find({_id: contactId});
    result.toArray().then((entrepreneurs) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(entrepreneurs[0]);
    } )};

    module.exports = {
        getAll,
        getSingle
    };