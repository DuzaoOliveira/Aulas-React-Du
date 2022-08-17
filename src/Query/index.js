import React from "react";
import '../App.css'


function Query() {
  const params = new URLSearchParams(window.location.search);
  let urlParams = undefined;
  params.forEach((value, key) => {
    urlParams = Object.assign({}, urlParams, {
      [key]: value.toString()
    });
  });

  return (
    <div className="cards">
      <h1>Times</h1>
      {urlParams.time === 'saopaulo' && <img src="https://sites.google.com/site/prasempretricolordostricolor/_/rsrc/1472783003118/simbolo/bandeira_nova.jpg?height=221&width=320" alt="logo spfc"></img>}
      {urlParams.time === 'corinthians' && <img src="https://cf.shopee.com.br/file/fb4294451b31292b7bbfe79c179019dc_tn" alt="logo sccp"></img>}
      {urlParams.time === 'palmeiras' && <img src="https://cf.shopee.com.br/file/7b62c897786205d06fef1576820e3a81_tn" alt="logo sep"></img>}

      {urlParams.mascote === 'anjo' && <img src="https://2.bp.blogspot.com/_cuSqmlgyUn4/SNz0SnLhs-I/AAAAAAAAACY/r--08as99pg/s200/sao-paulo-sp-mascote.jpg" alt="mascote spfc"></img>}
      {urlParams.mascote === 'mosqueteiro' && <img src="https://img.r7.com/images/2014/12/10/7xtl23fvni_9m70wwjdqr_file" alt="mascote sccp"></img>}
      {urlParams.mascote === 'porco' && <img src="https://anythingpalmeiras.files.wordpress.com/2016/11/mascote-palmeiras-porco.jpg" alt="mascote sep"></img>}

      {urlParams.estadio === 'morumbi' && <img src="https://sismf.museudofutebol.org.br/anexos/imagem/561990/w:420/h:420/c:1" alt="estadio spfc"></img>}
      {urlParams.estadio === 'neo-quimica-arena' && <img src="https://ucho.info/wp-content/uploads/2011/05/itaquerao_01.jpg" alt="estadio sccp"></img>}
      {urlParams.estadio === 'allianz-parque' && <img src="https://i.ytimg.com/vi/2z83rJSFCYI/hq720.jpg?sqp=-oaymwEcCOgCEMoBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBzIEFc17bW0cs6aWlIX0ojVv_CPw" alt="estadio sep"></img>}

      {urlParams.cores === 'vermelho-branco-preto' && <img src="https://s1.static.brasilescola.uol.com.br/be/e/iemen(1).jpg" alt="cores do spfc"></img>}
      {urlParams.cores === 'branco-preto' && <img src="https://rlv.zcache.com.br/poster_checkered_da_bandeira-r0eb904132bdd44288ad7d12a9bc73f1c_6xh_8byvr_307.jpg" alt="cores do sccp"></img>}
      {urlParams.cores === 'verde-branco' && <img src="https://img-s-msn-com.akamaized.net/tenant/amp/entityid/AAguVmE.img?h=200&w=300&m=6&q=60&o=f&l=f" alt="cores do sep"></img>}

      {urlParams.mundial === 'tacas3' && <img src="https://2.bp.blogspot.com/-vB-Rcg4iT4Y/V0TfrCHdJ3I/AAAAAAAAWOk/0aU9jzGD1-EOCtNAAUKZAnyGxLoqFfxIwCLcB/s1600/trofeu%2Bdo%2Bmundial%2Binterclubes%2B1992%2B1993%2B2005%2Bsao%2Bpaulo.JPG" alt="mundial do spfc"></img>}
      {urlParams.mundial === 'tacas1' && <img src="https://i.pinimg.com/474x/dd/b1/3d/ddb13d94236e7956c5fc602bdf0e1e59--sports-clubs-sports-games.jpg" alt="mundial do sccp"></img>}
      {urlParams.mundial === 'tacas0' && <img src="https://img1.gratispng.com/20180822/yss/kisspng-portable-network-graphics-computer-icons-error-ima-soylent-red-error-7-icon-free-soylent-red-error-5b7d3123af5f97.8912347015349312357183.jpg" alt="mundial do sep"></img>}
    </div>
  )

}

export default Query;