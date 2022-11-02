var moon = document.querySelector('.moon')
moon.addEventListener('click', changeToDarkMood)
function changeToDarkMood() {
  document.body.classList.toggle('dark-mood')
  if (document.body.classList.contains('dark-mood')) {
    moon.innerHTML = `<i class="fa-solid fa-sun"></i>`
    moon.style.color = 'var(--third-color)'
    localStorage.setItem('mood', 'dark')
  } else {
    document.body.classList.remove('dark-mood')
    moon.innerHTML = `<i class="fa-solid fa-moon">`
    moon.style.color = 'var(--second-color)'
    localStorage.setItem('mood', 'light')
  }
}
function checkMood() {
  if (localStorage.getItem('mood') == 'dark') {
    document.body.classList.toggle('dark-mood')
    moon.innerHTML = `<i class="fa-solid fa-sun"></i>`
    moon.style.color = 'var(--third-color)'
  } else {
    document.body.classList.remove('dark-mood')
    moon.innerHTML = `<i class="fa-solid fa-moon">`
    moon.style.color = 'var(--second-color)'
  }
}
checkMood()
