// Greet should render text hello and if name is passed into the comp it should render Hello followed by name

import { render, screen } from "@testing-library/react";
import { Greet } from "../components/greeting/greet";

test('Greet renders correctly', () => {
    render(<Greet />)
    const textEl = screen.getByText("Hello")
    expect(textEl).toBeInTheDocument()
})

test('Greet render hello with a name', () => {
    render(<Greet name="Piyush" />)
    const textEl = screen.getByText("Hello Piyush")
    expect(textEl).toBeInTheDocument()
})