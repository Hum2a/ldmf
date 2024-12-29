<template>
  <div id="join-ldmf">
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

    <!-- Hero Section -->
    <section class="hero gradient-background">
      <h1>Join the Liberal Democrats Muslim Forum</h1>
      <p>Be part of a movement that champions diversity, equality, and progress.</p>
      <button class="cta-button">Join Now</button>
    </section>

    <!-- Why Join Section -->
    <section class="why-join">
      <h2>Why Join Us?</h2>
      <div class="reasons-grid">
        <div class="reason-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="8" r="4"></circle>
            <path d="M4 22v-2a6 6 0 0 1 6-6h4a6 6 0 0 1 6 6v2"></path>
          </svg>
          <h3>Strong Community</h3>
          <p>Connect with like-minded individuals who are passionate about making a difference.</p>
        </div>
        <div class="reason-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12a10 10 0 1 1 20 0 10 10 0 0 1-20 0z"></path>
            <path d="M8 12l2 2 4-4"></path>
          </svg>
          <h3>Your Voice Matters</h3>
          <p>Shape policies and ensure your voice is heard within the Liberal Democrats.</p>
        </div>
        <div class="reason-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M2 12l10-8 10 8-10 8-10-8z"></path>
            <path d="M12 22v-6"></path>
            <path d="M6 16v-4"></path>
            <path d="M18 16v-4"></path>
          </svg>
          <h3>Make an Impact</h3>
          <p>Drive meaningful change in your community and beyond.</p>
        </div>
      </div>
    </section>

    <!-- Membership Tiers Section -->
    <section class="membership-tiers">
      <h2>Choose Your Membership</h2>
      <div class="tiers-grid">
        <div class="tier-card">
          <h3>Standard</h3>
          <p>Basic membership to get involved and support our work.</p>
          <button class="styled-button">Select</button>
        </div>
        <div class="tier-card">
          <h3>Advocate</h3>
          <p>Active membership with opportunities to shape policies.</p>
          <button class="styled-button">Select</button>
        </div>
        <div class="tier-card">
          <h3>Leader</h3>
          <p>Leadership membership to guide initiatives and campaigns.</p>
          <button class="styled-button">Select</button>
        </div>
      </div>
    </section>

    <!-- How to Join Section -->
    <section class="how-to-join">
      <h2>How to Join</h2>
      <div class="steps-grid">
        <div class="step-card">
          <h3>1. Register</h3>
          <p>Create an account with your details.</p>
        </div>
        <div class="step-card">
          <h3>2. Choose a Tier</h3>
          <p>Select a membership that suits you.</p>
        </div>
        <div class="step-card">
          <h3>3. Get Involved</h3>
          <p>Start participating in events and campaigns.</p>
        </div>
      </div>
    </section>

    <!-- Footer -->
    <footer class="footer">
      <p>&copy; {{ new Date().getFullYear() }} Liberal Democrats Muslim Forum. All rights reserved.</p>
      <a href="https://www.libdems.org.uk/" target="_blank" rel="noopener noreferrer">Liberal Democrats Official Website</a>
    </footer>
  </div>
</template>

<script>
export default {
  name: "JoinLDMF",
};
</script>

<style scoped>
/* General Styles */
#join-ldmf {
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
  justify-content: space-between;
}

.LibDemLogo {
  max-width: 150px;
}

.logo-text {
  display: flex;
  flex-direction: column;
  text-align: left;
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
  padding: 60px;
  background: linear-gradient(135deg, #ffcc00, #ffe600);
  color: #000;
}

.cta-button {
  margin-top: 20px;
  padding: 12px 24px;
  font-size: 18px;
  font-weight: bold;
  color: #000;
  background: linear-gradient(45deg, #fff700, #ffe600);
  border: none;
  border-radius: 8px;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.cta-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* Why Join Section */
.why-join {
  padding: 40px;
  background: #fff;
}

.reasons-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
  margin: 20px 0;
}

.reason-card {
  text-align: center;
  padding: 20px;
  background: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.reason-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.reason-card h3 {
  margin-top: 10px;
  font-size: 20px;
  color: #2c3e50;
}

.reason-card p {
  font-size: 16px;
  color: #555;
}

/* Membership Tiers Section */
.membership-tiers {
  padding: 40px;
  background: #f9f9f9;
}

.tiers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.tier-card {
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.tier-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

.tier-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.tier-card p {
  font-size: 16px;
  margin-bottom: 20px;
}

/* Styled Button */
.styled-button {
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

.styled-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* How to Join Section */
.how-to-join {
  padding: 40px;
  background: linear-gradient(135deg, #ffe600, #ffcc00);
}

.steps-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.step-card {
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.step-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.step-card h3 {
  font-size: 20px;
  margin-bottom: 10px;
}

.step-card p {
  font-size: 16px;
}

/* Footer */
.footer {
  padding: 20px;
  background: #000;
  color: #ffe600;
}

.footer a {
  color: #ffe600;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.footer a:hover {
  color: #fff;
}

</style>
