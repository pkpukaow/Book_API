const express = require("express");

const router = express.Router();

const bookController = require("../controllers/bookController");

router.get("/", bookController.getAllBook);
router.post("/create/:authorId", bookController.createBook);
router.patch("/update/:id", bookController.updateBook);
router.delete("/delete/:id", bookController.deleteBook);

module.exports = router;
