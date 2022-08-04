import React, { useEffect, useState } from "react";

function App() {
  
    const [lista, setLista] = useState('Eduardo')
    const [acionar, setAcionar] = useState(0)
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
        if (acionar > 0 ) {
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

    }, [acionar]);

    useEffect(() => {
        if (acionar > 1) {
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

    }, [acionar]);

    useEffect(() => {
        if (acionar > 2) {
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

    }, [acionar]);
   


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
            <button onClick={() => setAcionar(acionar + 1 )}>Time do Corinthians</button><br />
            <button onClick={() => setAcionar(acionar + 1)}>Time do São Paulo</button><br />
            <button onClick={() => setAcionar(acionar + 1)}>Time do Palmeiras</button><br />
        </>
    )
    
}




export default App


// fazer aparecer a lista da seleção brasileira, só que você tera três botões para trocar
// os nomes da seleção brasileira, para os jogadores do corinthians, do são paulo e do palmeiras
// 11 jogadores

// fazer uma fução que mude na tela 10 nomes diferentes, ao clicar em um botão, mudar 2 vezes