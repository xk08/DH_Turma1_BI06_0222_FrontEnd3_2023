/* 
Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para a Mesa de Trabalho "Aula 17: Introdução a testes" 
  - Prof: Marcos V. Martins
*/

import { render, screen } from "@testing-library/react";
import Input from "../components/Input";

describe("<Input /> testes no componente", () => {

    test("Testar se o input não está recebendo valores numéricos", () => {

        /// Declaramos o valor que vamos enviar via prop para o Input
        const valorInicialInput = "Exemplo Prof Marcos M";

        /// Renderizamos o componente enviando o valor via prop
        render(
            <Input
                value={valorInicialInput}
            />
        );

        /// Capturamos o input com base no elemento input/textbox
        const valorCapturadoInput = screen.getByRole("textbox");

        /// Esperamos que: O valor final recebido no input está igual ao valor inicial enviado
        expect(valorCapturadoInput.value).toBe(valorInicialInput);

        /// Esperamos que O valor final recebido no input, não possui nenhum número dentre seus caracteres (validado via RegExp)
        expect(valorCapturadoInput.value).not.toMatch(/^\d+$/);

    });

});