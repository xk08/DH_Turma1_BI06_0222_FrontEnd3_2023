import { render, screen } from "@testing-library/react";
import Button from "../components/Button";

/* const Button = () => {
    return(
        <button>Clique aqui</button>
    
} */

/// describe(JEST)
describe("</Button /> testes", () => {

    /// test(JEST)
    test("O componente renderizou", () => {

        /// render(RTL)
        render(<Button />);

    });

    test("O botão está desabilitado", () => {
        /// render(RTL)
        render(<Button />);

        /// screen(RTL)
        const button = screen.getByRole("button");

        /// expect(JEST) - toHaveAttribute(RTL)
        expect(button).toHaveAttribute("disabled");

    });

});