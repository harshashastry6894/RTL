import { render, screen } from '@testing-library/react'
import { Greet } from './greet'

describe('Greet', () => {
    test('Greet renders correctly', () => {
        render(<Greet />)
        const textElement = screen.getByText(/Hello/)
        expect(textElement).toBeInTheDocument()
    })

    describe('Nested', () => {
        test('Greet renders with a name', () => {
            render(<Greet name='shastry' />)
            const textElement = screen.getByText('Hello shastry')
            expect(textElement).toBeInTheDocument()
        })
    })
})
