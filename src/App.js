import './App.css';

function App() {

  const lista = [
    {
      mercado: 'Assai',
      produto: 'Carne',
      data_de_vencimento: '25/10/22',
      itens: false
    },
    {
      mercado: 'Carrefour',
      produto: 'Refrigerante',
      data_de_vencimento: '15/03/23',
      itens: true
    },

    {
      mercado: 'Atacadão',
      produto: 'Salgadinho',
      data_de_vencimento: '02/05/23',
      itens: false
    },
    {
      mercado: 'Coop',
      produto: 'Açucar',
      data_de_vencimento: '03/09/22',
      itens: true
    },
  ]

  const lista2 = [
    {
      fruta: 'Abacaxi',
      legumes: 'Cenoura',
      verduras: 'Alface',
    },

    {
      fruta: 'Maçã',
      legumes: 'Batata',
      verduras: 'Couve',
    },

    {
      fruta: 'Abacaxi',
      legumes: 'Mandioca',
      verduras: 'Couve-flor',
    },
  ]

  const filtrando = lista.filter(itemLista => {
    return itemLista.itens === false
  })

  const filtro = lista2.filter(listaItem => {
    return listaItem.fruta === 'Abacaxi'
  })

  return (
    <div className='App'>
      {
        filtrando.map(itemLista => {
          return (
            <div className='box1'>
              <p>{itemLista.produto}</p>
              <p>{itemLista.mercado}</p>
              <p>{itemLista.data_de_vencimento}</p>
            </div>
          )
        })
      }
      <div>
        {
          filtro.map(listaItem => {
            return (
              <div className='box1'>
                <p>{listaItem.fruta}</p>
                <p>{listaItem.legumes}</p>
                <p>{listaItem.verduras}</p>
              </div>
            )
          })
        }
      </div>

    </div>
  );
}

export default App;