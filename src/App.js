import React, { useState } from "react";

function App() {
    const [teste, setTeste] = useState('Eu odeio Volei')
    const [teste2, setTeste2] = useState(1)

    const Teste3 = () => {
        setTeste('Eu adoro Futebol')
    }
    return (
        <>
            {teste}
            {teste2}
            <button onClick={() => Teste3()}>Gosto de?</button>
            <button onClick={() => setTeste2(teste2 * 4)}>Calculo</button>
        </>
    )
}

export default App;


