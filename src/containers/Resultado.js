import { connect } from 'react-redux'

import ResultadoSoma from './../components/ResultadoSoma'

const mapStateToProps = (state) => (
{
  resultado: state.Calculadora
})

const ResultadoDaSoma = connect(
  mapStateToProps
)(ResultadoSoma)

export default ResultadoDaSoma