import React, { Component } from "react";

const mostrarDescricao = () => {
  window.alert("Hi");
};

function Product(props) {
  return (
    <div>
      <img src={props.objeto.img} />
      <h1>Objeto: {props.objeto.name}</h1>
      <p>
        Preço:{" "}
        {props.objeto.price.toLocaleString("pt-BR", {
          style: "currency",
          currency: "BRL",
        })}
      </p>
      <h3>Descrição: {props.objeto.description}</h3>
      <button onClick={mostrarDescricao}>Mostrar Descricao</button>
    </div>
  );
}

export default Product;
