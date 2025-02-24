<template>
    <div id="education-page">
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
          <h1 class="animated-title">Transforming Education</h1>
          <p class="hero-subtitle">Building a brighter future through quality education for all</p>
          <div class="hero-stats">
            <div class="stat-item" v-for="(stat, index) in stats" :key="index">
              <div class="stat-number">
                <span class="counter">{{ stat.value }}</span>{{ stat.unit }}
              </div>
              <div class="stat-label">{{ stat.label }}</div>
            </div>
          </div>
          <button class="cta-button pulse-animation">Support Our Vision</button>
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
              <div class="initiative-icon">
                <font-awesome-icon :icon="initiative.icon" size="2x" />
              </div>
              <h3>{{ initiative.title }}</h3>
              <p>{{ initiative.description }}</p>
              <div class="progress-bar">
                <div class="progress" :style="{ width: initiative.progress + '%' }"></div>
              </div>
              <span class="progress-text">{{ initiative.progress }}% Complete</span>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Impact Timeline -->
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
  
      <!-- Success Stories -->
      <section class="success-stories">
        <div class="container">
          <h2 class="section-title">Success Stories</h2>
          <div class="stories-grid">
            <div class="story-card" v-for="(story, index) in stories" :key="index">
              <div class="story-content">
                <font-awesome-icon :icon="story.icon" size="3x" class="story-icon" />
                <h3>{{ story.title }}</h3>
                <p>{{ story.description }}</p>
                <button class="story-button" @click="readMore">Read More</button>
              </div>
              <div class="card-overlay"></div>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Get Involved Section -->
      <section class="get-involved">
        <div class="container">
          <h2 class="section-title">Get Involved</h2>
          <div class="involvement-options">
            <div class="option-card" v-for="(option, index) in involvementOptions" :key="index">
              <div class="option-icon">
                <font-awesome-icon :icon="option.icon" size="2x" />
              </div>
              <h3>{{ option.title }}</h3>
              <p>{{ option.description }}</p>
              <button class="option-button">Join Now</button>
            </div>
          </div>
        </div>
      </section>
  
      <!-- Newsletter Section -->
      <section class="newsletter-section">
        <div class="container">
          <div class="newsletter-content">
            <h2>Stay Connected</h2>
            <p>Join our newsletter to receive updates on our education initiatives</p>
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
    name: "EducationPage",
    data() {
      return {
        stats: [
          { value: '50K', unit: '+', label: 'Students Supported' },
          { value: '200', unit: '+', label: 'Schools Partnered' },
          { value: '95', unit: '%', label: 'Success Rate' }
        ],
        initiatives: [
          {
            icon: ['fas', 'graduation-cap'],
            title: 'Higher Education Access',
            description: 'Expanding access to quality higher education',
            progress: 75
          },
          {
            icon: ['fas', 'book-reader'],
            title: 'Early Learning',
            description: 'Supporting early childhood education programs',
            progress: 85
          },
          {
            icon: ['fas', 'laptop'],
            title: 'Digital Learning',
            description: 'Implementing modern learning technologies',
            progress: 65
          }
        ],
        timeline: [
          {
            date: '2023',
            title: 'Digital Initiative Launch',
            description: 'Launched nationwide digital learning platform'
          },
          {
            date: '2024',
            title: 'Teacher Training Program',
            description: 'Implemented comprehensive teacher training'
          },
          {
            date: '2025',
            title: 'Education Reform',
            description: 'Major education policy reform achievement'
          }
        ],
        stories: [
          {
            icon: ['fas', 'star'],
            title: 'Community Impact',
            description: 'Transforming local communities through education'
          },
          {
            icon: ['fas', 'users'],
            title: 'Student Success',
            description: 'Supporting student achievement nationwide'
          },
          {
            icon: ['fas', 'chart-line'],
            title: 'Progress Report',
            description: 'Measuring our educational impact'
          }
        ],
        involvementOptions: [
          {
            icon: ['fas', 'hands-helping'],
            title: 'Volunteer',
            description: 'Join our education support network'
          },
          {
            icon: ['fas', 'donate'],
            title: 'Donate',
            description: 'Support our education initiatives'
          },
          {
            icon: ['fas', 'bullhorn'],
            title: 'Advocate',
            description: 'Spread the word about our mission'
          }
        ]
      }
    }
  };
  </script>
  
  <style scoped>
  #education-page {
    color: #000000;
    background: #ffffff;
  }
  
  .header-container {
    background: #FDBB30;
    padding: 1rem;
    position: fixed;
    width: 100%;
    top: 0;
    z-index: 1000;
    color: #000000;
  }
  
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
    background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
    transform: translateZ(-1px) scale(1.2);
  }
  
  .hero-content {
    position: relative;
    z-index: 1;
    text-align: center;
    max-width: 800px;
    padding: 0 2rem;
  }
  
  .animated-title {
    font-size: 4rem;
    margin-bottom: 1rem;
    animation: fadeInUp 1s ease;
    color: white;
  }
  
  .hero-subtitle {
    font-size: 1.5rem;
    margin-bottom: 3rem;
    animation: fadeInUp 1s ease 0.2s;
    opacity: 0;
    animation-fill-mode: forwards;
    color: white;
  }
  
  .hero-stats {
    display: flex;
    justify-content: space-around;
    margin: 3rem 0;
    animation: fadeInUp 1s ease 0.4s;
    opacity: 0;
    animation-fill-mode: forwards;
  }
  
  .stat-item {
    text-align: center;
    color: white;
  }
  
  .stat-number {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 0.5rem;
    color: #FDBB30;
  }
  
  .stat-label {
    font-size: 1.1rem;
    color: white;
  }
  
  .cta-button {
    padding: 1rem 2rem;
    font-size: 1.2rem;
    background: #FDBB30;
    color: #000000;
    border: none;
    border-radius: 30px;
    cursor: pointer;
    animation: pulse 2s infinite;
  }
  
  .initiatives {
    padding: 6rem 0;
    background: #f5f5f5;
  }
  
  .initiatives-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .initiative-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    color: #000000;
  }
  
  .initiative-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
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
  
  .stories-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
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
  
  .story-card:hover .card-overlay {
    opacity: 0.95;
  }
  
  .newsletter-section {
    padding: 6rem 0;
    background: linear-gradient(135deg, #FDBB30, #FFE5A8);
    color: #000000;
  }
  
  .newsletter-form {
    display: flex;
    gap: 1rem;
    max-width: 600px;
    margin: 2rem auto 0;
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
  }
  
  .section-title {
    text-align: center;
    font-size: 2.5rem;
    margin-bottom: 3rem;
    color: #000000;
    font-weight: bold;
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
  
  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
  }
  
  .success-stories {
    padding: 6rem 0;
    background: #ffffff;
    color: #000000;
  }
  
  .story-icon {
    color: #FDBB30;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }
  
  .story-card:hover .story-icon {
    transform: scale(1.1);
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
    z-index: 2;
  }
  
  .story-button:hover {
    background: #ffffff;
    color: #000000;
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(253, 187, 48, 0.3);
  }
  
  .involvement-options {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    padding: 2rem;
  }
  
  .option-card {
    background: white;
    padding: 2rem;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
    text-align: center;
  }
  
  .option-card:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 25px rgba(0,0,0,0.15);
  }
  
  .option-icon {
    color: #FDBB30;
    margin-bottom: 1.5rem;
    transition: all 0.3s ease;
  }
  
  .option-card:hover .option-icon {
    transform: scale(1.1);
  }
  
  .option-button {
    padding: 0.8rem 1.5rem;
    background: #000000;
    color: #FDBB30;
    border: none;
    border-radius: 25px;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    margin-top: 1.5rem;
  }
  
  .option-button:hover {
    background: #FDBB30;
    color: #000000;
    transform: translateY(-2px);
  }
  
  .get-involved {
    padding: 6rem 0;
    background: #f5f5f5;
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
    transform: translateX(-50%);
    width: 4px;
    height: 100%;
    background: #FDBB30;
    border-radius: 2px;
  }
  
  .timeline-item {
    position: relative;
    margin-bottom: 3rem;
  }
  
  .timeline-content {
    position: relative;
    width: calc(50% - 30px);
    padding: 1.5rem;
    background: white;
    border-radius: 15px;
    box-shadow: 0 5px 15px rgba(0,0,0,0.1);
    transition: all 0.3s ease;
  }
  
  .timeline-item:nth-child(odd) .timeline-content {
    margin-left: auto;
  }
  
  .timeline-content::before {
    content: '';
    position: absolute;
    top: 50%;
    width: 20px;
    height: 20px;
    background: #FDBB30;
    border-radius: 50%;
  }
  
  .timeline-item:nth-child(odd) .timeline-content::before {
    left: -40px;
  }
  
  .timeline-item:nth-child(even) .timeline-content::before {
    right: -40px;
  }
  
  .timeline-date {
    color: #FDBB30;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    text-align: center;
    color: white;
    animation: bounce 2s infinite;
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
  
  @keyframes bounce {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-10px);
    }
    60% {
      transform: translateY(-5px);
    }
  }
  
  .newsletter-content {
    text-align: center;
    max-width: 600px;
    margin: 0 auto;
  }
  
  .newsletter-content h2 {
    font-size: 2.5rem;
    margin-bottom: 1rem;
    color: #000000;
  }
  
  .newsletter-content p {
    font-size: 1.2rem;
    margin-bottom: 2rem;
    color: #000000;
  }
  
  .send-icon {
    transition: all 0.3s ease;
  }
  
  .subscribe-button:hover .send-icon {
    transform: translateX(5px);
  }
  
  .footer {
    background: #f5f5f5;
    padding: 2rem;
    text-align: center;
    color: #000000;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .timeline::before {
      left: 30px;
    }
    
    .timeline-content {
      width: calc(100% - 60px);
      margin-left: 60px !important;
    }
    
    .timeline-item:nth-child(odd) .timeline-content::before,
    .timeline-item:nth-child(even) .timeline-content::before {
      left: -40px;
    }
    
    .involvement-options {
      grid-template-columns: 1fr;
    }
  }
  </style>
