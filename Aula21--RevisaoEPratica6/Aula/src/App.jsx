import { useState, useReducer } from 'react';
import './App.css';

import Form from './components/Form';
import ServiceCard from './components/ServiceCard';

import ServiceContext from "./contexts/ServiceContext";




function servicesReducer(state, action) {

  switch (action.type) {

    case "ADD_SERVICE":
      return action.payload;

    default:
      return state;
  }

}

function App() {

  const serviceDefaultValues = {
    id: 3423345,
    type: "Verificar sinal Wi-Fi",
    time: "40 minutos"
  };

  const [services, dispatch] = useReducer(servicesReducer, [serviceDefaultValues])

  return (

    <ServiceContext.Provider value={{ services, dispatch }}>

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

    </ServiceContext.Provider>

  );
}

export default App;