import { useState } from 'react';
import './App.css';

import Form from './components/Form';
import ServiceCard from './components/ServiceCard';

function App() {

  const serviceDefaultValues = {
    id: 3423345,
    type: "Verificar sinal Wi-Fi",
    time: "40 minutos"
  };

  /* Devemos usar o useReducer ao invés do useState */
  const [services, setServices] = useState([serviceDefaultValues])

  return (

    <div className='card'>

      <h1>Novo atendimento</h1>

      <Form />

      <h1>Seus atendimentos</h1>

      {
        services.length > 0 ?
          services.map(service =>
          (
            <ServiceCard
              key={service.id}
              service={service}
            />
          ))
          : <h3> A lista de atendimentos está vazia</h3>
      }

    </div>

  );
}

export default App;