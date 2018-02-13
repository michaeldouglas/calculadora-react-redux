import React, { Component } from 'react';

class ResultadoSoma extends Component {
  render() {

    return (
      <div className="display">
        <input readOnly type="text" name="resultado" id="resultado" value={this.props.resultado}/>
      </div>
    )
  }
}

export default ResultadoSoma