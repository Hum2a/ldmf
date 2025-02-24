<template>
    <div id="housing-page">
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
          <h1 class="animated-title">Housing for All</h1>
          <p class="hero-subtitle">Creating affordable, sustainable housing solutions across the UK</p>
          <div class="hero-stats">
            <div class="stat-item" v-for="(stat, index) in stats" :key="index">
              <div class="stat-number">
                <span class="counter">{{ stat.value }}</span>{{ stat.unit }}
              </div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
          <button class="cta-button pulse-animation">Support Our Campaign</button>
        </div>
        <div class="scroll-indicator">
          <div class="mouse"></div>
          <span>Scroll to explore</span>
        </div>
      </section>
  
      <!-- Key Objectives Section -->
      <section class="objectives">
        <div class="container">
          <h2 class="section-title">Our Key Objectives</h2>
          <div class="objectives-grid">
            <div class="objective-card" v-for="(objective, index) in objectives" :key="index">
              <div class="objective-icon">
                <font-awesome-icon :icon="objective.icon" size="2x" />
              </div>
              <h3>{{ objective.title }}</h3>
              <p>{{ objective.description }}</p>
              <div class="progress-bar">
                <div class="progress" :style="{ width: objective.progress + '%' }"></div>
              </div>
              <span class="progress-text">{{ objective.progress }}% Progress</span>
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
                <button class="initiative-button">Learn More</button>
              </div>
              <div class="card-overlay"></div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Success Stories -->
      <section class="success-stories">
        <div class="container">
          <h2 class="section-title">Success Stories</h2>
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
          <h2 class="section-title">Make a Difference</h2>
          <div class="involvement-grid">
            <div class="involvement-card" v-for="(option, index) in involvementOptions" :key="index">
              <div class="involvement-icon">
                <font-awesome-icon :icon="option.icon" size="2x" />
              </div>
              <h3>{{ option.title }}</h3>
              <p>{{ option.description }}</p>
              <button class="involvement-button">Join Now</button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Newsletter Section -->
      <section class="newsletter-section">
        <div class="container">
          <div class="newsletter-content">
            <h2>Stay Connected</h2>
            <p>Join our newsletter to receive updates on our housing initiatives</p>
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
    name: "HousingPage",
    data() {
      return {
        stats: [
          { value: '300K', unit: '', label: 'New Homes Target' },
          { value: '100K', unit: '', label: 'Social Homes' },
          { value: '50K', unit: '+', label: 'Supporters' }
        ],
        objectives: [
          {
            icon: ['fas', 'home'],
            title: 'Affordable Housing',
            description: 'Creating more affordable housing options across the UK',
            progress: 65
          },
          {
            icon: ['fas', 'shield-alt'],
            title: 'Tenant Protection',
            description: 'Strengthening rights and protections for tenants',
            progress: 75
          },
          {
            icon: ['fas', 'leaf'],
            title: 'Sustainable Homes',
            description: 'Promoting eco-friendly housing solutions',
            progress: 55
          }
        ],
        initiatives: [
          {
            icon: ['fas', 'building'],
            title: 'Social Housing',
            description: 'Expanding social housing availability'
          },
          {
            icon: ['fas', 'hand-holding-heart'],
            title: 'First-time Buyers',
            description: 'Supporting first-time homebuyers'
          },
          {
            icon: ['fas', 'tools'],
            title: 'Housing Reform',
            description: 'Implementing comprehensive housing reforms'
          }
        ],
        stories: [
          {
            icon: ['fas', 'star'],
            title: 'Community Impact',
            description: 'How our housing initiatives have transformed communities'
          },
          {
            icon: ['fas', 'users'],
            title: 'Family Success',
            description: 'Stories of families finding their dream homes'
          }
        ],
        involvementOptions: [
          {
            icon: ['fas', 'hands-helping'],
            title: 'Volunteer',
            description: 'Join our volunteer network'
          },
          {
            icon: ['fas', 'donate'],
            title: 'Donate',
            description: 'Support our housing initiatives'
          },
          {
            icon: ['fas', 'bullhorn'],
            title: 'Spread the Word',
            description: 'Help raise awareness'
          }
        ]
      }
    }
  };
  </script>
  
  <style scoped>
  #housing-page {
    font-family: 'Inter', sans-serif;
    color: #000000;
  }
  
  /* Header Section */
  .header-container {
    padding: 20px;
    background: #FDBB30;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #000000;
  }
  
  .LibDemLogo {
    height: 50px;
    width: auto;
  }
  
  .logo-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  
  .lib-dem {
    font-size: 24px;
    font-weight: bold;
    color: #000000;
  }
  
  .muslim-forum {
    font-size: 18px;
    color: #000000;
  }
  
  /* Hero Section */
  .hero {
    height: 80vh;
    position: relative;
    overflow: hidden;
    color: white;
  }
  
  .parallax-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-size: cover;
    background-position: center;
    background-attachment: fixed;
    filter: brightness(0.6);
  }
  
  .hero-content {
    position: relative;
    z-index: 2;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem;
    text-align: center;
    color: #000000;
  }
  
  .animated-title {
    font-size: 3.5rem;
    font-weight: bold;
    margin-bottom: 1.5rem;
    animation: fadeInUp 1s ease;
    color: #000000;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 2rem;
    animation: fadeInUp 1s ease 0.2s;
    opacity: 0;
    animation-fill-mode: forwards;
    color: #000000;
  }
  
  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin: 2rem 0;
    animation: fadeInUp 1s ease 0.4s;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  
  .stat-item {
    text-align: center;
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    color: #000000;
    margin-bottom: 0.5rem;
  }
  
  .stat-label {
    font-size: 1.1rem;
    color: #000000;
  }
  
  .counter {
    display: inline-block;
  }
  
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background: #FDBB30;
    color: #000000;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
    animation: fadeInUp 1s ease 0.6s;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  
  .cta-button.pulse-animation {
    animation: pulse 2s infinite;
  }
  
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #000000;
    animation: fadeInUp 1s ease 0.8s;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  
  .mouse {
    width: 30px;
    height: 50px;
    border: 2px solid white;
    border-radius: 15px;
    margin: 0 auto 1rem;
    position: relative;
  }
  
  .mouse::before {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    transform: translateX(-50%);
    width: 6px;
    height: 6px;
    background: white;
    border-radius: 50%;
    animation: scroll 2s infinite;
  }
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    text-align: center;
    margin-bottom: 3rem;
    color: #000000;
    position: relative;
    padding-bottom: 1rem;
  }
  
  .section-title::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 4px;
    background: #FDBB30;
    border-radius: 2px;
  }
  
  .objectives {
    padding: 6rem 0;
    background: #ffffff;
  }
  
  .objectives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
  }
  
  .objective-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    text-align: center;
    color: #000000;
  }
  
  .objective-card h3 {
    color: #000000;
    margin-bottom: 1rem;
  }
  
  .objective-card p {
    color: #000000;
    margin-bottom: 1.5rem;
  }
  
  .objective-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  
  .objective-icon {
    color: #000000;
    margin-bottom: 1.5rem;
  }
  
  .progress-bar {
    width: 100%;
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
  
  .progress-text {
    color: #000000;
    font-size: 0.9rem;
  }
  
  /* Current Initiatives */
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
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    height: 300px;
    color: #000000;
  }
  
  .initiative-card:hover .card-overlay {
    opacity: 0.95;
  }
  
  .initiative-content {
    position: relative;
    z-index: 2;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000000;
  }
  
  .initiative-content h3 {
    color: #000000;
    margin-bottom: 1rem;
  }
  
  .initiative-content p {
    color: #000000;
    margin-bottom: 1.5rem;
  }
  
  .initiative-icon {
    color: #000000;
    margin-bottom: 1.5rem;
  }
  
  .initiative-button {
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
  
  /* Success Stories */
  .success-stories {
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
    color: #000000;
  }
  
  .story-card:hover .card-overlay {
    opacity: 0.95;
  }
  
  .story-content {
    position: relative;
    z-index: 2;
    padding: 2rem;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    text-align: center;
    color: #000000;
  }
  
  .story-content h3 {
    color: #000000;
    margin-bottom: 1rem;
  }
  
  .story-content p {
    color: #000000;
    margin-bottom: 1.5rem;
  }
  
  .story-icon {
    color: #000000;
    margin-bottom: 1.5rem;
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
    color: #000000;
  }
  
  .involvement-card h3 {
    color: #000000;
    margin-bottom: 1rem;
  }
  
  .involvement-card p {
    color: #000000;
    margin-bottom: 1.5rem;
  }
  
  .involvement-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  
  .involvement-icon {
    color: #000000;
    margin-bottom: 1.5rem;
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
    color: #000000;
  }
  
  .newsletter-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .newsletter-content h2 {
    color: #000000;
    margin-bottom: 1rem;
  }
  
  .newsletter-content p {
    color: #000000;
    margin-bottom: 2rem;
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
    color: #000000;
  }
  
  .email-input::placeholder {
    color: #000000;
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
  
  .send-icon {
    transition: transform 0.3s ease;
  }
  
  .subscribe-button:hover .send-icon {
    transform: translateX(5px);
  }
  
  .footer {
    background: #000000;
    color: #FDBB30;
    padding: 2rem;
    text-align: center;
  }
  
  /* Hover Effects */
  .cta-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(253, 187, 48, 0.3);
  }
  
  .objective-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  
  .initiative-card:hover .card-overlay {
    opacity: 0.95;
  }
  
  .story-card:hover .card-overlay {
    opacity: 0.95;
  }
  
  .involvement-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  
  .subscribe-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0,0,0,0.2);
  }
  
  /* Hover states */
  .initiative-button:hover {
    color: #000000;
    background: #FDBB30;
  }
  
  .story-button:hover {
    color: #000000;
    background: #FDBB30;
  }
  
  .involvement-button:hover {
    color: #000000;
    background: #FDBB30;
  }
  
  .subscribe-button:hover {
    color: #000000;
    background: #FDBB30;
  }
  
  /* Animations */
  @keyframes pulse {
    0% {
      transform: scale(1);
    }
    50% {
      transform: scale(1.05);
    }
    100% {
      transform: scale(1);
    }
  }
  
  /* Ensure to maintain consistent branding colors */
  :root {
    --primary-color: #FDBB30;
    --secondary-color: #000000;
    --text-color: #000000;
    --background-color: #ffffff;
  }
  
  /* Add responsive design */
  @media (max-width: 768px) {
    .animated-title {
      font-size: 2.5rem;
    }
    
    .hero-stats {
      flex-direction: column;
      gap: 2rem;
    }
    
    .objectives-grid,
    .initiatives-grid,
    .stories-grid,
    .involvement-grid {
      grid-template-columns: 1fr;
    }
    
    .newsletter-form {
      flex-direction: column;
    }
  }
  
  /* Keep white text only for elements on dark backgrounds */
  .card-overlay + .initiative-content,
  .card-overlay + .story-content {
    color: white;
    
    h3, p {
      color: white;
    }
  }
  </style>
  