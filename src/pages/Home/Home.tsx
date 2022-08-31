import { Play } from 'phosphor-react'
import * as S from './Home.styles'
import { useForm } from 'react-hook-form'
import React from 'react'

export function Home() {
  const { register, handleSubmit, watch } = useForm()

  function handleCreateNewCycle(data: any) {
    console.log(data)
  }

  const task = watch('task')
  const isSubmitDisabled = !task

  return (
    <S.HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)}>
        <S.FormContainer>
          <label htmlFor="task">I will work in</label>
          <S.TaskInput
            type="text"
            id="task"
            placeholder="name your project"
            {...register('task')}
          />

          <label htmlFor="minutesAmount">for</label>
          <S.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
            step={5}
            min={5}
            max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />

          <span>minutes.</span>
        </S.FormContainer>

        <S.CountdownContainer>
          <span>0</span>
          <span>0</span>
          <S.Sperator>:</S.Sperator>
          <span>0</span>
          <span>0</span>
        </S.CountdownContainer>

        <S.StartCountdownButton type="submit" disabled={!isSubmitDisabled}>
          <Play />
          START
        </S.StartCountdownButton>
      </form>
    </S.HomeContainer>
  )
}
