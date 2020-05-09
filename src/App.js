import React, {useState} from 'react';
import {Container} from './styles';
import serverCep from 'cep-promise';

function App() {
  const [cep, setCep] = useState('');
  const [responseCep, setResponseCep] = useState();


  async function handleVerify(cep) {
    try {
      const response = serverCep(cep)
        .then(function () {
          setResponseCep(response)
        })
    } catch (err) {
      alert(err)
    }
    return
  }

  return (
    <>
      <Container className="container">
        <div className="input-div">
          <input className="input-cep" placeholder="CEP" onChange={event => setCep(event.target.value)}/>
          <button className="btn" onClick={() => handleVerify()}>
            Buscar
          </button>
        </div>
        <div className="response">
          <h1>{responseCep}</h1>
        </div>
      </Container>
    </>
  );
}

export default App;
