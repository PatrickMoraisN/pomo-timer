import { screen } from '@testing-library/react'
import { renderWithRouter } from '../../../test'
import { Header } from '../Header'

describe('Header', () => {
  it('should render Header correctly', async () => {
    renderWithRouter(<Header />)

    const logo = screen.getByTestId('logo')
    const timerLink = screen.getByTestId('timer-link')
    const historyLink = screen.getByTestId('history-link')

    expect(logo).toBeInTheDocument()
    expect(timerLink).toBeInTheDocument()
    expect(historyLink).toBeInTheDocument()
  })

  it('should redirect to an correctly url', async () => {
    const { user } = renderWithRouter(<Header />)

    const timerLink = screen.getByTestId('timer-link')
    const historyLink = screen.getByTestId('history-link')

    await user.click(timerLink)
    expect(window.location.pathname).toBe('/')

    await user.click(historyLink)
    expect(window.location.pathname).toBe('/history')
  })
})
