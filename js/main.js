var creaturesURL = 'https://botw-compendium.herokuapp.com/api/v2/category/creatures';
var monstersURL = 'https://botw-compendium.herokuapp.com/api/v2/category/monsters';
var materialsURL = 'https://botw-compendium.herokuapp.com/api/v2/category/materials';
var equipmentURL = 'https://botw-compendium.herokuapp.com/api/v2/category/equipment';
var treasureURL = 'https://botw-compendium.herokuapp.com/api/v2/category/treasure';

function fetchAPI(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.send();
  return request.responseText;
}

function getCreatures() {
  var app = fetchAPI(creaturesURL);
  var appData = JSON.parse(app);
  Array.from(appData.data.non_food).sort((a, b) => a.id - b.id).forEach(item => {

    var container = document.createElement('div');
    var name = document.createElement('h2');
    var img = document.createElement('img');
    // var description = document.createElement('p');
    // var commonLocation = document.createElement('ul');
    // var location = document.createElement('li');
    // var drop = document.createElement('ul');
    // var drops = document.createElement('li');

    name.innerText = item.name;
    img.src = item.image;
    // description.innerText = item.description;
    // commonLocation.innerText = 'Common Locations:';
    // location.innerText = `${item.common_locations}`;
    // drop.innerText = 'Drops:';
    // drops.innerText = `${item.drops}`;

    // commonLocation.appendChild(Location);
    // drop.appendChild(drops);
    container.appendChild(img);
    container.appendChild(name);
    // container.appendChild(description);
    // container.appendChild(commonLocation);
    // container.appendChild(drop);

    container.classList.add('item');
    name.classList.add('name');
    img.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('creatures')[0].appendChild(container);
  });
}
getCreatures();

function getCreaturesFood() {
  var app = fetchAPI(creaturesURL);
  var appData = JSON.parse(app);
  Array.from(appData.data.food).sort((a, b) => a.id - b.id).forEach(item => {

    var container = document.createElement('div');
    var name = document.createElement('h2');
    var img = document.createElement('img');
    // var description = document.createElement('p');
    // var commonLocation = document.createElement('ul');
    // var location = document.createElement('li');
    // var drop = document.createElement('ul');
    // var drops = document.createElement('li');

    name.innerText = item.name;
    img.src = item.image;
    // description.innerText = item.description;
    // commonLocation.innerText = 'Common Locations:';
    // location.innerText = `${item.common_locations}`;
    // drop.innerText = 'Drops:';
    // drops.innerText = `${item.drops}`;

    // commonLocation.appendChild(Location);
    // drop.appendChild(drops);
    container.appendChild(img);
    container.appendChild(name);
    // container.appendChild(description);
    // container.appendChild(commonLocation);
    // container.appendChild(drop);

    container.classList.add('item');
    name.classList.add('name');
    img.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('creatures')[0].appendChild(container);
  });
}
getCreaturesFood();

function getMonsters() {
  var app = fetchAPI(monstersURL);
  var appData = JSON.parse(app);
  Array.from(appData.data).sort((a, b) => a.id - b.id).forEach(item => {

    var container = document.createElement('div');
    var name = document.createElement('h2');
    var img = document.createElement('img');
    // var description = document.createElement('p');
    // var commonLocation = document.createElement('ul');
    // var location = document.createElement('li');
    // var drop = document.createElement('ul');
    // var drops = document.createElement('li');

    name.innerText = item.name;
    img.src = item.image;
    // description.innerText = item.description;
    // commonLocation.innerText = 'Common Locations:';
    // location.innerText = `${item.common_locations}`;
    // drop.innerText = 'Drops:';
    // drops.innerText = `${item.drops}`;

    // commonLocation.appendChild(location);
    // drop.appendChild(drops);
    container.appendChild(img);
    container.appendChild(name);
    // container.appendChild(description);
    // container.appendChild(commonLocation);
    // container.appendChild(drop);

    container.classList.add('item');
    name.classList.add('name');
    img.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('monsters')[0].appendChild(container);
  });
}
getMonsters();

function getMaterials() {
  var app = fetchAPI(materialsURL);
  var appData = JSON.parse(app);
  Array.from(appData.data).sort((a, b) => a.id - b.id).forEach(item => {

    var container = document.createElement('div');
    var name = document.createElement('h2');
    var img = document.createElement('img');
    // var description = document.createElement('p');
    // var commonLocation = document.createElement('ul');
    // var location = document.createElement('li');
    // var cookingEffect = document.createElement('ul');
    // var effects = document.createElement('li');
    // var heartsRecovered = document.createElement('ul');
    // var recovered = document.createElement('li');

    name.innerText = item.name;
    img.src = item.image;
    // description.innerText = item.description;
    // commonLocation.innerText = 'Common Locations:';
    // location.innerText = `${item.common_locations}`;
    // cookingEffect.innerText = 'Cooking Effects:';
    // effects.innerText = `${item.cooking_effect}`;
    // heartsRecovered.innerText = 'Hearts Recovered:';
    // recovered.innerText = `${item.hearts_recovered}`;

    // commonLocation.appendChild(Location);
    // cookingEffect.appendChild(effects);
    // heartsRecovered.appendChild(recovered);
    container.appendChild(img);
    container.appendChild(name);
    // container.appendChild(description);
    // container.appendChild(commonLocation);
    // container.appendChild(cookingEffect);
    // container.appendChild(heartsRecovered);

    container.classList.add('item');
    name.classList.add('name');
    img.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('materials')[0].appendChild(container);
  });
}
getMaterials();

function getEquipment() {
  var app = fetchAPI(equipmentURL);
  var appData = JSON.parse(app);
  Array.from(appData.data).sort((a, b) => a.id - b.id).forEach(item => {

    var container = document.createElement('div');
    var name = document.createElement('h2');
    var img = document.createElement('img');
    // var description = document.createElement('p');
    // var stats = document.createElement('ul');
    // var statsattack = document.createElement('li');
    // var statsDefense = document.createElement('li');

    name.innerText = item.name;
    img.src = item.image;
    // description.innerText = item.description;
    // stats.innerText = 'Stats';
    // statsattack.innerText = `attack: ${item.attack}`;
    // statsDefense.innerText = `Defense: ${item.defense}`;

    // stats.appendChild(statsattack);
    // stats.appendChild(statsDefense);
    container.appendChild(img);
    container.appendChild(name);
    // container.appendChild(description);
    // container.appendChild(stats);

    container.classList.add('item');
    name.classList.add('name');
    img.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('equipment')[0].appendChild(container);
  });
}

getEquipment();

function getTreasure() {
  var app = fetchAPI(treasureURL);
  var appData = JSON.parse(app);
  Array.from(appData.data).sort((a, b) => a.id - b.id).forEach(item => {

    var container = document.createElement('div');
    var name = document.createElement('h2');
    var img = document.createElement('img');
    // var description = document.createElement('p');
    // var commonLocation = document.createElement('ul');
    // var location = document.createElement('li');
    // var drop = document.createElement('ul');
    // var drops = document.createElement('li');

    name.innerText = item.name;
    img.src = item.image;
    // description.innerText = item.description;
    // commonLocation.innerText = 'Common Locations:';
    // location.innerText = `${item.common_locations}`;
    // drop.innerText = 'Drops:';
    // drops.innerText = `${item.drops}`;

    // commonLocation.appendChild(Location);
    // drop.appendChild(drops);
    container.appendChild(img);
    container.appendChild(name);
    // container.appendChild(description);
    // container.appendChild(commonLocation);
    // container.appendChild(drop);

    container.classList.add('item');
    name.classList.add('name');
    img.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('treasure')[0].appendChild(container);
  });
}
getTreasure();
