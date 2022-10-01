/* eslint-disable no-undef */
import { useContext, useEffect } from 'react'
import { differenceInSeconds } from 'date-fns'
import * as S from './Countdown.styles'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import { CountdownContext } from '../../../../contexts/CountdownContext'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext)

  const { totalSeconds, minutes, seconds } = useContext(CountdownContext)

  useEffect(() => {
    let interval: number | Timer

    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          activeCycle.startDate,
        )
        if (secondsDifference >= totalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(totalSeconds)
          clearInterval(interval)
          return
        }
        setSecondsPassed(secondsDifference)
      }, 1000)
    }

    return () => {
      clearInterval(interval)
    }
  }, [activeCycle, totalSeconds, activeCycleId])

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
      return
    }
    document.title = 'PomoTimer'
  }, [minutes, seconds, activeCycle])

  return (
    <S.CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <S.Sperator>:</S.Sperator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </S.CountdownContainer>
  )
}
