const express = require('express');
const router = express.Router();

const entrepController = require('../controllers/entrepreneurs');

const {
    createentrepValidationRules,
    updateentrepValidationRules,
    getentrepValidationRules,
    deleteentrepValidationRules,
} = require('../validations/entrepValidation');

const { isAuthenticated } = require('../middleware/authenticate');

const validateRequest = require('../middleware/validate');

router.get('/', entrepController.getAll);

router.get('/:id', isAuthenticated, getentrepValidationRules(),validateRequest,entrepController.getSingle);

router.post('/', isAuthenticated, createentrepValidationRules(),validateRequest,entrepController.createEntrep);

router.put('/:id', isAuthenticated, updateentrepValidationRules(),validateRequest,entrepController.updateEntrep);

router.delete('/:id', isAuthenticated, deleteentrepValidationRules(),validateRequest,entrepController.deleteEntrep);

module.exports = router;