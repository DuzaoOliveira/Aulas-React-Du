import React, { useEffect, useState } from "react";
function Home() {
  const [usuario, setUsuario] = useState()
  const entrar = () => {
    localStorage.setItem('nome', 'Eduardo');
    window.location.href = '/portfolio'
  }

  const multiplicar = () => {
    sessionStorage.setItem('conta', usuario * 10);
    window.location.href = '/portfolio'
  }

  return (
    <>
      <button onClick={() => entrar()}>Enviar</button><br /><br />
      <button onClick={() => multiplicar()}>Multiplicar</button>
      <input onChange={(e) => setUsuario(e.target.value)} />
    </>
  )
}

export default Home;

