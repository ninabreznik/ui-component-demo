const inputInteger = require('../src/input-integer')
const bel = require('bel')
const csjs = require('csjs-inject')
const state = {

} 

function demo (css) {
  const reset = bel`<button>reset</button>`
  reset.onclick = event => {
    Object.keys(state).forEach(from => {
      const { notify, value } = state[from]
      notify({ type: 'reset', body: 0 })
    })
  }
  const output = bel`<div class=${css.output}>0</div>`
  const page = bel`<div class=${css.demo}>
    <h1>input integer demo :)</h1>
    ${output}
    <div class=${css.container}>
      ${inputInteger({ value: 10, placeholder: 'integer' }, protocol)}
      ${inputInteger({ value: 20, placeholder: 'integer' }, protocol)}
      ${inputInteger({ value: 30, placeholder: 'integer' }, protocol)}
    </div>
    ${reset}
  </div>`
  return page
  
  function protocol (message, notify) {
    const { from, value } = message
    state[from] = { notify, value }
    updateSummary()
    return  function listen (message) {
      const { from, type, body } = message
      if (type == 'update') {
        if (!state[from]) throw new Error('unexpected message')
        state[from].value = Number(body)
        updateSummary()
      }
    }
  }
  function updateSummary () {
    const values = Object.keys(state).map(from => state[from].value)
    const summary = values.reduce((sum, x) => sum + x, 0)
    output.textContent = summary
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

