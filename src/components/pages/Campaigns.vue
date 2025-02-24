<template>
  <div id="campaigns">
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
    <section class="campaigns-hero">
      <div class="hero-content">
        <h1 class="animated-title">Our Campaigns</h1>
        <p class="hero-subtitle">Championing progressive change and building a fairer society for all</p>
        <div class="hero-buttons">
          <button class="primary-button">Join Our Movement</button>
          <button class="secondary-button">Explore Initiatives</button>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse"></div>
        <span>Discover Our Impact</span>
      </div>
    </section>

    <!-- Featured Campaign -->
    <section class="featured-campaign">
      <div class="container">
        <div class="featured-content">
          <div class="featured-text">
            <span class="highlight-tag">Featured Initiative</span>
            <h2>Climate Emergency Action</h2>
            <p>Leading the fight against climate change with ambitious, science-based targets and community-driven solutions.</p>
            <ul class="campaign-highlights">
              <li>✓ Carbon Neutral Britain by 2045</li>
              <li>✓ 80% Renewable Energy by 2030</li>
              <li>✓ Green Infrastructure Investment</li>
            </ul>
            <router-link to="/campaigns/climate-emergency" class="learn-more">
              Learn More →
            </router-link>
          </div>
          <div class="featured-image">
            <!-- Add featured campaign image here -->
          </div>
        </div>
      </div>
    </section>

    <!-- Campaign Grid -->
    <section class="campaigns-grid">
      <div class="container">
        <h2 class="section-title">Active Initiatives</h2>
        
        <div class="filter-tabs">
          <button 
            v-for="filter in filters" 
            :key="filter"
            :class="['filter-button', { active: currentFilter === filter }]"
            @click="currentFilter = filter"
          >
            {{ filter }}
          </button>
        </div>

        <div class="campaign-cards">
          <div 
            v-for="campaign in filteredCampaigns" 
            :key="campaign.id"
            class="campaign-card"
            @click="navigateToCampaign(campaign.link)"
          >
            <div class="card-icon">
              <span class="campaign-symbol">•</span>
              <span class="campaign-tag">{{ campaign.category }}</span>
            </div>
            <div class="card-content">
              <h3>{{ campaign.title }}</h3>
              <p>{{ campaign.description }}</p>
              <div class="card-footer">
                <div class="progress-bar">
                  <div class="progress" :style="{ width: campaign.progress + '%' }"></div>
                </div>
                <span class="progress-text">{{ campaign.progress }}% Progress</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Impact Stats -->
    <section class="impact-stats">
      <div class="container">
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-symbol">★</div>
            <div class="stat-number">
              <span class="counter">25,000+</span>
            </div>
            <div class="stat-label">Active Supporters</div>
          </div>
          <div class="stat-card">
            <div class="stat-symbol">♥</div>
            <div class="stat-number">
              <span class="counter">100+</span>
            </div>
            <div class="stat-label">Local Initiatives</div>
          </div>
          <div class="stat-card">
            <div class="stat-symbol">◎</div>
            <div class="stat-number">
              <span class="counter">30+</span>
            </div>
            <div class="stat-label">National Campaigns</div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="container">
        <h2>Join Our Movement for Change</h2>
        <p>Together, we can build a fairer, more sustainable future for all communities.</p>
        <button class="cta-button">Get Involved Today</button>
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
export default {
  name: "CampaignsPage",
  data() {
    return {
      currentFilter: 'All',
      filters: ['All', 'Climate', 'Healthcare', 'Social Justice', 'Education', 'Housing', 'Equality'],
      campaigns: [
        {
          id: 1,
          title: 'Climate Emergency',
          description: 'Leading the fight against climate change with ambitious goals for a sustainable, carbon-neutral future.',
          category: 'Climate',
          progress: 75,
          link: '/campaigns/climate-emergency'
        },
        {
          id: 2,
          title: 'Mental Health Support',
          description: 'Championing comprehensive mental health services and promoting wellbeing across communities.',
          category: 'Healthcare',
          progress: 60,
          link: '/campaigns/mental-health'
        },
        {
          id: 3,
          title: 'Education Reform',
          description: 'Transforming education to create equal opportunities and empower future generations.',
          category: 'Education',
          progress: 65,
          link: '/campaigns/education'
        },
        {
          id: 4,
          title: 'Housing Crisis',
          description: 'Building affordable, sustainable housing solutions and protecting tenants rights.',
          category: 'Housing',
          progress: 45,
          link: '/campaigns/housing'
        },
        {
          id: 5,
          title: 'Equality & Diversity',
          description: 'Creating an inclusive society where everyone has equal opportunities to thrive.',
          category: 'Equality',
          progress: 70,
          link: '/campaigns/equality'
        },
        {
          id: 6,
          title: 'Social Justice',
          description: 'Advocating for fairness, justice, and equal rights across all communities.',
          category: 'Social Justice',
          progress: 55,
          link: '/campaigns/social-justice'
        }
      ]
    }
  },
  computed: {
    filteredCampaigns() {
      if (this.currentFilter === 'All') return this.campaigns;
      return this.campaigns.filter(campaign => campaign.category === this.currentFilter);
    }
  },
  methods: {
    navigateToCampaign(path) {
      this.$router.push(path);
    }
  }
};
</script>

<style scoped>
/* Base Styles */
#campaigns {
  font-family: 'Inter', sans-serif;
  color: #000000;
}

/* Header Section */
.header-container {
  background: #FDBB30;
  padding: 1rem;
  text-align: center;
  color: #000000;
}

.logo-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.LibDemLogo {
  height: 50px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  color: #000000;
}

.lib-dem {
  font-weight: bold;
  font-size: 1.2rem;
  color: #000000;
}

.muslim-forum {
  font-size: 1rem;
  color: #000000;
}

/* Hero Section */
.campaigns-hero {
  height: 80vh;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
  position: relative;
}

.hero-content {
  max-width: 800px;
  padding: 0 2rem;
  color: white;
}

.animated-title {
  font-size: 3.5rem;
  margin-bottom: 1rem;
  animation: fadeInUp 1s ease;
  color: white;
}

.hero-subtitle {
  font-size: 1.2rem;
  margin-bottom: 2rem;
  animation: fadeInUp 1s ease 0.2s;
  opacity: 0;
  animation-fill-mode: forwards;
  color: white;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  justify-content: center;
  animation: fadeInUp 1s ease 0.4s;
  opacity: 0;
  animation-fill-mode: forwards;
}

.primary-button, .secondary-button {
  padding: 0.8rem 2rem;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-button {
  background: #FDBB30;
  color: #000000;
  border: none;
}

.secondary-button {
  background: transparent;
  color: white;
  border: 2px solid white;
}

.scroll-indicator {
  position: absolute;
  bottom: 2rem;
  color: white;
  text-align: center;
}

.mouse {
  width: 30px;
  height: 50px;
  border: 2px solid white;
  border-radius: 15px;
  margin: 0 auto 1rem;
}

/* Featured Campaign */
.featured-campaign {
  padding: 6rem 2rem;
  background: #ffffff;
}

.featured-content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.highlight-tag {
  background: #FDBB30;
  color: #000000;
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-weight: 600;
  display: inline-block;
  margin-bottom: 1rem;
}

.campaign-highlights {
  list-style: none;
  padding: 0;
  margin: 2rem 0;
}

.campaign-highlights li {
  margin: 1rem 0;
  display: flex;
  align-items: center;
  gap: 1rem;
}

.campaign-highlights i {
  color: #FDBB30;
}

/* Campaign Cards */
.campaigns-grid {
  padding: 4rem 0;
  background: #f5f5f5;
  color: #000000;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.section-title {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: #000000;
}

.filter-tabs {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.filter-button {
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  background: white;
  cursor: pointer;
  transition: all 0.3s ease;
  color: #000000;
}

.filter-button.active {
  background: #FDBB30;
  color: #000000;
}

.campaign-cards {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.campaign-card {
  background: white;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  cursor: pointer;
  transition: all 0.3s ease;
  color: #000000;
}

.campaign-card:hover {
  transform: translateY(-5px);
}

.card-icon {
  height: 200px;
  background: linear-gradient(135deg, #FDBB30, #FFE5A8);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  color: #000000;
}

.campaign-tag {
  position: absolute;
  top: 1rem;
  right: 1rem;
  background: black;
  color: #FDBB30;
  padding: 0.5rem 1rem;
  border-radius: 15px;
  font-size: 0.9rem;
}

.card-content {
  padding: 2rem;
  color: #000000;
}

.card-content h3 {
  margin-bottom: 1rem;
  font-size: 1.5rem;
  color: #000000;
}

.card-content p {
  color: #666666;
  margin-bottom: 1.5rem;
}

.progress-bar {
  height: 8px;
  background: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 0.5rem;
}

.progress {
  height: 100%;
  background: #FDBB30;
  border-radius: 4px;
}

.progress-text {
  color: #666666;
  font-size: 0.9rem;
}

/* Impact Stats */
.impact-stats {
  padding: 4rem 0;
  background: #ffffff;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  text-align: center;
  padding: 2rem;
  background: white;
  border-radius: 15px;
  box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.stat-symbol {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #FDBB30;
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  margin: 1rem 0;
  color: #000000;
}

.counter {
  color: #000000;
}

.stat-label {
  font-size: 1.2rem;
  color: #000000;
  margin-top: 0.5rem;
}

/* Add hover effect */
.stat-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 25px rgba(0,0,0,0.15);
}

/* CTA Section */
.cta-section {
  background: #FDBB30;
  padding: 4rem 0;
  text-align: center;
  color: #000000;
}

.cta-content {
  max-width: 800px;
  margin: 0 auto;
}

.cta-content h2 {
  color: #000000;
  font-size: 2.5rem;
  margin-bottom: 1rem;
}

.cta-content p {
  color: #000000;
  font-size: 1.2rem;
  margin-bottom: 2rem;
}

.cta-button {
  margin-top: 2rem;
  padding: 1rem 2rem;
  background: #000000;
  color: #FDBB30;
  border: none;
  border-radius: 25px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

/* Footer Section */
.footer {
  background: #f5f5f5;
  padding: 2rem;
  text-align: center;
  color: #000000;
}

.footer a {
  color: #FDBB30;
  text-decoration: none;
}

.footer a:hover {
  text-decoration: underline;
}

/* Learn More Link Styles */
.learn-more {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: #FDBB30;
  text-decoration: none;
  font-weight: 600;
  transition: all 0.3s ease;
}

.learn-more i {
  transition: transform 0.3s ease;
}

.learn-more:hover {
  color: #000000;
}

.learn-more:hover i {
  transform: translateX(5px);
}

/* Featured Image Styles */
.featured-image {
  position: relative;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 20px 40px rgba(0,0,0,0.1);
  transform: translateY(0);
  transition: all 0.5s ease;
}

.featured-image:hover {
  transform: translateY(-10px);
}

.featured-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.featured-image:hover img {
  transform: scale(1.05);
}

/* Animation Enhancements */
.campaign-card, .stat-card, .featured-content {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 1s ease forwards;
}

.campaign-card:nth-child(2) {
  animation-delay: 0.2s;
}

.campaign-card:nth-child(3) {
  animation-delay: 0.4s;
}

.stat-card:nth-child(2) {
  animation-delay: 0.2s;
}

.stat-card:nth-child(3) {
  animation-delay: 0.4s;
}

/* Smooth Scroll Behavior */
html {
  scroll-behavior: smooth;
}

/* Enhanced Responsive Design */
@media (max-width: 768px) {
  .animated-title {
    font-size: 2.5rem;
    color: white;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .filter-tabs {
    flex-direction: column;
    align-items: center;
  }

  .stat-card {
    padding: 1.5rem;
  }

  .counter {
    font-size: 2.8rem;
  }

  .cta-content h2 {
    font-size: 2rem;
  }
}
</style>
