<template>
    <div id="housing-campaign">
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
  
      <!-- Hero Section with Parallax Effect -->
      <section class="hero gradient-background">
        <div class="hero-content">
          <h1>Affordable Housing for All</h1>
          <p>Campaigning for better housing solutions and protecting tenants' rights across the UK.</p>
          <button class="styled-button cta-button">Learn More</button>
        </div>
      </section>
  
      <!-- About the Campaign with Animated Cards -->
      <section class="campaign-details">
        <h2>About the Campaign</h2>
        <div class="details-card">
          <p>
            The Liberal Democrats are committed to addressing the housing crisis by creating affordable housing opportunities and ensuring tenants are treated fairly. We believe everyone deserves a safe and secure place to call home.
          </p>
        </div>
      </section>
  
      <!-- Key Actions Section with Icons -->
      <section class="key-actions">
        <h2>Key Actions</h2>
        <div class="actions-grid">
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M3 9l9-7 9 7"/>
                <path d="M9 22V12h6v10"/>
                <path d="M21 22H3"/>
            </svg>
            <p>Building 300,000 new homes annually, including 100,000 social homes.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/>
                <line x1="16" y1="16" x2="12" y2="12"/>
                <line x1="8" y1="12" x2="12" y2="12"/>
                <path d="M10 8h4"/>
            </svg>
            <p>Implementing policies to reduce homelessness and provide shelter to those in need.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="8" cy="8" r="3"/>
                <circle cx="16" cy="8" r="3"/>
                <path d="M5 21v-2a4 4 0 0 1 4-4h6a4 4 0 0 1 4 4v2"/>
            </svg>
            <p>Strengthening tenants' rights to ensure fair treatment and protection from eviction.</p>
          </div>
          <div class="action-item">
            <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <path d="M12 2v4"/>
                <path d="M6.6 8.5l-3 2.2"/>
                <path d="M17.4 8.5l3 2.2"/>
                <path d="M12 22v-6"/>
                <path d="M4.5 13H2"/>
                <path d="M22 13h-2.5"/>
                <path d="M12 2a10 10 0 0 1 10 10"/>
                <path d="M12 2a10 10 0 0 0-10 10"/>
            </svg>
            <p>Making homes greener and more energy-efficient to reduce costs and carbon emissions.</p>
          </div>
        </div>
      </section>
  
      <!-- Get Involved Section with Animation -->
      <section class="cta-section">
        <h2>Get Involved</h2>
        <p>
          Join us in our mission to make housing affordable and accessible for everyone. Together, we can solve the housing crisis.
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
    name: "HousingCampaignPage",
  };
  </script>
  
  <style scoped>
  #housing-campaign {
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
    color: #fff;
    background: linear-gradient(135deg, #ffcc00, #ffe600);
    text-align: center;
    background-attachment: fixed;
  }
  
  .hero-content {
    max-width: 600px;
    margin: 0 auto;
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
    width: 100px;
    height: 100px;
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
  