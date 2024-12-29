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
    <section class="about-hero gradient-background">
      <h1>About Us</h1>
      <p>Learn more about the Liberal Democrats Muslim Forum and our mission to empower communities.</p>
    </section>

    <!-- Mission Section -->
    <section class="mission-section">
      <h2>Our Mission</h2>
      <p>
        The Liberal Democrats Muslim Forum aims to promote equality, fairness, and opportunity for all. We are dedicated to creating a platform for Muslim voices within the Liberal Democrats, fostering inclusivity, and engaging with communities to address their concerns and aspirations.
      </p>
    </section>

    <!-- History Section -->
    <section class="history-section">
      <h2>Our History</h2>
      <p>
        Founded to ensure representation and inclusivity, the Muslim Forum has been at the forefront of community engagement and policy advocacy within the Liberal Democrats. From grassroots campaigns to national initiatives, we strive to make a difference.
      </p>
    </section>

    <!-- Values Section -->
    <section class="values-section">
      <h2>Our Values</h2>
      <ul>
        <li><strong>Equality:</strong> Ensuring everyone has the same opportunities.</li>
        <li><strong>Inclusivity:</strong> Creating a platform for diverse voices.</li>
        <li><strong>Community:</strong> Strengthening ties and supporting grassroots initiatives.</li>
      </ul>
    </section>

    <!-- Call to Action Section -->
    <section class="cta-section">
      <h2>Join Us</h2>
      <p>Be part of our mission to create a more inclusive and equitable society. Join the Liberal Democrats Muslim Forum today!</p>
      <router-link to="/join">
        <button class="styled-button">Become a Member</button>
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
  name: "AboutUs",
};
</script>

<style scoped>
#about-us {
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
.about-hero {
  padding: 50px;
  color: #000;
  background: linear-gradient(135deg, #ffcc00, #ffe600);
}

.about-hero h1 {
  font-size: 36px;
  margin-bottom: 10px;
}

.about-hero p {
  font-size: 18px;
}

/* Mission Section */
.mission-section {
  padding: 40px;
  background: #fff;
}

.mission-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.mission-section p {
  font-size: 16px;
  line-height: 1.6;
}

/* History Section */
.history-section {
  padding: 40px;
  background: #f9f9f9;
}

.history-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.history-section p {
  font-size: 16px;
  line-height: 1.6;
}

/* Values Section */
.values-section {
  padding: 40px;
  background: #fff;
}

.values-section h2 {
  font-size: 28px;
  margin-bottom: 20px;
}

.values-section ul {
  list-style: none;
  padding: 0;
}

.values-section li {
  font-size: 16px;
  margin-bottom: 10px;
}

.values-section strong {
  color: #000;
}

/* Call to Action Section */
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
  transition: color 0.3s;
}

.footer a:hover {
  color: #fff;
}
</style>
