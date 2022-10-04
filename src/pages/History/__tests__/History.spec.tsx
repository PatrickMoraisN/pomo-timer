import { Storage } from '@enums/storage'
import { cyclesCompletedHoursAndMinutesActiveCycleMock } from '@test/mocks/cycles.mock'
import { RenderWithContext } from '@test/utils/RenderWithContext'
import { render, screen, waitFor } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { History } from '../History'

const renderHistory = () => {
  render(
    <RenderWithContext>
      <History />
    </RenderWithContext>,
  )
}

describe('History', () => {
  it('should render empty History correctly', () => {
    localStorage.removeItem(Storage.CYCLES_STATE)
    renderHistory()

    expect(screen.getByText('No cycles yet :/')).toBeInTheDocument()
  })

  it('should render not empty History correctly', () => {
    const obj = {
      cycles: cyclesCompletedHoursAndMinutesActiveCycleMock,
      activeCycleId: 4,
    }
    localStorage.setItem(Storage.CYCLES_STATE, JSON.stringify(obj))
    renderHistory()

    expect(screen.getByText('In progress')).toBeInTheDocument()
  })

  it('should clear all History when we click on Clear History btn', async () => {
    const obj = {
      cycles: cyclesCompletedHoursAndMinutesActiveCycleMock,
      activeCycleId: 4,
    }
    localStorage.setItem(Storage.CYCLES_STATE, JSON.stringify(obj))
    renderHistory()

    expect(screen.getByText('In progress')).toBeInTheDocument()

    const clearBtn = screen.getByText(/Clear History/gi)

    userEvent.click(clearBtn)

    await waitFor(() =>
      expect(screen.getByText('No cycles yet :/')).toBeInTheDocument(),
    )
  })
})
