// Greet should render text hello and if name is passed into the comp it should render Hello followed by name

import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

test('Greet renders correctly', () => {
  render(<Greet />)
  const textEl = screen.getByText(/Hello/)
  expect(textEl).toBeInTheDocument()
})
