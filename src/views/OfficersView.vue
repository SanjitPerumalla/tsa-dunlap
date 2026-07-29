<template>
  <main>
    <section class="page-header">
      <div class="container">
        <span class="eyebrow reveal">Leadership</span>
        <h1 class="reveal">Officers</h1>
        <p class="reveal">
          Several officer positions are still open. This is one of the easiest times
          to step into a leadership role.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <div class="grid-3">
          <div class="officer-card reveal delay-1" @mousemove="tilt" @mouseleave="resetTilt">
            <div class="avatar">SP<img :src="'/photos/sanjit.jpg'" alt="Sanjit Perumalla" @error="e => e.target.style.display='none'" /></div>
            <h3>Sanjit Perumalla</h3>
            <span class="status advisor">Co-President</span>
            <p>Co-leads chapter meetings, represents Dunlap TSA at state events, and helps set the vision for our first year.</p>
          </div>
          <div class="officer-card reveal delay-2" @mousemove="tilt" @mouseleave="resetTilt">
            <div class="avatar">AY<img :src="'/photos/anna.jpg'" alt="Anna Yu" @error="e => e.target.style.display='none'" /></div>
            <h3>Anna Yu</h3>
            <span class="status advisor">Co-President</span>
            <p>Co-leads chapter meetings, represents Dunlap TSA at state events, and helps set the vision for our first year.</p>
          </div>
          <div class="officer-card reveal delay-4" @mousemove="tilt" @mouseleave="resetTilt">
            <div class="avatar">KH</div>
            <h3>Keyaan Hossain</h3>
            <span class="status advisor">Vice President</span>
            <p>Supports the co-presidents, coordinates competitive event teams, and helps run meetings.</p>
          </div>
          <div class="officer-card reveal delay-1" @mousemove="tilt" @mouseleave="resetTilt">
            <div class="avatar">?</div>
            <h3>Secretary</h3>
            <span class="status open">Open</span>
            <p>Keeps meeting notes, tracks membership, and manages chapter communications.</p>
          </div>
          <div class="officer-card reveal delay-2" @mousemove="tilt" @mouseleave="resetTilt">
            <div class="avatar">?</div>
            <h3>Treasurer</h3>
            <span class="status open">Open</span>
            <p>Manages chapter dues, fundraising, and competition/travel budgets.</p>
          </div>
          <div class="officer-card reveal delay-3" @mousemove="tilt" @mouseleave="resetTilt">
            <div class="avatar">?</div>
            <h3>Sergeant at Arms</h3>
            <span class="status open">Open</span>
            <p>Keeps meetings on track and helps run officer elections and voting.</p>
          </div>
          <div class="officer-card reveal delay-4" @mousemove="tilt" @mouseleave="resetTilt">
            <div class="avatar">?</div>
            <h3>Reporter</h3>
            <span class="status open">Open</span>
            <p>Documents chapter events and runs our social media and this website.</p>
          </div>
          <div class="officer-card reveal delay-1" @mousemove="tilt" @mouseleave="resetTilt">
            <div class="avatar">K</div>
            <h3>Chapter Advisor</h3>
            <span class="status advisor">Faculty Advisor</span>
            <p>Mr. Klaus oversees the chapter and coordinates with Dunlap High School administration.</p>
          </div>
          <div class="officer-card reveal delay-2" @mousemove="tilt" @mouseleave="resetTilt">
            <div class="avatar">CM</div>
            <h3>Chris Merrill</h3>
            <span class="status advisor">Illinois TSA State Advisor</span>
            <p>
              <a href="mailto:cpmerri@ilstu.edu">cpmerri@ilstu.edu</a><br>
              <a href="tel:+13094387862">309-438-7862</a>
            </p>
          </div>
        </div>
        <p class="placeholder-note reveal">
          Secretary, Treasurer, Sergeant at Arms, and Reporter are still open. Officer names will be added here once elections are held.
        </p>
      </div>
    </section>

    <section class="section founding-section" style="text-align:center">
      <div class="container">
        <h2 class="reveal">Interested in running for an officer position?</h2>
        <p class="reveal">
          Officers help shape everything from our first competitive events to how we run meetings.
        </p>
        <RouterLink to="/join" class="btn btn-primary reveal" v-magnetic>Express Interest</RouterLink>
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

.officer-card {
  background-color: var(--white);
  border-radius: 14px;
  padding: 2rem;
  border: 1px solid #e5e9f0;
  box-shadow: 0 2px 10px rgba(0, 51, 160, 0.05);
  text-align: center;
  transition: transform 0.3s ease;
}

.officer-card:hover {
  transform: translateY(-5px);
}

.avatar {
  position: relative;
  overflow: hidden;
  width: 132px;
  height: 132px;
  border-radius: 50%;
  background: linear-gradient(135deg, var(--navy), var(--navy-light));
  color: var(--white);
  font-weight: 800;
  font-size: 2.2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.25rem;
  border: 3px solid #e5e9f0;
}

.avatar img {
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.officer-card h3 {
  margin-bottom: 0.5rem;
  color: var(--text-dark);
}

.status {
  display: inline-block;
  font-size: 0.78rem;
  font-weight: 700;
  padding: 0.25rem 0.8rem;
  border-radius: 20px;
  margin-bottom: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}

.status.open {
  background-color: rgba(200, 16, 46, 0.1);
  color: var(--scarlet);
}

.status.advisor {
  background-color: rgba(0, 51, 160, 0.1);
  color: var(--navy);
}

.officer-card p {
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.6;
}

.officer-card p a {
  color: var(--navy);
  font-weight: 600;
}

.placeholder-note {
  text-align: center;
  font-size: 0.85rem;
  color: var(--gray);
  font-style: italic;
  margin-top: 2.5rem;
}

.founding-section {
  background-color: var(--navy);
  color: var(--white);
}

.founding-section h2 {
  font-size: 2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.founding-section p {
  color: rgba(255, 255, 255, 0.85);
  max-width: 600px;
  margin: 0 auto 2rem;
  line-height: 1.7;
}
</style>
