import { render } from '@testing-library/react'
import { NotFound } from '../NotFound'

describe('NotFound', () => {
  it('should render correctly', () => {
    const { container } = render(<NotFound />)
    expect(container).toMatchSnapshot()
  })
})
