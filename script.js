document.getElementById('calculate').addEventListener('click', calculateArea)

let h = 0
let a = 0
let b = 0
let number = 0

function calculateArea () {
  h = document.getElementById('insert1').value
  a = document.getElementById('insert2').value
  b = document.getElementById('insert3').value

  h = parseInt(h)
  a = parseInt(a)
  b = parseInt(b)

  number = (a + b) / 2 * h
  document.getElementById('answer').value = number
}
