import { differenceInSeconds } from 'date-fns'
import React, { useContext, useEffect } from 'react'
import { CountdownContext } from '../../contexts/CountdownContext'
import { Cycle, CyclesContext } from '../../contexts/CyclesContext'
import * as S from './History.styles'

export function History() {
  const {
    cycles,
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext)
  const { totalSeconds, minutes, seconds } = useContext(CountdownContext)

  const getCycleStatus = (cycle: Cycle) => {
    if (cycle.finishedDate) {
      return <S.Status statusColor="green">Concluido</S.Status>
    }
    if (cycle.interruptedDate) {
      return <S.Status statusColor="red">Interrompido</S.Status>
    }
    if (!cycle.interruptedDate && !cycle.finishedDate) {
      return <S.Status statusColor="yellow">Em andamento</S.Status>
    }
  }

  useEffect(() => {
    let interval: number

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
    <S.HistoryContainer>
      <h1>My History</h1>

      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Tarefa</th>
              <th>Duração</th>
              <th>Início</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles &&
              cycles.map((cycle) => (
                <tr key={cycle.id}>
                  <td>{cycle.task}</td>
                  <td>{cycle.minutesAmount} minutos</td>
                  <td>{cycle.startDate.toISOString()}</td>
                  <td>{getCycleStatus(cycle)}</td>
                </tr>
              ))}
            {!cycles.length && (
              <tr>
                <td>Sem ciclos ainda :/</td>
                <td></td>
                <td></td>
                <td></td>
              </tr>
            )}
          </tbody>
        </table>
      </S.HistoryList>
    </S.HistoryContainer>
  )
}
