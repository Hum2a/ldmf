const express = require("express");
const axios = require("axios");
const cors = require("cors");
const dotenv = require("dotenv");

dotenv.config();

const app = express();

// Allow specific origins or all origins
app.use(cors({
  origin: "https://ldmf.onrender.com", // Replace with your frontend domain
  methods: ["GET"], // Specify allowed HTTP methods
}));

app.get("/api/news", async (req, res) => {
  try {
    const response = await axios.get("https://newsapi.org/v2/everything", {
      params: {
        q: "Liberal Democrats",
        language: "en",
        sortBy: "publishedAt",
        pageSize: 3,
        apiKey: process.env.NEWS_API_KEY,
      },
    });
    res.json(response.data);
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
