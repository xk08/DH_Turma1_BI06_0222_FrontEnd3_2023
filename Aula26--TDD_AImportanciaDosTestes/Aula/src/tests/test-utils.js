import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

const renderWithRouter = (component) => {
    return render(
        <BrowserRouter>
            {component}
        </BrowserRouter>
    )
}

export * from "@testing-library/react"
export { renderWithRouter as render }