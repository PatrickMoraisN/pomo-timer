/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import { Cycle } from '../../../../contexts/CyclesContext'

interface TotalHoursProps {
  cycles: Cycle[]
}

export function TotalHours({ cycles }: TotalHoursProps) {
  const [totalTimeMsg, setTotalTimeMsg] = useState('')

  const getHoursAndMinutes = (totalTime: number) => {
    const hours = (totalTime / 60).toFixed(0)
    const minutes = ((+(totalTime / 60).toFixed(2) - +hours) * 60).toFixed(0)

    if (minutes === '0') {
      return `${hours} hours.`
    }
    return `${hours} hours and ${minutes} minutes`
  }

  const getMinutes = (totalTime: number) => {
    return `${totalTime} minutes.`
  }

  const getTotalTimeFromCompletedCycles = () => {
    let totalTime: number = 0
    let message = ''
    let allCycleAreFinished = true
    cycles.forEach((cycle) => {
      if (cycle.finishedDate && cycle.minutesAmount) {
        totalTime += cycle.minutesAmount
        return
      }
      allCycleAreFinished = false
    })

    if (!allCycleAreFinished) return
    if (totalTime >= 60) {
      message = getHoursAndMinutes(totalTime)
    }
    if (totalTime < 60) {
      message = getMinutes(totalTime)
    }
    setTotalTimeMsg(message)
  }

  useEffect(() => {
    getTotalTimeFromCompletedCycles()
  }, [cycles])

  return (
    <>
      {totalTimeMsg && (
        <div data-testid="total-time-msg">
          Total time on completed cycles: {totalTimeMsg}
        </div>
      )}
    </>
  )
}
