/* Importando o Hook personalizado e alguns status */
import { statusList, useFetch } from "./UseFetch"

function Dog({ breed }) {

    /* Utilizamos o custom Hook para acessar a API informando apenas a URL(endpoint) */
    const { data, status } = useFetch(`https://dog.ceo/api/breed/${breed}/images/random`
    );

    /* De acordo com o status da conexão com a API apresenta-se uma informação ao usuário */
    if (status === statusList.LOADING) {
        return <p>Carregando...</p>;
    }
    if (status === statusList.SUCCESS) {
        //DICA: Você poderia executar algo aqui.
    }
    if (status === statusList.ERROR) {
        return <p>Erro ao buscar uma imagem para a raça: {breed}</p>;
    }
    
    return (
        <div>
            <h2>Você buscou pela raça: {breed}</h2>
            <img src={data.message} />
        </div>
    );
}

export default Dog;