import { useEffect } from "react";
import Card from "../Components/Card";
import useApi from "../Hooks/useApi";

const Home = () => {

  const { data, isLoading, shouldFetch } = useApi();

  useEffect(() => {

    const buscaDentistasApi = async () => {
      await shouldFetch("dentista");
    }

    buscaDentistasApi();
  }, []);

  return (
    <>

      <h1>Home</h1>
      <div className="card-grid container">

        {
          (data && !isLoading) ?

            data.map((dentista, index) => {
              return (
                <Card
                  dentista={dentista}
                  key={dentista.matricula}
                />
              )
            })
            : <h1>Carregando...</h1>
        }

      </div>
    </>
  );
};

export default Home;
