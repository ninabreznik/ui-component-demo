const inputInteger = require('../src/input-integer')
const bel = require('bel')
const csjs = require('csjs-inject')
const state = {

} 

function demo (css) {
  const output = bel`<div class=${css.output}>0</div>`
  const page = bel`<div class=${css.demo}>
    <h1>input integer demo :)</h1>
    ${output}
    <div class=${css.container}>
      ${inputInteger({ value: 1, placeholder: 'integer' }, listen)}
      ${inputInteger({ value: 2, placeholder: 'integer' }, listen)}
      ${inputInteger({ value: 3, placeholder: 'integer' }, listen)}
    </div>
  </div>`
  return page
  
  function listen (message) {
    const { from, type, body } = message
    if (type == 'update') {
      if (!state[from]) state[from] = { value: Number(body) }
      else state[from].value = Number(body)
      const values = Object.keys(state).map(from => state[from].value)
      const summary = values.reduce((sum, x) => sum + x, 0)
      output.textContent = summary
    }
  }
}


const css = csjs`
  .demo {
    margin: 20px;
    padding: 20px;
    border: 2px dashed green;
  }
  .output {
    width: auto;
    border: 1px solid red;
  }
  .container {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`

document.body.appendChild(demo(css))

