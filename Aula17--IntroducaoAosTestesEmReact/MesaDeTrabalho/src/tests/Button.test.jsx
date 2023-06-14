/* 
Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para a Mesa de Trabalho "Aula 17: Introdução a testes" 
  - Prof: Marcos V. Martins
*/

import { render, screen, fireEvent } from "@testing-library/react";
import Button from "../components/Button";

describe("<Button /> testes no componente", () => {

    test("Testar se o evento submit foi disparado", () => {

        /// Renderizamos o componente Botão
        render(
            <Button />
        );

        /// Capturamos o botão com base em seu tipo/definição
        const button = screen.getByRole("button");

        /// Utilizamos o método fireEvent, para disparar o evento de submit no botão
        fireEvent.submit(button);

    });

});