<template>
  <span>{{ displayValue.toLocaleString() }}{{ suffix }}</span>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  target: { type: Number, required: true },
  suffix: { type: String, default: '' },
})

const displayValue = ref(0)

onMounted(() => {
  const duration = 1800
  const start = performance.now()

  function tick(now) {
    const progress = Math.min((now - start) / duration, 1)
    const ease = 1 - Math.pow(1 - progress, 3)
    displayValue.value = Math.round(props.target * ease)
    if (progress < 1) requestAnimationFrame(tick)
  }

  setTimeout(() => requestAnimationFrame(tick), 300)
})
</script>
