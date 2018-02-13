const Calculadora = (state = 0, action) => {
    switch (action.type) {
        case 'SOMAR':
          return action.number
        default:
          return state
    }
}

export default Calculadora