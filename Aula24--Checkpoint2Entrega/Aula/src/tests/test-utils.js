import { render } from "@testing-library/react";
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom";

/* ### Vocês devem importar e informar o Contexto Global de vocês! */
import { ContextProvider } from "../Components/utils/global.context";

/* 
A função renderWithContext permite testar componenetes que dependem de um ContextoGlobal 
*/
const renderWithContext = (ui, providerValue) => {
    return render(
        <BrowserRouter>
            <ContextProvider value={providerValue || { theme: "light", data: [] }} >
                {ui}
            </ContextProvider>
        </BrowserRouter>
    )
}

/*
A função "renderWithRouter" simula a alteração da rota no navegador 
por meio da função pushState e envolve o componente a ser testado 
com o MemoryRouter, fornecendo a rota desejada. Isso permite a renderização do componente com uma
rota específica para testar seu comportamento em diferentes cenários de roteamento.
*/

export const renderWithRouter = (ui, { route = '/', path = '/' }) => {

    window.history.pushState({}, 'Test page', route);

    return render(
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route index path={path} element={ui} />
            </Routes>
        </MemoryRouter>
    )
}

/* Função que faz ambas ações mencionada acima */
export const renderWithRouterWithContext = (ui, { route, path }, providerValue) => {

    window.history.pushState({}, 'Test page', route)

    return render(
        <ContextProvider value={providerValue || { theme: "dark", data: [] }} >

            <MemoryRouter initialEntries={[route]}>
                <Routes>
                    <Route index path={path} element={ui} />
                </Routes>
            </MemoryRouter>

        </ContextProvider>

    )
}

export * from "@testing-library/react"
export { renderWithContext as renderContext, renderWithRouter as renderRouter, renderWithRouterWithContext as renderRouterWithContext }  