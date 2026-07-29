<template>
  <div class="topbar">
    <div class="topbar-inner">
      <a href="https://tsaweb.org" target="_blank" rel="noopener">National TSA ↗</a>
      <a href="https://www.iltsa.org" target="_blank" rel="noopener">Illinois TSA ↗</a>
    </div>
  </div>
  <nav class="navbar">
    <div class="nav-container">
      <RouterLink to="/" class="nav-brand" @click="closeMenu">
        <img src="/photos/download.png" alt="TSA Logo" class="brand-mark" />
        <div class="brand-text">
          <span class="brand-name">Dunlap TSA</span>
          <span class="brand-sub">Dunlap High School</span>
        </div>
      </RouterLink>

      <button class="hamburger" @click="toggleMenu" :class="{ open: menuOpen }" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul class="nav-links" :class="{ open: menuOpen }">
        <li><RouterLink to="/" @click="closeMenu">Home</RouterLink></li>
        <li><RouterLink to="/about" @click="closeMenu">About</RouterLink></li>
        <li><RouterLink to="/events" @click="closeMenu">Events</RouterLink></li>
        <li><RouterLink to="/officers" @click="closeMenu">Officers</RouterLink></li>
        <li><RouterLink to="/join" @click="closeMenu" class="nav-cta">Join Us</RouterLink></li>
      </ul>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'

const menuOpen = ref(false)
function toggleMenu() { menuOpen.value = !menuOpen.value }
function closeMenu() { menuOpen.value = false }
</script>

<style scoped>
.topbar {
  background-color: var(--navy-dark);
}

.topbar-inner {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0.4rem 2rem;
  display: flex;
  justify-content: flex-end;
  gap: 1.5rem;
}

.topbar-inner a {
  color: rgba(255, 255, 255, 0.75);
  font-size: 0.78rem;
  font-weight: 600;
  letter-spacing: 0.02em;
  transition: color 0.2s ease;
}

.topbar-inner a:hover {
  color: var(--white);
}

@media (max-width: 600px) {
  .topbar-inner { justify-content: center; gap: 1rem; }
}

.navbar {
  position: sticky;
  top: 0;
  z-index: 100;
  background-color: var(--navy);
  border-bottom: 3px solid var(--scarlet);
}

.nav-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 70px;
}

.nav-brand {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.brand-mark {
  height: 40px;
  width: auto;
  border-radius: 8px;
  object-fit: contain;
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}

.brand-name {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--white);
  font-family: 'Montserrat', sans-serif;
}

.brand-sub {
  font-size: 0.72rem;
  color: rgba(255, 255, 255, 0.7);
  font-weight: 500;
}

.nav-links {
  list-style: none;
  display: flex;
  gap: 0.3rem;
  align-items: center;
}

.nav-links a {
  padding: 0.55rem 1rem;
  border-radius: 6px;
  font-size: 0.95rem;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.85);
  transition: all 0.2s ease;
}

.nav-links a:hover,
.nav-links a.router-link-active {
  color: var(--white);
  background-color: rgba(255, 255, 255, 0.12);
}

.nav-cta {
  background-color: var(--scarlet) !important;
  color: var(--white) !important;
}

.nav-cta:hover {
  background-color: var(--scarlet-dark) !important;
}

.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.3rem;
}

.hamburger span {
  display: block;
  width: 25px;
  height: 2px;
  background-color: var(--white);
  transition: all 0.3s ease;
  border-radius: 2px;
}

.hamburger.open span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
.hamburger.open span:nth-child(2) { opacity: 0; }
.hamburger.open span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }

@media (max-width: 900px) {
  .hamburger { display: flex; }

  .nav-links {
    position: absolute;
    top: 70px;
    left: 0;
    right: 0;
    background-color: var(--navy-dark);
    flex-direction: column;
    padding: 1rem 0;
    border-bottom: 3px solid var(--scarlet);
    display: none;
    gap: 0;
  }

  .nav-links.open { display: flex; }
  .nav-links li { width: 100%; text-align: center; }

  .nav-links a {
    display: block;
    padding: 0.8rem 2rem;
    border-radius: 0;
  }
}
</style>
