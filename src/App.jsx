import { useState } from "react";
import styled, { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*{
  margin:0;
  padding: 0;
  box-sizing: border-box;
}
body{
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: url("https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/Imagem%20palacio.png?raw=true");
}
`;
const Main = styled.main`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  text-align: center;
  align-items: center;
`;
const Titulo = styled.h1`
  color: white;
  font-family: "Sevillana", cursive;
  font-size: 2.5rem;
  font-weight: 400;
  line-height: 5.258rem;
`;
const Img = styled.img`
  width: 50vw;
  height: 50vh;
`;
const BotaoAviso = styled.button`
  width: 35vw;
  height: 10vh;
  background-color: #007bff;
  border: none;
  font-family: "Sevillana", cursive;
  font-size: 1.5rem;
  font-weight: 400;
  line-height: 3.393rem;
  text-align: left;
  border-radius: 50px;
  color: #ffffff;
  padding: 2%;
  text-align: center;
`;
export default function App() {
  const [lampada, setLampada] = useState(false);
  const trocarLampada = () => {
    setLampada(!lampada);
  };

  return (
    <Main>
      <GlobalStyle />
      <Titulo>"Liberte a magia da programação com a lâmpada de Aladim."</Titulo>
      <Img
        src={
          lampada
            ? "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada-com-mago.png?raw=true"
            : "https://github.com/mariaccarolina/TurmaFDV/blob/main/imagens/lampada.png?raw=true"
        }
        alt="Lâmpada"
        onClick={trocarLampada}
      />
      <BotaoAviso onClick={trocarLampada}>Clique aqui</BotaoAviso>
    </Main>
  );
}
