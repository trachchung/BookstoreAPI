import router from "express";
import authorController from "../controllers/authorController";

// Add author
router.post("/", authorController.addAuthor);

module.exports = router;