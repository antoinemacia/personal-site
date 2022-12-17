import '@google/model-viewer'
import styles from './styles.module.css'

const Model = () => (
  <div id="card" className={styles.body}>
    <model-viewer
      src="/Astronaut.glb"
      ios-src="/diffuse-textured-mesh-v1.usdz"
      poster="/poster.webp"
      alt="A 3D model of an astronaut"
      shadow-intensity="1"
      camera-controls
      auto-rotate
      ar
      ar-modes="scene-viewer webxr quick-look"
    >
      <button slot="ar-button" className={styles.arButton}>
        View in your space
      </button>
    </model-viewer>
  </div>
)

export default Model
