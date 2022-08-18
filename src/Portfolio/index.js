import React from "react";

function Portfolio() {
    const conta = sessionStorage.getItem('conta')
    const name = localStorage.getItem('nome');
    return (
        <>
            Olá <h1>{name}</h1> seja bem vindo!!!!
            <h2>{conta}</h2>
        </>
    )
}

export default Portfolio;


