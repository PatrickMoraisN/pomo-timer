import { RenderWithContext } from '@test/utils/RenderWithContext'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { Home } from '../Home'

const renderHome = () =>
  render(
    <RenderWithContext>
      <Home />
    </RenderWithContext>,
  )

describe('Home', () => {
  it('should render correclty', () => {
    renderHome()

    expect(screen.getByText(/i will work in/gi)).toBeInTheDocument()
    expect(screen.getByText(/minutes/gi)).toBeInTheDocument()
  })

  it('should render with START button disable', () => {
    renderHome()

    const startBtn = screen.getByText('START')
    expect(startBtn).toBeDisabled()
  })

  it('should render enable START button when we complete the form', async () => {
    renderHome()

    const projectNameInput = screen.getByTestId('task-input')
    const minutesInput = screen.getByTestId('minutes-input')
    const startBtn = screen.getByText('START')

    expect(startBtn).toBeDisabled()

    await userEvent.type(projectNameInput, 'Task1')
    await userEvent.type(minutesInput, '5')

    expect(projectNameInput).toHaveValue('Task1')
    expect(minutesInput).toHaveValue(5)
    expect(startBtn).toBeEnabled()
  })

  it('should change START button to STOP button when we click on it', async () => {
    renderHome()

    const projectNameInput = screen.getByTestId('task-input')
    const minutesInput = screen.getByTestId('minutes-input')
    const startBtn = screen.getByText('START')

    expect(startBtn).toBeDisabled()

    await userEvent.type(projectNameInput, 'Task1')
    await userEvent.type(minutesInput, '5')

    userEvent.click(startBtn)

    await waitFor(() => expect(startBtn).not.toBeInTheDocument())

    const stopBtn = screen.getByText('STOP')
    expect(stopBtn).toBeInTheDocument()
  })
})
