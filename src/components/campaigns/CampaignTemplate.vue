<template>
  <div class="campaign-page">
    <!-- Dynamic Hero Section -->
    <section class="campaign-hero" :style="{ backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${campaign.heroImage})` }">
      <div class="hero-content">
        <span class="campaign-category">{{ campaign.category }}</span>
        <h1 class="animated-title">{{ campaign.title }}</h1>
        <p class="hero-subtitle">{{ campaign.subtitle }}</p>
        <div class="campaign-stats">
          <div class="stat">
            <span class="stat-number">{{ campaign.supporters }}</span>
            <span class="stat-label">Supporters</span>
          </div>
          <div class="stat">
            <span class="stat-number">{{ campaign.progress }}%</span>
            <span class="stat-label">Progress</span>
          </div>
          <div class="stat">
            <span class="stat-number">{{ campaign.daysLeft }}</span>
            <span class="stat-label">Days Left</span>
          </div>
        </div>
        <div class="hero-buttons">
          <button class="primary-button">Support Now</button>
          <button class="secondary-button">Share Campaign</button>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse"></div>
        <span>Scroll to learn more</span>
      </div>
    </section>

    <!-- Overview Section -->
    <section class="overview-section">
      <div class="container">
        <div class="overview-grid">
          <div class="overview-content">
            <h2 class="section-title">Campaign Overview</h2>
            <p class="overview-text">{{ campaign.overview }}</p>
            <div class="key-points">
              <div v-for="(point, index) in campaign.keyPoints" :key="index" class="key-point">
                <i :class="point.icon"></i>
                <h3>{{ point.title }}</h3>
                <p>{{ point.description }}</p>
              </div>
            </div>
          </div>
          <div class="overview-media">
            <img :src="campaign.overviewImage" :alt="campaign.title" class="overview-image" />
          </div>
        </div>
      </div>
    </section>

    <!-- Progress Timeline -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">Campaign Progress</h2>
        <div class="timeline">
          <div v-for="(milestone, index) in campaign.milestones" :key="index" class="timeline-item">
            <div class="timeline-content">
              <span class="date">{{ milestone.date }}</span>
              <h3>{{ milestone.title }}</h3>
              <p>{{ milestone.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Section -->
    <section class="impact-section">
      <div class="container">
        <h2 class="section-title">Our Impact</h2>
        <div class="impact-grid">
          <div v-for="(impact, index) in campaign.impacts" :key="index" class="impact-card">
            <div class="impact-icon">
              <i :class="impact.icon"></i>
            </div>
            <h3>{{ impact.title }}</h3>
            <p>{{ impact.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Get Involved Section -->
    <section class="get-involved">
      <div class="container">
        <div class="involvement-content">
          <h2>How You Can Help</h2>
          <div class="involvement-options">
            <div class="involvement-card">
              <i class="fas fa-hand-holding-heart"></i>
              <h3>Support</h3>
              <p>Join our campaign and make a difference.</p>
              <button class="action-button">Support Now</button>
            </div>
            <div class="involvement-card">
              <i class="fas fa-share-alt"></i>
              <h3>Share</h3>
              <p>Spread the word about our campaign.</p>
              <button class="action-button">Share Campaign</button>
            </div>
            <div class="involvement-card">
              <i class="fas fa-users"></i>
              <h3>Volunteer</h3>
              <p>Become an active part of our campaign.</p>
              <button class="action-button">Join Us</button>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Related Campaigns -->
    <section class="related-campaigns">
      <div class="container">
        <h2 class="section-title">Related Campaigns</h2>
        <div class="campaign-slider">
          <div v-for="(related, index) in campaign.relatedCampaigns" :key="index" class="related-card">
            <img :src="related.image" :alt="related.title" />
            <div class="related-content">
              <h3>{{ related.title }}</h3>
              <p>{{ related.description }}</p>
              <router-link :to="related.link" class="learn-more">
                Learn More <i class="fas fa-arrow-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'CampaignTemplate',
  props: {
    campaign: {
      type: Object,
      required: true
    }
  }
};
</script>

<style scoped>
.campaign-page {
  font-family: 'Inter', sans-serif;
}

/* Hero Section */
.campaign-hero {
  height: 100vh;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: white;
}

.hero-content {
  text-align: center;
  max-width: 800px;
  padding: 0 2rem;
  z-index: 2;
}

.campaign-category {
  background: #FDBB30;
  color: #000000;
  padding: 0.5rem 1.5rem;
  border-radius: 25px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1.5rem;
  transform: translateY(20px);
  opacity: 0;
  animation: fadeInUp 0.8s ease forwards;
}

.animated-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1.5rem;
  opacity: 0;
  animation: fadeInUp 1s ease 0.2s forwards;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  animation: fadeInUp 1s ease 0.4s forwards;
}

.campaign-stats {
  display: flex;
  justify-content: center;
  gap: 3rem;
  margin: 2rem 0;
  opacity: 0;
  animation: fadeInUp 1s ease 0.6s forwards;
}

.stat {
  text-align: center;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  color: #FDBB30;
  display: block;
}

.stat-label {
  font-size: 1rem;
  opacity: 0.9;
}

/* Overview Section */
.overview-section {
  padding: 6rem 2rem;
  background: white;
}

.overview-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.key-points {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.key-point {
  padding: 2rem;
  background: #f8f9fa;
  border-radius: 15px;
  transition: all 0.3s ease;
}

.key-point:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.1);
}

.key-point i {
  font-size: 2rem;
  color: #FDBB30;
  margin-bottom: 1rem;
}

/* Timeline Section */
.timeline-section {
  padding: 6rem 2rem;
  background: #f8f9fa;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 4rem auto 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: #FDBB30;
}

.timeline-item {
  margin: 2rem 0;
  position: relative;
}

.timeline-content {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.timeline-content:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.2);
}

/* Impact Section */
.impact-section {
  padding: 6rem 2rem;
  background: #000000;
  color: white;
}

.impact-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.impact-card {
  text-align: center;
  padding: 2rem;
  background: rgba(253, 187, 48, 0.1);
  border-radius: 15px;
  transition: all 0.3s ease;
}

.impact-card:hover {
  transform: translateY(-10px);
  background: rgba(253, 187, 48, 0.2);
}

.impact-icon {
  font-size: 2.5rem;
  color: #FDBB30;
  margin-bottom: 1.5rem;
}

/* Get Involved Section */
.get-involved {
  padding: 6rem 2rem;
  background: linear-gradient(45deg, #FDBB30, #FFE5A8);
}

.involvement-options {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.involvement-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  transition: all 0.3s ease;
}

.involvement-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
}

.action-button {
  background: #000000;
  color: #FDBB30;
  padding: 1rem 2rem;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1.5rem;
}

.action-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0,0,0,0.2);
}

/* Related Campaigns */
.related-campaigns {
  padding: 6rem 2rem;
  background: white;
}

.campaign-slider {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.related-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.related-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 20px 40px rgba(0,0,0,0.2);
}

.related-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.related-content {
  padding: 1.5rem;
}

.learn-more {
  color: #FDBB30;
  text-decoration: none;
  font-weight: 600;
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 1rem;
  transition: all 0.3s ease;
}

.learn-more:hover {
  color: #000000;
}

.learn-more i {
  transition: transform 0.3s ease;
}

.learn-more:hover i {
  transform: translateX(5px);
}

/* Animations */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Responsive Design */
@media (max-width: 768px) {
  .animated-title {
    font-size: 2.5rem;
  }

  .campaign-stats {
    flex-direction: column;
    gap: 1.5rem;
  }

  .overview-grid {
    grid-template-columns: 1fr;
  }

  .timeline::before {
    left: 20px;
  }

  .timeline-content {
    margin-left: 40px;
  }
}

/* Container */
.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

/* Section Titles */
.section-title {
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 2rem;
  text-align: center;
  position: relative;
}

.section-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 3px;
  background: #FDBB30;
}
</style> 