import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css"


function App() {

    const [resposta, setResposta, palmeiras] = useState()


    // fetch('https://teste-aula-metodos-90a63-default-rtdb.firebaseio.com/clubes.json')
    // .then(response => response.json())
    // .then(data => console.log(data));
    useEffect(() => {
        axios.get('https://teste-aula-metodos-90a63-default-rtdb.firebaseio.com/futebol.json')
            .then(function (response) {
                setResposta(response.data);
                console.log(response.data)
            })

    }, [])



    return (

        <div className="clubes">
            <h1>Clubes</h1>
            {resposta &&
                <>
                    {
                        Object.values(resposta).map(times => {
                            return (
                                <>
                                    <p> {times.clube}</p>
                                    <p> {times.jogador}</p>
                                    <p> {times.camisa}</p>
                                    <p> {times.idade}</p>
                                    <p> {times.altura}</p>
                                    <p> {times.nacionalidade}</p>
                                  
                                </>
                            )
                        })}
                </>
            }
        </div>
    )
}

export default App;