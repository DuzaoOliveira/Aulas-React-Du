import './App.css';

function App() {
  
console.log(4+JSON.parse('20'))
  return (
    <div className='App'>
  <form>
    <label>Nome:</label>
    <input onChange={()=>{alert(4+JSON.parse('20'))}}/> 
    <div>    
    <button onClick={()=>{alert('Eu consegui')} }>Eduardo Oliveira</button>
    </div>
  </form>
    </div>
  );
}

export default App;

