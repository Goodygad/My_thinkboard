const express = require("express");
const {
  getAllnotes,
  createNote,
  DeleteNote,
  UpdateNote,
  getNotebyId,
} = require("../controllers/notesController.js");

const router = express.Router();

router.get("/", getAllnotes);
router.get("/:id", getNotebyId);

router.post("/", createNote);

router.put("/:id", UpdateNote);
router.delete("/:id", DeleteNote);

module.exports = router;
