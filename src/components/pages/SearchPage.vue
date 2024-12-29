<template>
  <div class="search-page">
    <!-- Animated Header Section -->
    <header class="header-container">
      <h1>Search Our Site</h1>
      <p>Find what you're looking for quickly and easily.</p>
    </header>

    <!-- Search Section -->
    <div class="search-container">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Type your search here..."
        class="search-input"
      />
      <button @click="performSearch" class="search-button">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          class="search-icon"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      searchQuery: "",
    };
  },
  methods: {
    performSearch() {
      // Handle search logic here
      console.log("Search query:", this.searchQuery);
      // You can implement your search functionality or navigate to search results.
    },
  },
};
</script>

<style scoped>
/* General Page Styles */
.search-page {
  text-align: center;
  margin-top: 50px;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  color: #2c3e50;
}

.header-container {
  margin-bottom: 30px;
}

.header-container h1 {
  font-size: 32px;
  font-weight: bold;
  color: #000;
}

.header-container p {
  font-size: 18px;
  color: #555;
}

/* Search Container */
.search-container {
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 20px;
  gap: 10px;
}

.search-input {
  padding: 12px 20px;
  font-size: 16px;
  border: 2px solid #ccc;
  border-radius: 25px;
  width: 300px;
  outline: none;
  transition: border-color 0.3s, box-shadow 0.3s;
}

.search-input:focus {
  border-color: #ffcc00;
  box-shadow: 0 0 8px rgba(255, 204, 0, 0.5);
}

.search-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px;
  background: linear-gradient(45deg, #ffcc00, #ffe600);
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.search-button:hover {
  transform: scale(1.1);
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
}

.search-icon {
  width: 24px;
  height: 24px;
  color: #fff;
}
</style>
