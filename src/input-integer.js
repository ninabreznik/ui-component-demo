const bel = require('bel')
const csjs = require('csjs-inject')

module.exports = inputInteger

function inputInteger () {
  return bel`<input class=${css.inputInteger} type="number" placeholder="number">`
}

const css = csjs`
  .inputInteger{
    background-color: lightgreen;
  }
`