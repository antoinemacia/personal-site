import '@google/model-viewer'
import styles from './styles.module.css'

const ModelViewer = ({ urls }) => (
  <div id="card" className={styles.body}>
    <model-viewer
      src={urls.glb}
      ios-src={urls.usdz}
      poster={urls.poster}
      alt="A 3D model of an astronaut"
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

export default ModelViewer
