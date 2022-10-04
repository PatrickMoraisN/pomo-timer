import { CyclesContextProvider } from '@context/CyclesContext'
import { CountdownContextProvider } from '@context/index'
import React, { ReactNode } from 'react'

interface RenderWithContextProps {
  children: ReactNode
}

export function RenderWithContext({ children }: RenderWithContextProps) {
  return (
    <CyclesContextProvider>
      <CountdownContextProvider>{children}</CountdownContextProvider>
    </CyclesContextProvider>
  )
}
