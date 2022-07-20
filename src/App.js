import './App.css';
import Header from './components/Header';
import Secao1 from './components/Secao1';
import Secao2 from './components/Secao2';
import Footer from './components/Footer';
import Redes from './components/Redes';
import Links from './components/Links';

function App() {

  const mostrar = true
  const link1 = true
  const link2 = true

  return (
    <div className="App">

      <Header />
      <Secao1 mostrar={mostrar} />
      <Secao2 />
      <Footer />
      <Redes texto={'Meu primeiro card'} />
      <Redes texto={'Segundo card'} />
      <Redes texto={'Esse é meu card 3'} />
      <Redes texto={'Card 4'} />
      <Links texto={'Youtube'} link={link1} acesso1='https://www.youtube.com/watch?v=ve8ecFZKDL4' />
      <Links texto={'lance'} link={link2} acesso1='https://www.lance.com.br/' />



    </div>
  );
}

export default App;
