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
        <span class="eyebrow reveal" style="display:block; text-align:center; margin-bottom: 0.5rem;">This Year's Big Mission</span>
        <h2 class="section-title reveal">NASA TechRise</h2>
        <p class="section-subtitle reveal">
          We're designing a real science experiment and pitching it to NASA. Winning teams
          build their payload and fly it to the edge of space on a NASA-sponsored
          high-altitude balloon. Our idea, the actual stratosphere.
        </p>
        <div class="mission-stats reveal">
          <div class="mission-stat">
            <span class="mission-num">95,000</span>
            <span class="mission-label">feet, flight altitude</span>
          </div>
          <div class="mission-stat">
            <span class="mission-num">4–8 hrs</span>
            <span class="mission-label">in the stratosphere</span>
          </div>
          <div class="mission-stat">
            <span class="mission-num">$1,500</span>
            <span class="mission-label">NASA award to build it</span>
          </div>
          <div class="mission-stat">
            <span class="mission-num">60</span>
            <span class="mission-label">winning teams nationwide</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section">
      <div class="container">
        <h2 class="section-title reveal">This Year's Timeline</h2>
        <div class="divider"></div>
        <div class="timeline">
          <div class="timeline-item reveal delay-1">
            <div class="timeline-date">Aug &ndash; Sep</div>
            <div class="timeline-content">
              <h3>Kickoff & Join</h3>
              <p>First meetings, meet the team, and pick your events.</p>
            </div>
          </div>
          <div class="timeline-item reveal delay-2">
            <div class="timeline-date">Early September</div>
            <div class="timeline-content">
              <h3>Illinois TSA Fall Leadership Conference</h3>
              <p>A statewide leadership training day for TSA officers and members. Exact date TBD, historically held in early September.</p>
            </div>
          </div>
          <div class="timeline-item reveal delay-3">
            <div class="timeline-date">October</div>
            <div class="timeline-content">
              <h3>TechRise Design Sprint</h3>
              <p>Brainstorm and engineer our NASA experiment proposal.</p>
            </div>
          </div>
          <div class="timeline-item reveal delay-4">
            <div class="timeline-date">Early November</div>
            <div class="timeline-content">
              <h3>Technology Day at ISU</h3>
              <p>Hands-on engineering challenges against students from across Illinois, at the Bone Student Center, Illinois State University. Exact date TBD, historically held the first week of November.</p>
            </div>
          </div>
          <div class="timeline-item reveal delay-1">
            <div class="timeline-date">November</div>
            <div class="timeline-content">
              <h3>Submit Proposal to NASA</h3>
              <p>We send in our TechRise entry.</p>
            </div>
          </div>
          <div class="timeline-item reveal delay-2">
            <div class="timeline-date">January</div>
            <div class="timeline-content">
              <h3>Winners Announced</h3>
              <p>NASA picks 60 teams nationwide. Fingers crossed!</p>
            </div>
          </div>
          <div class="timeline-item reveal delay-3">
            <div class="timeline-date">Spring</div>
            <div class="timeline-content">
              <h3>Illinois State Conference</h3>
              <p>We compete against chapters from across Illinois.</p>
            </div>
          </div>
          <div class="timeline-item reveal delay-4">
            <div class="timeline-date">Summer</div>
            <div class="timeline-content">
              <h3>Nationals & Launch</h3>
              <p>National TSA Conference, plus our TechRise balloon flight.</p>
            </div>
          </div>
        </div>
        <p class="placeholder-note reveal" style="text-align:center; margin-top: 2rem">
          Exact dates will be announced at meetings. Stay tuned!
        </p>
      </div>
    </section>

    <section class="section" style="text-align:center">
      <div class="container">
        <h2 class="reveal">Have an event you want us to compete in?</h2>
        <p class="reveal" style="color: var(--gray); margin: 1rem 0 2rem;">
          New members get a say in which events our chapter takes on first.
        </p>
        <RouterLink to="/join" class="btn btn-primary reveal" v-magnetic>Join & Have Your Say</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()
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

.mission-stats {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
  max-width: 900px;
  margin: 0 auto;
}

.mission-stat {
  text-align: center;
  border-top: 4px solid var(--scarlet);
  padding-top: 1rem;
}

.mission-num {
  display: block;
  font-family: 'Montserrat', sans-serif;
  font-weight: 800;
  font-size: 1.9rem;
  color: var(--navy);
}

.mission-label {
  display: block;
  font-size: 0.8rem;
  color: var(--gray);
  text-transform: uppercase;
  letter-spacing: 0.04em;
  margin-top: 0.4rem;
}

.timeline {
  max-width: 700px;
  margin: 0 auto;
}

.timeline-item {
  position: relative;
  padding-left: 2.25rem;
  padding-bottom: 2.5rem;
}

.timeline-item:last-child {
  padding-bottom: 0;
}

.timeline-item::before {
  content: '';
  position: absolute;
  left: 0;
  top: 0.35rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background-color: var(--scarlet);
}

.timeline-item:not(:last-child)::after {
  content: '';
  position: absolute;
  left: 6px;
  top: 1.2rem;
  bottom: -1.5rem;
  width: 2px;
  background-color: #e5e9f0;
}

.timeline-date {
  font-size: 0.8rem;
  font-weight: 700;
  color: var(--scarlet);
  text-transform: uppercase;
  letter-spacing: 0.05em;
  margin-bottom: 0.3rem;
}

.timeline-content h3 {
  color: var(--text-dark);
  margin-bottom: 0.3rem;
}

.timeline-content p {
  color: var(--gray);
  line-height: 1.6;
}

@media (max-width: 700px) {
  .meeting-card { grid-template-columns: 1fr; }
  .mission-stats { grid-template-columns: repeat(2, 1fr); }
}
</style>
