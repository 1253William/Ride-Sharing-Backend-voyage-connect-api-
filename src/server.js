const express = require("express");
const helmet = require("helmet");
const cors = require("cors");
const morgan = require("morgan");

require("dotenv").config();

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Database connection

// Basic route
app.get("/", (req, res) => {
  res.json({ message: "Welcome to Voyage Connect API" });
});

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: "Something went wrong!" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
