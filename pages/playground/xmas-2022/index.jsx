import dynamic from 'next/dynamic'

const Model = dynamic(() => import('@/components/three/Model'), { ssr: false })

export default function Page() {
  return <Model />
}

import LayoutWrapper from '@/components/LayoutWrapper'

Page.getLayout = function getLayout(page) {
  return <LayoutWrapper>{page}</LayoutWrapper>
}
