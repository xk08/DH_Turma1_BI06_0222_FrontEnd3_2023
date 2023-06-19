/* 
Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para a Mesa de Trabalho "Aula 18: Mesa de trabalho" 
  - Prof: Marcos V. Martins
*/
import { fireEvent, render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';

import Details from '../components/Details/Details';

describe("<Details /> testes no componente", () => {

    test("Renderizou corretamente o componente", () => {
        render(
            <BrowserRouter>
                <Details />
            </BrowserRouter>
        );
    });


    test("O botão 'Voltar' está executando corretamente a ação de click", () => {
        render(
            <BrowserRouter>
                <Details />
            </BrowserRouter>
        );
        const button = screen.getByRole("button");
        fireEvent.click(button);
    });

}); 