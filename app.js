const panels = document.querySelectorAll('.panel')
panels.forEach((panel) => {
  panel.addEventListener('click', () => {
    removeActiveClasses()
    panel.classList.add('active')
  })
})
function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove('active')
  })
}

let modal = document.getElementById('myModal')
let img = document.querySelectorAll('.portrait')
let span = document.getElementsByClassName('close')[0]

img.forEach((img) => {
  portrait.addEventListener('click', () => {
    modal.style.display = 'block'
    // const test = document.getElementById('modal-title')
    // test.innerHTML = title
  })
})
