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
    <section class="contact-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="animated-title">Get in Touch</h1>
        <p class="hero-subtitle">We're here to listen, engage, and collaborate</p>
      </div>
    </section>

    <!-- Contact Form Section -->
    <section class="contact-section">
      <div class="container">
        <div class="contact-grid">
          <!-- Contact Information -->
          <div class="contact-info">
            <h2 class="section-title">Connect With Us</h2>
            <div class="info-cards">
              <div class="info-card">
                <div class="icon-wrapper">
                  <i class="fas fa-map-marker-alt"></i>
                </div>
                <h3>Visit Us</h3>
                <p>123 Liberal Way</p>
                <p>London, UK</p>
              </div>

              <div class="info-card">
                <div class="icon-wrapper">
                  <i class="fas fa-phone"></i>
                </div>
                <h3>Call Us</h3>
                <p>+44 1234 567890</p>
                <p>Mon-Fri, 9am-5pm</p>
              </div>

              <div class="info-card">
                <div class="icon-wrapper">
                  <i class="fas fa-envelope"></i>
                </div>
                <h3>Email Us</h3>
                <p>info@libdems.org.uk</p>
                <p>We reply within 24hrs</p>
              </div>
            </div>

            <div class="social-connect">
              <h3>Follow Us</h3>
              <div class="social-icons">
                <a href="#" class="social-icon">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-facebook"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="#" class="social-icon">
                  <i class="fab fa-linkedin"></i>
                </a>
              </div>
            </div>
          </div>

          <!-- Contact Form -->
          <div class="contact-form-wrapper">
            <form @submit.prevent="submitForm" class="contact-form">
              <div class="form-group">
                <label for="name">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  v-model="formData.name"
                  required
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="email">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  v-model="formData.email"
                  required
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="subject">Subject</label>
                <input 
                  type="text" 
                  id="subject" 
                  v-model="formData.subject"
                  required
                  class="form-input"
                />
              </div>

              <div class="form-group">
                <label for="message">Message</label>
                <textarea 
                  id="message" 
                  v-model="formData.message"
                  required
                  class="form-input"
                  rows="5"
                ></textarea>
              </div>

              <button type="submit" class="submit-button">
                <span>Send Message</span>
                <i class="fas fa-paper-plane"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>

    <!-- Map Section -->
    <section class="map-section">
      <div class="map-overlay">
        <div class="map-card">
          <h3>Our Location</h3>
          <p>Visit us at our central London office</p>
          <button class="direction-button">
            <i class="fas fa-directions"></i>
            Get Directions
          </button>
        </div>
      </div>
      <!-- Add your map component or iframe here -->
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
  data() {
    return {
      formData: {
        name: '',
        email: '',
        subject: '',
        message: ''
      }
    }
  },
  mounted() {
    this.initScrollAnimations();
  },
  methods: {
    submitForm() {
      // Handle form submission
      console.log('Form submitted:', this.formData);
      // Add your form submission logic here
    },
    initScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.section-title, .info-card, .contact-form')
        .forEach(el => observer.observe(el));
    }
  }
};
</script>

<style scoped>
#contact-us {
  font-family: 'Inter', sans-serif;
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
  height: 50vh;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
  background-size: cover;
  background-position: center;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
}

.hero-content {
  position: relative;
  z-index: 2;
  color: white;
}

.animated-title {
  font-size: 4rem;
  font-weight: 700;
  margin-bottom: 1rem;
  opacity: 0;
  animation: fadeInUp 1s ease forwards;
}

.hero-subtitle {
  font-size: 1.5rem;
  opacity: 0;
  animation: fadeInUp 1s ease 0.3s forwards;
}

/* Contact Section */
.contact-section {
  padding: 6rem 2rem;
  background: #ffffff;
}

.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* Info Cards */
.info-cards {
  display: grid;
  gap: 2rem;
  margin-top: 2rem;
}

.info-card {
  background: #000000;
  color: #ffffff;
  padding: 2rem;
  border-radius: 15px;
  transition: all 0.3s ease;
  opacity: 0;
  transform: translateY(20px);
}

.info-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(253, 187, 48, 0.2);
}

.icon-wrapper {
  width: 60px;
  height: 60px;
  background: #FDBB30;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
}

.icon-wrapper i {
  font-size: 1.5rem;
  color: #000000;
}

/* Social Icons */
.social-connect {
  margin-top: 3rem;
}

.social-icons {
  display: flex;
  gap: 1rem;
  margin-top: 1rem;
}

.social-icon {
  width: 50px;
  height: 50px;
  background: #000000;
  color: #FDBB30;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  transition: all 0.3s ease;
}

.social-icon:hover {
  transform: translateY(-5px) rotate(360deg);
  background: #FDBB30;
  color: #000000;
}

/* Contact Form */
.contact-form-wrapper {
  background: #ffffff;
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
}

.form-group {
  margin-bottom: 1.5rem;
}

.form-input {
  width: 100%;
  padding: 1rem;
  border: 2px solid #e0e0e0;
  border-radius: 8px;
  transition: all 0.3s ease;
  font-size: 1rem;
}

.form-input:focus {
  border-color: #FDBB30;
  box-shadow: 0 0 0 3px rgba(253, 187, 48, 0.2);
  outline: none;
}

.submit-button {
  background: #000000;
  color: #FDBB30;
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
  justify-content: center;
}

.submit-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
}

.submit-button i {
  transition: transform 0.3s ease;
}

.submit-button:hover i {
  transform: translateX(5px);
}

/* Map Section */
.map-section {
  height: 400px;
  background: #f5f5f5;
  position: relative;
}

.map-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  padding: 2rem;
}

.map-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.1);
  max-width: 300px;
}

.direction-button {
  background: #FDBB30;
  color: #000000;
  padding: 0.8rem 1.5rem;
  border: none;
  border-radius: 25px;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-top: 1rem;
}

.direction-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(253, 187, 48, 0.3);
}

/* Animations */
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

/* Responsive Design */
@media (max-width: 968px) {
  .contact-grid {
    grid-template-columns: 1fr;
    gap: 3rem;
  }

  .animated-title {
    font-size: 2.5rem;
  }

  .info-cards {
    grid-template-columns: 1fr;
  }
}

/* Visibility Classes */
.visible {
  opacity: 1;
  transform: translateY(0) !important;
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
