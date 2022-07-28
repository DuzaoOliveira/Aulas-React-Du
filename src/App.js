import './App.css';
import { Input, Click, Text } from './funcoes'

function App() {
  const Text = (abacaxi, bom) => {
  }
  
  const Input = (valorDigitado, nome) => {
    console.log(valorDigitado, nome)
  }
  return (
    <form>
      <input onChange={(e) => { Input(e.target.value, '--é muito louco--') }} />
      <button onClick={(e) => { Click('Eduardo') }}>Enviar</button>
      <button onClick={(e) =>{Text('abacaxi')}}>Abacaxi</button>
    </form>
  )

}

export default App;

// criar uma função externa que chame o numero digitado no input no console log acrescentando
// a mensagem --é muito louco--

// passar duas variaveis para uma segunda função aonde elas retornem dentro de um alert
// depois do click