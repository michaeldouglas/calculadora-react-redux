import React from 'react'
import { connect } from 'react-redux'
import { somarValor  } from './../actions'

let somar = (num1, num2) => {
  return parseFloat(num1) + parseFloat(num2)
}

let clearInput = (input) => {
  if(input.target.value !== "") {
    input.target.value = ''
  }
}

let SomarValor = ({ dispatch }) => {
  let num1, num2

  return (
    <div className="boxSomar">
      <p>
        Digite o primeiro valor:&nbsp;&nbsp;
          <input 
            className="button black"
            type="text"
            required
            placeholder="0"
            defaultValue={num1}
            onFocus={e => {
              clearInput(e)
            }}
            ref={node => {
              num1 = node
            }} 
          />
      </p>
      <p>
        Digite o segundo valor:&nbsp;&nbsp;
        <input
            className="button black"
            type="text"
            required
            placeholder="0"
            onFocus={e => {
              clearInput(e)
            }}
            ref={node => {
              num2 = node
            }}
          /> 
      </p>
      <input 
          type="button"
          className="button orange"
          value="="
          onClick={() => {
            if(num1.value >= 1 && num2.value >= 1) {
              dispatch(somarValor(somar(num1.value, num2.value)))
            } else {
              alert('Para somar você tem que passar os dois valores')
            }
          }}
        />
    </div>
  )
}

SomarValor = connect()(SomarValor)

export default SomarValor