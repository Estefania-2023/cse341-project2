const express = require('express');
const router = express.Router();

const entrepController = require('../controllers/entrepreneurs');


const {
    createentrepValidationRules,
    updateentrepValidationRules,
    getentrepValidationRules,
    deleteentrepValidationRules,
} = require('../validations/entrepValidation');


const validateRequest = require('../middleware/validate');

router.get('/', entrepController.getAll);

router.get('/:id', getentrepValidationRules(),validateRequest,entrepController.getSingle);

router.post('/', createentrepValidationRules(), validateRequest,entrepController.createEntrep);

router.put('/:id', updateentrepValidationRules(), validateRequest,entrepController.updateEntrep);

router.delete('/:id', deleteentrepValidationRules(), validateRequest,entrepController.deleteEntrep);

module.exports = router;