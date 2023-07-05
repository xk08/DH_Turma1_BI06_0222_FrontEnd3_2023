import styles from "./Form.module.css";
import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import useApi from "../Hooks/useApi";

const LoginForm = () => {

  const [login, setLogin] = useState(
    {
      username: "",
      password: ""
    }
  );

  const { isLoading, data, error, shouldFetch } = useApi();

  const navigate = useNavigate();

  useEffect(() => {

    if (data && !error) {
      localStorage.setItem("tokenJwt", data.token);
      navigate("/home");
    }

    if (error) {
      alert("Ocorreu algum erro, verifique suas credenciais e tente novamente.")
    }

  }, [data, error]);


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
            Enviar
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
