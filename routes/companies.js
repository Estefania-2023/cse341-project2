const express = require('express');
const router = express.Router();

const compaController = require('../controllers/companies');

const {
    createcompaValidationRules,
    updatecompaValidationRules,
    getcompaValidationRules,
    deletecompaValidationRules,
} = require('../validations/compaValidation');

const { isAuthenticated } = require('../middleware/authenticate');

const validateRequest = require('../middleware/validate');

router.get('/', compaController.getAll);

router.get('/:id', isAuthenticated, getcompaValidationRules(),validateRequest,compaController.getSingle);

router.post('/', isAuthenticated, createcompaValidationRules(),validateRequest,compaController.createCompa);

router.put('/:id', isAuthenticated, updatecompaValidationRules(),validateRequest,compaController.updateCompa);

router.delete('/:id', isAuthenticated, deletecompaValidationRules(),validateRequest,compaController.deleteCompa);

module.exports = router;