const express = require('express');
const router = express.Router();

const entrepController = require('../controllers/entrepreneurs');

router.get("/", entrepController.getAll);
router.get("/:id", entrepController.getSingle);

module.exports = router;