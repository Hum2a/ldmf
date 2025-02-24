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
    <section class="hero">
      <div class="hero-content">
        <h1 class="animated-title">Latest News</h1>
        <p class="hero-subtitle">Stay informed with updates from the Liberal Democrats Muslim Forum</p>
        <div class="search-bar">
          <input type="text" v-model="searchQuery" placeholder="Search news articles..." />
          <i class="fas fa-search"></i>
        </div>
      </div>
    </section>

    <!-- News Categories -->
    <section class="categories-section">
      <div class="container">
        <div class="category-tabs">
          <button 
            v-for="category in categories" 
            :key="category"
            :class="['category-button', { active: currentCategory === category }]"
            @click="currentCategory = category"
          >
            {{ category }}
          </button>
        </div>
      </div>
    </section>

    <!-- Featured Article -->
    <section class="featured-article" v-if="featuredArticle">
      <div class="container">
        <div class="featured-content">
          <div class="featured-image">
            <img :src="featuredArticle.image || require('../../assets/logos/bird-only-logo.png')" :alt="featuredArticle.title" />
            <div class="featured-tag">Featured</div>
          </div>
          <div class="featured-text">
            <span class="article-date">{{ formatDate(featuredArticle.publishedAt) }}</span>
            <h2>{{ featuredArticle.title }}</h2>
            <p>{{ featuredArticle.description }}</p>
            <a :href="featuredArticle.url" target="_blank" class="read-more">
              Read Full Article <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- News Grid -->
    <section class="news-grid">
      <div class="container">
        <div class="articles-grid">
          <article 
            v-for="article in filteredArticles" 
            :key="article.url" 
            class="article-card"
            @click="openArticle(article.url)"
          >
            <div class="article-image">
              <img :src="article.image || require('../../assets/logos/bird-only-logo.png')" :alt="article.title" />
              <div class="article-category">{{ article.category }}</div>
            </div>
            <div class="article-content">
              <span class="article-date">{{ formatDate(article.publishedAt) }}</span>
              <h3>{{ article.title }}</h3>
              <p>{{ article.description }}</p>
            </div>
          </article>
        </div>
      </div>
    </section>

    <!-- Newsletter Section -->
    <section class="newsletter-section">
      <div class="container">
        <div class="newsletter-content">
          <h2>Stay Updated</h2>
          <p>Subscribe to our newsletter for the latest news and updates</p>
          <div class="newsletter-form">
            <input type="email" v-model="email" placeholder="Enter your email address" />
            <button @click="subscribeNewsletter" class="subscribe-button">
              Subscribe <i class="fas fa-paper-plane"></i>
            </button>
          </div>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Liberal Democrats Muslim Forum. All rights reserved.</p>
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
      searchQuery: "",
      currentCategory: "All",
      categories: ["All", "Politics", "Community", "Events", "Press Releases"],
      email: "",
      featuredArticle: null
    };
  },
  computed: {
    filteredArticles() {
      let filtered = this.articles;
      
      if (this.searchQuery) {
        const query = this.searchQuery.toLowerCase();
        filtered = filtered.filter(article => 
          article.title.toLowerCase().includes(query) ||
          article.description.toLowerCase().includes(query)
        );
      }

      if (this.currentCategory !== "All") {
        filtered = filtered.filter(article => article.category === this.currentCategory);
      }

      return filtered;
    }
  },
  methods: {
    async fetchArticles() {
      try {
        const response = await axios.get("https://lib-dem-news-server.onrender.com/api/news");
        this.articles = response.data.articles.map(article => ({
          title: article.title,
          description: article.description || "Click to read more.",
          url: article.url,
          image: article.urlToImage,
          publishedAt: article.publishedAt,
          category: this.assignCategory(article)
        }));

        if (this.articles.length > 0) {
          this.featuredArticle = this.articles[0];
          this.articles = this.articles.slice(1);
        }
      } catch (error) {
        console.error("Error fetching news:", error);
      }
    },
    formatDate(dateString) {
      return new Date(dateString).toLocaleDateString('en-GB', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
      });
    },
    assignCategory() {
      // Simple category assignment logic - can be enhanced
      const categories = this.categories.slice(1);
      return categories[Math.floor(Math.random() * categories.length)];
    },
    openArticle(url) {
      window.open(url, '_blank');
    },
    subscribeNewsletter() {
      // Implement newsletter subscription logic
      console.log('Newsletter subscription:', this.email);
      this.email = "";
    }
  },
  mounted() {
    this.fetchArticles();
  }
};
</script>

<style scoped>
.hero {
  height: 60vh;
  background: linear-gradient(135deg, #FDBB30, #FFE5A8);
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  position: relative;
}

.animated-title {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards 0.3s;
}

.search-bar {
  position: relative;
  max-width: 600px;
  margin: 0 auto;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards 0.6s;
}

.search-bar input {
  width: 100%;
  padding: 1rem 3rem 1rem 1.5rem;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.search-bar i {
  position: absolute;
  right: 1.5rem;
  top: 50%;
  transform: translateY(-50%);
  color: #666;
}

.category-tabs {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin: 2rem 0;
  flex-wrap: wrap;
}

.category-button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: #f5f5f5;
  color: #666;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.category-button.active {
  background: #000000;
  color: #FDBB30;
}

.featured-article {
  padding: 4rem 0;
}

.featured-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
}

.featured-image {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.featured-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
}

.featured-tag {
  position: absolute;
  top: 1rem;
  left: 1rem;
  background: #FDBB30;
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-weight: 600;
}

.article-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  cursor: pointer;
}

.article-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
}

.article-image {
  position: relative;
  height: 200px;
}

.article-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.article-category {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: #000000;
  color: #FDBB30;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
  font-weight: 600;
}

.article-content {
  padding: 1.5rem;
}

.article-date {
  color: #666;
  font-size: 0.9rem;
}

.articles-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem 0;
}

.newsletter-section {
  background: linear-gradient(135deg, #FDBB30, #FFE5A8);
  padding: 4rem 0;
  text-align: center;
}

.newsletter-form {
  display: flex;
  gap: 1rem;
  max-width: 600px;
  margin: 2rem auto 0;
}

.newsletter-form input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 25px;
  font-size: 1rem;
}

.subscribe-button {
  padding: 1rem 2rem;
  background: #000000;
  color: #FDBB30;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.subscribe-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
  .animated-title {
    font-size: 2.5rem;
  }

  .featured-content {
    grid-template-columns: 1fr;
  }

  .newsletter-form {
    flex-direction: column;
  }
}
</style>
