/// Buscando o conteiner root do HTML onde o React irá atuar
const div = document.getElementById("div");
const lista = document.getElementById("lista");

/// Função createRoot()
const divRoot = ReactDOM.createRoot(div);
const listaRoot = ReactDOM.createRoot(lista);

/// Criando novo elemento React (sem JSX)
const element = React.createElement("h1", {}, "Front end III");

/// Componente React do tipo funcional (com JSX)
function ElementJSX() {
    return (
        <h1>Front End III</h1>
    );
}

/// Componente React do tipo funcional
function ListaAlunos() {
    return (
        <div>
            <h1>Marcos</h1>
            <h1>Pedro</h1>
            <h1>Ana</h1>
        </div>
    );
}

/// Renderizando o elemento 
//divRoot.render(element);
divRoot.render(<ElementJSX />);
listaRoot.render(<ListaAlunos />)







/// Component com JSX