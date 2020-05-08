import React, {useState} from 'react';
import {Container} from './styles';
import serverCep from 'cep-promise';

function App() {
  const [cep, setCep] = useState('');
  const [state, setState] = useState();
  const [city, setCity] = useState();
  const [neighborhood, setNeighborhood] = useState();
  const [street, setStreet] = useState();


  async function handleVerify() {
    const verify = await serverCep(cep);
    const {city, street, state, neighborhood} = verify;
    console.log(verify);
    setCity(city);
    setStreet(street);
    setState(state);
    setNeighborhood(neighborhood);
    return
  }

  return (
    <Container className="container">
      <div className="input-div">
        <input className="input-cep" placeholder="CEP" onChange={event => setCep(event.target.value)}/>
        <button className="btn" onClick={() => handleVerify()}>
          Verificar
        </button>
      </div>
      <div className="response">
        <p>{state}</p>
        <p>{city}</p>
        <p>{neighborhood}</p>
        <p>{street}</p>
      </div>
    </Container>
  );
}

export default App;
