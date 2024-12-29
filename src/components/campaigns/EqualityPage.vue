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
  
      <!-- Hero Section with Animated Background -->
      <section class="hero gradient-background">
        <div class="hero-content">
          <h1>Fighting for Equality</h1>
          <p>Standing up for fairness, diversity, and inclusivity across the UK.</p>
          <button class="cta-button">Learn More</button>
        </div>
        <div class="animated-background"></div>
      </section>
  
      <!-- About the Campaign with Enhanced Presentation -->
      <section class="campaign-details">
        <h2>About the Campaign</h2>
        <div class="details-card">
          <p>
            The Liberal Democrats are dedicated to promoting equality and inclusivity. We are working to ensure that every individual, regardless of their background, has access to equal opportunities and is treated with respect and dignity.
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
                <path d="M16 16l-4-4"></path>
                <path d="M8 12h8"></path>
            </svg>
            <p>Advocating for stronger anti-discrimination laws to protect all communities.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="7" r="4"></circle>
                <path d="M16 21v-4a4 4 0 0 0-8 0v4"></path>
                <path d="M6 21v-2a6 6 0 0 1 12 0v2"></path>
            </svg>
            <p>Supporting diversity in workplaces and schools through inclusive policies.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="4"></circle>
                <path d="M16 12l6 6"></path>
                <path d="M8 12l-6 6"></path>
                <path d="M12 12v4"></path>
            </svg>
            <p>Campaigning for gender equality, including closing the pay gap.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="8" r="3"></circle>
                <path d="M5 20a7 7 0 0 1 14 0"></path>
                <path d="M12 11v4"></path>
                <path d="M15 13h-6"></path>
            </svg>
            <p>Fostering better representation of minority groups in politics and public life.</p>
          </div>
        </div>
      </section>
  
      <!-- Get Involved Section with Animated Button -->
      <section class="cta-section">
        <h2>Get Involved</h2>
        <p>
          Join us in the fight for equality. Together, we can build a society where everyone is treated fairly and inclusively.
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
    name: "EqualityPage",
  };
  </script>
  
  <style scoped>
  #equality-page {
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
