const fetchAPI = url => {
  const request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.send();
  return request.responseText;
};

const creatures = document.getElementById('creatures');
const mats = document.getElementById('mats');
const cre = document.getElementById('cre');
const flex = document.getElementById('flex-wrapper');

function getCategories(category) {
  const app = fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category' + '/' + category);
  const appData = JSON.parse(app);
  let newArray = appData.data;
  if (category === 'creatures') {
    newArray = appData.data.food.concat(appData.data.non_food);
  } else {
    newArray = appData.data;
  }

  Array.from(newArray).sort((a, b) => a.id - b.id).forEach((item, index) => {

    if (index >= 6) return;

    const Equipment = document.createElement('div');
    const Container = document.createElement('div');
    const Name = document.createElement('h2');
    const IMG = document.createElement('img');
    const Description = document.createElement('p');
    const commonLocation = document.createElement('ul');
    const Location = document.createElement('li');
    const Stats = document.createElement('ul');
    const StatsAttack = document.createElement('li');
    const StatsDefense = document.createElement('li');

    Name.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);
    IMG.src = item.image;
    Description.innerHTML = item.description;
    commonLocation.innerText = 'Common Locations:';
    Location.innerText = `${item.common_locations}`.replaceAll(null, 'No Common Locations');
    Stats.innerHTML = 'Stats';
    StatsAttack.innerHTML = `Attack: ${item.attack}`.replaceAll(null, '0');
    StatsDefense.innerHTML = `Defense: ${item.defense}`.replaceAll(null, '0');

    commonLocation.appendChild(Location);
    Stats.appendChild(StatsAttack);
    Stats.appendChild(StatsDefense);
    Equipment.appendChild(Container);
    Container.appendChild(Name);
    Container.appendChild(IMG);
    Container.appendChild(Description);
    Container.appendChild(commonLocation);
    Container.appendChild(Stats);

    Equipment.classList.add('equipment-div');
    Container.classList.add('item');
    Name.classList.add('name');
    IMG.classList.add('image');
    Description.classList.add('description');

    document.getElementsByClassName('flex-wrapper')[0].appendChild(Equipment);
  });
}
getCategories('equipment');

function getCreature(category) {
  const app = fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category' + '/' + category);
  const appData = JSON.parse(app);
  let newArray = appData.data;

  if (category === 'creatures') {
    newArray = appData.data.food.concat(appData.data.non_food);
  } else {
    newArray = appData.data;
  }

  Array.from(newArray).sort((a, b) => a.id - b.id).forEach((item, index) => {

    if (index >= 6) return;

    const Container = document.createElement('div');
    const Name = document.createElement('h2');
    const IMG = document.createElement('img');
    const Description = document.createElement('p');
    const commonLocation = document.createElement('ul');
    const Location = document.createElement('li');

    Name.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);
    IMG.src = item.image;
    Description.innerHTML = item.description;
    commonLocation.innerText = 'Common Locations:';
    Location.innerText = `${item.common_locations}`.replaceAll(null, 'No Common Locations');

    commonLocation.appendChild(Location);

    Container.appendChild(Name);
    Container.appendChild(IMG);
    Container.appendChild(Description);
    Container.appendChild(commonLocation);

    Container.classList.add('item');
    Name.classList.add('name');
    IMG.classList.add('image');
    Description.classList.add('description');

    document.getElementsByClassName('creature')[0].appendChild(Container);
  });
}

function getMaterials(category) {
  const app = fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category' + '/' + category);
  const appData = JSON.parse(app);
  let newArray = appData.data;

  if (category === 'creatures') {
    newArray = appData.data.food.concat(appData.data.non_food);
  } else {
    newArray = appData.data;
  }

  Array.from(newArray).sort((a, b) => a.id - b.id).forEach((item, index) => {

    if (index >= 6) return;

    const Container = document.createElement('div');
    const Name = document.createElement('h2');
    const IMG = document.createElement('img');
    const Description = document.createElement('p');
    const commonLocation = document.createElement('ul');
    const Location = document.createElement('li');

    Name.innerText = item.name.charAt(0).toUpperCase() + item.name.slice(1);
    IMG.src = item.image;
    Description.innerHTML = item.description;
    commonLocation.innerText = 'Common Locations:';
    Location.innerText = `${item.common_locations}`.replaceAll(null, 'No Common Locations');

    commonLocation.appendChild(Location);

    Container.appendChild(Name);
    Container.appendChild(IMG);
    Container.appendChild(Description);
    Container.appendChild(commonLocation);

    Container.classList.add('item');
    Name.classList.add('name');
    IMG.classList.add('image');
    Description.classList.add('description');

    document.getElementsByClassName('mats')[0].appendChild(Container);
  });
}

creatures.addEventListener('click', () => {
  getCreature('creatures');
  flex.classList.toggle('hidden');
});

mats.addEventListener('click', () => {
  getMaterials('materials');
  flex.classList.toggle('hidden');
  cre.classList.toggle('hidden');
});

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
