import './App.css';
import Header from './components/Header';
import Secao1 from './components/Secao1';
import Secao2 from './components/Secao2';
import Footer from './components/Footer';
import Redes from './components/Redes';
import Links from './components/Links';

function App() {

  const mostrar = true
  const link = false

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
      <Links link={link} />

    </div>
  );
}

export default App;
