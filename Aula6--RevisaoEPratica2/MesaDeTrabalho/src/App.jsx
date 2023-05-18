/* 
Digital House Brasil
- Front end III (ReactJS)
- Possível solução para a Mesa de Trabalho "Aula 6: Mesa de trabalho" 
- Prof: Marcos V. Martins
*/

/* CSS Normal */
import './App.css';

/* Importando o componente */
import HomeComponent from './components/Home';

/* Array de cidades que deve ser utilizado na atividade */
const cities = [
  {
    id: 1,
    country: "BRA",
    city: "São Paulo",
    population: "12.396.372",
    color: "#A440E2"
  },
  {
    id: 2,
    country: "AR",
    city: "Buenos Aires",
    population: "2.890.151",
    color: "#D7B81D"
  },
  {
    id: 3,
    country: "BRA",
    city: "Rio de Janeiro",
    population: "6.775.561",
    color: "#470F69"
  },
  {
    id: 4,
    country: "AR",
    city: "La Plata",
    population: "643.133",
    color: "#C37F19"
  },
  {
    id: 5,
    country: "BRA",
    city: "Brasília",
    population: "3.094.325",
    color: "#97198B"
  },
  {
    id: 6,
    country: "BRA",
    city: "Salvador",
    population: "2.900.319",
    color: "#6550ED"
  },

  {
    id: 7,
    country: "BRA",
    city: "Fortaleza",
    population: "2.703.391",
    color: "#2E15D0"
  },
  {
    id: 8,
    country: "AR",
    city: "Córdoba",
    population: "1.317.298",
    color: "#ED3D48"
  },
  {
    id: 9,
    country: "AR",
    city: "Rosário",
    population: "1.193.605",
    color: "#DA0C19"
  },
  {
    id: 10,
    country: "AR",
    city: "Mendoza",
    population: "1.200.000",
    color: "#B94310"
  }
];


function App() {
  return (
    <div>
        <HomeComponent items={cities} />
    </div>
  )
};

export default App;