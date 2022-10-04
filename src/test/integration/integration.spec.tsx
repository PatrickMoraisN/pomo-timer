import { screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { renderWithRouter } from '..'
import App from '../../App'

describe('integration', () => {
  it('create a cycle, verify history page, stop cycle, clear history ', async () => {
    renderWithRouter(<App />)

    expect(screen.getByText(/i will work in/gi)).toBeInTheDocument()
    await userEvent.type(screen.getByTestId('task-input'), 'test integration')
    await userEvent.type(screen.getByTestId('minutes-input'), '5')

    const startBtn = screen.getByText(/start/gi)
    expect(startBtn).toBeInTheDocument()
    expect(startBtn).toBeEnabled()
    await userEvent.click(startBtn)

    await waitFor(() => expect(startBtn).not.toBeInTheDocument())
    const stopBtn = screen.getByText(/stop/gi)
    expect(stopBtn).toBeInTheDocument()

    await userEvent.click(screen.getByTestId('history-link'))
    expect(window.location.pathname).toBe('/history')
    expect(screen.getByText(/my history/gi)).toBeInTheDocument()
    expect(screen.getByText(/test integration/gi)).toBeInTheDocument()
    expect(screen.getByText(/in progress/gi)).toBeInTheDocument()

    await userEvent.click(screen.getByTestId('timer-link'))
    expect(window.location.pathname).toBe('/')
    expect(screen.getByText(/stop/gi)).toBeInTheDocument()

    await userEvent.click(screen.getByText(/stop/gi))

    await userEvent.click(screen.getByTestId('history-link'))
    expect(screen.getByText(/test integration/gi)).toBeInTheDocument()
    expect(screen.getByText(/interrupted/gi)).toBeInTheDocument()

    await userEvent.click(screen.getByText(/clear history/gi))
    expect(screen.getByText('No cycles yet :/')).toBeInTheDocument()
  })
})
