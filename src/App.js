import axios from "axios";
import React, { useEffect, useState } from "react";
import "./App.css"


function App() {

    const [resposta, setResposta] = useState()
    const [idade, setIdade] = useState()
    const [altura, setAltura] = useState()
    const [jogador, setJogador] = useState()
    const [camisa, setCamisa] = useState()
    const [clube, setClube] = useState()
    const [nacionalidade, setNacionalidade] = useState()
    const [dadoEditado, setDadoEditado] = useState()
    const [dadoEdi, setDadoEdi] = useState()
    const [edicao, setEdicao] = useState()
    const [alturaEdi, setAlturaEdi] = useState()
    const [idadeEdi, setIdadeEdi] = useState()
    const [nacionalidadeEdi, setNacioEdi] = useState()
    const [mapeamento, setMapeamento] = useState()



    useEffect(() => {
        axios.get('https://teste-aula-metodos-90a63-default-rtdb.firebaseio.com/futebol.json')
            .then(function (response) {
                setResposta(response.data);
            })


    }, [mapeamento])

    const cadastro = () => {
        axios.post('https://teste-aula-metodos-90a63-default-rtdb.firebaseio.com/futebol.json', {
            clube: clube,
            jogador: jogador,
            camisa: camisa,
            idade: idade,
            altura: altura,
            nacionalidade: nacionalidade
        })
            .then(function (response) {
                setMapeamento(!mapeamento)
                alert('seu clube foi cadastrado')
            }).catch(function () {
                alert('não conseguimos cadastrar seu clube')
            })
    }

    const deletar = (id) => {
        axios.delete(`https://teste-aula-metodos-90a63-default-rtdb.firebaseio.com/futebol/${id}.json`, {})
            .then(function (response) {
                setMapeamento(!mapeamento)
                alert('seu clube foi excluído')
            }).catch(function () {
                alert('não conseguimos excluir seu clube')
            })
    }
    const editar = (id) => {
        axios.patch(`https://teste-aula-metodos-90a63-default-rtdb.firebaseio.com/futebol/${id}.json`,
            { clube: dadoEditado, jogador: dadoEdi, camisa: edicao, altura: alturaEdi, idade: idadeEdi, nacionalidade: nacionalidadeEdi, })

            .then(function (response) {
                setMapeamento(!mapeamento)
                alert('seu clube foi editado')
            }).catch(function () {
                alert('não conseguimos editar seu clube')
            })
    }

    return (

        <div>
            <h1>Clubes</h1>

            <>
                {resposta && Object.entries(resposta).map(times => {
                    return (
                        <div className="clubes">
                            <div className="times">
                                {times[1].clube}
                                <input onChange={(e) => { setDadoEditado(e.target.value) }} />
                                <button onClick={() => deletar(times[0])}>Excluir</button><br />
                                <button onClick={() => editar(times[0])}>Editar</button><br />
                            </div>

                            <div className="jogador">
                                {times[1].jogador}
                                <input onChange={(e) => { setDadoEdi(e.target.value) }} /> <br />
                                <button onClick={() => deletar(times[0])}>Excluir</button><br />
                                <button onClick={() => editar(times[0])}>Editar</button><br />
                            </div>

                            <div className="camisa">
                                {times[1].camisa}
                                <input onChange={(e) => { setEdicao(e.target.value) }} /><br />
                                <button onClick={() => deletar(times[0])}>Excluir</button><br />
                                <button onClick={() => editar(times[0])}>Editar</button><br />
                            </div>

                            <div className="idade">
                                {times[1].idade}
                                <input onChange={(e) => { setIdadeEdi(e.target.value) }} /><br />
                                <button onClick={() => deletar(times[0])}>Excluir</button><br />
                                <button onClick={() => editar(times[0])}>Editar</button><br />
                            </div>

                            <div className="altura">
                                {times[1].altura}
                                <input onChange={(e) => { setAlturaEdi(e.target.value) }} /><br />
                                <button onClick={() => deletar(times[0])}>Excluir</button><br />
                                <button onClick={() => editar(times[0])}>Editar</button><br />
                            </div>

                            <div className="nacionalidade">
                                {times[1].nacionalidade}
                                <input onChange={(e) => { setNacioEdi(e.target.value) }} />
                                <button onClick={() => deletar(times[0])}>Excluir</button><br />
                                <button onClick={() => editar(times[0])}>Editar</button><br />
                            </div>

                        </div>
                    )
                })
                }

                <h2>Cadastrar novo clube</h2>
                <form>
                    <label>Clube</label><input onChange={(e) => setClube(e.target.value)} /><br />
                    <label>Jogador</label><input onChange={(e) => setJogador(e.target.value)} /><br />
                    <label>Camisa</label><input onChange={(e) => setCamisa(e.target.value)} /><br />
                    <label>Idade</label><input onChange={(e) => setIdade(e.target.value)} /><br />
                    <label>Altura</label><input onChange={(e) => setAltura(e.target.value)} /><br />
                    <label>Nacionalidade</label><input onChange={(e) => setNacionalidade(e.target.value)} /><br />
                    <button onClick={(e) => {
                        e.preventDefault()
                        cadastro()
                    }}>Cadastrar</button>
                </form>
            </>
        </div>
    )
}

export default App;