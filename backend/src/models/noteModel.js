const mongoose = require("mongoose");

// create a schema
//create a model

const noteSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }, //mongodb gives the created at and updated at fields by default
);

//you create a model after a schema has been created, the model is created, based off the schema

const Note = mongoose.model("Note", noteSchema);

module.exports = Note;
