import { render } from '@testing-library/react'
import { Hello } from './components/Hello'

describe('Hello Wolrd', () => {
  it('Hello', () => {
    const { getByText } = render(<Hello />)
    expect(getByText('Hello World')).toBeInTheDocument()
  })
})
