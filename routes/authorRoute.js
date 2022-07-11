const express = require("express");

const router = express.Router();

const authorController = require("../controllers/authorController");

router.get("/:id", authorController.getAuthorById);
router.post("/create", authorController.createAuthor);
router.patch("/update/:id", authorController.updateAuthor);
router.delete("/delete/:id", authorController.deleteAuthor);

module.exports = router;
