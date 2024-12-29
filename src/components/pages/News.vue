<template>
  <div id="news-page">
    <!-- Header Section -->
    <header class="header-container">
      <div class="logo-group">
        <img src="../../assets/logos/bird-only-logo.png" alt="Liberal Democrats Logo" class="LibDemLogo" />
        <div class="logo-text">
          <span class="lib-dem">Liberal Democrats</span>
          <span class="muslim-forum">Muslim Forum</span>
        </div>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero gradient-background">
      <h1>Latest News</h1>
      <p>Stay updated with the latest from the Liberal Democrats.</p>
    </section>

    <!-- News Articles Section -->
    <section class="news-articles">
      <h2>Recent Articles</h2>
      <div class="articles-grid">
        <div v-for="article in articles" :key="article.url" class="article-card">
          <img :src="article.image || '../../assets/placeholder-image.jpg'" alt="Article Image" class="article-image" />
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <a :href="article.url" target="_blank" class="read-more">Read More</a>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Liberal Democrats Muslim Forum. All rights reserved.</p>
      <a href="https://www.libdems.org.uk/" target="_blank" rel="noopener noreferrer">Liberal Democrats Official Website</a>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "NewsPage",
  data() {
    return {
      articles: [],
    };
  },
  mounted() {
    this.fetchArticles();
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await axios.get("https://newsapi.org/v2/everything", {
          params: {
            q: "Liberal Democrats",
            language: "en",
            apiKey: "618a242afb714a61a5dfe90f0d6ebc11", // Replace with your News API key
          },
        });
        this.articles = response.data.articles.map((article) => ({
          title: article.title,
          description: article.description,
          url: article.url,
          image: article.urlToImage,
        }));
      } catch (error) {
        console.error("Error fetching news articles:", error);
      }
    },
  },
};
</script>

<style scoped>
#news-page {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #f9f9f9;
  text-align: center;
}

/* Header Section */
.header-container {
  padding: 20px;
  background: #ffcc00;
  display: flex;
  align-items: center;
  justify-content: center;
}

.LibDemLogo {
  max-width: 180px;
}

.logo-text {
  display: flex;
  flex-direction: column;
}

.lib-dem {
  font-size: 24px;
  font-weight: bold;
  color: #000;
}

.muslim-forum {
  font-size: 18px;
  color: #000;
}

/* Hero Section */
.hero {
  padding: 60px;
  background: linear-gradient(135deg, #ffcc00, #ffe600);
  color: #000;
}

/* News Articles Section */
.news-articles {
  padding: 40px;
  background: #fff;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 20px;
}

.article-card {
  text-align: center;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.article-image {
  max-width: 100%;
  border-radius: 8px;
  margin-bottom: 15px;
}

.article-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.article-card p {
  font-size: 16px;
  color: #555;
  margin-bottom: 15px;
}

.read-more {
  color: #ffcc00;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s ease;
}

.read-more:hover {
  color: #ffe600;
}

/* Footer */
.footer {
  padding: 20px;
  background: #000;
  color: #ffe600;
}

.footer a {
  color: #ffe600;
  text-decoration: none;
  font-weight: bold;
}

.footer a:hover {
  color: #fff;
}
</style>
