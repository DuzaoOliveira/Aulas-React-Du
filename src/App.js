import './App.css';
import { Input, Click, Fruta1 } from './funcoes'

function App() {


  const fruta = 'abacaxi'
  const alimento = 'bom'

  const Input = (valorDigitado, nome) => {
    console.log(valorDigitado, nome)
  }
  return (
    <form>
      <input onChange={(e) => { Input(e.target.value, '--é muito louco--') }} />
      <button onClick={(e) => { Click('Eduardo') }}>Enviar</button>
      <p onClick={(e) => { Fruta1(fruta, alimento) }}>Eduardo Oliveira</p>
    </form>
  )

}

export default App;
