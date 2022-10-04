import { RenderWithContext } from '@test/utils/RenderWithContext'
import { render } from '@testing-library/react'
import { Countdown } from '../Countdown'

const renderCountdown = () => {
  render(
    <RenderWithContext>
      <Countdown />
    </RenderWithContext>,
  )
}

describe('Countdown', () => {
  it('should render correctly', () => {
    renderCountdown()

    const spans = document.querySelectorAll('span')

    expect(spans).toHaveLength(4)
    spans.forEach((span) => {
      expect(span).toHaveTextContent('0')
    })
  })
})
