import { Play } from 'phosphor-react'
import * as S from './Home.styles'
import React from 'react'

export function Home() {
  return (
    <S.HomeContainer>
      <form action="">
        <S.FormContainer>
          <label htmlFor="task">I will work in</label>
          <S.TaskInput type="text" id="task" placeholder="name your project" />

          <label htmlFor="minutesAmount">for</label>
          <S.MinutesAmountInput
            type="number"
            id="minutesAmount"
            placeholder="00"
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

        <S.StartCountdownButton type="submit">
          <Play />
          START
        </S.StartCountdownButton>
      </form>
    </S.HomeContainer>
  )
}
