import './App.css';
import Header from './components/Header';
import Secao1 from './components/Secao1';
import Secao2 from './components/Secao2';
import Footer from './components/Footer';
import Redes from './components/Redes';
import Links from './components/Links';
function App() {
  const mostrar = true
  const link = true
  const link2 = false

  return (
    <div className="App">
      <Header />
      <Secao1 mostrar={mostrar} />
      <Secao2 />
      <Footer />
      <div className= 'box1'>
      <Redes texto={'Primeiro card'} />
      </div>
      <div className='box2'>
      <Redes texto={'Segundo card'} />
      </div>
      <div className='box3'>
      <Redes texto={'Terceiro card'} />
      </div>
      <div className='box4'>
      <Redes texto={'Quarto card'} />
      </div>
      <Links link={link}/>
      <Links link={link2}/>
      
    </div>
  );
}
export default App;


