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
// const links = document.querySelectorAll('a')
// const panels = document.querySelectorAll('.panel')
// links.forEach((a) => {
//   a.addEventListener('click', () => {
//     removeActiveClasses()
//     panel.classList.add('active')
//   })
// })

// function removeActiveClasses() {
//   panels.forEach((panel) => {
//     panel.classList.remove('active')
//   })
// }

let modal = document.getElementById('myModal')
let span = document.getElementsByClassName('close')[0]

function openDialog(title, button) {
  button.addEventListener('click', () => {
    modal.style.display = 'block'
    const test = document.getElementById('modal-title')
    test.innerHTML = title
  })
}
