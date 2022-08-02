import React, { useState } from "react";

function App() {
    const [teste, setTeste] = useState('Eu amo anime')
    const [teste2, setTeste2] = useState(1)



    return (
        <>
            {teste}
            {teste2}
            <button onClick={() => setTeste('Eu odeio futebol')}>Gosto de?</button>
            <button onClick={() => setTeste2(teste2 * 4)}>Calculo</button>
        </>
    )
}

export default App;


