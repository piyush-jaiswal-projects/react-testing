import { render, screen } from '@testing-library/react'
import { Skills } from './skills'

describe('Skills', () => {
    const skills: string[] = ['HTML', 'CSS', 'Javascript'];

    test('renders correctly', () => {
        render(<Skills skills={skills} />)
        const listElement = screen.getByRole('list')
        expect(listElement).toBeInTheDocument()
    })

    test('renders all list items', () => {
        render(<Skills skills={skills} />)
        const listItemsElement = screen.getAllByRole('listitem')
        expect(listItemsElement).toHaveLength(skills.length)
    })

    test('renders login button', () => {
        render(<Skills skills={skills} />)
        const loginButton = screen.getByRole('button', {
            name: 'Login'
        })
        expect(loginButton).toBeInTheDocument()
    })

    test('Start learning button is not rendered', () => {
        render(<Skills skills={skills} />)
        const startLearningButton = screen.queryByRole('button', {
            name: 'Start learning'
        })
        expect(startLearningButton).not.toBeInTheDocument()
    })

    // test('Start learning appears after some time', async () => {
    //     render(<Skills skills={skills} />)
    //     const startLearnBtn = await screen.findByText(/Start/i)
    //     expect(startLearnBtn).toBeInTheDocument()
    // })
})

