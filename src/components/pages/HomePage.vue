<template>
  <div id="app">
    <!-- Animated Header Section -->
    <header class="header-container animated-header">
      <div class="logo-group">
        <img src="../../assets/logos/bird-only-logo.png" alt="Liberal Democrats Logo" class="LibDemLogo" />
        <div class="logo-text">
          <span class="lib-dem">Liberal Democrats</span>
          <span class="muslim-forum">Muslim Forum</span>
        </div>
      </div>

      <div class="nav-group">
        <nav>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
          <router-link to="/campaigns" class="nav-link">Campaigns</router-link>
          <router-link to="/join" class="nav-link">Join Us</router-link>
          <router-link to="/news" class="nav-link">News</router-link>
        </nav>
      </div>

      <div class="button-group">
        <router-link to="/palestine-israel-war">
          <button class="styled-button header-button">Learn More</button>
        </router-link>
        <router-link to="/search">
          <img src="../../assets/icons/Magnifying_glass_icon.png" alt="Search" class="search-button-image header-search" />
        </router-link>
      </div>
    </header>

    <!-- Hero Section -->
    <section class="hero gradient-background">
      <div class="hero-content">
        <h1>Welcome to the Liberal Democrats Muslim Forum</h1>
        <p>Empowering communities through inclusion, equality, and action.</p>
        <router-link to="/join">
          <button class="cta-button">Join Us Today</button>
        </router-link>
      </div>
    </section>

    <!-- Latest News Section -->
    <section class="latest-news">
      <h2>Latest News</h2>
      <div class="news-container">
        <div v-for="(article, index) in latestNews" :key="index" class="news-card">
          <img :src="article.image || '../../assets/placeholder-image.jpg'" alt="News Image" class="news-image" />
          <h3>{{ article.title }}</h3>
          <p>{{ article.description }}</p>
          <a :href="article.url" target="_blank" class="read-more">Read More</a>
        </div>
      </div>
    </section>

    <!-- Dynamic Call to Action Section -->
    <section class="cta-section">
      <h2>Get Involved</h2>
      <p>Join our mission to create a fairer, more inclusive society. Together, we can make a difference.</p>
      <div class="cta-buttons">
        <router-link to="/campaigns">
          <button class="styled-button">View Campaigns</button>
        </router-link>
        <router-link to="/join">
          <button class="styled-button">Become a Member</button>
        </router-link>
      </div>
    </section>

    <!-- Footer Section -->
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Liberal Democrats Muslim Forum. All rights reserved.</p>
      <a href="https://www.libdems.org.uk/" target="_blank" rel="noopener noreferrer">Liberal Democrats Official Website</a>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      latestNews: [], // Store fetched news articles
    };
  },
  mounted() {
    this.fetchLatestNews();
  },
  methods: {
    async fetchLatestNews() {
      try {
        const apiKey = process.env.APP_NEWS_API_KEY; 
        const response = await axios.get("https://newsapi.org/v2/everything", {
          headers: {
            "User-Agent": "Mozilla/5.0 (compatible; MyApp/1.0)",
          },
          params: {
            q: "Liberal Democrats",
            language: "en",
            sortBy: "publishedAt",
            pageSize: 3, // Fetch top 3 most recent articles
            apiKey,
          },
        });

        // Map response data to simplify usage
        this.latestNews = response.data.articles.map((article) => ({
          title: article.title,
          description: article.description || "Click to read more.",
          url: article.url,
          image: article.urlToImage || "../../assets/placeholder-image.jpg",
        }));
      } catch (error) {
        console.error("Error fetching latest news:", error);
      }
    },
  },
};
</script>

<style scoped>
/* General Styles */
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
  background-color: #f9f9f9;
  text-align: center;
  margin: 0;
  padding: 0%;
}

/* Header Section */
.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  background: #ffcc00;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  animation: slide-in 1s ease-out;
}

.header-button {
  padding: 10px 20px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  background: linear-gradient(45deg, #fff700, #ffe600);
  border: none;
  border-radius: 5px;
  cursor: pointer;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.2);
  transition: transform 0.3s, box-shadow 0.3s;
}

.header-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3);
}

.header-search {
  width: 30px;
  height: 30px;
  margin-left: 10px;
  transition: transform 0.3s;
}

.header-search:hover {
  transform: rotate(15deg) scale(1.2);
}

.logo-group {
  display: flex;
  align-items: center;
}

.LibDemLogo {
  max-width: 180px;
}

.logo-text {
  margin-left: 10px;
}

.nav-group {
  display: flex;
}

.nav-link {
  margin: 0 10px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s, transform 0.3s;
}

.nav-link:hover {
  color: #444;
  transform: translateY(-3px);
}

/* Hero Section */
.hero {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 350px;
  color: #000;
  text-shadow: 0 2px 4px rgba(255, 255, 255, 0.6);
}

.gradient-background {
  background: linear-gradient(135deg, #ffcc00, #ffe600);
}

.hero-content {
  text-align: center;
}

.cta-button {
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  background: linear-gradient(45deg, #fff700, #ffe600);
  border: none;
  border-radius: 25px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.3);
}

/* News Section */
.latest-news {
  padding: 40px;
  background: #fff;
}

.news-container {
  display: flex;
  gap: 20px;
  justify-content: center;
}

.news-card {
  width: 28%;
  background: #ffe600;
  padding: 16px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.news-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.news-image {
  width: 100%;
  border-radius: 12px;
}

.read-more {
  color: #000;
  font-weight: bold;
  text-decoration: none;
  transition: color 0.3s;
}

.read-more:hover {
  color: #444;
  text-decoration: underline;
}

/* CTA Section */
.cta-section {
  padding: 40px;
  background: linear-gradient(135deg, #ffcc00, #ffe600);
}

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

.styled-button {
  padding: 12px 24px;
  font-size: 16px;
  font-weight: bold;
  color: #000;
  background: linear-gradient(45deg, #fff700, #ffe600);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s, box-shadow 0.3s;
}

.styled-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* Footer */
.footer {
  padding: 20px;
  background: #000;
  color: #ffe600;
}

.footer a {
  color: #ffe600;
  font-weight: bold;
  transition: color 0.3s;
}

.footer a:hover {
  color: #fff;
}

/* Animations */
@keyframes slide-in {
  0% { opacity: 0; transform: translateY(-20px); }
  100% { opacity: 1; transform: translateY(0); }
}
</style>
