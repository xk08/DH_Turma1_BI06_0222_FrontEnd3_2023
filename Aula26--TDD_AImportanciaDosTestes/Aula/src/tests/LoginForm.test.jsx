/* eslint-disable testing-library/no-wait-for-multiple-assertions */

import { render } from "../tests/test-utils";
import { fireEvent, screen, waitFor } from "@testing-library/react";

import LoginForm from "../Components/LoginForm";

import axios from "axios";
import apiBaseUrl from "../api";

jest.mock("axios");

const mockNavigate = jest.fn();

/// ### Forma de usar o useNavigate() do React Router Dom
jest.mock("react-router-dom", () => {
    const originalModule = jest.requireActual("react-router-dom");
    return {
        ...originalModule,
        useNavigate: () => mockNavigate,
    };
});




describe("<LoginForm /> testes no componente", () => {

    /* ###### TESTES SINCRONOS */

    ///TESTE 001
    test("O componente está renderizando", () => {
        render(<LoginForm />);
    });

    test("Inputs Login e Password estão alterando seu valor com o evento onChange", () => {
        render(<LoginForm />);

        const loginInput = screen.getByPlaceholderText("Login");
        const passwordInput = screen.getByPlaceholderText("Password");

        fireEvent.change(loginInput, { target: { value: "dentistaAdmin" } });
        fireEvent.change(passwordInput, { target: { value: "admin123" } });

        expect(loginInput.value).toBe("dentistaAdmin");
        expect(passwordInput.value).toBe("admin123");

    });

    test("Botão 'Send' foi clicado", () => {
        render(<LoginForm />);
        const submitButton = screen.getByText("Enviar");
        fireEvent.click(submitButton);
    });


    test("Login chamou o endpoint correto da API && Enviou corretamente os dados requisição", () => {
        render(<LoginForm />);


        /// Usuário preencheu os campos de input
        const loginInput = screen.getByPlaceholderText("Login");
        const passwordInput = screen.getByPlaceholderText("Password");

        fireEvent.change(loginInput, { target: { value: "dentistaAdmin" } });
        fireEvent.change(passwordInput, { target: { value: "admin123" } });

        /// Usuário clicou no botão de enviar
        const submitButton = screen.getByText("Enviar");
        fireEvent.click(submitButton);

        expect(axios.post).toHaveBeenCalledWith(
            `${apiBaseUrl}/auth`,
            {
                username: "dentistaAdmin",
                password: "admin123"
            }
        );
    });

    /* ###### TESTES ASSINCRONOS */

    test("Login deve exibir mensagem de loading durante o processo de login com a Api", async () => {

        render(<LoginForm />);

        const token = "jwtToken";
        axios.post.mockResolvedValueOnce({ data: { token } });

        const submitButton = screen.getByText("Enviar");
        fireEvent.click(submitButton);

        /// ### Essa parte é SINCRONA (Antes da requisição)
        const loadingMessage = screen.getByText("Carregando...");
        expect(loadingMessage).toBeInTheDocument();

        /// ### Essa parte é ASSÍCRONA (Depois da requisição)
        await waitFor(() => {
            const errorMessage = screen.queryByText("Carregando...");
            expect(errorMessage).toBeNull();
        });
    });

    test("Se o login tiver sucesso, deve conseguir buscar o token JWT salvo no Storage", async () => {
        render(<LoginForm />);

        const token = "tokenJwt";
        axios.post.mockResolvedValueOnce({ data: { token } });

        const submitButton = screen.getByText("Enviar");
        fireEvent.click(submitButton);

        await waitFor(() => {
            const storedToken = localStorage.getItem("tokenJwt");
            expect(storedToken).toBe(token);
        });
    });


    test("Se o Login tiver sucesso, deve re-direcionar o usuário para a rota /home", async () => {

        render(<LoginForm />);

        const token = "jwtToken";
        axios.post.mockResolvedValueOnce({ data: { token } });

        const submitButton = screen.getByText("Enviar");
        fireEvent.click(submitButton);

        await waitFor(() => {
            const storedToken = localStorage.getItem("tokenJwt");
            expect(storedToken).toBe(token);

            /// ### Precisamos declarar o mock do módulo no inicio do arquivo
            expect(mockNavigate).toHaveBeenCalledWith("/home");
        });
    });

});