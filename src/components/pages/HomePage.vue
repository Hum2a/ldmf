<template>
  <div id="app">
    <!-- Modern Floating Header -->
    <header class="header-container">
      <div class="logo-group">
        <img src="../../assets/logos/bird-only-logo.png" alt="Liberal Democrats Logo" class="LibDemLogo" />
        <div class="logo-text">
          <span class="lib-dem">Liberal Democrats</span>
          <span class="muslim-forum">Muslim Forum</span>
        </div>
      </div>

      <!-- Mobile Menu Button -->
      <div class="mobile-menu-btn" @click="toggleMenu">
        <span></span><span></span><span></span>
      </div>

      <div class="nav-group" :class="{ 'active': isMenuOpen }">
        <nav>
          <router-link to="/about" class="nav-link">About Us</router-link>
          <router-link to="/contact" class="nav-link">Contact Us</router-link>
          <router-link to="/campaigns" class="nav-link">Campaigns</router-link>
          <router-link to="/join" class="nav-link">Join Us</router-link>
          <router-link to="/news" class="nav-link">News</router-link>
        </nav>
      </div>

      <div class="button-group">
        <router-link to="/search">
          <i class="fas fa-search search-icon"></i>
        </router-link>
      </div>
    </header>

    <!-- Modern Hero Section with Parallax -->
    <section class="hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="animated-text">Empowering Muslim Voices in British Politics</h1>
        <p class="hero-subtitle">Building bridges. Creating change. Shaping tomorrow.</p>
        <div class="hero-buttons">
          <router-link to="/join">
            <button class="primary-button">Join the Movement</button>
          </router-link>
          <router-link to="/campaigns">
            <button class="secondary-button">Our Impact</button>
          </router-link>
        </div>
      </div>
    </section>

    <!-- News Grid Section -->
    <section class="news-section">
      <h2 class="section-title">Latest Updates</h2>
      <div class="news-grid">
        <div v-for="(article, index) in latestNews" :key="index" class="news-card">
          <div class="card-image" :style="{ backgroundImage: `url(${article.image})` }">
            <div class="card-overlay"></div>
          </div>
          <div class="card-content">
            <span class="card-category">News</span>
            <h3>{{ article.title }}</h3>
            <p>{{ article.description }}</p>
            <a :href="article.url" target="_blank" class="read-more">
              Read More <i class="fas fa-arrow-right"></i>
            </a>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="impact-section">
      <div class="impact-content">
        <h2 class="section-title">Our Impact</h2>
        <div class="impact-grid">
          <div class="impact-card">
            <i class="fas fa-users"></i>
            <h3>Community</h3>
            <p>Building stronger, more inclusive communities across the UK</p>
          </div>
          <div class="impact-card">
            <i class="fas fa-bullhorn"></i>
            <h3>Advocacy</h3>
            <p>Amplifying Muslim voices in political discourse</p>
          </div>
          <div class="impact-card">
            <i class="fas fa-handshake"></i>
            <h3>Unity</h3>
            <p>Fostering understanding and cooperation</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Modern Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>Connect With Us</h3>
          <div class="social-links">
            <a href="#"><i class="fab fa-twitter"></i></a>
            <a href="#"><i class="fab fa-facebook"></i></a>
            <a href="#"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
        <div class="footer-section">
          <p>&copy; {{ new Date().getFullYear() }} Liberal Democrats Muslim Forum</p>
          <a href="https://www.libdems.org.uk/" target="_blank" rel="noopener noreferrer">
            Liberal Democrats Official Website
          </a>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "HomePage",
  data() {
    return {
      latestNews: [],
      isMenuOpen: false
    };
  },
  mounted() {
    this.fetchLatestNews();
    this.initScrollReveal();
  },
  methods: {
    async fetchLatestNews() {
      try {
        const response = await axios.get("https://lib-dem-news-server.onrender.com/api/news");
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
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen;
    },
    initScrollReveal() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.section-title').forEach(title => {
        observer.observe(title);
      });
    }
  },
};
</script>

<style scoped>
/* Modern Reset and Base Styles */
#app {
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
  background-color: #ffffff;
  margin: 0;
  padding: 0;
  overflow-x: hidden;
}

/* Header Styles */
.header-container {
  position: fixed;
  top: 0;
  width: 100%;
  padding: 1rem 2rem;
  background: rgba(255, 255, 255, 0.98);
  backdrop-filter: blur(10px);
  z-index: 1000;
  border-bottom: 3px solid #FDBB30;
}

.logo-group {
  display: flex;
  align-items: center;
}

.LibDemLogo {
  height: 40px;
  width: auto;
  transition: transform 0.5s ease;
}

.logo-group:hover .LibDemLogo {
  transform: rotate(360deg);
}

.nav-link {
  color: #1a1a1a;
  text-decoration: none;
  font-weight: 600;
  padding: 0.5rem 1rem;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.nav-link::before {
  content: '';
  position: absolute;
  bottom: 0;
  left: -100%;
  width: 100%;
  height: 2px;
  background: #FDBB30;
  transition: all 0.4s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.nav-link:hover::before {
  left: 0;
  transform: translateX(0);
}

/* Hero Section */
.hero {
  height: 100vh;
  /* background-image: url('../../assets/hero-bg.jpg'); */
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 0 2rem;
}

.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(45deg, rgba(0,0,0,0.8), rgba(253, 187, 48, 0.4));
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
  max-width: 800px;
  opacity: 0;
  animation: fadeInUp 1.2s ease forwards;
}

.animated-text {
  font-size: 3.5rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  background: linear-gradient(45deg, #FDBB30, #FFE5A8);
  -webkit-background-clip: text;
  background-clip: text;
  color: transparent;
  animation: gradientFlow 8s ease infinite;
}

.hero-subtitle {
  opacity: 0;
  animation: fadeInUp 1.2s ease 0.3s forwards;
}

.hero-buttons {
  opacity: 0;
  animation: fadeInUp 1.2s ease 0.6s forwards;
}

/* Buttons */
.primary-button, .secondary-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  font-size: 1.1rem;
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
}

.primary-button {
  background: #FDBB30;
  color: #000000;
  border: 2px solid #FDBB30;
  box-shadow: 0 4px 15px rgba(253, 187, 48, 0.3);
}

.primary-button:hover {
  background: #000000;
  color: #FDBB30;
  border-color: #000000;
}

.primary-button::before, .secondary-button::before {
  content: '';
  position: absolute;
  top: 50%;
  left: 50%;
  width: 0;
  height: 0;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  transform: translate(-50%, -50%);
  transition: width 0.6s ease, height 0.6s ease;
}

.primary-button:hover::before, .secondary-button:hover::before {
  width: 300px;
  height: 300px;
}

.secondary-button {
  background: transparent;
  border: 2px solid #FDBB30;
  color: #FDBB30;
}

.secondary-button:hover {
  background: #FDBB30;
  color: #000000;
}

/* News Grid */
.news-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
}

.news-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid rgba(253, 187, 48, 0.2);
  transform-origin: center;
}

.news-card:hover {
  transform: translateY(-10px) scale(1.02);
}

.card-image {
  height: 200px;
  background-size: cover;
  background-position: center;
  position: relative;
  transform: scale(1);
  transition: transform 0.8s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.news-card:hover .card-image {
  transform: scale(1.1);
}

.card-content {
  padding: 1.5rem;
}

.card-category {
  background: #FDBB30;
  color: #000000;
  padding: 0.3rem 1rem;
  border-radius: 15px;
  font-weight: 600;
  font-size: 0.9rem;
  margin-bottom: 1rem;
}

.read-more {
  color: #FDBB30;
  font-weight: 600;
  text-decoration: none;
}

.read-more:hover {
  color: #000000;
}

.card-overlay {
  background: linear-gradient(45deg, rgba(253, 187, 48, 0.2), rgba(0, 0, 0, 0.4));
  transition: all 0.5s ease;
}

.news-card:hover .card-overlay {
  background: linear-gradient(45deg, rgba(253, 187, 48, 0.4), rgba(0, 0, 0, 0.6));
}

/* Impact Section */
.impact-section {
  background: #000000;
  color: #ffffff;
  padding: 5rem 2rem;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.impact-card {
  text-align: center;
  padding: 2rem;
  background: rgba(253, 187, 48, 0.1);
  border-radius: 15px;
  box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  border: 1px solid rgba(253, 187, 48, 0.2);
}

.impact-card i {
  color: #FDBB30;
  font-size: 2.5rem;
  margin-bottom: 1rem;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.impact-card:hover {
  transform: translateY(-15px) scale(1.03);
  box-shadow: 0 20px 40px rgba(253, 187, 48, 0.3);
}

.impact-card:hover i {
  transform: scale(1.2) rotate(10deg);
  color: #ffffff;
}

/* Footer */
.footer {
  background: #000000;
  color: #ffffff;
  padding: 3rem 2rem;
  border-top: 3px solid #FDBB30;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.social-links a {
  color: #FDBB30;
  font-size: 1.5rem;
  margin: 0 1rem;
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
  position: relative;
  display: inline-block;
}

.social-links a:hover {
  transform: translateY(-8px) scale(1.2);
}

.social-links a::before {
  content: '';
  position: absolute;
  width: 100%;
  height: 100%;
  background: #FDBB30;
  border-radius: 50%;
  opacity: 0;
  transform: scale(0);
  transition: all 0.5s ease;
  z-index: -1;
}

.social-links a:hover::before {
  opacity: 0.2;
  transform: scale(1.5);
}

.footer a {
  color: #FDBB30;
  text-decoration: none;
  transition: all 0.3s ease;
}

.footer a:hover {
  color: #ffffff;
}

/* Section Titles */
.section-title {
  position: relative;
  display: inline-block;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(20px);
  transition: all 1s ease;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 60%;
  height: 3px;
  background: #FDBB30;
}

.section-title.visible {
  opacity: 1;
  transform: translateY(0);
}

/* Responsive Design */
@media (max-width: 768px) {
  .nav-group {
    display: none;
  }
  
  .nav-group.active {
    display: block;
    position: fixed;
    top: 80px;
    left: 0;
    right: 0;
    background: white;
    padding: 1rem;
    box-shadow: 0 4px 20px rgba(0,0,0,0.1);
  }

  .mobile-menu-btn {
    display: block;
  }

  .animated-text {
    font-size: 2.5rem;
  }
}

/* Animations */
@keyframes gradientFlow {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
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

@keyframes float {
  0% { transform: translateY(0px); }
  50% { transform: translateY(-10px); }
  100% { transform: translateY(0px); }
}
</style>
