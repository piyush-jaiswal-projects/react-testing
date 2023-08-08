import { render, screen, act } from "@testing-library/react";
import { Counter } from "./counter";
import user from '@testing-library/user-event'

describe('Counter', () => {
    test('renders the component', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        const btnElement = screen.getByRole('button',{
            name:'Increment'
        })
        expect(countElement).toBeInTheDocument()
        expect(btnElement).toBeInTheDocument()
    })

    test('renders the intial value 0', () => {
        render(<Counter />)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('0')
    })

    test('renders incremented value on button click', async () => {
        user.setup()
        render(<Counter />)
        const btnElement = screen.getByRole('button',{
            name:'Increment'
        })
        await user.click(btnElement)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('1')
    })

    test('renders a count of 2 after clicking the increment btn twice', async () => {
        user.setup()
        render(<Counter />)
        const btnElement = screen.getByRole('button',{
            name:'Increment'
        })
        await user.click(btnElement)
        await user.click(btnElement)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('2')
    })

    test('renders amount as count value after clicking set button', async () => {
        user.setup()
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        await user.type(amountInput, '10')
        expect(amountInput).toHaveValue(10)
        const setButton = screen.getByRole('button', {
            name: "Set"
        })
        await user.click(setButton)
        const countElement = screen.getByRole('heading')
        expect(countElement).toHaveTextContent('10')
    })

    test('elements are focussed in the right order', async () => {
        render(<Counter />)
        const amountInput = screen.getByRole('spinbutton')
        const incrementBtn = screen.getByRole('button', {
            name: "Increment"
        })
        const setBtn = screen.getByRole('button', {
            name: 'Set'
        })
        await user.tab()
        expect(incrementBtn).toHaveFocus()
        await user.tab()
        expect(amountInput).toHaveFocus()
        await user.tab()
        expect(setBtn).toHaveFocus()
    })
})