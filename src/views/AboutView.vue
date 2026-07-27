<template>
  <main>
    <section class="page-header">
      <div class="container">
        <span class="eyebrow reveal">About Us</span>
        <h1 class="reveal">What is TSA?</h1>
        <p class="reveal">
          The Technology Student Association (TSA) is a national nonprofit student
          organization for middle and high schoolers passionate about STEM, and Dunlap
          High School is starting its very own chapter.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container two-col">
        <div class="reveal">
          <h2>The National Organization</h2>
          <div class="divider" style="margin-left:0"></div>
          <p>
            TSA is an integral part of Technology, Engineering, and career and technical
            education classrooms across the country. It's a co-curricular student
            organization that engages students in STEM through competitive events,
            leadership opportunities, and conferences, building on the same design and
            engineering concepts students learn in class.
          </p>
          <p style="margin-top: 1rem">
            Members compete in over 50 different STEM-related competitive events,
            everything from coding and engineering design to video game design,
            biotechnology, and forensic science, leading up to state and national
            conferences each year.
          </p>
        </div>
        <div class="stat-cards reveal delay-2">
          <div class="stat-card" @mousemove="tilt" @mouseleave="resetTilt">
            <span class="stat-num"><AnimatedCounter :target="250000" suffix="+" /></span>
            <span class="stat-label">TSA members nationwide</span>
          </div>
          <div class="stat-card" @mousemove="tilt" @mouseleave="resetTilt">
            <span class="stat-num"><AnimatedCounter :target="2000" suffix="+" /></span>
            <span class="stat-label">chapters across the U.S.</span>
          </div>
          <div class="stat-card" @mousemove="tilt" @mouseleave="resetTilt">
            <span class="stat-num"><AnimatedCounter :target="50" suffix="+" /></span>
            <span class="stat-label">competitive STEM events</span>
          </div>
        </div>
      </div>
    </section>

    <section class="section alt-bg">
      <div class="container">
        <h2 class="section-title reveal">Our Chapter's Story</h2>
        <div class="divider"></div>
        <p class="section-subtitle reveal">
          Dunlap TSA is being founded to give Dunlap High School students a dedicated home
          for STEM competition and leadership.
        </p>
        <div class="grid-3">
          <div class="card reveal delay-1" @mousemove="tilt" @mouseleave="resetTilt">
            <h3>Why We're Starting</h3>
            <p class="card-text">
              Dunlap HS has no shortage of students who love engineering, coding, and
              design. TSA gives that passion a competitive outlet and a community.
            </p>
          </div>
          <div class="card reveal delay-2" @mousemove="tilt" @mouseleave="resetTilt">
            <h3>Our Mission</h3>
            <p class="card-text">
              To prepare Dunlap students for STEM careers through hands-on competition,
              teamwork, and leadership, all while having fun doing it.
            </p>
          </div>
          <div class="card reveal delay-3" @mousemove="tilt" @mouseleave="resetTilt">
            <h3>Getting Started</h3>
            <p class="card-text">
              We're recruiting our founding members and officers now, ahead of our first
              full year as an official chapter.
            </p>
          </div>
        </div>
      </div>
    </section>

    <section class="section" style="text-align:center">
      <div class="container">
        <h2 class="reveal">Want to help build this chapter?</h2>
        <p class="reveal" style="color: var(--gray); margin: 1rem 0 2rem;">
          Whether you want to compete, lead, or just see what TSA is about, we want you here.
        </p>
        <RouterLink to="/join" class="btn btn-primary reveal" v-magnetic>Join Dunlap TSA</RouterLink>
      </div>
    </section>
  </main>
</template>

<script setup>
import { useScrollReveal } from '@/composables/useScrollReveal'
import { useCardTilt } from '@/composables/useCardTilt'
import AnimatedCounter from '@/components/AnimatedCounter.vue'

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

.two-col {
  display: grid;
  grid-template-columns: 1.3fr 1fr;
  gap: 4rem;
  align-items: center;
}

.two-col p {
  color: var(--gray);
  line-height: 1.8;
}

.stat-cards {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.stat-card {
  background: linear-gradient(135deg, var(--navy), var(--navy-light));
  color: var(--white);
  border-radius: 12px;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  text-align: center;
}

.stat-num {
  font-size: 1.8rem;
  font-weight: 800;
  font-family: 'Montserrat', sans-serif;
}

.stat-label {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.85);
}

.alt-bg {
  background-color: var(--gray-light);
}

.card-text {
  color: var(--gray);
  margin-top: 0.5rem;
  line-height: 1.7;
}

@media (max-width: 900px) {
  .two-col { grid-template-columns: 1fr; gap: 2rem; }
}
</style>
