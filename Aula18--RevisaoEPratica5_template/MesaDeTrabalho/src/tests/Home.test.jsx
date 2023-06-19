/* 
Digital House Brasil
  - Front end III (ReactJS)
  - Possível solução para a Mesa de Trabalho "Aula 18: Mesa de trabalho" 
  - Prof: Marcos V. Martins
*/
import hoteis from '../hoteis.json';

import { BrowserRouter } from 'react-router-dom';
import { render } from '@testing-library/react';

import Home from '../components/Home/Home';

describe("<Home /> testes no componente", () => {

    test("Renderizou corretamente o componente", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    });

    test("Recebeu um array de hoteis que não é nullo e não está vazio", () => {
        expect(hoteis).not.toBeNull();
        expect(hoteis.length).toBeGreaterThan(0);
    });

});