import React, { useState } from 'react'
import { ModelViewerElement } from '@google/model-viewer'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'model-viewer': any
    }
  }
}
export default function App() {
  const modelRef = React.useRef()
  const [annots, setAnnots] = useState([])

  const handleClick = (event) => {
    const { clientX, clientY } = event

    // if (modelRef.current) {
    //   let hit = modelRef.current.positionAndNormalFromPoint(clientX, clientY);
    //   if (hit) {
    //     setAnnots((annots) => {
    //       return [...annots, hit];
    //     });
    //   }
    // }
  }

  const getDataPosition = (annot) => {
    return `${annot.position.x} ${annot.position.y} ${annot.position.z}`
  }

  const getDataNormal = (annot) => {
    return `${annot.normal.x} ${annot.normal.y} ${annot.normal.z}`
  }

  return (
    <div className="align-center h-full">
      <model-viewer
        // className="model-viewer"
        src="/static/models/antoine.glb"
        alt="A rock"
        camera-controls
        ar
        ar-modes="webxr"
        // onclick={handleClick}
        ref={(ref) => {
          modelRef.current = ref
        }}
      ></model-viewer>
    </div>
  )
}

import Head from 'next/head'

import LayoutWrapper from '@/components/LayoutWrapper'
import Script from 'next/script'

App.getLayout = function getLayout(page) {
  return (
    <LayoutWrapper>
      <Script type="module" src="https://unpkg.com/@google/model-viewer/dist/model-viewer.min.js" />
      {page}
    </LayoutWrapper>
  )
}
