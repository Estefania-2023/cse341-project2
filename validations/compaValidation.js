const { body, param } = require('express-validator');
const mongoose = require('mongoose');

const createcompaValidationRules = () => [
    body('name')
    .isString().withMessage('Name must be a string')
    .notEmpty().withMessage('Name is required'),

    body('industry')
    .isString().withMessage('Industry must be a string')
    .notEmpty().withMessage('Industry is required'),

    body('foundedYear')
    .isInt({ min: 1950, max: new Date().getFullYear() }).withMessage('Founded year must be a valid year, and between 1950 and the current year'),

    body('numberEmployees')
    .isInt({ min: 10 }).withMessage('Number of employees must be a positive integer, and at least 10'),

    body('founder')
    .isString().withMessage('Founder must be a string')
    .notEmpty().withMessage('Founder is required'),

    body('address')
    .isString().withMessage('Address must be a string')
    .notEmpty().withMessage('Address is required')
];

const updatecompaValidationRules = () => [
    body('name')
    .optional()
    .isString().withMessage('Name must be a string'),
    
    body('industry')
    .optional()
    .isString().withMessage('Industry must be a string'),

    body('foundedYear')
    .optional()
    .isInt({ min: 1950, max: new Date().getFullYear() }).withMessage('Founded year must be a valid year, and between 1950 and the current year'),

    body('numberEmployees')
    .optional()
    .isInt({ min: 10 }).withMessage('Number of employees must be a positive integer, and at least 10'),

    body('founder')
    .optional()
    .isString().withMessage('Founder must be a string'),

    body('address')
    .optional()
    .isString().withMessage('Address must be a string'),

    param('id')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid company ID')
];

const getcompaValidationRules = () => [
    param('id')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid company ID'),
];

const deletecompaValidationRules = () => [
    param('id')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid company ID'),
];

module.exports = {
    createcompaValidationRules,
    updatecompaValidationRules,
    getcompaValidationRules,
    deletecompaValidationRules,
};