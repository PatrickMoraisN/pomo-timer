import { render } from '@testing-library/react'
import * as Cycle from '@test/mocks/cycles.mock'
import { TotalHours } from '@pages/History/components/TotalHours'

const renderTotalHours = (cycles: any) => {
  const { container } = render(<TotalHours cycles={cycles} />)
  return { container }
}

describe('TotalHours', () => {
  it('should render TotalHours correctly on minutes', () => {
    renderTotalHours(Cycle.cyclesCompletedOnlyMinutesMock)
    const msg = document.querySelector("div[data-testid='total-time-msg']")
    expect(msg).toBeInTheDocument()
    expect(msg?.textContent).toBe('Total time on completed cycles: 15 minutes.')
  })

  it('should render TotalHours correctly on Hours', () => {
    renderTotalHours(Cycle.cyclesCompletedOnlyHoursMock)
    const msg = document.querySelector("div[data-testid='total-time-msg']")
    expect(msg).toBeInTheDocument()
    expect(msg?.textContent).toBe('Total time on completed cycles: 1 hours.')
  })

  it('should render TotalHours correctly on hours and minutes', () => {
    renderTotalHours(Cycle.cyclesCompletedHoursAndMinutesMock)
    const msg = document.querySelector("div[data-testid='total-time-msg']")
    expect(msg).toBeInTheDocument()
    expect(msg?.textContent).toBe(
      'Total time on completed cycles: 1 hours and 20 minutes',
    )
  })

  it('should not render TotalHours', async () => {
    renderTotalHours(Cycle.cyclesUncompletedMock)
    const msg = document.querySelector("div[data-testid='total-time-msg']")
    expect(msg).not.toBeInTheDocument()
  })
})
