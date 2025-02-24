<template>
  <div id="about-us">
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
    <section class="about-hero">
      <div class="hero-overlay"></div>
      <div class="hero-content">
        <h1 class="animated-title">About Us</h1>
        <p class="hero-subtitle">Bridging Communities, Building Future</p>
      </div>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <div class="container">
        <div class="content-wrapper">
          <div class="text-content">
            <h2 class="section-title">Our Mission</h2>
            <p class="mission-text">
              The Liberal Democrats Muslim Forum aims to promote equality, fairness, and opportunity for all. We are dedicated to creating a platform for Muslim voices within the Liberal Democrats, fostering inclusivity, and engaging with communities to address their concerns and aspirations.
            </p>
          </div>
          <div class="stats-grid">
            <div class="stat-card">
              <span class="stat-number">1000+</span>
              <span class="stat-label">Members</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">50+</span>
              <span class="stat-label">Events</span>
            </div>
            <div class="stat-card">
              <span class="stat-number">20+</span>
              <span class="stat-label">Campaigns</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <div class="container">
        <h2 class="section-title">Our Values</h2>
        <div class="values-grid">
          <div class="value-card">
            <div class="icon-wrapper">
              <i class="fas fa-balance-scale"></i>
            </div>
            <h3>Equality</h3>
            <p>Ensuring everyone has the same opportunities and rights in our society.</p>
          </div>
          <div class="value-card">
            <div class="icon-wrapper">
              <i class="fas fa-users"></i>
            </div>
            <h3>Inclusivity</h3>
            <p>Creating a platform where diverse voices are heard and respected.</p>
          </div>
          <div class="value-card">
            <div class="icon-wrapper">
              <i class="fas fa-hands-helping"></i>
            </div>
            <h3>Community</h3>
            <p>Strengthening ties and supporting grassroots initiatives.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Timeline Section -->
    <section class="timeline-section">
      <div class="container">
        <h2 class="section-title">Our Journey</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2020</h3>
              <p>Establishment of the Muslim Forum</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2021</h3>
              <p>Launch of Community Outreach Program</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2022</h3>
              <p>First National Conference</p>
            </div>
          </div>
          <div class="timeline-item">
            <div class="timeline-content">
              <h3>2023</h3>
              <p>Policy Impact Initiative</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- Call to Action -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-content">
          <h2>Join Our Movement</h2>
          <p>Be part of our mission to create a more inclusive and equitable society.</p>
          <router-link to="/join">
            <button class="primary-button">Become a Member</button>
          </router-link>
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
  name: "AboutUs",
  mounted() {
    this.initScrollAnimations();
  },
  methods: {
    initScrollAnimations() {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      }, { threshold: 0.1 });

      document.querySelectorAll('.section-title, .value-card, .timeline-item, .stat-card')
        .forEach(el => observer.observe(el));
    }
  }
};
</script>

<style scoped>
#about-us {
  font-family: 'Inter', sans-serif;
  color: #1a1a1a;
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
.about-hero {
  height: 60vh;
  background: linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6));
    /* url('../../assets/about-hero.jpg'); */
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

/* Mission Section */
.mission-section {
  padding: 6rem 2rem;
  background: #ffffff;
}

.content-wrapper {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 4rem;
  align-items: center;
}

.mission-text {
  font-size: 1.2rem;
  line-height: 1.8;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.8s ease;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
}

.stat-card {
  background: #000000;
  color: #FDBB30;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s ease;
}

.stat-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(253, 187, 48, 0.2);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: 700;
  display: block;
}

/* Values Section */
.values-section {
  padding: 6rem 2rem;
  background: #f8f9fa;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 3rem;
}

.value-card {
  background: white;
  padding: 2rem;
  border-radius: 15px;
  text-align: center;
  opacity: 0;
  transform: translateY(20px);
  transition: all 0.5s cubic-bezier(0.645, 0.045, 0.355, 1);
}

.value-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 10px 30px rgba(253, 187, 48, 0.2);
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  margin: 0 auto 1.5rem;
  background: #FDBB30;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.icon-wrapper i {
  font-size: 2rem;
  color: #000000;
  transition: transform 0.5s ease;
}

.value-card:hover .icon-wrapper i {
  transform: rotate(360deg);
}

/* Timeline Section */
.timeline-section {
  padding: 6rem 2rem;
  background: #000000;
  color: #ffffff;
}

.timeline {
  position: relative;
  max-width: 800px;
  margin: 4rem auto 0;
}

.timeline::before {
  content: '';
  position: absolute;
  top: 0;
  left: 50%;
  width: 2px;
  height: 100%;
  background: #FDBB30;
}

.timeline-item {
  position: relative;
  margin: 2rem 0;
  opacity: 0;
  transform: translateX(-50px);
  transition: all 0.8s ease;
}

.timeline-item:nth-child(even) {
  transform: translateX(50px);
}

.timeline-content {
  background: rgba(253, 187, 48, 0.1);
  padding: 1.5rem;
  border-radius: 15px;
  border: 1px solid #FDBB30;
  transition: all 0.3s ease;
}

.timeline-content:hover {
  background: rgba(253, 187, 48, 0.2);
  transform: scale(1.05);
}

/* CTA Section */
.cta-section {
  padding: 6rem 2rem;
  background: linear-gradient(45deg, #FDBB30, #FFE5A8);
  text-align: center;
}

.cta-content {
  max-width: 600px;
  margin: 0 auto;
}

.primary-button {
  background: #000000;
  color: #FDBB30;
  padding: 1rem 2.5rem;
  border: none;
  border-radius: 30px;
  font-size: 1.2rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.primary-button:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
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

/* Visibility Classes */
.visible {
  opacity: 1;
  transform: translateY(0) !important;
}

/* Responsive Design */
@media (max-width: 768px) {
  .content-wrapper {
    grid-template-columns: 1fr;
  }
  
  .stats-grid {
    grid-template-columns: 1fr;
  }
  
  .timeline::before {
    left: 20px;
  }
  
  .timeline-item {
    margin-left: 40px;
  }
  
  .animated-title {
    font-size: 2.5rem;
  }
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
  transition: color 0.3s;
}

.footer a:hover {
  color: #fff;
}
</style>
