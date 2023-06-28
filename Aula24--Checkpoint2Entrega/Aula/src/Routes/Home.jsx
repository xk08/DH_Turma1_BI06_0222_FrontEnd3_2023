import { useEffect } from "react";
import Card from "../Components/Card";

/// ### Preciamos importar o Custom Hook
import useApi from "../Hooks/useApi";

const Home = () => {


  /// ### Capturamos os estados e função de busca do Custom Hook;
  const { data, isLoading, error, shouldFetch } = useApi();

  useEffect(() => {

    const buscaDentistasApi = async () => {
      await shouldFetch("dentista"); /// Endpoint que será buscado pelo GET
    }
    buscaDentistasApi();
  }, []);


  return (
    <>

      <h1>Home</h1>
      <div className="card-grid container">

        {

          /// ### Se array não estiver vazio e não estiver carregando...
          (data && !isLoading) ?

            data.map((card, index) => {
              return (
                <Card
                  key={index}
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
