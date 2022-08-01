import './App.css';
import { Input ,Text } from './funcoes'

function App() {

  return (
    <form>
      <input onChange={(e) => { Input(e.target.value) }} />
      <input onChange={(e) => { Text(e.target.value) }} />
      <button>Enviar</button>
    </form>
  )

}

export default App;
