export const shootBallComponent = () => ({

  init() {
    const camera = document.getElementById('camera')
    const idle = document.getElementById('idle-ball')

    this.el.sceneEl.addEventListener('touchend', (event) => {
      const ball = document.createElement('a-entity')

      ball.setAttribute('position', idle.object3D.position)

      ball.setAttribute('scale', '0.018 0.018 0.018')

      ball.setAttribute('gltf-model', '#ballModel')

      const randomRotation = {x: -90 + Math.random() * 30, y: Math.random() * 360, z: 0}

      ball.setAttribute('rotation', randomRotation)

      const velocity = new THREE.Vector3(0, 8, -5)

      velocity.applyQuaternion(idle.object3D.quaternion)

      ball.setAttribute('velocity', velocity)

      ball.setAttribute('body', {

        type: 'dynamic',

        sphereRadius: 0.35,

        shape: 'sphere',

      })

      ball.setAttribute('shadow', {

        receive: false,

      })

      this.el.sceneEl.appendChild(ball)
      let didCollide = false

      ball.addEventListener('collide', (e) => {
        if (didCollide || e.detail.body.el.id !== 'ground') {
          return
        }

        didCollide = true

        setTimeout(() => {
          ball.parentNode.removeChild(ball)
        }, 0)
      })
    })
  },

})

