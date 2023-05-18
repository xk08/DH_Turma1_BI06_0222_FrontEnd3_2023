import City from './City';

function HomeComponent(props) {
    return (
        <div>
            {
                props.items.map((itemIteracao) => {

                    /// Filtrando pela condição do País
                    if (itemIteracao.country == "BRA") {

                        /* Retorna o item/objeto de cada iteração para o componente "City", que renderiza o componente City */
                        return <City
                            key={itemIteracao.city}
                            {...itemIteracao}
                        />
                    }
                })
            }
        </div>
    )
}
export default HomeComponent;