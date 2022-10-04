import { differenceInSeconds, formatDistanceToNow } from 'date-fns'
import { Trash } from 'phosphor-react'
import { useContext, useEffect } from 'react'
import { CountdownContext } from '@context/CountdownContext'
import { Cycle, CyclesContext } from '@context/CyclesContext'
import { Storage } from '@enums/index'
import { deleteAllCyclesAction } from '@reducers/index'
import { TotalHours } from '@pages/History/components'

import * as S from './History.styles'

export function History() {
  const {
    cycles,
    dispatch,
    activeCycle,
    activeCycleId,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  } = useContext(CyclesContext)
  const { totalSeconds, minutes, seconds } = useContext(CountdownContext)

  const getCycleStatus = (cycle: Cycle) => {
    if (cycle.finishedDate) {
      return <S.Status statusColor="green">Completed</S.Status>
    }
    if (cycle.interruptedDate) {
      return <S.Status statusColor="red">Interrupted</S.Status>
    }
    if (!cycle.interruptedDate && !cycle.finishedDate) {
      return <S.Status statusColor="yellow">In progress</S.Status>
    }
  }

  const handleClearHistory = () => {
    localStorage.removeItem(Storage.CYCLES_STATE)
    dispatch(deleteAllCyclesAction())
  }

  useEffect(() => {
    let interval: any

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
      <S.HistoryHeaderContainer>
        <h1>My History</h1>
        {!!cycles.length && (
          <button onClick={handleClearHistory}>
            <Trash /> Clear History
          </button>
        )}
      </S.HistoryHeaderContainer>

      {!!cycles.length && <TotalHours cycles={cycles} />}

      <S.HistoryList>
        <table>
          <thead>
            <tr>
              <th>Task</th>
              <th>Duration</th>
              <th>Start</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {cycles &&
              cycles
                .slice(0)
                .reverse()
                .map((cycle) => (
                  <tr key={cycle.id}>
                    <td>{cycle.task}</td>
                    <td>{cycle.minutesAmount} minutes</td>
                    <td>
                      {formatDistanceToNow(new Date(cycle.startDate), {
                        addSuffix: true,
                      })}
                    </td>
                    <td>{getCycleStatus(cycle)}</td>
                  </tr>
                ))}
            {!cycles.length && (
              <tr>
                <td></td>
                <td>No cycles yet :/</td>
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
