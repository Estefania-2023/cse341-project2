const express = require('express');
const router = express.Router();

const compaController = require('../controllers/companies');

router.get("/", compaController.getAll);
router.get("/:id", compaController.getSingle);

router.post("/", compaController.createCompa);
router.put("/:id", compaController.updateCompa);
router.delete("/:id", compaController.deleteCompa);

module.exports = router;