import styled from 'styled-components'

export const HistoryContainer = styled.main`
  flex: 1;
  padding: 3.5rem;
  display: flex;
  flex-direction: column;

  h1 {
    font-size: 1.5rem;
    color: ${(props) => props.theme['gray-100']};
  }

  @media screen and (max-width: 568px) {
    padding: 1rem;
  }
`

export const HistoryList = styled.div`
  flex: 1;
  max-height: 500px;
  overflow: auto;
  overflow-y: auto;
  margin-top: 2rem;

  table {
    width: 100%;
    position: relative;
    border-collapse: collapse;
    min-width: 600px;

    thead {
      position: sticky;
    }

    th {
      background-color: ${(props) => props.theme['gray-600']};
      padding: 1rem;
      text-align: left;
      color: ${(props) => props.theme['gray-100']};
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
      }

      &:last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${(props) => props.theme['gray-700']};
      border-top: 4px solid ${(props) => props.theme['gray-800']};
      padding: 1rem;
      font-size: 0.875rem;
      line-height: 1.6;

      &:first-child {
        padding-left: 1.5rem;
        width: 50%;
      }

      &:last-child {
        padding-right: 1.5rem;
      }
    }
  }

  ::-webkit-scrollbar {
    height: 5px;
  }

  ::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme['gray-300']};
    border-radius: 10px;
  }

  ::-webkit-scrollbar-track {
    margin-top: 25px;
    box-shadow: inset 0 0 5px grey;
    border-radius: 10px;
  }
`

const STATUS_COLORS = {
  yellow: 'yellow-500',
  green: 'green-500',
  red: 'red-500',
} as const

interface StatusProps {
  statusColor: keyof typeof STATUS_COLORS
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 9999px;
    background-color: ${(props) =>
      props.theme[STATUS_COLORS[props.statusColor]]};
  }
`

export const HistoryHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;

  button {
    padding: 6px 12px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 5px;
    background-color: ${(props) => props.theme['red-500']};
    color: ${(props) => props.theme.white};
    transition: 0.3s;

    &:hover {
      filter: brightness(0.9);
    }
  }

  @media screen and (max-width: 568px) {
    button {
      padding: 2px 4px;
    }
  }
`
