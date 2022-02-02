module.exports = inputInteger
const parser = document.createElement('div')

function inputInteger () {
  parser.innerHTML = `<input type="number" placeholder="number">`
  const element = parser.children[0]
  return element
}