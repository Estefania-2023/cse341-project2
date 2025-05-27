const express = require('express');
const router = express.Router();

const compaController = require('../controllers/companies');

const {
    createcompaValidationRules,
    updatecompaValidationRules,
    getcompaValidationRules,
    deletecompaValidationRules,
} = require('../validations/compaValidation');


const validateRequest = require('../middleware/validate');

router.get('/', compaController.getAll);

router.get('/:id', getcompaValidationRules(),validateRequest,compaController.getSingle);

router.post('/', createcompaValidationRules(), validateRequest,compaController.createCompa);

router.put('/:id', updatecompaValidationRules(), validateRequest,compaController.updateCompa);

router.delete('/:id', deletecompaValidationRules(), validateRequest,compaController.deleteCompa);

module.exports = router;