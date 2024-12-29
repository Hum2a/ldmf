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
  
      <!-- Hero Section with Animated Background -->
      <section class="hero gradient-background">
        <div class="hero-content">
          <h1>Tackling the Climate Emergency</h1>
          <p>Our commitment to achieving net-zero emissions and protecting the planet.</p>
          <button class="cta-button">Learn More</button>
        </div>
        <div class="animated-background"></div>
      </section>
  
      <!-- About the Campaign with Enhanced Presentation -->
      <section class="campaign-details">
        <h2>About the Campaign</h2>
        <div class="details-card">
          <p>
            The Liberal Democrats are taking bold steps to address the climate emergency. From reducing carbon emissions to promoting renewable energy, we are committed to leading the fight against climate change.
          </p>
        </div>
      </section>
  
      <!-- Key Actions Section with Icons and Grid Layout -->
      <section class="key-actions">
        <h2>Key Actions</h2>
        <div class="actions-grid">
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M4 10h8L8 4"></path>
                <path d="M20 14h-8l4 6"></path>
                <path d="M9 12h6"></path>
            </svg>
            <p>Promoting renewable energy sources such as wind and solar power.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="3" y="4" width="18" height="16" rx="2"></rect>
                <path d="M8 2v4"></path>
                <path d="M16 2v4"></path>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
            <p>Phasing out single-use plastics and encouraging sustainable alternatives.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2C9.79 2 8 3.79 8 6c0 1.66 1.34 3 3 3"></path>
                <path d="M8 14h8"></path>
                <path d="M12 12v8"></path>
                <path d="M6 20h12"></path>
                <path d="M6 16h12"></path>
            </svg>
            <p>Implementing a nationwide tree-planting initiative to combat deforestation.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="1" y="5" width="22" height="13" rx="3"></rect>
                <circle cx="6" cy="16" r="3"></circle>
                <circle cx="18" cy="16" r="3"></circle>
                <path d="M6 6h12v4H6z"></path>
                <path d="M11 10h2v2h-2z"></path>
            </svg>
            <p>Providing incentives for electric vehicle adoption and public transport.</p>
          </div>
        </div>
      </section>
  
      <!-- Get Involved Section with Animated Button -->
      <section class="cta-section">
        <h2>Get Involved</h2>
        <p>
          Join us in tackling the climate emergency. Together, we can build a sustainable future for generations to come.
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
    name: "ClimateEmergencyPage",
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
