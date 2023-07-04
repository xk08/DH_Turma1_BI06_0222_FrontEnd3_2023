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


    /* ###### TESTES ASSINCRONOS */

});