<template>
  <main>
    <!-- Hero -->
    <section class="hero">
      <div class="hero-bg">
        <div class="blob blob-1"></div>
        <div class="blob blob-2"></div>
        <div class="blob blob-3"></div>
      </div>

      <div class="hero-inner">
        <div class="hero-content reveal">
          <span class="hero-badge">Founding · Dunlap High School</span>
          <h1>Welcome to <span class="highlight">Dunlap TSA</span></h1>
          <p class="hero-sub">
            We're launching a brand-new chapter of the Technology Student Association at
            Dunlap High School, a place for students who love STEM to build, compete, and lead.
          </p>
          <div class="hero-buttons">
            <RouterLink to="/join" class="btn btn-primary" v-magnetic>Join the Founding Class</RouterLink>
            <RouterLink to="/about" class="btn btn-outline" v-magnetic>What is TSA?</RouterLink>
          </div>
        </div>
        <div class="hero-visual reveal delay-2">
          <div class="hero-mark">
            <img src="/photos/download.png" alt="TSA Logo" />
          </div>
        </div>
      </div>
    </section>

    <!-- Highlights -->
    <section class="section">
      <div class="container">
        <h2 class="section-title reveal">Why Join</h2>
        <div class="divider"></div>
        <p class="section-subtitle reveal">
          TSA is the nation's premier organization for middle and high school students
          interested in STEM, with competitive events, leadership development, and a path to
          national conferences.
        </p>
        <div class="grid-3">
          <div class="card reveal delay-1" @mousemove="tilt" @mouseleave="resetTilt">
            <h3>Compete Nationally</h3>
            <p class="card-text">
              Choose from dozens of STEM competitive events, from engineering design and
              coding to video game design and forensic science, at regional, state, and
              national conferences.
            </p>
          </div>
          <div class="card reveal delay-2" @mousemove="tilt" @mouseleave="resetTilt">
            <h3>Build Real Skills</h3>
            <p class="card-text">
              Gain hands-on experience in engineering, technology, and design while building
              a portfolio that stands out on college applications.
            </p>
          </div>
          <div class="card reveal delay-3" @mousemove="tilt" @mouseleave="resetTilt">
            <h3>Lead From Day One</h3>
            <p class="card-text">
              As a founding chapter, every member has the chance to help shape the club and
              step into an officer role early.
            </p>
          </div>
        </div>
      </div>
    </section>

    <!-- Founding CTA -->
    <section class="section founding-section">
      <div class="container founding-inner">
        <h2 class="reveal">Be Part of the First Chapter</h2>
        <div class="divider"></div>
        <p class="reveal">
          There's no better time to join than at the start. Help us set up our chapter's
          competitive events, elect our first officers, and put Dunlap TSA on the map.
        </p>
        <RouterLink to="/join" class="btn btn-primary reveal" v-magnetic>Get Involved</RouterLink>
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
.hero {
  position: relative;
  min-height: calc(100vh - 70px);
  display: flex;
  align-items: center;
  overflow: hidden;
}

.hero-inner {
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  padding: 4rem 2rem;
}

.hero-bg {
  position: absolute;
  inset: 0;
  pointer-events: none;
  overflow: hidden;
  z-index: -1;
  background: linear-gradient(135deg, rgba(0, 51, 160, 0.05), rgba(200, 16, 46, 0.04));
}

.blob {
  position: absolute;
  border-radius: 50%;
  filter: blur(110px);
  opacity: 0.18;
}

.blob-1 {
  width: 45vw;
  height: 45vw;
  max-width: 620px;
  max-height: 620px;
  background: var(--navy);
  top: -18vw;
  right: -12vw;
  animation: blob-float 9s ease-in-out infinite;
}

.blob-2 {
  width: 38vw;
  height: 38vw;
  max-width: 500px;
  max-height: 500px;
  background: var(--scarlet);
  bottom: -14vw;
  left: -10vw;
  animation: blob-float 11s ease-in-out infinite reverse;
}

.blob-3 {
  width: 30vw;
  height: 30vw;
  max-width: 420px;
  max-height: 420px;
  background: var(--navy-light);
  top: 40%;
  left: 50%;
  opacity: 0.1;
  animation: blob-float-center 13s ease-in-out infinite;
}

@keyframes blob-float {
  0%, 100% { transform: translateY(0) scale(1); }
  50% { transform: translateY(-26px) scale(1.05); }
}

@keyframes blob-float-center {
  0%, 100% { transform: translate(-50%, -50%) translateY(0) scale(1); }
  50% { transform: translate(-50%, -50%) translateY(-26px) scale(1.05); }
}

.hero-content { flex: 1.2; }

.hero-badge {
  display: inline-block;
  background-color: rgba(200, 16, 46, 0.1);
  color: var(--scarlet);
  border: 1px solid rgba(200, 16, 46, 0.3);
  padding: 0.4rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  margin-bottom: 1.5rem;
}

.hero h1 {
  font-size: 3.6rem;
  font-weight: 800;
  margin-bottom: 1.2rem;
  color: var(--text-dark);
}

.highlight {
  color: var(--navy);
}

.hero-sub {
  color: var(--gray);
  font-size: 1.15rem;
  line-height: 1.7;
  margin-bottom: 2rem;
  max-width: 560px;
}

.hero-buttons {
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
}

.hero-visual { flex: 1; display: flex; justify-content: center; }

.hero-mark {
  width: 340px;
  padding: 1.5rem;
  border-radius: 20px;
  background: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 20px 50px rgba(0, 51, 160, 0.2);
  border: 1px solid #e5e9f0;
  animation: mark-float 5s ease-in-out infinite;
}

.hero-mark img {
  width: 100%;
  height: auto;
  display: block;
}

@keyframes mark-float {
  0%, 100% { transform: translateY(0px); }
  50% { transform: translateY(-14px); }
}

.card-text {
  color: var(--gray);
  margin-top: 0.5rem;
  line-height: 1.7;
}

.founding-section {
  background-color: var(--navy);
  color: var(--white);
}

.founding-inner {
  text-align: center;
  max-width: 700px;
}

.founding-inner h2 {
  font-size: 2.2rem;
  font-weight: 800;
  margin-bottom: 0.5rem;
}

.founding-inner p {
  color: rgba(255, 255, 255, 0.85);
  font-size: 1.1rem;
  line-height: 1.7;
  margin-bottom: 2rem;
}

@media (prefers-reduced-motion: reduce) {
  .blob, .hero-mark { animation: none; }
}

@media (max-width: 900px) {
  .hero-inner { flex-direction: column; text-align: center; padding: 3rem 1.5rem; }
  .hero h1 { font-size: 2.6rem; }
  .hero-buttons { justify-content: center; }
  .hero-sub { margin-left: auto; margin-right: auto; }
  .hero-mark { width: 220px; }
}
</style>
