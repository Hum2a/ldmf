<template>
    <div id="climate-emergency">
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
          <h1 class="animated-title">Tackling the Climate Emergency</h1>
          <p class="hero-subtitle">Our commitment to achieving net-zero emissions and protecting our planet</p>
          <div class="hero-stats">
            <div class="stat-item" v-for="(stat, index) in stats" :key="index">
              <div class="stat-number">
                <span class="counter">{{ stat.value }}</span>{{ stat.unit }}
              </div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
          <button class="cta-button pulse-animation">Take Action Now</button>
        </div>
        <div class="scroll-indicator">
          <div class="mouse"></div>
          <span>Scroll to explore</span>
        </div>
      </section>
  
      <!-- Key Points Section -->
      <section class="key-points">
        <div class="container">
          <h2 class="section-title">Our Approach</h2>
          <div class="points-grid">
            <div class="point-card" v-for="(point, index) in keyPoints" :key="index">
              <div class="point-icon">
                <font-awesome-icon :icon="point.icon" size="2x" />
              </div>
              <h3>{{ point.title }}</h3>
              <p>{{ point.description }}</p>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Progress Timeline -->
      <section class="timeline-section">
        <div class="container">
          <h2 class="section-title">Our Progress</h2>
          <div class="timeline">
            <div class="timeline-item" v-for="(milestone, index) in timeline" :key="index">
              <div class="timeline-content">
                <div class="timeline-date">{{ milestone.date }}</div>
                <h3>{{ milestone.title }}</h3>
                <p>{{ milestone.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Action Cards -->
      <section class="action-section">
        <div class="container">
          <h2 class="section-title">How You Can Help</h2>
          <div class="action-cards">
            <div class="action-card" v-for="(action, index) in actions" :key="index">
              <div class="card-content">
                <font-awesome-icon :icon="action.icon" size="3x" class="action-icon" />
                <h3>{{ action.title }}</h3>
                <p>{{ action.description }}</p>
                <button class="action-button">Learn More</button>
              </div>
              <div class="card-overlay"></div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Newsletter Section -->
      <section class="newsletter-section">
        <div class="container">
          <div class="newsletter-content">
            <h2>Stay Updated</h2>
            <p>Join our newsletter to receive updates on our climate initiatives</p>
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
  
      <!-- Footer Section -->
      <footer class="footer">
        <p>&copy; {{ new Date().getFullYear() }} Liberal Democrats Muslim Forum. All rights reserved.</p>
        <a href="https://www.libdems.org.uk/" target="_blank" rel="noopener noreferrer">Liberal Democrats Official Website</a>
      </footer>
    </div>
  </template>
  
  <script>
  export default {
    name: "ClimateEmergencyPage",
    data() {
      return {
        stats: [
          { value: '45%', unit: '', label: 'Carbon Reduction' },
          { value: '2M', unit: '+', label: 'Trees Planted' },
          { value: '100', unit: 'K', label: 'Supporters' }
        ],
        keyPoints: [
          {
            icon: ['fas', 'leaf'],
            title: 'Renewable Energy',
            description: 'Transitioning to 100% renewable energy sources by 2030'
          },
          {
            icon: ['fas', 'recycle'],
            title: 'Zero Waste',
            description: 'Implementing comprehensive recycling and waste reduction programs'
          },
          {
            icon: ['fas', 'tree'],
            title: 'Reforestation',
            description: 'Planting millions of trees to combat deforestation'
          }
        ],
        timeline: [
          {
            date: '2023',
            title: 'Carbon Neutral Operations',
            description: 'Achieved carbon neutrality in all party operations'
          },
          {
            date: '2024',
            title: 'Green Transport Initiative',
            description: 'Launching nationwide electric vehicle infrastructure'
          },
          {
            date: '2025',
            title: 'Renewable Energy Transition',
            description: 'Complete transition to renewable energy sources'
          }
        ],
        actions: [
          {
            icon: ['fas', 'hand-holding-heart'],
            title: 'Volunteer',
            description: 'Join our local climate action groups'
          },
          {
            icon: ['fas', 'donate'],
            title: 'Donate',
            description: 'Support our climate initiatives'
          },
          {
            icon: ['fas', 'share-alt'],
            title: 'Spread the Word',
            description: 'Share our message with your community'
          }
        ]
      }
    }
  };
  </script>
  
  <style scoped>
  #climate-emergency {
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
    margin-right: 10px;
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
    height: 100vh;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    color: white;
    margin-top: 70px;
  }

  .parallax-bg {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5));
    transform: translateZ(-1px) scale(2);
  }

  .hero-content {
    text-align: center;
    z-index: 1;
    max-width: 1200px;
    padding: 0 2rem;
  }

  .animated-title {
    font-size: 4rem;
    margin-bottom: 1rem;
    opacity: 0;
    animation: fadeInUp 1s ease forwards;
  }

  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    opacity: 0;
    animation: fadeInUp 1s ease 0.3s forwards;
  }

  .hero-stats {
    display: flex;
    justify-content: center;
    gap: 3rem;
    margin-bottom: 3rem;
    opacity: 0;
    animation: fadeInUp 1s ease 0.6s forwards;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 3rem;
    font-weight: bold;
    color: #FDBB30;
  }

  .stat-label {
    font-size: 1.2rem;
    color: white;
  }

  .counter {
    display: inline-block;
    animation: countUp 2s ease-out forwards;
  }

  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background: #FDBB30;
    color: #000000;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    transition: all 0.3s ease;
    opacity: 0;
    animation: fadeInUp 1s ease 0.9s forwards;
  }

  .pulse-animation {
    animation: pulse 2s infinite;
  }
  
  /* Key Points Section */
  .key-points {
    padding: 6rem 0;
    background: #f5f5f5;
  }

  .points-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }

  .point-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    text-align: center;
  }

  .point-card:hover {
    transform: translateY(-10px);
    box-shadow: 0 15px 30px rgba(0,0,0,0.2);
  }

  .point-icon {
    color: #FDBB30;
    margin-bottom: 1.5rem;
  }
  
  /* Progress Timeline */
  .timeline-section {
    padding: 6rem 0;
    background: white;
  }

  .timeline {
    position: relative;
    max-width: 800px;
    margin: 0 auto;
    padding: 2rem 0;
  }

  .timeline::before {
    content: '';
    position: absolute;
    top: 0;
    left: 50%;
    width: 2px;
    height: 100%;
    background: #FDBB30;
    transform: translateX(-50%);
  }

  .timeline-item {
    margin-bottom: 3rem;
    position: relative;
  }

  .timeline-content {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    position: relative;
    width: calc(50% - 30px);
    margin-left: auto;
    transition: all 0.3s ease;
  }

  .timeline-item:nth-child(odd) .timeline-content {
    margin-left: 0;
    margin-right: auto;
  }

  .timeline-content:hover {
    transform: scale(1.05);
  }

  .timeline-date {
    color: #FDBB30;
    font-weight: bold;
    margin-bottom: 1rem;
  }
  
  /* Action Cards */
  .action-section {
    padding: 6rem 0;
    background: #f5f5f5;
  }

  .action-cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }

  .action-card {
    position: relative;
    border-radius: 15px;
    overflow: hidden;
    height: 300px;
    cursor: pointer;
  }

  .card-content {
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
    transition: all 0.3s ease;
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

  .action-card:hover .card-overlay {
    opacity: 0.95;
  }

  .action-card:hover .card-content {
    transform: translateY(-10px);
  }

  .action-icon {
    margin-bottom: 1.5rem;
    color: #FDBB30;
  }

  .action-button {
    margin-top: 1.5rem;
    padding: 0.8rem 1.5rem;
    background: #FDBB30;
    color: #000000;
    border: none;
    border-radius: 25px;
    cursor: pointer;
    transition: all 0.3s ease;
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

  .subscribe-button:hover {
    transform: translateY(-2px);
  }

  .send-icon {
    transition: all 0.3s ease;
  }

  .subscribe-button:hover .send-icon {
    transform: translateX(5px);
  }
  
  /* Footer Section */
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

  @keyframes countUp {
    from {
      transform: translateY(20px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    .animated-title {
      font-size: 2.5rem;
    }
    
    .hero-stats {
      flex-direction: column;
      gap: 2rem;
    }
    
    .timeline-content {
      width: 100%;
      margin: 0 !important;
    }
    
    .newsletter-form {
      flex-direction: column;
    }
  }
  </style>
