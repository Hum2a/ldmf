<template>
    <div id="brexit-campaign">
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
  
      <!-- Hero Section with Background Animation -->
      <section class="hero gradient-background">
        <div class="hero-content">
          <h1>Fighting Brexit</h1>
          <p>Our continued fight for a closer relationship with Europe and the protection of citizens' rights.</p>
          <button class="cta-button">Learn More</button>
        </div>
        <div class="animated-background"></div>
      </section>
  
      <!-- About the Campaign with Animated Card -->
      <section class="campaign-details">
        <h2>About the Campaign</h2>
        <div class="details-card">
          <p>
            The Liberal Democrats have consistently opposed Brexit, advocating for a closer relationship with the EU to protect economic stability, environmental standards, and citizens' rights. We are committed to ensuring the UK remains outward-looking and cooperative in its dealings with Europe.
          </p>
        </div>
      </section>
  
      <!-- Key Actions Section with Icons -->
      <section class="key-actions">
        <h2>Key Actions</h2>
        <div class="actions-grid">
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="9" cy="12" r="3"></circle>
                <circle cx="15" cy="12" r="3"></circle>
                <path d="M6 12h3"></path>
                <path d="M15 12h3"></path>
                <path d="M9 15v6"></path>
                <path d="M15 15v6"></path>
            </svg>
            <p>Advocating for a closer partnership with the EU to maintain economic stability.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <path d="M14.1 10.1L16 8 14.1 5.9M9.9 5.9L8 8l1.9 2.1M8 16l1.9-2.1m4.2 0L16 16M16 8h4M8 8H4m0 8h4m8 0h4"></path>
            </svg>
            <p>Protecting the rights of EU citizens living in the UK and UK citizens living in the EU.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <rect x="2" y="7" width="20" height="10" rx="2"></rect>
                <path d="M16 11h2v2h-2zM10 11h2v2h-2zM4 11h2v2H4z"></path>
            </svg>
            <p>Fighting for high standards on the environment, workers' rights, and food safety.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v4"></path>
                <path d="M16 6l4-4m-4 4l4 4"></path>
                <path d="M8 6L4 2m4 4L4 10"></path>
                <path d="M12 20v4"></path>
                <path d="M16 18l4 4m-4-4l4-4"></path>
                <path d="M8 18L4 22m4-4L4 14"></path>
            </svg>
            <p>Ensuring businesses and industries can thrive by reducing trade barriers.</p>
          </div>
        </div>
      </section>
  
      <!-- Get Involved Section with Pulse Animation -->
      <section class="cta-section">
        <h2>Get Involved</h2>
        <p>
          Join us in our fight to build a closer relationship with Europe. Together, we can protect our rights and ensure a prosperous future.
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
    name: "BrexitCampaignPage",
  };
  </script>
  
  <style scoped>
  #brexit-campaign {
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
  </style>
