<template>
    <div id="mental-health">
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
          <h1 class="animated-title">Mental Health Matters</h1>
          <p class="hero-subtitle">Supporting mental wellbeing and ensuring access to quality care</p>
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
  
      <!-- Key Initiatives Section -->
      <section class="initiatives">
        <div class="container">
          <h2 class="section-title">Our Key Initiatives</h2>
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
  
      <!-- Support Resources -->
      <section class="resources">
        <div class="container">
          <h2 class="section-title">Support Resources</h2>
          <div class="resources-grid">
            <div class="resource-card" v-for="(resource, index) in resources" :key="index">
              <div class="resource-content">
                <div class="resource-icon">
                  <font-awesome-icon :icon="resource.icon" size="2x" />
                </div>
                <h3>{{ resource.title }}</h3>
                <p>{{ resource.description }}</p>
                <button class="resource-button">Learn More</button>
              </div>
              <div class="card-overlay"></div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Success Stories -->
      <section class="success-stories">
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
            <p>Join our newsletter to receive updates on mental health initiatives</p>
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
    name: "MentalHealthPage",
    data() {
      return {
        stats: [
          { value: '1M', unit: '+', label: 'People Supported' },
          { value: '500', unit: '+', label: 'Local Programs' },
          { value: '24/7', unit: '', label: 'Support Available' }
        ],
        initiatives: [
          {
            icon: ['fas', 'heart'],
            title: 'Early Intervention',
            description: 'Supporting early mental health intervention programs',
            progress: 75
          },
          {
            icon: ['fas', 'hands-helping'],
            title: 'Community Support',
            description: 'Building strong community mental health networks',
            progress: 65
          },
          {
            icon: ['fas', 'graduation-cap'],
            title: 'Education & Awareness',
            description: 'Promoting mental health awareness and education',
            progress: 85
          }
        ],
        resources: [
          {
            icon: ['fas', 'phone'],
            title: 'Helpline Support',
            description: '24/7 mental health support helpline'
          },
          {
            icon: ['fas', 'users'],
            title: 'Support Groups',
            description: 'Local community support groups'
          },
          {
            icon: ['fas', 'book'],
            title: 'Resources Library',
            description: 'Access to mental health resources and guides'
          }
        ],
        stories: [
          {
            icon: ['fas', 'star'],
            title: 'Community Impact',
            description: 'How our initiatives have helped communities'
          },
          {
            icon: ['fas', 'heart'],
            title: 'Personal Journeys',
            description: 'Stories of recovery and support'
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
            description: 'Support our mental health initiatives'
          },
          {
            icon: ['fas', 'bullhorn'],
            title: 'Raise Awareness',
            description: 'Help spread mental health awareness'
          }
        ]
      }
    }
  };
  </script>
  
  <style scoped>
  #mental-health {
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
  }
  
  .logo-group {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 1rem;
  }
  
  .LibDemLogo {
    height: 50px;
    width: auto;
  }
  
  .logo-text {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    color: #000000;
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
    padding: 50px;
    color: #000;
    background: linear-gradient(135deg, #ffcc00, #ffe600);
    position: relative;
    overflow: hidden;
  }

  .hero-content {
    z-index: 2;
    position: relative;
  }

  .animated-title {
    font-size: 36px;
    font-weight: bold;
    margin-bottom: 10px;
  }

  .hero-subtitle {
    font-size: 18px;
    margin-bottom: 20px;
  }

  .hero-stats {
    display: flex;
    justify-content: space-between;
    margin-bottom: 20px;
  }

  .stat-item {
    text-align: center;
  }

  .stat-number {
    font-size: 24px;
    font-weight: bold;
  }

  .stat-label {
    font-size: 14px;
    color: #666;
  }

  .cta-button {
    margin-top: 20px;
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

  .cta-button:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
  }
  
  /* Key Initiatives Section */
  .initiatives {
    padding: 40px;
    background: #f9f9f9;
  }

  .section-title {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .initiatives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .initiative-card {
    text-align: center;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .initiative-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .initiative-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  /* Support Resources Section */
  .resources {
    padding: 40px;
    background: #fff;
  }

  .resources-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .resource-card {
    text-align: center;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .resource-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .resource-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  /* Success Stories Section */
  .success-stories {
    padding: 40px;
    background: #f9f9f9;
  }

  .stories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .story-card {
    text-align: center;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .story-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .story-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  /* Get Involved Section */
  .get-involved {
    padding: 40px;
    background: #fff;
  }

  .involvement-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .involvement-card {
    text-align: center;
    padding: 20px;
    background: #f9f9f9;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .involvement-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .involvement-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  /* Newsletter Section */
  .newsletter-section {
    padding: 40px;
    background: #f9f9f9;
  }

  .newsletter-content {
    text-align: center;
  }

  .newsletter-form {
    display: flex;
    justify-content: center;
    margin-top: 20px;
  }

  .email-input {
    padding: 12px;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-right: 10px;
  }

  .subscribe-button {
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

  .subscribe-button:hover {
    transform: scale(1.1);
    box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
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

  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    animation: fadeInUp 1s ease 0.8s;
    opacity: 0;
    animation-fill-mode: forwards;
  }

  .mouse {
    width: 30px;
    height: 50px;
    border: 2px solid #000000;
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
    background: #000000;
    border-radius: 50%;
    animation: scroll 2s infinite;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    width: 100%;
  }

  .initiative-content {
    text-align: center;
    padding: 2rem;
    color: #000000;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .progress-bar {
    width: 100%;
    height: 8px;
    background: #f0f0f0;
    border-radius: 4px;
    margin: 1rem 0;
    overflow: hidden;
    position: relative;
  }

  .progress {
    height: 100%;
    background: #FDBB30;
    border-radius: 4px;
    transition: width 1.5s ease-in-out;
  }

  .progress-text {
    font-size: 0.9rem;
    color: #000000;
    margin-top: 0.5rem;
    font-weight: 500;
  }

  .resource-content {
    text-align: center;
    padding: 2rem;
    color: #000000;
    position: relative;
    z-index: 2;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }

  .resource-button {
    padding: 0.8rem 1.5rem;
    background: #FDBB30;
    color: #000000;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1.5rem;
    position: relative;
    z-index: 2;
  }

  .resource-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(253, 187, 48, 0.3);
  }

  .card-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(253, 187, 48, 0.1);
    border-radius: 15px;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  .story-button {
    padding: 0.8rem 1.5rem;
    background: #FDBB30;
    color: #000000;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1.5rem;
    position: relative;
    z-index: 2;
  }

  .story-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(253, 187, 48, 0.3);
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

  .involvement-button:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(253, 187, 48, 0.3);
  }

  .send-icon {
    color: #000000;
    transition: transform 0.3s ease;
    margin-left: 0.5rem;
  }

  @keyframes scroll {
    0% {
      opacity: 1;
      transform: translateX(-50%) translateY(0);
    }
    100% {
      opacity: 0;
      transform: translateX(-50%) translateY(20px);
    }
  }

  /* Add hover effects for cards */
  .resource-card:hover .card-overlay,
  .story-card:hover .card-overlay {
    opacity: 1;
  }
  </style>
