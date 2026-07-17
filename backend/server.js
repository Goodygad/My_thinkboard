const express = require("express");
const notesRoutes = require("./src/routes/notesRoutes");
const connectDB = require("./src/config/db.js");
const dotenv = require("dotenv");
const cors = require("cors");
const path = require("path");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;
//const __dirname = path.resolve();

connectDB();

//allow requests from your frontend origin
if (process.env.NODE_ENV !== "production") {
  app.use(
    cors({
      origin: "http://localhost:5173",
    }),
  );
}
//middleware
app.use(express.json()); //this middleware allows you to get access to req.body

app.use("/api/notes", notesRoutes);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../frontend/dist")));

  app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "../frontend", "dist", "index.html"));
  });
}

//allow requests from your frontend origin

app.listen(PORT, () => {
  console.log("Server started on PORT:", PORT);
});
