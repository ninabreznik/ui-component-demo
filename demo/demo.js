const inputInteger = require('../src/input-integer')
const csjs = require('csjs-inject')
const parser = document.createElement('div')

function start (css) {
  parser.innerHTML = `<div>
    <h1>input integer demo :)</h1>
    <div class=${css.container}></div>
  </div>`
  const page = parser.children[0]
  const output = page.children[2]
  const container = page.children[1]
  const input1 = inputInteger()
  const input2 = inputInteger()
  container.appendChild(input1)
  container.appendChild(input2)

  document.body.appendChild(page)
}

start(csjs`
  .container {
    border: 1px solid green;
    display: flex;
    flex-direction: column;
    width: 50%;
  }
`)

