import './App.css';

function App() {

  const lista = [
    {
      Nome: 'Eduardo',
      Idade: '34',
      data_de_nascimento: '18/01/1988',
      nome_da_mae: 'Monica',
      nome_do_pai: '',
      Numero_de_Telefone: '(11) 992545142',
    },

    {
      Nome: 'Ricardo',
      Idade: 'Idade: 22',
      data_de_nascimento: '15/05/2000',
      nome_da_mae: 'Maria',
      nome_do_pai: 'Pedro',
      Numero_de_Telefone: '(11) 992545142',
    },

    {
      Nome: 'Julia',
      Idade: '8',
      data_de_nascimento: '15/05/2014',
      nome_da_mae: 'Patricia',
      nome_do_pai: 'Eduardo',
      Numero_de_Telefone: '(11) 992545142',
    },

    {
      Nome: 'Alex',
      Idade: '30',
      data_de_nascimento: '20/02/1992',
      nome_da_mae: 'Paula',
      nome_do_pai: '',
      Numero_de_Telefone: '(11) 992545142',
    },

    {
      Nome: 'Patricia',
      Idade: '36',
      data_de_nascimento: '27/09/1985',
      nome_da_mae: 'Odete',
      nome_do_pai: 'Aparecido',
      Numero_de_Telefone: '(11) 992545142',
    },


  ]

  return (
    <div className='App'>
      {
        lista.map(item => {

          return (
            <div className='box'>
              <div>Nome:{item.Nome}</div>
              <div>Idade:{item.Idade}</div>
              <div>Nasc:{item.data_de_nascimento}</div>
              <div>Nome da Mãe:{item.nome_da_mae}</div>
              <div>{item.nome_do_pai && <> Nome do Pai:</>} {item.nome_do_pai} </div>
              <div>Telefone para contato:{item.Numero_de_Telefone}</div>

            </div>
          )
        })
      }
    </div>
  )
}

export default App;