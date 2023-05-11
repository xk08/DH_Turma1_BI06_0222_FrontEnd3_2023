import './App.css'

/// Objeto literal JS
const usuario = {
  nome: "Marcos",
  sobrenome: "Martins",
}

/// Comp funcional
const OlaMundo = () => {
  return (
    <h3>Olá mundo</h3>
  )
}

/// Comp funcional
const BoasVindasUsuario = () => {
  return (
    /// Utilizando varáveis JS na composição da visualização
    <p>Seja bem-vind@ usuári@ {usuario.nome} {usuario.sobrenome}</p>
  )
}

/// Componente funcional do React
function App() {
  return (
    <> {/* Fragment ou <></> */}
      <OlaMundo />
      <BoasVindasUsuario />
    </>
  )
}

export default App