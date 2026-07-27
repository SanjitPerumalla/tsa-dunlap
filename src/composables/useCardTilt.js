export function useCardTilt() {
  function tilt(e) {
    const card = e.currentTarget
    const rect = card.getBoundingClientRect()
    const x = (e.clientX - rect.left) / rect.width - 0.5
    const y = (e.clientY - rect.top) / rect.height - 0.5
    card.style.transform = `perspective(900px) rotateX(${y * -8}deg) rotateY(${x * 8}deg) translateY(-6px)`
    card.style.transition = 'transform 0.1s ease'
  }

  function resetTilt(e) {
    const card = e.currentTarget
    card.style.transform = ''
    card.style.transition = 'transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)'
  }

  return { tilt, resetTilt }
}
