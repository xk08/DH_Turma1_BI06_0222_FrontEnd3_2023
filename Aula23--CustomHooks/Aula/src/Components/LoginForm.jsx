import styles from "./Form.module.css";

import axios from "axios";
import apiBaseUrl from "../api";

import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import useApi from "../Hooks/useApi";

const LoginForm = () => {

  /// Estado dos campos de input do formulário
  const [login, setLogin] = useState(
    {
      username: "",
      password: ""
    }
  );

  const { data, isLoading, error, shouldFetch } = useApi();

  /// Hook utilizado para fazer a navegação entre rotas
  const navigate = useNavigate();

  useEffect(() => {

    if (data && !error) {

      /// Guardamos o token JWT no Storage
      localStorage.setItem("tokenJwt", data.token);

      /// Redirecionamos o usuário para a Home
      navigate("/home");

    }


  }, [data, error, navigate]);

  const handleSubmit = async (e) => {

    e.preventDefault();

    await shouldFetch("auth", login);

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

          <p> {isLoading ? "Carregando..." : ""}</p>

          <p> {error ? error.message : ""}</p>

          <button className="btn btn-primary" type="submit">
            Send
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
