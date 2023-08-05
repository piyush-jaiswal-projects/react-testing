// Greet should render text hello and if name is passed into the comp it should render Hello followed by name

import { render, screen } from "@testing-library/react";
import { Greet } from "./greet";

//sometimes "it" is used in place of "test"
//"test.only" -> "fit"
//"test.skip" -> "xit"

describe('Greet', () => {
    it('Renders correctly', () => {
        render(<Greet />)
        const textEl = screen.getByText("Hello")
        expect(textEl).toBeInTheDocument()
    })
    
    describe('Nested Greet', () => {
        it('Render hello with a name', () => {
            render(<Greet name="Piyush" />)
            const textEl = screen.getByText("Hello Piyush")
            expect(textEl).toBeInTheDocument()
        })
    })
})

describe('Greet Two', () => {
    test('Renders correctly', () => {
        render(<Greet />)
        const textEl = screen.getByText("Hello")
        expect(textEl).toBeInTheDocument()
    })
    
    test('Render hello with a name', () => {
        render(<Greet name="Piyush" />)
        const textEl = screen.getByText("Hello Piyush")
        expect(textEl).toBeInTheDocument()
    })
})