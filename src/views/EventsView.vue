<template>
  <main>
    <section class="page-header">
      <div class="container">
        <span class="eyebrow reveal">Events</span>
        <h1 class="reveal">Competitions & Meetings</h1>
        <p class="reveal">
          TSA members compete in dozens of STEM events at regional, state, and national
          conferences. Here's what our chapter plans to take on, and when we meet.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title reveal">Chapter Meetings</h2>
        <div class="divider"></div>
        <div class="meeting-card reveal">
          <div class="meeting-item">
            <span class="meeting-label">When</span>
            <span class="meeting-value">Fridays during Homeroom</span>
          </div>
          <div class="meeting-item">
            <span class="meeting-label">Where</span>
            <span class="meeting-value">Room: TBD</span>
          </div>
          <div class="meeting-item">
            <span class="meeting-label">Advisor</span>
            <span class="meeting-value">Mr. Klaus</span>
          </div>
        </div>
        <p class="placeholder-note reveal">
          Room number is still TBD. This page will be updated once it's confirmed.
        </p>
      </div>
    </section>

    <section class="section alt-bg">
      <div class="container">
        <h2 class="section-title reveal">Competitive Events We're Exploring</h2>
        <p class="section-subtitle reveal">
          TSA offers 50+ competitive events nationally. As a founding chapter, members will
          help choose which ones we compete in first.
        </p>
        <div class="grid-2">
          <div class="cat-card reveal delay-1" @mousemove="tilt" @mouseleave="resetTilt">
            <h3>Design & Engineering</h3>
            <ul>
              <li>Engineering Design</li>
              <li>Architectural Design</li>
              <li>System Control Technology</li>
              <li>Flight Endurance</li>
            </ul>
          </div>
          <div class="cat-card reveal delay-2" @mousemove="tilt" @mouseleave="resetTilt">
            <h3>Coding & Technology</h3>
            <ul>
              <li>Coding</li>
              <li>Web Design/Development</li>
              <li>Video Game Design</li>
              <li>Virtual Reality Design</li>
            </ul>
          </div>
          <div class="cat-card reveal delay-3" @mousemove="tilt" @mouseleave="resetTilt">
            <h3>Communication & Leadership</h3>
            <ul>
              <li>Extemporaneous Speech</li>
              <li>Debating Technological Issues</li>
              <li>Chapter Team</li>
              <li>Prepared Presentation</li>
            </ul>
          </div>
          <div class="cat-card reveal delay-4" @mousemove="tilt" @mouseleave="resetTilt">
            <h3>Science & Research</h3>
            <ul>
              <li>Biotechnology Design</li>
              <li>Forensic Science</li>
              <li>Technology Bowl</li>
              <li>STEM Talk</li>
            </ul>
          </div>
        </div>
        <p class="placeholder-note reveal" style="text-align:center; margin-top: 2rem">
          Final event lineup depends on Illinois TSA's current-year event list. Check
          <a href="https://www.illinoistsa.org" target="_blank" rel="noopener">illinoistsa.org</a>
          for the official roster.
        </p>
      </div>
    </section>

    <section class="section" style="text-align:center">
      <div class="container">
        <h2 class="reveal">Have an event you want us to compete in?</h2>
        <p class="reveal" style="color: var(--gray); margin: 1rem 0 2rem;">
          Founding members get a say in which events our chapter takes on first.
        </p>
        <RouterLink to="/join" class="btn btn-primary reveal" v-magnetic>Join & Have Your Say</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useCardTilt } from '@/composables/useCardTilt'

useScrollReveal()
const { tilt, resetTilt } = useCardTilt()
</script>

<style scoped>
.page-header {
  background-color: var(--navy);
  color: var(--white);
  padding: 5rem 0 4rem;
  text-align: center;
}

.page-header h1 {
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 1rem;
}

.page-header p {
  max-width: 640px;
  margin: 0 auto;
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  line-height: 1.7;
}

.meeting-card {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
  background-color: var(--gray-light);
  border-radius: 14px;
  padding: 2rem;
  border: 1px solid #e5e9f0;
}

.meeting-item {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
  text-align: center;
}

.meeting-label {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--scarlet);
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.meeting-value {
  font-size: 1.05rem;
  font-weight: 600;
  color: var(--text-dark);
}

.placeholder-note {
  font-size: 0.85rem;
  color: var(--gray);
  font-style: italic;
  margin-top: 1rem;
}

.placeholder-note a {
  color: var(--navy);
  font-weight: 600;
  font-style: normal;
}

.alt-bg {
  background-color: var(--white);
}

.cat-card {
  background-color: var(--gray-light);
  border-radius: 14px;
  padding: 1.75rem 2rem;
  border: 1px solid #e5e9f0;
}

.cat-card h3 {
  color: var(--navy);
  margin-bottom: 1rem;
}

.cat-card ul {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
}

.cat-card li {
  color: var(--gray-dark);
  font-size: 0.95rem;
  padding-left: 1.2rem;
  position: relative;
}

.cat-card li::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.5em;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background-color: var(--scarlet);
}

@media (max-width: 700px) {
  .meeting-card { grid-template-columns: 1fr; }
}
</style>
