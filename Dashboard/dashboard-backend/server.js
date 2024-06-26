const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const tiktokRoutes = require("./routes/tiktok");

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());

app.use("/tiktok", tiktokRoutes);

// Replace YOUR_MONGODB_URI with the actual URI in the .env file
mongoose.connect(process.env.MONGODB_URI);

const PORT = process.env.PORT || 6000;
const server = app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`Port ${PORT} is already in use. Trying another port...`);
    app.listen(PORT + 1, () => {
      console.log(`Server is running on port ${PORT + 1}`);
    });
  } else {
    console.error("Server error:", err);
  }
});
