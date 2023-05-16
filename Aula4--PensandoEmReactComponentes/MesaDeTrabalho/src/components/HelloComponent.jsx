function HelloComponent(props) {
    return ( 
        <>
        <h1>Hello {props.nome ?? "Usuário"}</h1> {/* '??' define um valor padrão, caso o principal seja nulo */}
        <p>{props.detalhes ?? "Descrição"}</p>
        </>
     );
}
export default HelloComponent;