const mongodb = require ('../data/database');
const ObjectId = require('mongodb').ObjectId;

const getAll = async(req, res) => {
    try {
        const result = await mongodb.getDatabase().db().collection('companies').find().toArray();
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(result);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
};

const getSingle = async(req, res) => {
        const compaId = new ObjectId(req.params.id);
        const result = await mongodb.getDatabase().db().collection('companies').findOne({_id: compaId});
        if (result) res.status(200).json(result);
        else res.status(404).json({ message: 'Company not found' });
};

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
    if (response.acknowledged) res.status(201).json(response);
    else res.status(500).json(response.error || 'Error creating company');
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
    const response = await mongodb.getDatabase().db().collection('companies').replaceOne({ _id: compaId}, compa);
    if (response.modifiedCount > 0) res.status(204).send();
    else res.status(404).json({ message: 'Company not found' });
}

const deleteCompa = async(req, res) => {
    //#swagger.tags = ['Companies']
    const compaId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('companies').deleteOne({ _id: compaId });
    if (response.deletedCount > 0) res.status(204).send();
    else res.status(404).json({ message: 'Company not found' });
}

    module.exports = {
        getAll,
        getSingle,
        createCompa,
        updateCompa,
        deleteCompa
    };