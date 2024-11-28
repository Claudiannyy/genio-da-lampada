# Gênio da lâmpada 🧞

## 📜 Descrição

Bem-vindo ao **Gênio da lâmpada**! Este projeto é uma página interativa em que, ao clicar no botão "Clique Aqui", a imagem de uma lâmpada se transforma, revelando um gênio saindo dela. A ideia é criar uma experiência divertida e simples usando **React** e **Styled-components**.

O objetivo deste projeto é mostrar como podemos manipular imagens e componentes de forma interativa no React, além de utilizar o Styled-components para estilização de forma modular e eficiente.

## 🎨 Layout Fornecido

O design foi pensado para ser simples, com foco na animação e transição da imagem da lâmpada para a lâmpada com o gênio saindo. A página é responsiva, garantindo boa experiência tanto em dispositivos móveis quanto em desktops.

![Imagem do layout](./src/assets/layout.png)

## 🛠️ Tecnologias Utilizadas

Neste projeto, foram utilizadas as seguintes tecnologias:

- **React**: Para a construção da interface de usuário e gerenciamento da lógica do componente.
- **Styled-components**: Para estilização dos componentes de forma modular e reutilizável.
- **JavaScript**: Para implementar a lógica de interação, onde o clique no botão troca a imagem da lâmpada.

## ⚙️ Funcionalidades

- **Clique no Botão**: Ao clicar no botão "Clique Aqui", a imagem da lâmpada é substituída pela imagem da lâmpada com o gênio saindo.
- **Componente Interativo**: O estado da lâmpada é alterado dinamicamente no React, sem necessidade de recarregar a página.

## 📱 Como Usar

1. Clone o repositório em sua máquina local ou baixe o código-fonte:

   ```bash
   git clone https://github.com/Claudiannyy/genio-da-lampada.git
   ```

2. Abra a pasta do projeto no terminal e instale as dependências:

   ```bash
   cd genio-da-lampada
   npm install
   ```

3. Após a instalação das dependências, inicie o servidor de desenvolvimento:

   ```bash
   npm start
   ```

4. O projeto estará disponível no seu navegador na URL: `http://localhost:3000`

5. Clique no botão "Clique Aqui" para ver a animação da lâmpada sendo transformada na lâmpada com o gênio saindo.

## 🔧 Personalização

Este projeto é fácil de personalizar para se adaptar a diferentes imagens ou animações. Aqui estão algumas ideias para você modificar o código:

- **Alterar a imagem da lâmpada**: Substitua a imagem da lâmpada atual no diretório `src/assets/` por outra imagem de sua preferência.
- **Alterar a imagem do gênio**: Troque a imagem do gênio que aparece saindo da lâmpada. Certifique-se de atualizar o caminho da imagem no componente.
- **Modificar o botão**: Você pode mudar o texto ou até mesmo o estilo do botão alterando o componente de botão `BotaoAviso`.
- **Adicionar novas animações**: Utilize o Styled-components para criar animações personalizadas de transição entre as imagens, como um efeito de desvanecimento ou movimento.
