<template>
  <div id="contact-us">
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
    <section class="contact-hero gradient-background">
      <h1>Contact Us</h1>
      <p>We'd love to hear from you! Reach out to us using any of the contact methods below.</p>
    </section>

    <!-- Contact Methods Section -->
    <section class="contact-methods">
      <div class="contact-card">
        <h2>Email Us</h2>
        <p>Have a question? Send us an email, and we'll get back to you as soon as possible.</p>
        <a href="mailto:info@libdems.org.uk" class="contact-link">info@libdems.org.uk</a>
      </div>

      <div class="contact-card">
        <h2>Call Us</h2>
        <p>Prefer to speak with someone? Give us a call during business hours.</p>
        <p class="contact-info">+44 1234 567890</p>
      </div>

      <div class="contact-card">
        <h2>Visit Us</h2>
        <p>Stop by our office to meet us in person and learn more about our work.</p>
        <p class="contact-info">123 Liberal Way, London, UK</p>
      </div>

      <div class="contact-card">
        <h2>Follow Us</h2>
        <p>Stay connected on social media for the latest updates and events.</p>
        <div class="social-links">
          <a href="https://facebook.com/libdems" target="_blank" rel="noopener noreferrer" class="social-link">Facebook</a>
          <a href="https://twitter.com/libdems" target="_blank" rel="noopener noreferrer" class="social-link">Twitter</a>
          <a href="https://instagram.com/libdems" target="_blank" rel="noopener noreferrer" class="social-link">Instagram</a>
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
  name: "ContactUs",
};
</script>

<style scoped>
#contact-us {
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
.contact-hero {
  padding: 50px;
  color: #000;
  background: linear-gradient(135deg, #ffcc00, #ffe600);
}

.contact-hero h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.contact-hero p {
  font-size: 18px;
}

/* Contact Methods Section */
.contact-methods {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px;
  background: #fff;
}

.contact-card {
  background: #ffe600;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
}

.contact-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.contact-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.contact-card p {
  font-size: 16px;
  margin-bottom: 10px;
}

.contact-info {
  font-size: 16px;
  font-weight: bold;
}

.contact-link {
  font-size: 16px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.contact-link:hover {
  color: #444;
}

.social-links {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.social-link {
  font-size: 16px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.social-link:hover {
  color: #444;
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
