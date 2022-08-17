import React from "react";
import '../App.css'


function Split() {
    const url = window.location.href
    const splitLoja = url.split('loja=')[1]
    const splitLoja2 = splitLoja.split('&')[0]
    const splitLoja3 = splitLoja.split('&')[1]
    const splitLoja4 = splitLoja.split('&')[2]



    return (
        <>
            <div className="lojas" >
                {splitLoja2 === 'americanas' && <img alt="logo" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQta4bbrAr7g1L-vzNkG0BHpCyABOuXcXsvBg&usqp=CAU'></img>}
                {splitLoja2 === 'cem' && <img alt="logo" src='https://static.todososfolhetos.com/images/shops/lojas-cem-thumbnail-small.png'></img>}
                {splitLoja2 === 'casas-bahia' && <img alt='logo' src='https://www.gironews.com/imagens/225x450/c490684d-4c04-4f66-b748-4bbfe86d7403_leia.jpg'></img>}
            </div>

            <div className="box1">
                {splitLoja3 === 'cor=vermelho' && <h1>Americanas</h1>}
                {splitLoja3 === 'cor=vermelho2' && <h1>Casas Bahia</h1>}

            </div>
            <div className="box2">
                {splitLoja3 === 'cor=azul' && <h1>Lojas Cem</h1>}
            </div>

            {splitLoja4 === 'preco=barato' && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQsitwC6xkqymOu9HPUmvEZkDLSZjPGR6fYwTmfwR0syE8BptWT0PkuD3JwqfiH7w48epM&usqp=CAU" alt="imagem tabarato pra caramba"></img>}
            {splitLoja4 === 'preco=economico' && <img src="https://img.myloview.com.br/quadros/economize-dinheiro-no-fundo-branco-salve-o-sinal-de-dinheiro-400-100200411.jpg" alt="imagem de cifrão"></img>}
            <div className="oferta">
                {splitLoja4 === 'preco=justo' && <img src="https://www.casasbahia-imagens.com.br/HotSite/2014/melhores-do-mes/2014-07-05/images/top-10.png" alt="imagem das 10 melhores ofertas do mês"></img>}
            </div>
        </>

    )
}

export default Split;