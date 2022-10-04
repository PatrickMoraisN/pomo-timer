import styled from 'styled-components'

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  color: ${(props) => props.theme['gray-100']};
  font-size: 1.125rem;
  font-weight: bold;
  flex-wrap: wrap;
`

const BaseInput = styled.input`
  background: transparent;
  height: 2.5rem;
  border: 0;
  border-bottom: 2px solid ${(props) => props.theme['gray-500']};
  font-weight: bold;
  font-size: 1.125rem;
  padding: 0 0.5rem;
  color: ${(props) => props.theme['gray-100']};

  &:focus {
    box-shadow: none;
    border-color: ${(props) => props.theme['yellow-400']};
  }
`

export const TaskInput = styled(BaseInput)`
  flex: 1;
  text-align: center;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }

  @media screen and (max-width: 568px) {
    flex: 0;
    width: 10rem;
  }
`

export const MinutesAmountInput = styled(BaseInput)`
  width: 4rem;

  @media screen and (max-width: 568px) {
    width: 1.8rem;
  }
`
