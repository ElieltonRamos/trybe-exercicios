const urlAPI = 'https://superheroapi.com/api/3523753267859006/';
const img = document.querySelector('img');
const nomePersonagem = document.querySelector('h4');
const btnGerar = document.querySelector('button');

btnGerar.addEventListener('click', () => {
  const randoNumber = Math.floor(Math.random() * 100)
  let dadosPerson;
  const dadosPersonagem = fetch(urlAPI + randoNumber)
  .then((response) => response.json())
  .then((dados) => {
    nomePersonagem.innerText = dados.biography["full-name"];
    img.src = dados.image.url;
  }).catch((error) => alert('Personagem nao encontrado'))
  
});