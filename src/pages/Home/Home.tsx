import { HandPalm, Play } from 'phosphor-react'
import * as S from './Home.styles'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import React, { createContext, useEffect, useState } from 'react'
import { NewCycleForm, Countdown } from './components'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Write a task!'),
  minutesAmount: zod.number().min(5).max(60, "Cycle can't be 60+ min!"),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>

interface Cycle {
  id: string
  task: string
  minutesAmount: number
  startDate: Date
  interruptedDate?: Date
  finishedDate?: Date
}

interface CyclesContextType {
  activeCycle: Cycle | undefined
  activeCycleId: string | null
  markCurrentCycleAsFinished: () => void
}

export const CyclesContext = createContext({} as CyclesContextType)

export function Home() {
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  // const [amountSecondsPassed, setAmountSecondsPassed] = useState(0)

  const { register, handleSubmit, watch, _formState, reset } =
    useForm<NewCycleFormData>({
      resolver: zodResolver(newCycleFormValidationSchema),
      defaultValues: {
        task: '',
        minutesAmount: 0,
      },
    })

  function markCurrentCycleAsFinished() {
    setCycles((prevCycles) =>
      prevCycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, finishedDate: new Date() }
        }
        return cycle
      }),
    )
  }

  function handleCreateNewCycle(data: NewCycleFormData) {
    const cycleId = String(new Date().getTime())

    const newCycle: Cycle = {
      id: cycleId,
      task: data.task,
      minutesAmount: data.minutesAmount,
      startDate: new Date(),
    }

    setCycles((prevCycles) => [...prevCycles, newCycle])
    setActiveCycleId(cycleId)
    setAmountSecondsPassed(totalSeconds)
    reset()
  }

  function handleInterruptCycle() {
    setCycles((cycles) =>
      cycles.map((cycle) => {
        if (cycle.id === activeCycleId) {
          return { ...cycle, interruptedDate: new Date() }
        }
        return cycle
      }),
    )
    setActiveCycleId(null)
  }

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)

  const task = watch('task')
  const isSubmitDisabled = !task

  // useEffect(() => {
  //   let interval: number

  //   if (activeCycle) {
  //     interval = setInterval(() => {
  //       const secondsDifference = differenceInSeconds(
  //         new Date(),
  //         activeCycle.startDate,
  //       )

  //       if (secondsDifference >= totalSeconds) {
  //         setCycles((prevCycles) =>
  //           prevCycles.map((cycle) => {
  //             if (cycle.id === activeCycleId) {
  //               return { ...cycle, finishedDate: new Date() }
  //             }
  //             return cycle
  //           }),
  //         )
  //         setActiveCycleId(null)
  //         clearInterval(interval)
  //         return
  //       }

  //       setAmountSecondsPassed(secondsDifference)
  //     }, 1000)
  //   }

  //   return () => {
  //     clearInterval(interval)
  //   }
  // }, [activeCycle, totalSeconds, activeCycleId])

  // useEffect(() => {
  //   if (activeCycle) {
  //     document.title = `${minutes}:${seconds}`
  //   }
  // }, [minutes, seconds, activeCycle])

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <CyclesContext.Provider
          value={{ activeCycle, activeCycleId, markCurrentCycleAsFinished }}
        >
          <NewCycleForm />
          <Countdown />
        </CyclesContext.Provider>

        {activeCycle ? (
          <S.StopCountdownButton type="button" onClick={handleInterruptCycle}>
            <HandPalm />
            STOP
          </S.StopCountdownButton>
        ) : (
          <S.StartCountdownButton type="submit" disabled={isSubmitDisabled}>
            <Play />
            START
          </S.StartCountdownButton>
        )}
      </form>
    </S.HomeContainer>
  )
}
