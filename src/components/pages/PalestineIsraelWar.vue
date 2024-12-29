<template>
  <div id="palestine-israel-war-page">
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
      <div class="hero-content">
        <h1>Our Stance on the Palestine-Israel Conflict</h1>
        <p>Advocating for peace, human rights, and a two-state solution.</p>
        <button class="cta-button">Learn More</button>
      </div>
    </section>

    <!-- About the Conflict -->
    <section class="about-conflict">
      <h2>Understanding the Conflict</h2>
      <div class="conflict-details">
        <p>
          The Palestine-Israel conflict has a long and complex history rooted in territorial disputes, historical grievances, and international politics. The Liberal Democrats stand for peaceful resolutions and respect for human rights.
        </p>
        <ul>
          <li>Promoting dialogue between both parties to foster understanding and cooperation.</li>
          <li>Calling for the protection of civilians and upholding international law.</li>
          <li>Advocating for humanitarian aid to affected regions.</li>
        </ul>
      </div>
    </section>

    <!-- Key Actions Section -->
    <section class="key-actions">
      <h2>Our Actions</h2>
      <div class="actions-grid">
        <div class="action-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M8 12h8"></path>
            <path d="M12 16v-8"></path>
          </svg>
          <h3>Diplomatic Advocacy</h3>
          <p>Engaging with global leaders to support peace talks and negotiations.</p>
        </div>
        <div class="action-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <circle cx="12" cy="12" r="10"></circle>
            <path d="M15 12h3"></path>
            <path d="M12 9v6"></path>
            <path d="M9 12H6"></path>
          </svg>
          <h3>Human Rights</h3>
          <p>Ensuring international laws are upheld to protect civilians.</p>
        </div>
        <div class="action-card">
          <svg xmlns="http://www.w3.org/2000/svg" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="#000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <rect x="2" y="7" width="20" height="10" rx="2"></rect>
            <path d="M8 7v10"></path>
            <path d="M16 7v10"></path>
          </svg>
          <h3>Humanitarian Aid</h3>
          <p>Providing resources and support to those impacted by the conflict.</p>
        </div>
      </div>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <h2>Get Involved</h2>
      <p>Support our mission to advocate for peace and justice in the Palestine-Israel region.</p>
      <div class="cta-buttons">
        <router-link to="/join">
          <button class="styled-button">Join the Movement</button>
        </router-link>
        <router-link to="/contact">
          <button class="styled-button">Contact Us</button>
        </router-link>
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
  name: "PalestineIsraelWarPage",
};
</script>

<style scoped>
#palestine-israel-war-page {
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
  transition: transform 0.3s, box-shadow 0.3s;
}

.cta-button:hover {
  transform: scale(1.1);
  box-shadow: 0 6px 15px rgba(0, 0, 0, 0.2);
}

/* About the Conflict Section */
.about-conflict {
  padding: 40px;
  background: #fff;
}

.about-conflict h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.conflict-details ul {
  text-align: left;
  margin: 0 auto;
  max-width: 800px;
  padding-left: 20px;
}

.conflict-details ul li {
  margin-bottom: 10px;
  font-size: 16px;
}

/* Key Actions Section */
.key-actions {
  padding: 40px;
  background: #f9f9f9;
}

.actions-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 20px;
}

.action-card {
  text-align: center;
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s, box-shadow 0.3s;
}

.action-card:hover {
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

.cta-buttons {
  display: flex;
  justify-content: center;
  gap: 20px;
}

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

/* Footer */
.footer {
  padding: 20px;
  background: #000;
  color: #ffe600;
}

.footer a {
  color: #ffe600;
  font-weight: bold;
  text-decoration: none;
}

.footer a:hover {
  color: #fff;
}
</style>
