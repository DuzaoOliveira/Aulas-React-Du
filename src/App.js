import React, { useEffect, useState } from "react";

function App() {

    const [acionar1, setAcionar1] = useState(0)
    const [acionar2, setAcionar2] = useState(0)
    const [acionar3, setAcionar3] = useState(0)
    const [convocado1, setConvocado1] = useState('1 Alisson')
    const [convocado2, setConvocado2] = useState('2 Danilo')
    const [convocado3, setConvocado3] = useState('3 Marquinhos')
    const [convocado4, setConvocado4] = useState('4 Eder Militão')
    const [convocado5, setConvocado5] = useState('6 Alex Sandro')
    const [convocado6, setConvocado6] = useState('5 Casemiro')
    const [convocado7, setConvocado7] = useState('8 Fabinho')
    const [convocado8, setConvocado8] = useState('10 Philipe Coutinho')
    const [convocado9, setConvocado9] = useState('7 Vinicius J')
    const [convocado10, setConvocado10] = useState('11 Neymar')
    const [convocado11, setConvocado11] = useState('9 G Jesus')


    useEffect(() => {
        if (acionar1 > 0) {
            setConvocado1('1 Cassio')
            setConvocado2('2 Fagner')
            setConvocado3('3 Bruno Mendez')
            setConvocado4('4 Balboena')
            setConvocado5('6 Lucas Piton')
            setConvocado6('5 Du Quiroz')
            setConvocado7('8 Cantillo')
            setConvocado8('10 Maycon')
            setConvocado9('7 Gustavo Silva')
            setConvocado10('11 Adson')
            setConvocado11('9 Yuri Alberto')
        }

    }, [acionar1]);

    useEffect(() => {
        if (acionar2 > 1) {
            setConvocado1('1 Jandrei')
            setConvocado2('2 Rafinha')
            setConvocado3('3 Miranda')
            setConvocado4('4 Diego Costa')
            setConvocado5('6 Reinaldo')
            setConvocado6('5 Gabriel Neves')
            setConvocado7('8 Nestor')
            setConvocado8('10 Patrick')
            setConvocado9('7 Igor Gomes')
            setConvocado10('11 Luciano')
            setConvocado11('9 Calleri')
        }

    }, [acionar2]);

    useEffect(() => {
        if (acionar3 > 2) {
            setConvocado1('1 Weverton')
            setConvocado2('2 Piquerez')
            setConvocado3('3 Gustavo Gomez')
            setConvocado4('4 Murilo')
            setConvocado5('6 Marcos Rocha')
            setConvocado6('5 Danilo')
            setConvocado7('8 Zé Rafael')
            setConvocado8('10 Rafael Veiga')
            setConvocado9('7 Gustavo Scarpa')
            setConvocado10('11 Dudu')
            setConvocado11('9 Roni')
        }

    }, [acionar3]);

    const [acionador, setAcionador] = useState(0)
    const [Nomes1, setNomes1] = useState('Eduardo')
    const [Nomes2, setNomes2] = useState('Elias')
    const [Nomes3, setNomes3] = useState('Edvaldo')
    const [Nomes4, setNomes4] = useState('Luiz')
    const [Nomes5, setNomes5] = useState('Kaique')
    const [Nomes6, setNomes6] = useState('Silas')
    const [Nomes7, setNomes7] = useState('Edgar')
    const [Nomes8, setNomes8] = useState('Matheus')
    const [Nomes9, setNomes9] = useState('Jhonatan')
    const [Nomes10, setNomes10] = useState('Rafael')

    useEffect(() => {
        if (acionador > 0) {
            setNomes1('Luzia')
            setNomes2('Lucia')
            setNomes3('Monica')
            setNomes4('Vitoria')
            setNomes5('Gabriela')
            setNomes6('Priscila')
            setNomes7('Lais')
            setNomes8('Manuela')
            setNomes9('Julia')
            setNomes10('Helena')
        }
    }

    )
    useEffect(() => {
        if (acionador > 1) {
            setNomes1('Marcos')
            setNomes2('Daniel')
            setNomes3('Sandra')
            setNomes4('Crislaine')
            setNomes5('Mariara')
            setNomes6('Miguel')
            setNomes7('Patricia')
            setNomes8('Edson')
            setNomes9('Maria')
            setNomes10('Wagner')
        }
    })

    return (
        <>
            {convocado1}<br />
            {convocado2}<br />
            {convocado3}<br />
            {convocado4}<br />
            {convocado5}<br />
            {convocado6}<br />
            {convocado7}<br />
            {convocado8}<br />
            {convocado9}<br />
            {convocado10}<br />
            {convocado11}<br />
            <button onClick={() => setAcionar1(acionar1 + 1)}>Time do Corinthians</button><br />
            <button onClick={() => setAcionar2(acionar2 + 2)}>Time do São Paulo</button><br />
            <button onClick={() => setAcionar3(acionar3 + 3)}>Time do Palmeiras</button><br />

            {Nomes1} <br />
            {Nomes2} <br />
            {Nomes3} <br />
            {Nomes4} <br />
            {Nomes5} <br />
            {Nomes6} <br />
            {Nomes7} <br />
            {Nomes8} <br />
            {Nomes9} <br />
            {Nomes10} <br />
            <button onClick={() => setAcionador(acionador + 1)}>Nomes</button><br />
        </>
    )

}

export default App


