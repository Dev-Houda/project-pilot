const express = require("express");
const clientController = require("../controllers/clientController");

const router = express.Router();

router.get("/", clientController.client_index);
router.post("/", clientController.client_create_post);
// router.get("/create", clientController.blog_create_get);
router.get("/:id", clientController.client_details);
router.delete("/:id", clientController.client_delete);

module.exports = router;
