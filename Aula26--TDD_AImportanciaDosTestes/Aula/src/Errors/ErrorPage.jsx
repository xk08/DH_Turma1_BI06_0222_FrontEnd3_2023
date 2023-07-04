function ErrorPage({ hasError, errorInfo }) {
    return (
        <div>
            <h1>Ops...ocorreu algum erro!!!</h1>
            <div className="card-flex container">

                <br />

                <details>

                    <h5>Erro encontrado</h5>

                    {/* Apresenta o erro principal que causou a exceção (e uma possível mensagem/causa) */}
                    {hasError.toString()}

                    <br />
                    <br />

                    <h5>Stack Trace</h5>
                    {/* Apresenta a árvore de componentes relacionada a esta exceção (do componente mais próximo a exceção até o mais distante (<App />)) */}
                    {errorInfo.componentStack}

                </details>
            </div>
        </div>
    );
}

export default ErrorPage;