<template>
    <div id="equality-page">
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
  
      <!-- Hero Section with Parallax -->
      <section class="hero">
        <div class="parallax-bg"></div>
        <div class="hero-content">
          <h1 class="animated-title">Championing Equality</h1>
          <p class="hero-subtitle">Building a fair and inclusive society for all</p>
          <div class="hero-stats">
            <div class="stat-item" v-for="(stat, index) in stats" :key="index">
              <div class="stat-number">
                <span class="counter">{{ stat.value }}</span>{{ stat.unit }}
              </div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
          <button class="cta-button pulse-animation">Join Our Movement</button>
        </div>
        <div class="scroll-indicator">
          <div class="mouse"></div>
          <span>Scroll to explore</span>
        </div>
      </section>
  
      <!-- Core Values Section -->
      <section class="core-values">
        <div class="container">
          <h2 class="section-title">Our Core Values</h2>
          <div class="values-grid">
            <div class="value-card" v-for="(value, index) in coreValues" :key="index">
              <div class="value-icon">
                <font-awesome-icon :icon="value.icon" size="2x" />
              </div>
              <h3>{{ value.title }}</h3>
              <p>{{ value.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Current Initiatives -->
      <section class="initiatives">
        <div class="container">
          <h2 class="section-title">Current Initiatives</h2>
          <div class="initiatives-grid">
            <div class="initiative-card" v-for="(initiative, index) in initiatives" :key="index">
              <div class="initiative-content">
                <font-awesome-icon :icon="initiative.icon" size="3x" class="initiative-icon" />
                <h3>{{ initiative.title }}</h3>
                <p>{{ initiative.description }}</p>
                <div class="progress-bar">
                  <div class="progress" :style="{ width: initiative.progress + '%' }"></div>
                </div>
                <span class="progress-text">{{ initiative.progress }}% Progress</span>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Impact Stories -->
      <section class="impact-stories">
        <div class="container">
          <h2 class="section-title">Impact Stories</h2>
          <div class="stories-grid">
            <div class="story-card" v-for="(story, index) in stories" :key="index">
              <div class="story-content">
                <div class="story-icon">
                  <font-awesome-icon :icon="story.icon" size="2x" />
                </div>
                <h3>{{ story.title }}</h3>
                <p>{{ story.description }}</p>
                <button class="story-button">Read More</button>
              </div>
              <div class="card-overlay"></div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Get Involved Section -->
      <section class="get-involved">
        <div class="container">
          <h2 class="section-title">How to Get Involved</h2>
          <div class="involvement-grid">
            <div class="involvement-card" v-for="(option, index) in involvementOptions" :key="index">
              <div class="involvement-icon">
                <font-awesome-icon :icon="option.icon" size="2x" />
              </div>
              <h3>{{ option.title }}</h3>
              <p>{{ option.description }}</p>
              <button class="involvement-button">Get Started</button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Newsletter Section -->
      <section class="newsletter-section">
        <div class="container">
          <div class="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Join our newsletter to receive updates on our equality initiatives</p>
            <div class="newsletter-form">
              <input type="email" placeholder="Enter your email" class="email-input" />
              <button class="subscribe-button">
                Subscribe
                <font-awesome-icon icon="paper-plane" class="send-icon" />
              </button>
            </div>
          </div>
        </div>
      </section>
  
      <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} Liberal Democrats Muslim Forum. All rights reserved.</p>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "EqualityPage",
    data() {
      return {
        stats: [
          { value: '10K', unit: '+', label: 'Supporters' },
          { value: '50', unit: '+', label: 'Local Initiatives' },
          { value: '100', unit: '%', label: 'Commitment' }
        ],
        coreValues: [
          {
            icon: ['fas', 'balance-scale'],
            title: 'Equal Rights',
            description: 'Ensuring equal rights and opportunities for all members of society'
          },
          {
            icon: ['fas', 'hands-helping'],
            title: 'Inclusion',
            description: 'Creating an inclusive environment where everyone feels valued'
          },
          {
            icon: ['fas', 'globe'],
            title: 'Diversity',
            description: 'Celebrating and embracing our diverse communities'
          }
        ],
        initiatives: [
          {
            icon: ['fas', 'users'],
            title: 'Workplace Equality',
            description: 'Promoting equal opportunities in the workplace',
            progress: 75
          },
          {
            icon: ['fas', 'university'],
            title: 'Education Access',
            description: 'Ensuring equal access to quality education',
            progress: 85
          },
          {
            icon: ['fas', 'hand-holding-heart'],
            title: 'Community Support',
            description: 'Supporting marginalized communities',
            progress: 60
          }
        ],
        stories: [
          {
            icon: ['fas', 'star'],
            title: 'Community Success',
            description: 'How our initiatives have transformed local communities'
          },
          {
            icon: ['fas', 'award'],
            title: 'Recognition',
            description: 'Awards and acknowledgments for our equality work'
          }
        ],
        involvementOptions: [
          {
            icon: ['fas', 'hands-helping'],
            title: 'Volunteer',
            description: 'Join our volunteer network and make a difference'
          },
          {
            icon: ['fas', 'donate'],
            title: 'Donate',
            description: 'Support our initiatives financially'
          },
          {
            icon: ['fas', 'bullhorn'],
            title: 'Spread the Word',
            description: 'Help us raise awareness about equality'
          }
        ]
      }
    }
  };
  </script>
  
  <style scoped>
  #equality-page {
    font-family: 'Inter', sans-serif;
    color: #000000;
  }
  
  /* Header Styles */
  .header-container {
    background: #FDBB30;
    padding: 1rem;
    text-align: center;
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
  .hero {
    position: relative;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    overflow: hidden;
  }
  
  .parallax-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
    z-index: -1;
  }
  
  .hero-content {
    text-align: center;
    z-index: 1;
    padding: 2rem;
  }
  
  .animated-title {
    font-size: 4rem;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    animation: fadeInUp 1s ease 0.2s;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  
  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 4rem;
    margin-bottom: 3rem;
    animation: fadeInUp 1s ease 0.4s;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #FDBB30;
  }
  
  .stat-label {
    font-size: 1.1rem;
    color: white;
  }
  
  /* Core Values Section */
  .core-values {
    padding: 6rem 0;
    background: #ffffff;
  }
  
  .values-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .value-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    text-align: center;
  }
  
  .value-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  
  .value-icon {
    color: #FDBB30;
    margin-bottom: 1.5rem;
  }
  
  /* Initiatives Section */
  .initiatives {
    padding: 6rem 0;
    background: #f5f5f5;
  }
  
  .initiatives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .initiative-card {
    background: white;
    border-radius: 15px;
    overflow: hidden;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
  }
  
  .initiative-content {
    padding: 2rem;
    text-align: center;
  }
  
  .initiative-icon {
    color: #FDBB30;
    margin-bottom: 1.5rem;
  }
  
  .progress-bar {
    height: 8px;
    background: #f0f0f0;
    border-radius: 4px;
    overflow: hidden;
    margin: 1rem 0;
  }
  
  .progress {
    height: 100%;
    background: #FDBB30;
    border-radius: 4px;
    transition: width 1s ease;
  }
  
  /* Impact Stories Section */
  .impact-stories {
    padding: 6rem 0;
    background: #ffffff;
  }
  
  .stories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .story-card {
    position: relative;
    height: 300px;
    border-radius: 15px;
    overflow: hidden;
    cursor: pointer;
  }
  
  .story-content {
    position: relative;
    z-index: 2;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
  }
  
  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, #000000, #FDBB30);
    opacity: 0.9;
    z-index: 1;
    transition: all 0.3s ease;
  }
  
  .story-button {
    padding: 0.8rem 1.5rem;
    background: white;
    color: #000000;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1.5rem;
  }
  
  /* Get Involved Section */
  .get-involved {
    padding: 6rem 0;
    background: #f5f5f5;
  }
  
  .involvement-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .involvement-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    text-align: center;
    transition: all 0.3s ease;
  }
  
  .involvement-button {
    padding: 0.8rem 1.5rem;
    background: #FDBB30;
    color: #000000;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1.5rem;
  }
  
  /* Newsletter Section */
  .newsletter-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #FDBB30, #FFE5A8);
  }
  
  .newsletter-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .newsletter-form {
    display: flex;
    gap: 1rem;
    margin-top: 2rem;
  }
  
  .email-input {
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
    cursor: pointer;
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    gap: 0.5rem;
  }
  
  /* Animations */
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
  
  @keyframes pulse {
    0% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(253, 187, 48, 0.4);
    }
    70% {
      transform: scale(1.05);
      box-shadow: 0 0 0 10px rgba(253, 187, 48, 0);
    }
    100% {
      transform: scale(1);
      box-shadow: 0 0 0 0 rgba(253, 187, 48, 0);
    }
  }
  
  /* Responsive Design */
  @media (max-width: 768px) {
    .animated-title {
      font-size: 2.5rem;
    }
    
    .hero-stats {
      flex-direction: column;
      gap: 2rem;
    }
    
    .newsletter-form {
      flex-direction: column;
    }
    
    .values-grid,
    .initiatives-grid,
    .stories-grid,
    .involvement-grid {
      grid-template-columns: 1fr;
    }
  }
  </style>
