<template>
  <footer class="footer">
    <div class="container">
      <div class="footer-grid">
        <div class="footer-brand">
          <div class="brand-row">
            <img src="/photos/download.png" alt="TSA Logo" class="brand-mark" />
            <div>
              <p class="brand-name">Dunlap TSA</p>
              <p class="brand-sub">Dunlap High School Chapter</p>
            </div>
          </div>
          <p class="brand-desc">
            A new chapter of the Technology Student Association, bringing STEM competition,
            leadership, and community to Dunlap High School.
          </p>
        </div>

        <div class="footer-links">
          <h4>Pages</h4>
          <ul>
            <li><RouterLink to="/">Home</RouterLink></li>
            <li><RouterLink to="/about">About</RouterLink></li>
            <li><RouterLink to="/events">Events</RouterLink></li>
            <li><RouterLink to="/officers">Officers</RouterLink></li>
            <li><RouterLink to="/join">Join Us</RouterLink></li>
          </ul>
        </div>

        <div class="footer-contact">
          <h4>Contact</h4>
          <ul>
            <li><a href="mailto:dunlaphstsa@gmail.com">dunlaphstsa@gmail.com</a></li>
            <li><a href="https://tsaweb.org" target="_blank" rel="noopener">National TSA (tsaweb.org)</a></li>
            <li><a href="https://www.illinoistsa.org" target="_blank" rel="noopener">Illinois TSA</a></li>
          </ul>
          <p class="placeholder-note">Contact info is a placeholder. Update with your advisor's email.</p>
        </div>
      </div>

      <div class="footer-bottom">
        <p>© {{ new Date().getFullYear() }} Dunlap TSA. All rights reserved.</p>
        <p class="tsa-note">Proud member of the <strong>Technology Student Association</strong></p>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  background-color: var(--navy-dark);
  color: rgba(255, 255, 255, 0.85);
  padding: 4rem 0 2rem;
  margin-top: auto;
}

.footer-grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr;
  gap: 3rem;
  margin-bottom: 3rem;
}

.brand-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  margin-bottom: 1rem;
}

.brand-mark {
  height: 36px;
  width: auto;
  border-radius: 8px;
  object-fit: contain;
}

.brand-name {
  font-size: 1.15rem;
  font-weight: 800;
  color: var(--white);
}

.brand-sub {
  font-size: 0.8rem;
  color: rgba(255, 255, 255, 0.6);
}

.brand-desc {
  font-size: 0.95rem;
  line-height: 1.7;
  color: rgba(255, 255, 255, 0.7);
  max-width: 420px;
}

.footer-links h4,
.footer-contact h4 {
  color: var(--white);
  font-size: 1rem;
  font-weight: 700;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.footer-links ul,
.footer-contact ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.footer-links a,
.footer-contact a {
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  transition: color 0.2s;
}

.footer-links a:hover,
.footer-contact a:hover {
  color: var(--white);
}

.placeholder-note {
  margin-top: 0.8rem;
  font-size: 0.78rem;
  color: rgba(255, 255, 255, 0.45);
  font-style: italic;
}

.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  padding-top: 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.6);
}

.tsa-note strong {
  color: var(--white);
}

@media (max-width: 768px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}
</style>
