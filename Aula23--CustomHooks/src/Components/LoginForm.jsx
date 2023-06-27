import styles from "./Form.module.css";

import axios from "axios";
import apiBaseUrl from "../api";

import { useNavigate } from "react-router-dom";
import { useState } from "react";

const LoginForm = () => {

  /// Estado dos campos de input do formulário
  const [login, setLogin] = useState(
    {
      username: "",
      password: ""
    }
  );

  /// Estados de interação do formulário com a API
  const [isLoginLoading, setLoginIsLoading] = useState(false);
  const [loginError, setLoginError] = useState(null);

  /// Hook utilizado para fazer a navegação entre rotas
  const navigate = useNavigate();

  const handleSubmit = async (e) => {

    e.preventDefault();

    try {

      setLoginIsLoading(true);

      const response = await axios.post(`${apiBaseUrl}/auth`, login);

      if (response.status === 200) {

        /// Guardamos o token JWT no Storage
        localStorage.setItem("tokenJwt", response.data.token);

        setLoginIsLoading(false);
        setLoginError(null);

        /// Redirecionamos o usuário para a Home
        navigate("/home");

      } else {
        throw response.data;
      }

    } catch (error) {
      setLoginError(error);
      setLoginIsLoading(false);
    }
  };

  return (
    <div
      className={`text-center card container card`}
    >
      <div className={`card-body ${styles.CardBody}`}>
        <form onSubmit={handleSubmit}>
          <input
            className={`form-control ${styles.inputSpacing}`}
            placeholder="Login"
            name="login"
            value={login.username}
            onChange={(e) => setLogin({ ...login, username: e.target.value })}
            required
          />
          <input
            className={`form-control ${styles.inputSpacing}`}
            placeholder="Password"
            name="password"
            value={login.password}
            onChange={(e) => setLogin({ ...login, password: e.target.value })}

            type="password"
            required
          />

          <p> {isLoginLoading ? "Carregando..." : ""}</p>

          <p> {loginError ? loginError.message : ""}</p>

          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
