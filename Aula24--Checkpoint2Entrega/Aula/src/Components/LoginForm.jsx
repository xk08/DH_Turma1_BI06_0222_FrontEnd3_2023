import styles from "./Form.module.css";

import { useNavigate } from "react-router-dom";
import { useState, useEffect, useContext } from "react";

import useApi from "../Hooks/useApi";

import { ContextGlobal } from "./utils/global.context";

const LoginForm = () => {

  /// Estado dos campos de input do formulário
  const [login, setLogin] = useState(
    {
      username: "",
      password: ""
    }
  );

  const { theme } = useContext(ContextGlobal);
  const isDarkMode = theme === "dark" || false;

  /// ### Capturamos os estados e função do Hook Customizado
  const { isLoading, data, error, shouldFetch } = useApi();

  const navigate = useNavigate();

  useEffect(() => {

    /// ### Se existir dados e não tiver nenhum erro, é porque a requisição funcionou
    if (data && !error) {

      /// Salvamos o token no Storage
      localStorage.setItem("tokenJwt", data.token);

      /// Redirecionamos o usuário para a Home
      navigate("/home");

    }

    if (error) {
      alert("Ocorreu algum erro, verifique suas credenciais e tente novamente.")
    }

  }, [data, error, navigate]);


  const handleSubmit = async (e) => {

    e.preventDefault();

    await shouldFetch("auth", login);
  };

  return (
    <div

      /* ### Adicionamos o atributo para poder testar com o JEST/RTL */
      data-testid="form-login"
      className={`text-center card container card ${isDarkMode ? styles.cardDark : ""
        }`}
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
