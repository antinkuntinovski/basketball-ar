export const swipeBallComponent = () => ({
  init() {
    let xDown = null
    let yDown = null
    const idle = document.getElementById('idle-ball')
    function getTouches(evt) {
      return evt.touches ||             // browser API
             evt.originalEvent.touches  // jQuery
    }

    function handleTouchStart(evt) {
      const firstTouch = getTouches(evt)[0]
      xDown = firstTouch.clientX
      yDown = firstTouch.clientY
    }

    function handleTouchMove(evt) {
      if (!xDown || !yDown) {
        return
      }

      const xUp = evt.touches[0].clientX
      const yUp = evt.touches[0].clientY

      const xDiff = xDown - xUp
      const yDiff = yDown - yUp

      if (Math.abs(xDiff) > Math.abs(yDiff)) { /* most significant */
        if (xDiff > 0) {
          /* right swipe */
        } else {
          /* left swipe */
        }
      } else if (yDiff > 0) {
        /* down swipe */
      } else {
        const newPosition = {x: xDown, y: yDown, z: -2}
        idle.setAttribute('position', newPosition)
      }
      /* reset values */
      xDown = null
      yDown = null
    }
    document.addEventListener('touchstart', handleTouchStart, false)
    document.addEventListener('touchmove', handleTouchMove, false)
  },
})
