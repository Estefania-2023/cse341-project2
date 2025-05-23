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
    const entrepId = new ObjectId(req.params.id);
    const result = await mongodb.getDatabase().db().collection('entrepreneurs').find({_id: entrepId});
    result.toArray().then((entrepreneurs) => {
        res.setHeader('Content-Type', 'application/json');
        res.status(200).json(entrepreneurs[0]);
    } )};

const createEntrep = async(req, res) => {
    //#swagger.tags = ['Entrepreneurs']
    const entrep = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        birthday: req.body.birthday,
        nationality: req.body.nationality,
        yearsExperience: req.body.yearsExperience,
        company: req.body.company
    };
    const response = await mongodb.getDatabase().db().collection('entrepreneurs').insertOne(entrep);
    if (response.modifiedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while creating the entrepreneur.');
    }
}

const updateEntrep = async(req, res) => {
    //#swagger.tags = ['Entrepreneurs']
    const entrepId = new ObjectId(req.params.id);
    const entrep = {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        phoneNumber: req.body.phoneNumber,
        email: req.body.email,
        birthday: req.body.birthday,
        nationality: req.body.nationality,
        yearsExperience: req.body.yearsExperience,
        company: req.body.company
    };
    const response = await mongodb.getDatabase().db().collection('entrepreneurs').replaceOne({_id: entrepId}, entrep);
    if (response.acknowledged) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while updating the entrepreneur.');
    }
}

const deleteEntrep = async(req, res) => {
    //#swagger.tags = ['Entrepreneurs']
    const entrepId = new ObjectId(req.params.id);
    const response = await mongodb.getDatabase().db().collection('entrepreneurs').deleteOne({_id: entrepId});
    if (response.deletedCount > 0) {
        res.status(204).send();
    } else {
        res.status(500).json(response.error || 'An error occurred while deleting the entrepreneur.');
    }
}

    module.exports = {
        getAll,
        getSingle,
        createEntrep,
        updateEntrep,
        deleteEntrep
    };