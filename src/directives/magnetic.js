const isTouch = () => window.matchMedia('(pointer: coarse)').matches

export const vMagnetic = {
  mounted(el) {
    if (isTouch()) return

    el.addEventListener('mousemove', (e) => {
      const rect = el.getBoundingClientRect()
      const x = (e.clientX - rect.left - rect.width / 2) * 0.28
      const y = (e.clientY - rect.top - rect.height / 2) * 0.28
      el.style.transform = `translate(${x}px, ${y}px) translateY(-2px)`
      el.style.transition = 'transform 0.15s ease'
    })

    el.addEventListener('mouseleave', () => {
      el.style.transform = ''
      el.style.transition = 'transform 0.5s cubic-bezier(0.22, 1, 0.36, 1)'
    })
  }
}
