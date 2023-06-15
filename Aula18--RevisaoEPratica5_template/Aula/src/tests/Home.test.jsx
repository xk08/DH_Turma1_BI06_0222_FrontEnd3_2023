import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

import Home from "../components/Home/Home";

import hoteis from "../hoteis.json";


describe("<Home /> testes no componente", () => {

    test("Renderizou corretamente o componente", () => {
        render(
            <BrowserRouter>
                <Home />
            </BrowserRouter>
        );
    });

    test("Recebeu um array de hoteis que não é nullo E não está vazio", () => {
        expect(hoteis).not.toBeNull();
        expect(hoteis.length).toBeGreaterThan(0);
    });

});