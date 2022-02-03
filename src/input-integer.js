const bel = require('bel')
const csjs = require('csjs-inject')
var id = 0

module.exports = inputInteger

function inputInteger (data, notify) {
  const name = `inputinteger_${id++}`
  const { value = 0, placeholder= 'number' } = data
  const input = bel`<input class=${css.inputInteger} type="number" placeholder=${data} value=${value}>`
  input.onchange = event => {
    notify({ from: name, type: 'update', body: input.value })
  }
  return input
}

const css = csjs`
  .inputInteger{
    background-color: lightgreen;
  }
`