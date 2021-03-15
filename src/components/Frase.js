import React from "react";
import styled from "@emotion/styled";

const Tarjeta = styled.div`
  padding: 3rem;
  border-radius: 0.4rem;
  background-color: #fff;
  max-width: 800px;

  @media (min-width: 800px) {
    margin-top: 10rem;
  }

  h1 {
    font-family: Arial, Helvetica, sans-serif;
    text-align: center;
    position: relative;
    font-size: 1.2rem;
    padding-left: 4rem;

    &::before {
      content: open-quote;
      font-size: 5rem;
      color: black;
      position: absolute;
      left: -1rem;
      top: -2rem;
    }
  }
  p {
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    font-size: 0.8rem;
    font-weight: bold;
    text-align: right;
    color: #666;
    margin-top: 2rem;
  }
`;
const Frase = ({ frase }) => {
  return (
    <Tarjeta>
      <h1>{frase.quote}</h1>
      <p>{frase.author}</p>
    </Tarjeta>
  );
};

export default Frase;
