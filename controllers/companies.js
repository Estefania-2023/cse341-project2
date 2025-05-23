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
    const compaId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('companies').find({_id: compaId});
    result.toArray().then((companies) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(companies[0]);
    } )};

const createCompa = async(req, res) => {
    //#swagger.tags = ['Companies']
    const compa = {
        name: req.body.name,
        industry: req.body.industry,
        foundedYear: req.body.foundedYear,
        numberEmployees: req.body.numberEmployees,
        founder: req.body.founder,
        address: req.body.address
    };
    const response = await mongodb.getDatabase().db().collection('companies').insertOne(compa);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while creating the company.');
    }
}

const updateCompa = async(req, res) => {
    //#swagger.tags = ['Companies']
    const compaId = new ObjectId(req.params.id);
    const compa = {
        name: req.body.name,
        industry: req.body.industry,
        foundedYear: req.body.foundedYear,
        numberEmployees: req.body.numberEmployees,
        founder: req.body.founder,
        address: req.body.address
    };
    const response = await mongodb.getDatabase().db().collection('companies').replaceOne({_id: compaId}, compa);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while updating the company.');
    }
}

const deleteCompa = async(req, res) => {
    //#swagger.tags = ['Companies']
    const compaId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('companies').deleteOne({_id: compaId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while deleting the company.');
    }
}

    module.exports = {
        getAll,
        getSingle,
        createCompa,
        updateCompa,
        deleteCompa
    };