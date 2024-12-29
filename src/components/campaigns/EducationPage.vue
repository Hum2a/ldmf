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
  
      <!-- Hero Section with Animated Background -->
      <section class="hero gradient-background">
        <div class="hero-content">
          <h1>Investing in Education</h1>
          <p>Empowering future generations by prioritizing education for all.</p>
          <button class="cta-button">Learn More</button>
        </div>
        <div class="animated-background"></div>
      </section>
  
      <!-- About the Campaign with Enhanced Presentation -->
      <section class="campaign-details">
        <h2>About the Campaign</h2>
        <div class="details-card">
          <p>
            The Liberal Democrats are committed to improving education standards across the UK. We believe every child deserves access to quality education, regardless of their background, and we are working to achieve this goal through increased investment and innovative reforms.
          </p>
        </div>
      </section>
  
      <!-- Key Actions Section with Icons and Grid Layout -->
      <section class="key-actions">
        <h2>Key Actions</h2>
        <div class="actions-grid">
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M22 8L12 2 2 8l10 6 10-6z"></path>
                <path d="M6 10v10"></path>
                <path d="M18 10v10"></path>
                <path d="M6 20h12"></path>
            </svg>
            <p>Increasing funding for schools to ensure every child gets the support they need.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2" ry="2"></rect>
                <path d="M8 4v16"></path>
                <path d="M16 4v16"></path>
                <path d="M4 10h16"></path>
            </svg>
            <p>Reducing class sizes to create better learning environments.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M5.5 17H4a2 2 0 0 1-2-2v-2a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-1.5"></path>
                <path d="M12 21v-4"></path>
            </svg>
            <p>Expanding free childcare to support working families.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 22s-6-4.35-6-10a6 6 0 0 1 12 0c0 5.65-6 10-6 10z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
            <p>Providing mental health support in schools for students and teachers.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4s-4 1.79-4 4 1.79 4 4 4z"></path>
                <path d="M8 14h8a2 2 0 0 1 2 2v6H6v-6a2 2 0 0 1 2-2z"></path>
            </svg>
            <p>Enhancing teacher training and ensuring fair pay for educators.</p>
          </div>
        </div>
      </section>
  
      <!-- Get Involved Section with Animated Button -->
      <section class="cta-section">
        <h2>Get Involved</h2>
        <p>
          Join us in shaping the future of education. Together, we can ensure every child has the opportunity to succeed.
        </p>
        <router-link to="/join">
          <button class="styled-button pulse-button">Join the Campaign</button>
        </router-link>
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
    name: "EducationPage",
  };
  </script>
  
  <style scoped>
  #education-page {
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

  .animated-background {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(270deg, rgba(255, 204, 0, 0.6), rgba(255, 230, 0, 0.6));
    animation: moveBackground 5s infinite linear;
  }

  @keyframes moveBackground {
    0% {
      transform: translateX(0);
    }
    100% {
      transform: translateX(-100%);
    }
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
  
  /* Campaign Details Section */
  .campaign-details {
    padding: 40px;
    background: #fff;
  }

  .details-card {
    background: #f9f9f9;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .details-card:hover {
    transform: scale(1.02);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }
  
  /* Key Actions Section */
  .key-actions {
    padding: 40px;
    background: #f9f9f9;
  }

  .key-actions h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .actions-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    gap: 20px;
  }

  .action-item {
    text-align: center;
    padding: 20px;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    transition: transform 0.3s, box-shadow 0.3s;
  }

  .action-item:hover {
    transform: translateY(-5px);
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
  }

  .action-icon {
    width: 50px;
    height: 50px;
    margin-bottom: 10px;
  }
  
  /* CTA Section */
  .cta-section {
    padding: 40px;
    background: linear-gradient(135deg, #ffe600, #ffcc00);
  }

  .cta-section h2 {
    font-size: 28px;
    margin-bottom: 20px;
  }

  .cta-section p {
    font-size: 16px;
    margin-bottom: 20px;
  }

  .pulse-button {
    padding: 12px 24px;
    font-size: 16px;
    font-weight: bold;
    color: #000;
    background: linear-gradient(45deg, #fff700, #ffe600);
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: transform 0.3s, box-shadow 0.3s;
    animation: pulse 1.5s infinite;
  }

  .pulse-button:hover {
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
  </style>
