const { body, param } = require('express-validator');
const mongoose = require('mongoose');

const createentrepValidationRules = () => [
    body('firstName')
    .isString().withMessage('First name must be a string')
    .notEmpty().withMessage('First name is required'),

    body('lastName')
    .isString().withMessage('Last name must be a string')
    .notEmpty().withMessage('Last name is required'),

    body('phoneNumber')
    .isString().withMessage('Phone number must be a string')
    .notEmpty().withMessage('Phone number is required'),

    body('email')
    .isEmail().withMessage('Invalid email address'),

    body('birthday')
    .isString().withMessage('Birthday must be a valid date'),

    body('nationality')
    .isString().withMessage('Nationality must be a string')
    .notEmpty().withMessage('Nationality is required'),

    body('yearsExperience')
    .isInt({ min: 5 }).withMessage('Years of experience must be a non-negative integer and at least 5 years'),

    body('company')
    .isString().withMessage('Company must be a string')
    .notEmpty().withMessage('Company is required')
];

const updateentrepValidationRules = () => [
    body('firstName')
    .optional()
    .isString().withMessage('First name must be a string'),

    body('lastName')
    .optional()
    .isString().withMessage('Last name must be a string'),

    body('phoneNumber')
    .optional()
    .isString().withMessage('Phone number must be a string'),

    body('email')
    .optional()
    .isEmail().withMessage('Invalid email address'),

    body('birthday')
    .optional()
    .isString().withMessage('Birthday must be a valid date'),

    body('nationality')
    .optional()
    .isString().withMessage('Nationality must be a string'),

    body('yearsExperience')
    .optional()
    .isInt({ min: 5 }).withMessage('Years of experience must be a non-negative integer and at least 5 years'),

    body('company')
    .optional()
    .isString().withMessage('Company must be a string'),

    param('id')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid entrepreneur ID')

];

const getentrepValidationRules = () => [
    param('id')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid entrepreneur ID'),
];

const deleteentrepValidationRules = () => [
    param('id')
    .custom(value => mongoose.Types.ObjectId.isValid(value))
    .withMessage('Invalid entrepreneur ID'),
];

module.exports = {
    createentrepValidationRules,
    updateentrepValidationRules,
    getentrepValidationRules,
    deleteentrepValidationRules,
};