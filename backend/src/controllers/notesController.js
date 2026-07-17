const noteModel = require("../models/noteModel");

const getAllnotes = async (req, res) => {
  try {
    const notes = await noteModel.find().sort({ createdAt: -1 }); //newest first.

    res.status(200).json(notes);
  } catch (error) {
    console.error("Error in getAllnotes controller", error);

    res.status(500).json({ message: "internal server error" });
  }
};

const getNotebyId = async (req, res) => {
  try {
    const note = await noteModel.findById(req.params.id);
    if (!note) return res.status(404).json({ message: "Note not found!" });
    res.json(note);
  } catch (error) {
    console.error("Error in getnotebyid controller", error);

    res.status(500).json({ message: "internal server error" });
  }
};

const createNote = async (req, res) => {
  try {
    const { title, content } = req.body;
    const newNote = new noteModel({ title, content });

    await newNote.save();
    res.status(201).json({ message: "Note created successfully!" });
  } catch (error) {
    console.error("Error in createNotes controller", error);

    res.status(500).json({ message: "internal server error" });
  }
};

const UpdateNote = async (req, res) => {
  try {
    const { title, content } = req.body; // gets the title and content from the request.body
    await noteModel.findByIdAndUpdate(req.params.id, { title, content });

    if (!UpdateNote)
      return res.status(404).json({ message: "Internal server error" });
    res.status(200).json({ message: "Note updated successfully" });
  } catch (error) {
    console.error("Error in UpdateNote controller", error);
    res.status(500).json({ message: "internal server error" });
  }
};

const DeleteNote = async (req, res) => {
  try {
    await noteModel.findByIdAndDelete(req.params.id);
    if (!DeleteNote)
      return res.status(404).json({ message: "Internal server error" });
    res.status(200).json({ message: "Note deleted successfully" });
  } catch (error) {
    console.error("Error in DeleteNote controller", error);
    res.status(500).json({ message: "internal server error" });
  }
};

module.exports = {
  getAllnotes,
  createNote,
  DeleteNote,
  noteModel,
  UpdateNote,
  getNotebyId,
};
