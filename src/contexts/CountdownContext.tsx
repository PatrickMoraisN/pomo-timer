import { createContext, ReactNode, useContext } from 'react'
import { CyclesContext } from '@context/index'

interface CountdownContextProps {
  totalSeconds: number
  minutes: string
  seconds: string
}

export const CountdownContext = createContext({} as CountdownContextProps)

interface CountdownContextProviderProps {
  children: ReactNode
}
export function CountdownContextProvider({
  children,
}: CountdownContextProviderProps) {
  const { activeCycle, amountSecondsPassed } = useContext(CyclesContext)

  const totalSeconds = activeCycle ? activeCycle.minutesAmount * 60 : 0

  const currentSeconds = activeCycle ? totalSeconds - amountSecondsPassed : 0
  const minutesAmount = Math.floor(currentSeconds / 60)
  const secondsAmount = currentSeconds % 60

  const minutes = String(minutesAmount).padStart(2, '0')
  const seconds = String(secondsAmount).padStart(2, '0')

  return (
    <CountdownContext.Provider value={{ totalSeconds, minutes, seconds }}>
      {children}
    </CountdownContext.Provider>
  )
}
