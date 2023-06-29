
import Login from "../../Routes/Login";

import { screen } from "@testing-library/react";

import { renderContext } from "../test-utils";

describe("<Login /> realizando testes", () => {

    test("Renderizou corretamente informando um contexto global", () => {
        const contextoGlobal = { theme: "dark", data: [] }
        renderContext(
            <Login />,
            contextoGlobal
        );

    });

    test("Renderizou corretamente E renderizou o componente filho <LoginForm />", () => {

        const contextoGlobal = { theme: "dark", data: [] }

        renderContext(
            <Login />,
            contextoGlobal
        );

        expect(screen.getByTestId("form-login")).toBeInTheDocument();

    });

})