// function fetchAPI(url) {
//   const request = new XMLHttpRequest();
//   request.open('GET', url, false);
//   request.send();
//   return request.responseText;
// }

// function getCategories(category) {
// const app = fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category' + '/' + category);
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

// var EQUIPMENTS_URL = 'https://botw-compendium.herokuapp.com/api/v2/category/equipment';

const fetchAPI = url => {
  const request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.send();
  return request.responseText;
};

function getCategories(category) {
  const app = fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category' + '/' + category);
  const appData = JSON.parse(app);
  let newArray = appData.data;

  if (category === 'creatures') {
    newArray = appData.data.food.concat(appData.data.non_food);
  } else {
    newArray = appData.data;
  }

  Array.from(newArray).sort((a, b) => a.id - b.id).forEach(item => {

    const Container = document.createElement('div');
    const Name = document.createElement('h2');
    const IMG = document.createElement('img');
    const Description = document.createElement('p');
    const Stats = document.createElement('ul');
    const StatsAttack = document.createElement('li');
    const StatsDefense = document.createElement('li');
    const commonLocation = document.createElement('ul');
    const Location = document.createElement('li');

    Name.innerHTML = item.name;
    IMG.src = item.image;
    Description.innerHTML = item.description;
    Stats.innerHTML = 'Stats';
    StatsAttack.innerHTML = `Attack: ${item.attack}`;
    StatsDefense.innerHTML = `Defense: ${item.defense}`;
    commonLocation.innerText = 'Common Locations:';
    Location.innerText = `${item.common_locations}`;

    commonLocation.appendChild(Location);
    Stats.appendChild(StatsAttack);
    Stats.appendChild(StatsDefense);
    Container.appendChild(Name);
    Container.appendChild(IMG);
    Container.appendChild(Description);
    Container.appendChild(Stats);
    Container.appendChild(commonLocation);

    Container.classList.add('item');
    Name.classList.add('nome');
    IMG.classList.add('image');
    Description.classList.add('Description');

    document.getElementsByClassName('flex-wrapper')[0].appendChild(Container);
  });
}

// getCategories('creatures');
// getCategories('monsters');
getCategories('equipment');
// getCategories('materials');
// getCategories('treasure');

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
