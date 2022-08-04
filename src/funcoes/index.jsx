export const Input = (digitando) => {
    if (digitando === 'Guitarra') {
        console.log('tem cordas')
    }
    else if (digitando === 'Bateria') {
        console.log('tem pedal')
    }
    else if (digitando === 'Microfone') {
        console.log('tem fios')
    }

    else {
        console.log('não existe esse instrumento')
    }
}

export const Text = (digitado) => {
    switch (digitado) {
        case 'Eduardo': console.log('gosta de futebol'); break;
        case 'Felipe': console.log('gosta de anime'); break;
        case 'Rogerio': console.log('gosta de game'); break;
        default:
            console.log('não atende nenhuma das opções ')
    }

}

