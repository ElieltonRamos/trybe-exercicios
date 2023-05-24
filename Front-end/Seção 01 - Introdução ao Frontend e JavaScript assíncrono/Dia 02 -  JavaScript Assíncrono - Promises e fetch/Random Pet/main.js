const dogBtn = document.querySelector('#dogBtn');
const catBtn = document.querySelector('#catBtn');
const randomBtn = document.querySelector('#randomBtn')
const img = document.querySelector('img')

dogBtn.addEventListener('click', () => {
  fetch('https://dog.ceo/api/breeds/image/random')
  .then((response) => response.json())
  .then((dadosDog) => img.src = dadosDog.message)
  .catch((error) => alert('Falha na API'))
});

catBtn.addEventListener('click', () => {
  fetch('https://api.thecatapi.com/v1/images/search')
  .then((response) => response.json())
  .then((dadosCat) => img.src = dadosCat[0].url)
  .catch((error) => alert('Falha na API'))
});

randomBtn.addEventListener('click', () => {
  new Promise((resolve, reject) => {
    resolve(fetch('https://api.thecatapi.com/v1/images/search')
      .then((response) => response.json())
      .then((dadosCat) => img.src = dadosCat[0].url))
    })
  new Promise((resolve, reject) => {
    resolve(fetch('https://dog.ceo/api/breeds/image/random')
    .then((response) => response.json())
    .then((dadosDog) => img.src = dadosDog.message))
  })

});

//so testando
