import dynamic from 'next/dynamic'

const ModelViewer = dynamic(() => import('@/components/three/ModelViewer'), { ssr: false })

export default function Page() {
  return (
    <ModelViewer
      urls={{
        glb: '/xmas-2022/antoine.glb',
        usdz: '/xmas-2022/antoine.usdz',
        poster: '/xmas-2022/poster.webp',
      }}
    />
  )
}

import LayoutWrapper from '@/components/LayoutWrapper'

Page.getLayout = function getLayout(page) {
  return <LayoutWrapper>{page}</LayoutWrapper>
}
