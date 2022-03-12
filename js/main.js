// function fetchAPI(url) {
//   const request = new XMLHttpRequest();
//   request.open('GET', url, false);
//   request.send();
//   return request.responseText;
// }

// function getCategories(category) {
//   const app = fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category' + '/' + category);
//   const appData = JSON.parse(app);
//   let newArray = appData.data;

//   if (category === 'creatures') {
//     newArray = appData.data.food.concat(appData.data.non_food);
//   } else {
//     newArray = appData.data;
//   }

//   Array.from(newArray).sort((a, b) => a.id - b.id).forEach(item => {

//     const container = document.createElement('div');
//     const name = document.createElement('h2');
//     const link = document.createElement('a');
//     const img = document.createElement('img');

//     link.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);
//     img.src = item.image;

//     container.appendChild(img);
//     container.appendChild(name);
//     name.appendChild(link);
//     link.setAttribute('href', '#');
//     link.setAttribute('class', 'link');

//     container.classList.add('item');
//     name.classList.add('name');
//     img.classList.add('image');

//     document.getElementsByClassName(category)[0].appendChild(container);

//   });
// }
// getCategories('creatures');
// getCategories('monsters');
// getCategories('equipment');
// getCategories('materials');
// getCategories('treasure');

// // function getEntry(entry) {
// //   var app = fetchAPI('https://botw-compendium.herokuapp.com/api/v2/entry' + '/' + entry);
// //   var appData = JSON.parse(app);
// //   var newArray = appData.data;

// //   if (entry === 'creatures') {
// //     newArray = appData.data.food.concat(appData.data.non_food);
// //   } else {
// //     newArray = appData.data;
// //   }

// //   Array.from([newArray]).sort((a, b) => a.id - b.id).forEach(item => {

// //     var container = document.createElement('div');
// //     var name = document.createElement('h2');
// //     var link = document.createElement('a');
// //     var img = document.createElement('img');
// //     var description = document.createElement('p');
// //     // var commonLocation = document.createElement('ul');
// //     // var location = document.createElement('li');
// //     // var drop = document.createElement('ul');
// //     // var drops = document.createElement('li');

// //     link.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);
// //     img.src = item.image;
// //     description.innerText = item.description;
// //     // commonLocation.innerText = 'Common Locations:';
// //     // location.innerText = `${item.common_locations}`;
// //     // drop.innerText = 'Drops:';
// //     // drops.innerText = `${item.drops}`;

// //     // commonLocation.appendChild(Location);
// //     // drop.appendChild(drops);
// //     container.appendChild(img);
// //     container.appendChild(name);
// //     name.appendChild(link);
// //     link.setAttribute('href', '#');
// //     link.setAttribute('class', 'link');

// //     container.appendChild(description);
// //     // container.appendChild(commonLocation);
// //     // container.appendChild(drop);

// //     container.classList.add('item');
// //     name.classList.add('name');
// //     img.classList.add('image');

// //     description.classList.add('description');

// //     document.getElementsByClassName('monster')[0].appendChild(container);

// //   });
// // }

// // getEntry('white-maned_lynel');

var EQUIPMENTS_URL = 'https://botw-compendium.herokuapp.com/api/v2/category/equipment';

const fetchAPI = url => {
  const request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.send();
  return request.responseText;
};

const getEquipamentos = () => {
  const App = fetchAPI(EQUIPMENTS_URL);
  const AppData = JSON.parse(App);
  Array.from(AppData.data).forEach(item => {

    // Cria os elementos
    const Container = document.createElement('div');
    const Nome = document.createElement('h2');
    const IMG = document.createElement('img');
    const Descriçao = document.createElement('p');
    const Stats = document.createElement('ul');
    const StatsAtaque = document.createElement('li');
    const StatsDefesa = document.createElement('li');

    // Define o conteúdo dos elementos consumindo a API.
    Nome.innerHTML = item.name;
    IMG.src = item.image;
    Descriçao.innerHTML = item.description;
    Stats.innerHTML = 'Stats';
    StatsAtaque.innerHTML = `Attack: ${item.attack}`;
    StatsDefesa.innerHTML = `Defense: ${item.defense}`;

    // Adiciona os elementos dentro da div.
    Stats.appendChild(StatsAtaque);
    Stats.appendChild(StatsDefesa);
    Container.appendChild(Nome);
    Container.appendChild(IMG);
    Container.appendChild(Descriçao);
    Container.appendChild(Stats);

    // Adiciona as classes aos elementos.
    Container.classList.add('item');
    Nome.classList.add('nome');
    IMG.classList.add('imagem');
    Descriçao.classList.add('descriçao');

    // Renderiza a div com os elementos.
    document.getElementsByClassName('flex-wrapper')[0].appendChild(Container);
  });
};

getEquipamentos();

// scroll to top

const scrollTop = document.querySelector('.scroll-top');

window.addEventListener('scroll', () => {
  if (pageYOffset > 340) {
    scrollTop.classList.add('show');
  } else {
    scrollTop.classList.remove('show');
  }
});

scrollTop.addEventListener('click', () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
});
