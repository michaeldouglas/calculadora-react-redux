export const SOMAR = 'SOMAR'
export const RESULTADO = 'RESULTADO'

let number = 0

export const somarValor = (number) => {
    return {
      type: SOMAR,
      number
    }
}

export const resultadoSoma = () => {
  return {
    type: RESULTADO,
    number
  }
}