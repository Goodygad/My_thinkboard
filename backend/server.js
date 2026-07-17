const express = require("express");
const notesRoutes = require("./src/routes/notesRoutes");
const connectDB = require("./src/config/db.js");
const dotenv = require("dotenv");
const cors = require("cors");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

connectDB();

//allow requests from your frontend origin
app.use(
  cors({
    origin: "http://localhost:5173",
  }),
);

//middleware
app.use(express.json()); //this middleware allows you to get access to req.body

app.use("/api/notes", notesRoutes);

//allow requests from your frontend origin

app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
