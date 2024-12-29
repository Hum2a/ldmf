<template>
  <div id="campaigns">
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
    <section class="campaigns-hero gradient-background">
      <h1>Our Campaigns</h1>
      <p>Driving change, standing up for fairness, and making a difference in communities across the UK.</p>
    </section>

    <!-- Campaign Cards Section -->
    <section class="campaigns-section">
      <div class="campaign-card">
        <h2>Tackling the Climate Emergency</h2>
        <p>The Liberal Democrats are leading the fight to protect our environment. From promoting renewable energy to planting trees, we are working towards a net-zero Britain.</p>
        <router-link to="/campaigns/climate-emergency" class="read-more">Learn More</router-link>
      </div>

      <div class="campaign-card">
        <h2>Supporting Mental Health</h2>
        <p>We are prioritizing mental health by demanding parity of esteem with physical health and ensuring mental health services receive the funding they need.</p>
        <router-link to="/campaigns/mental-health" class="read-more">Learn More</router-link>
      </div>

      <div class="campaign-card">
        <h2>Fighting for Equality</h2>
        <p>We are standing up for minority communities, promoting equality and diversity, and fighting against all forms of discrimination in the UK.</p>
        <router-link to="/campaigns/equality" class="read-more">Learn More</router-link>
      </div>

      <div class="campaign-card">
        <h2>Investing in Education</h2>
        <p>Education is a priority for the Liberal Democrats. From increasing school funding to reducing class sizes, we are committed to giving every child the best start in life.</p>
        <router-link to="/campaigns/education" class="read-more">Learn More</router-link>
      </div>

      <div class="campaign-card">
        <h2>Fighting Brexit</h2>
        <p>We have consistently opposed Brexit, fighting for a closer relationship with the EU, protecting citizens' rights, and ensuring economic stability.</p>
        <router-link to="/campaigns/brexit" class="read-more">Learn More</router-link>
      </div>

      <div class="campaign-card">
        <h2>Affordable Housing for All</h2>
        <p>The Liberal Democrats are campaigning for affordable housing, including building new homes and protecting tenants' rights.</p>
        <router-link to="/campaigns/housing" class="read-more">Learn More</router-link>
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
  name: "CampaignsPage",
};
</script>

<style scoped>
#campaigns {
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
.campaigns-hero {
  padding: 50px;
  color: #000;
  background: linear-gradient(135deg, #ffcc00, #ffe600);
}

.campaigns-hero h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.campaigns-hero p {
  font-size: 18px;
}

/* Campaign Cards Section */
.campaigns-section {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
  padding: 40px;
  background: #fff;
}

.campaign-card {
  background: #ffe600;
  padding: 20px;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  width: 300px;
  text-align: left;
  transition: transform 0.3s, box-shadow 0.3s;
}

.campaign-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.2);
}

.campaign-card h2 {
  font-size: 24px;
  margin-bottom: 10px;
}

.campaign-card p {
  font-size: 16px;
  margin-bottom: 10px;
}

.read-more {
  font-size: 16px;
  color: #000;
  text-decoration: none;
  font-weight: bold;
  transition: color 0.3s;
}

.read-more:hover {
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
