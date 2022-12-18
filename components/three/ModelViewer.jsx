import '@google/model-viewer'
import styles from './styles.module.css'

const ModelViewer = ({ urls, children }) => (
  <div id="card" className={styles.card}>
    <model-viewer
      id="viewer"
      class={styles.viewer}
      src={urls.glb}
      ios-src={urls.usdz}
      poster={urls.poster}
      disable-pan
      camera-controls
      auto-rotate
      rotation-per-second="0.5rad"
      autoplay
      ar-button
      ar
      ar-modes="scene-viewer webxr quick-look"
    >
      {/* <button slot="ar-button" className={styles.arButton}>
        View in your space
      </button> */}

      {children}
    </model-viewer>
  </div>
)

export default ModelViewer
