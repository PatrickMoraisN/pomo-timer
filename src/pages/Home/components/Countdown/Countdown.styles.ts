import styled from 'styled-components'

export const CountdownContainer = styled.div`
  font-family: 'Roboto Mono', monospace;
  font-size: 10rem;
  line-height: 8rem;
  color: ${(props) => props.theme['gray-100']};
  display: flex;
  gap: 1rem;

  span {
    background: ${(props) => props.theme['gray-700']};
    padding: 2rem 1rem;
    border-radius: 8px;
  }

  @media screen and (max-width: 720px) {
    font-size: 5rem;
    line-height: 5rem;
  }

  @media screen and (max-width: 568px) {
    font-size: 3rem;
    line-height: 3rem;
  }
`

export const Sperator = styled.div`
  padding: 2rem 0;
  color: ${(props) => props.theme['yellow-400']};
  width: 4rem;
  overflow: hidden;
  display: flex;
  justify-content: center;

  @media screen and (max-width: 720px) {
    width: 2rem;
  }
`
