const mongodb = require ('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async(req, res) => {
    const result = await mongodb.getDatabase().db().collection('companies').find();
    result.toArray().then((companies) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(companies);
    } )
};

const getSingle = async(req, res) => {
    const contactId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('companies').find({_id: contactId});
    result.toArray().then((companies) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(companies[0]);
    } )};

    module.exports = {
        getAll,
        getSingle
    };