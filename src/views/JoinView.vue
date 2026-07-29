<template>
  <main>
    <section class="page-header">
      <div class="container">
        <span class="eyebrow reveal">Join Us</span>
        <h1 class="reveal">Become a member today!</h1>
        <p class="reveal">
          No experience required, just curiosity about STEM. Scan the code below to fill
          out our interest form.
        </p>
      </div>
    </section>

    <section class="section">
      <div class="container form-layout">
        <div class="steps reveal">
          <h2>How to Join</h2>
          <div class="divider" style="margin-left:0"></div>
          <ol>
            <li>
              <span class="step-num">1</span>
              <div>
                <h4>Express interest</h4>
                <p>Submit the form and tell us what excites you about TSA.</p>
              </div>
            </li>
            <li>
              <span class="step-num">2</span>
              <div>
                <h4>Come to a meeting</h4>
                <p>We'll email you our first meeting time and location at Dunlap HS.</p>
              </div>
            </li>
            <li>
              <span class="step-num">3</span>
              <div>
                <h4>Pay chapter dues</h4>
                <p>Dues: TBD (covers TSA membership and event registration).</p>
              </div>
            </li>
          </ol>
        </div>

        <div class="qr-card reveal delay-2">
          <h2>Scan to Join</h2>
          <div class="qr-code">
            <img src="/images/join-qr.svg" alt="QR code to the interest form" />
          </div>
          <p class="form-note">
            Placeholder QR code. Will link to our Google Form interest form once it's ready.
          </p>
        </div>
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

.form-layout {
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 4rem;
  align-items: start;
}

.steps h2 {
  color: var(--navy);
  margin-bottom: 0.5rem;
}

.steps ol {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-top: 1.5rem;
}

.steps li {
  display: flex;
  gap: 1rem;
  align-items: flex-start;
}

.step-num {
  flex-shrink: 0;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: var(--scarlet);
  color: var(--white);
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
}

.steps h4 {
  color: var(--text-dark);
  margin-bottom: 0.3rem;
}

.steps p {
  color: var(--gray);
  font-size: 0.95rem;
  line-height: 1.6;
}

.qr-card {
  background-color: var(--gray-light);
  border-radius: 14px;
  padding: 2.5rem;
  border: 1px solid #e5e9f0;
  text-align: center;
}

.qr-card h2 {
  color: var(--navy);
  margin-bottom: 1.5rem;
}

.qr-code {
  background-color: var(--white);
  border: 1px solid #e5e9f0;
  border-radius: 12px;
  padding: 1.5rem;
  max-width: 260px;
  margin: 0 auto;
}

.qr-code img {
  width: 100%;
  height: auto;
  display: block;
}

.form-note {
  margin-top: 1.25rem;
  font-size: 0.82rem;
  color: var(--gray);
  font-style: italic;
}

@media (max-width: 900px) {
  .form-layout { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>
