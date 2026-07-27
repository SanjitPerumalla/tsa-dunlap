<template>
  <main>
    <section class="page-header">
      <div class="container">
        <span class="eyebrow reveal">Join Us</span>
        <h1 class="reveal">Become a Founding Member</h1>
        <p class="reveal">
          No experience required, just curiosity about STEM. Fill out the form below and
          we'll follow up with meeting details.
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

        <form class="interest-form reveal delay-2" @submit.prevent="submitInterest">
          <h2>Interest Form</h2>
          <div class="field">
            <label for="name">Full name</label>
            <input id="name" v-model="form.name" type="text" required />
          </div>
          <div class="field">
            <label for="email">Email</label>
            <input id="email" v-model="form.email" type="email" required />
          </div>
          <div class="field">
            <label for="grade">Grade</label>
            <select id="grade" v-model="form.grade" required>
              <option value="" disabled>Select grade</option>
              <option>9th</option>
              <option>10th</option>
              <option>11th</option>
              <option>12th</option>
            </select>
          </div>
          <div class="field">
            <label for="interest">What interests you about TSA?</label>
            <textarea id="interest" v-model="form.interest" rows="4"></textarea>
          </div>
          <button type="submit" class="btn btn-primary submit-btn">Submit Interest</button>
          <p class="form-note">
            This opens an email to our chapter inbox. No data is stored on this site.
          </p>
        </form>
      </div>
    </section>
  </main>
</template>

<script setup>
import { reactive } from 'vue'
import { useScrollReveal } from '@/composables/useScrollReveal'

useScrollReveal()

const form = reactive({ name: '', email: '', grade: '', interest: '' })

function submitInterest() {
  const subject = encodeURIComponent('Dunlap TSA Interest Form')
  const body = encodeURIComponent(
    `Name: ${form.name}\nEmail: ${form.email}\nGrade: ${form.grade}\n\nWhat interests you about TSA?\n${form.interest}`
  )
  window.location.href = `mailto:dunlaphstsa@gmail.com?subject=${subject}&body=${body}`
}
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

.interest-form {
  background-color: var(--gray-light);
  border-radius: 14px;
  padding: 2.5rem;
  border: 1px solid #e5e9f0;
}

.interest-form h2 {
  color: var(--navy);
  margin-bottom: 1.5rem;
}

.field {
  margin-bottom: 1.2rem;
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.field label {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--gray-dark);
}

.field input,
.field select,
.field textarea {
  padding: 0.7rem 0.9rem;
  border-radius: 8px;
  border: 1px solid #d1d9e6;
  font-family: inherit;
  font-size: 0.95rem;
  background-color: var(--white);
  color: var(--text-dark);
}

.field input:focus,
.field select:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--navy);
}

.submit-btn {
  width: 100%;
  border: none;
  margin-top: 0.5rem;
}

.form-note {
  margin-top: 1rem;
  font-size: 0.82rem;
  color: var(--gray);
  text-align: center;
}

@media (max-width: 900px) {
  .form-layout { grid-template-columns: 1fr; gap: 2.5rem; }
}
</style>
