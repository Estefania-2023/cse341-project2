const express = require('express');
const router = express.Router();

const entrepController = require('../controllers/entrepreneurs');

router.get("/", entrepController.getAll);
router.get("/:id", entrepController.getSingle);

router.post("/", entrepController.createEntrep);
router.put("/:id", entrepController.updateEntrep);
router.delete("/:id", entrepController.deleteEntrep);

module.exports = router;