import React, { useState } from "react";
import { Container, Ad } from "./styles";
import serverCep from "cep-promise";

function App() {
  const [cep, setCep] = useState("");
  const [responseCep, setResponseCep] = useState("");

  async function handleVerify(event) {
    const response = await serverCep(cep);
    console.log(response);

    setResponseCep(response);
  }

  return (
    <body>
      <Ad>
        <script
          data-ad-client="ca-pub-2074115776265097"
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
      </Ad>
      <Container className="container">
        <div className="input-div">
          <input
            className="input-cep"
            placeholder="CEP"
            type="text"
            onChange={(event) => setCep(event.target.value)}
          />
          <button className="btn" onClick={() => handleVerify()}>
            Buscar
          </button>
        </div>
        <div className="response">
          <p>{responseCep.state}</p>
          <p>{responseCep.city}</p>
          <p>{responseCep.neighborhood}</p>
          <p>{responseCep.street}</p>
        </div>
      </Container>
    </body>
  );
}

export default App;
