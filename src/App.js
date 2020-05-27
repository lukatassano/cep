import React, { useState } from "react";
import AdSense from "react-adsense-ad";
import { Container } from "./styles";
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
      <Container className="container">
        <AdSense.Google client="Your Publisher Id" slot="Ad slot Id" />

        <AdSense.Google
          client="Your Publisher Id"
          slot="Ad slot Id"
          style={{ width: 500, height: 300, float: "left" }}
          format=""
        />

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
