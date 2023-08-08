import { render, screen } from '@testing-library/react'
import { CounterTwo } from './counter-two'
import user from '@testing-library/user-event'

describe('Counter Two', () => {
  test('renders correctly', () => {
    render(<CounterTwo count={0} />)
    const testElement = screen.getByText('Counter Two')
    expect(testElement).toBeInTheDocument()
  })

  test('handlers are called', async () => {
    user.setup()
    const incrementHandler = jest.fn()
    const decrementHandler = jest.fn()
    render(
      <CounterTwo
        count={0}
        handleIncrement={incrementHandler}
        handleDecrement={decrementHandler}
      />,
    )

    const incrementButton = screen.getByRole('button', {
      name: 'Increment',
    })
    const decrementButton = screen.getByRole('button', {
      name: 'Decrement',
    })

    await user.click(incrementButton)
    await user.click(decrementButton)
    expect(incrementHandler).toBeCalledTimes(1)
    expect(decrementHandler).toBeCalledTimes(1)
  })
})
