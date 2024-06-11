import { render } from "@testing-library/react"
import { Button } from "."


describe('<Button />', () => {
    it('should render the button whit the text "load more"', () => {
        render(<Button text='load more'/>);
        expect.assertions(1);
        const button = screen.getByRole('button', {name: /load more/i });
        expect(button).toHaveAttribute('class', 'button') 
    })
})