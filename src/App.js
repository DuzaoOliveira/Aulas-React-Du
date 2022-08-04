import './App.css';

function App() {

    const number = 4
    const teste = 'Eu consegui'
    return (
        <div className='App'>
            <form>
                <label>Nome:</label>
                <input onChange={(e) => { alert(JSON.parse(e.target.value) + number) }} />
                <div>
                    <button onClick={() => { alert(teste) }}>Eduardo Oliveira</button>
                </div>
            </form>
        </div>
    );
}


export default App;

