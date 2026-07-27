<script setup>
import { reactive, onMounted, onUnmounted } from 'vue'
import NavBar from './components/NavBar.vue'
import FooterSection from './components/FooterSection.vue'

// ── Scroll progress ──────────────────────────────────────────────────────────
const progress = reactive({ value: 0 })
function updateProgress() {
  const h = document.documentElement.scrollHeight - window.innerHeight
  progress.value = h > 0 ? (window.scrollY / h) * 100 : 0
}

// ── Gear cursor ──────────────────────────────────────────────────────────────
// Positioned via translate3d (compositor-only) instead of left/top so mouse
// tracking never triggers layout/paint — that's what was causing the lag.
const pos = reactive({ x: -200, y: -200 })

function onMouseMove(e) {
  pos.x = e.clientX
  pos.y = e.clientY
}

onMounted(() => {
  const hasPointer = window.matchMedia('(pointer: fine)').matches
  const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  if (hasPointer && !reduceMotion) {
    document.documentElement.classList.add('has-custom-cursor')
    window.addEventListener('mousemove', onMouseMove, { passive: true })
  }
  window.addEventListener('scroll', updateProgress, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', updateProgress)
  window.removeEventListener('mousemove', onMouseMove)
})
</script>

<template>
  <!-- Wrench cursor -->
  <div class="cursor-gear" :style="{ transform: `translate3d(${pos.x - 15}px, ${pos.y - 15}px, 0)` }">
    <svg width="30" height="30" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path fill="none" stroke="#0033A0" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round"
        d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z" />
    </svg>
  </div>

  <!-- Mouse-follow spotlight (fixed-size gradient moved via transform, not repainted per-frame) -->
  <div class="spotlight" :style="{ transform: `translate3d(${pos.x}px, ${pos.y}px, 0)` }"></div>

  <!-- Scroll progress bar -->
  <div class="scroll-bar" :style="{ transform: `scaleX(${progress.value / 100})` }"></div>

  <NavBar />
  <RouterView v-slot="{ Component }">
    <Transition name="page" mode="out-in">
      <component :is="Component" />
    </Transition>
  </RouterView>
  <FooterSection />
</template>

<style>
/* ── Gear cursor ───────────────────────────────────────────────────────────── */
.has-custom-cursor * { cursor: none !important; }

.cursor-gear {
  position: fixed;
  top: 0;
  left: 0;
  pointer-events: none;
  z-index: 99999;
  will-change: transform;
}

.cursor-gear svg {
  display: block;
}

/* ── Full-screen spotlight ─────────────────────────────────────────────────── */
.spotlight {
  position: fixed;
  top: -350px;
  left: -350px;
  width: 700px;
  height: 700px;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(0, 51, 160, 0.07), rgba(200, 16, 46, 0.03) 40%, transparent 70%);
  pointer-events: none;
  z-index: 0;
  will-change: transform;
}

@media (pointer: coarse) {
  .spotlight { display: none; }
  .cursor-gear { display: none; }
}

/* ── Page transitions ──────────────────────────────────────────────────────── */
.page-enter-active,
.page-leave-active {
  transition: opacity 0.25s ease, transform 0.25s ease;
}

.page-enter-from {
  opacity: 0;
  transform: translateY(18px);
}

.page-leave-to {
  opacity: 0;
  transform: translateY(-12px);
}

/* ── Scroll progress bar ───────────────────────────────────────────────────── */
.scroll-bar {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--scarlet) 0%, var(--navy) 100%);
  transform-origin: left;
  z-index: 9999;
  transition: transform 0.08s linear;
  pointer-events: none;
}
</style>
