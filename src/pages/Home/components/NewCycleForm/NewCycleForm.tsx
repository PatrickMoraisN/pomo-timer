import { useContext } from 'react'
import { useFormContext } from 'react-hook-form'
import { CyclesContext } from '../../../../contexts/CyclesContext'
import * as S from './NewCycleForm.styles'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()
  return (
    <S.FormContainer>
      <label htmlFor="task">I will work in</label>
      <S.TaskInput
        data-testid="task-input"
        type="text"
        id="task"
        placeholder="name your project"
        disabled={!!activeCycle}
        {...register('task')}
      />

      <label htmlFor="minutesAmount">for</label>
      <S.MinutesAmountInput
        data-testid="minutes-input"
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
  )
}
