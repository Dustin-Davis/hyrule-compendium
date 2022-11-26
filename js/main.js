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
