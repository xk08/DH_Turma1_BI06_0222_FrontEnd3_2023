import { render } from "@testing-library/react"
import { BrowserRouter, MemoryRouter, Routes, Route } from "react-router-dom"
import { ContextProvider } from "../Components/utils/global.context"

const renderWithContext = (ui, providerValue) => {
    return render(
        <BrowserRouter>
            <ContextProvider value={providerValue || { theme: "light", data: [] }} >
                {ui}
            </ContextProvider>
        </BrowserRouter>
    )
}

export const renderWithRouter = (ui, { route = '/', path = '/' }) => {
    window.history.pushState({}, 'Test page', route)

    return render(
        <MemoryRouter initialEntries={[route]}>
            <Routes>
                <Route index path={path} element={ui} />
            </Routes>
        </MemoryRouter>
    )
}

export * from "@testing-library/react"
export { renderWithContext as renderContext, renderWithRouter as renderRouter }  