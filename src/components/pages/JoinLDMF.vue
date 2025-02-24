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
    <section class="hero">
      <div class="hero-content">
        <h1 class="animated-title">Join the Liberal Democrats Muslim Forum</h1>
        <p class="hero-subtitle">Be part of a movement that champions diversity, equality, and progress</p>
        <div class="hero-buttons">
          <button class="primary-button" @click="scrollToMembership">
            <i class="fas fa-user-plus"></i> Join Now
          </button>
          <button class="secondary-button" @click="scrollToWhyJoin">
            <i class="fas fa-info-circle"></i> Learn More
          </button>
        </div>
      </div>
      <div class="scroll-indicator">
        <div class="mouse"></div>
        <span>Scroll to explore</span>
      </div>
    </section>

    <!-- Why Join Section -->
    <section class="why-join" ref="whyJoin">
      <div class="container">
        <h2 class="section-title">Why Join Us?</h2>
        <div class="reasons-grid">
          <div class="reason-card" v-for="(reason, index) in reasons" :key="index">
            <div class="icon-wrapper">
              <i :class="reason.icon"></i>
            </div>
            <h3>{{ reason.title }}</h3>
            <p>{{ reason.description }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- Membership Tiers Section -->
    <section class="membership-tiers" ref="membership">
      <div class="container">
        <h2 class="section-title">Choose Your Membership</h2>
        <div class="tiers-grid">
          <div class="tier-card" v-for="(tier, index) in membershipTiers" :key="index">
            <div class="tier-header">
              <h3>{{ tier.name }}</h3>
              <div class="price">£{{ tier.price }}<span>/month</span></div>
            </div>
            <ul class="tier-features">
              <li v-for="(feature, fIndex) in tier.features" :key="fIndex">
                <i class="fas fa-check"></i> {{ feature }}
              </li>
            </ul>
            <button class="tier-button" @click="selectTier(tier)">Select Plan</button>
          </div>
        </div>
      </div>
    </section>

    <!-- Join Process Section -->
    <section class="join-process">
      <div class="container">
        <h2 class="section-title">How to Join</h2>
        <div class="steps-grid">
          <div class="step-card" v-for="(step, index) in joinSteps" :key="index">
            <div class="step-number">{{ index + 1 }}</div>
            <h3>{{ step.title }}</h3>
            <p>{{ step.description }}</p>
          </div>
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
  data() {
    return {
      reasons: [
        {
          icon: 'fas fa-users',
          title: 'Strong Community',
          description: 'Connect with like-minded individuals who are passionate about making a difference.'
        },
        {
          icon: 'fas fa-bullhorn',
          title: 'Your Voice Matters',
          description: 'Shape policies and ensure your voice is heard within the Liberal Democrats.'
        },
        {
          icon: 'fas fa-hands-helping',
          title: 'Make an Impact',
          description: 'Drive meaningful change in your community and beyond.'
        }
      ],
      membershipTiers: [
        {
          name: 'Standard',
          price: '5',
          features: [
            'Basic membership benefits',
            'Newsletter subscription',
            'Event invitations',
            'Online community access'
          ]
        },
        {
          name: 'Advocate',
          price: '10',
          features: [
            'All Standard benefits',
            'Policy working groups',
            'Training opportunities',
            'Voting rights'
          ]
        },
        {
          name: 'Leader',
          price: '20',
          features: [
            'All Advocate benefits',
            'Leadership opportunities',
            'Campaign planning access',
            'Mentorship program'
          ]
        }
      ],
      joinSteps: [
        {
          title: 'Register',
          description: 'Create your account with basic information.'
        },
        {
          title: 'Choose a Tier',
          description: 'Select a membership level that suits your goals.'
        },
        {
          title: 'Get Involved',
          description: 'Start participating in events and campaigns.'
        }
      ]
    }
  },
  methods: {
    scrollToMembership() {
      this.$refs.membership.scrollIntoView({ behavior: 'smooth' });
    },
    scrollToWhyJoin() {
      this.$refs.whyJoin.scrollIntoView({ behavior: 'smooth' });
    },
    selectTier(tier) {
      // Implement tier selection logic
      console.log('Selected tier:', tier.name);
    }
  }
}
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
  height: 100vh;
  background: linear-gradient(135deg, #FDBB30, #FFE5A8);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  position: relative;
}

.hero-content {
  text-align: center;
}

.animated-title {
  font-size: 3.5rem;
  margin-bottom: 1.5rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards;
}

.hero-subtitle {
  font-size: 1.5rem;
  margin-bottom: 2rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards 0.3s;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  opacity: 0;
  transform: translateY(30px);
  animation: fadeInUp 1s ease forwards 0.6s;
}

.primary-button, .secondary-button {
  padding: 1rem 2rem;
  border: none;
  border-radius: 30px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.primary-button {
  background: #000000;
  color: #FDBB30;
}

.secondary-button {
  background: #ffffff;
  color: #000000;
}

.primary-button:hover, .secondary-button:hover {
  transform: translateY(-3px);
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
}

.scroll-indicator {
  position: absolute;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
}

.mouse {
  width: 20px;
  height: 40px;
  border: 2px solid #000;
  border-radius: 20px;
  margin-bottom: 10px;
}

.mouse:hover {
  background-color: #000;
}

/* Why Join Section */
.why-join {
  padding: 40px;
  background: #fff;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
}

.section-title {
  font-size: 2rem;
  margin-bottom: 20px;
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

.icon-wrapper {
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, #FDBB30, #FFE5A8);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
}

.icon-wrapper i {
  font-size: 2rem;
  color: #000000;
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

.tier-header {
  text-align: center;
  margin-bottom: 1.5rem;
}

.price {
  font-size: 2.5rem;
  font-weight: 700;
  color: #FDBB30;
}

.price span {
  font-size: 1rem;
  color: #666;
}

.tier-features {
  list-style: none;
  padding: 0;
  margin: 0 0 1.5rem;
}

.tier-features li {
  padding: 0.5rem 0;
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.tier-features i {
  color: #FDBB30;
}

.tier-button {
  width: 100%;
  padding: 1rem;
  background: #000000;
  color: #FDBB30;
  border: none;
  border-radius: 30px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
}

.tier-button:hover {
  background: #FDBB30;
  color: #000000;
}

/* Join Process Section */
.join-process {
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

.step-number {
  width: 40px;
  height: 40px;
  background: #FDBB30;
  color: #000000;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  margin: 0 auto 1rem;
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

/* Add responsive styles */
@media (max-width: 768px) {
  .animated-title {
    font-size: 2.5rem;
  }
  
  .hero-buttons {
    flex-direction: column;
  }
  
  .reasons-grid, .tiers-grid, .steps-grid {
    grid-template-columns: 1fr;
  }
}
</style>
