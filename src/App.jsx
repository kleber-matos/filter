/** @format */

import React, { useState } from "react";

export default function App() {
  //filter

  // const arrayNumeros = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  // const filtrado = arrayNumeros.filter((numero) => numero < 5);
  // console.log(filtrado);

  // const [produtos, setProdutos] = useState([
  //   {
  //     nome: "Iphone",
  //     preco: 14.999,
  //     freteGratis: "sim",
  //   },
  //   {
  //     nome: "Mac",
  //     preco: 39.999,
  //     freteGratis: "nao",
  //   },
  //   {
  //     nome: "Tablet",
  //     preco: 4.999,
  //     freteGratis: "sim",
  //   },
  //   {
  //     nome: "Apple Watch",
  //     preco: 4.499,
  //     freteGratis: "nao",
  //   },
  //   {
  //     nome: "tv 4k",
  //     preco: 6.999,
  //     freteGratis: "sim",
  //   },
  // ]);

  // const filtrados = produtos.filter((item) => item.nome == "Tablet");

  // const [produtos, setProdutos] = useState([
  //   {
  //     nome: "Mesa",
  //     preco: 150,
  //     categoria: "moveis",
  //   },
  //   {
  //     nome: "Teclado",
  //     preco: 200,
  //     categoria: "eletronico",
  //   },
  //   {
  //     nome: "Monitor",
  //     preco: 599,
  //     categoria: "eletronico",
  //   },
  //   {
  //     nome: "Cadeira",
  //     preco: 199,
  //     categoria: "moveis",
  //   },
  // ]);

  // const filtrado = produtos.filter((item) => item.preco > 200);

  // const [produtos, setProdutos] = useState([
  //   "samsung",
  //   "apple",
  //   "motorola",
  //   "lenovo",
  // ]);

  // const [busca, setbusca] = useState("");
  // const filtrados = produtos.filter((item) => item.includes(busca));

  return (
    <div>
      <h1>Filter</h1>

      {/* <input
        onChange={(e) => setbusca(e.target.value)}
        type="text"
        placeholder="pesquisa..."
      /> */}

      {/* {filtrados.map((item) => (
        <ul>
          <li>{item}</li>
        </ul>
      ))} */}

      {/* 
      {filtrado.map((item) => (
        <ul>
          <li>{item.nome}</li>
          <li>{item.preco}</li>
          <li>{item.categoria}</li>
        </ul>
      ))} */}

      {/* {filtrados.map((item) => (
        <ul>
          <li>{item.nome}</li>
          <li>Preço: {item.preco}</li>
          <li>Frete Gratis: {item.freteGratis}</li>
        </ul>
      ))} */}
    </div>
  );
}
