const express = require("express");
const axios = require("axios");
const dotenv = require("dotenv");

dotenv.config(); // Load environment variables from .env file

const app = express();
const PORT = process.env.PORT || 3000;

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
    res.json(response.data); // Send the news articles back to the frontend
  } catch (error) {
    res.status(error.response?.status || 500).send(error.message);
  }
});

app.listen(PORT, () => console.log(`Backend running on port ${PORT}`));
