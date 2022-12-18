import dynamic from 'next/dynamic'
import React, { useRef, useState } from 'react'
import styles from './styles.module.css'

const ModelViewer = dynamic(() => import('@/components/three/ModelViewer'), { ssr: false })

export default function Page() {
  const audioEl = useRef(null)
  const [played, setPlayed] = useState(false)

  const playAudio = () => {
    if (played) return

    audioEl.current.play()
    audioEl.current.controls = true
    setPlayed(true)
  }

  return (
    <div role="button" onClick={playAudio} onKeyDown={playAudio} tabIndex={0}>
      <ModelViewer
        urls={{
          glb: '/xmas-2022/antoine-nic-v2.glb',
          usdz: '/xmas-2022/antoine-nic-v1.usdz',
          poster: '/xmas-2022/poster.webp',
        }}
      />
      <div className={styles.audioPlayer}>
        <audio ref={audioEl} src="/xmas-2022/better-off-alone.mp3">
          <track kind="captions" />
        </audio>
      </div>
    </div>
  )
}

import LayoutWrapper from '@/components/LayoutWrapper'

Page.getLayout = function getLayout(page) {
  return <LayoutWrapper>{page}</LayoutWrapper>
}
