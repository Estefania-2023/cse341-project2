const express = require('express');
const router = express.Router();

const compaController = require('../controllers/companies');

router.get("/", compaController.getAll);
router.get("/:id", compaController.getSingle);

module.exports = router;