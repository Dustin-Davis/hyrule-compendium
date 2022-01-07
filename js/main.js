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
  var App = fetchAPI(creaturesURL);
  var AppData = JSON.parse(App);
  Array.from(AppData.data.non_food).sort((a, b) => a.id - b.id).forEach(item => {

    var Container = document.createElement('div');
    var name = document.createElement('h2');
    var IMG = document.createElement('img');
    // var description = document.createElement('p');
    // var commonLocation = document.createElement('ul');
    // var Location = document.createElement('li');
    // var Drops = document.createElement('ul');
    // var drops = document.createElement('li');

    name.innerText = item.name;
    IMG.src = item.image;
    // description.innerText = item.description;
    // commonLocation.innerText = 'Common Locations:';
    // Location.innerText = `${item.common_locations}`;
    // Drops.innerText = 'Drops:';
    // drops.innerText = `${item.drops}`;

    // commonLocation.appendChild(Location);
    // Drops.appendChild(drops);
    Container.appendChild(IMG);
    Container.appendChild(name);
    // Container.appendChild(description);
    // Container.appendChild(commonLocation);
    // Container.appendChild(Drops);

    Container.classList.add('item');
    name.classList.add('name');
    IMG.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('creatures')[0].appendChild(Container);
  });
}
getCreatures();

function getCreaturesFood() {
  var App = fetchAPI(creaturesURL);
  var AppData = JSON.parse(App);
  Array.from(AppData.data.food).sort((a, b) => a.id - b.id).forEach(item => {

    var Container = document.createElement('div');
    var name = document.createElement('h2');
    var IMG = document.createElement('img');
    // var description = document.createElement('p');
    // var commonLocation = document.createElement('ul');
    // var Location = document.createElement('li');
    // var Drops = document.createElement('ul');
    // var drops = document.createElement('li');

    name.innerText = item.name;
    IMG.src = item.image;
    // description.innerText = item.description;
    // commonLocation.innerText = 'Common Locations:';
    // Location.innerText = `${item.common_locations}`;
    // Drops.innerText = 'Drops:';
    // drops.innerText = `${item.drops}`;

    // commonLocation.appendChild(Location);
    // Drops.appendChild(drops);
    Container.appendChild(IMG);
    Container.appendChild(name);
    // Container.appendChild(description);
    // Container.appendChild(commonLocation);
    // Container.appendChild(Drops);

    Container.classList.add('item');
    name.classList.add('name');
    IMG.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('creatures')[0].appendChild(Container);
  });
}
getCreaturesFood();

function getMonsters() {
  var App = fetchAPI(monstersURL);
  var AppData = JSON.parse(App);
  Array.from(AppData.data).sort((a, b) => a.id - b.id).forEach(item => {

    var Container = document.createElement('div');
    var name = document.createElement('h2');
    var IMG = document.createElement('img');
    // var description = document.createElement('p');
    // var commonLocation = document.createElement('ul');
    // var Location = document.createElement('li');
    // var Drops = document.createElement('ul');
    // var drops = document.createElement('li');

    name.innerText = item.name;
    IMG.src = item.image;
    // description.innerText = item.description;
    // commonLocation.innerText = 'Common Locations:';
    // Location.innerText = `${item.common_locations}`;
    // Drops.innerText = 'Drops:';
    // drops.innerText = `${item.drops}`;

    // commonLocation.appendChild(Location);
    // Drops.appendChild(drops);
    Container.appendChild(IMG);
    Container.appendChild(name);
    // Container.appendChild(description);
    // Container.appendChild(commonLocation);
    // Container.appendChild(Drops);

    Container.classList.add('item');
    name.classList.add('name');
    IMG.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('monsters')[0].appendChild(Container);
  });
}
getMonsters();

function getMaterials() {
  var App = fetchAPI(materialsURL);
  var AppData = JSON.parse(App);
  Array.from(AppData.data).sort((a, b) => a.id - b.id).forEach(item => {

    var Container = document.createElement('div');
    var name = document.createElement('h2');
    var IMG = document.createElement('img');
    // var description = document.createElement('p');
    // var commonLocation = document.createElement('ul');
    // var Location = document.createElement('li');
    // var CookingEffect = document.createElement('ul');
    // var effects = document.createElement('li');
    // var HeartsRecovered = document.createElement('ul');
    // var recovered = document.createElement('li');

    name.innerText = item.name;
    IMG.src = item.image;
    // description.innerText = item.description;
    // commonLocation.innerText = 'Common Locations:';
    // Location.innerText = `${item.common_locations}`;
    // CookingEffect.innerText = 'Cooking Effects:';
    // effects.innerText = `${item.cooking_effect}`;
    // HeartsRecovered.innerText = 'Hearts Recovered:';
    // recovered.innerText = `${item.hearts_recovered}`;

    // commonLocation.appendChild(Location);
    // CookingEffect.appendChild(effects);
    // HeartsRecovered.appendChild(recovered);
    Container.appendChild(IMG);
    Container.appendChild(name);
    // Container.appendChild(description);
    // Container.appendChild(commonLocation);
    // Container.appendChild(CookingEffect);
    // Container.appendChild(HeartsRecovered);

    Container.classList.add('item');
    name.classList.add('name');
    IMG.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('materials')[0].appendChild(Container);
  });
}
getMaterials();

function getEquipment() {
  var App = fetchAPI(equipmentURL);
  var AppData = JSON.parse(App);
  Array.from(AppData.data).sort((a, b) => a.id - b.id).forEach(item => {

    var Container = document.createElement('div');
    var name = document.createElement('h2');
    var IMG = document.createElement('img');
    // var description = document.createElement('p');
    // var Stats = document.createElement('ul');
    // var StatsAttack = document.createElement('li');
    // var StatsDefense = document.createElement('li');

    name.innerText = item.name;
    IMG.src = item.image;
    // description.innerText = item.description;
    // Stats.innerText = 'Stats';
    // StatsAttack.innerText = `Attack: ${item.attack}`;
    // StatsDefense.innerText = `Defense: ${item.defense}`;

    // Stats.appendChild(StatsAttack);
    // Stats.appendChild(StatsDefense);
    Container.appendChild(IMG);
    Container.appendChild(name);
    // Container.appendChild(description);
    // Container.appendChild(Stats);

    Container.classList.add('item');
    name.classList.add('name');
    IMG.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('equipment')[0].appendChild(Container);
  });
}

getEquipment();

function getTreasure() {
  var App = fetchAPI(treasureURL);
  var AppData = JSON.parse(App);
  Array.from(AppData.data).sort((a, b) => a.id - b.id).forEach(item => {

    var Container = document.createElement('div');
    var name = document.createElement('h2');
    var IMG = document.createElement('img');
    // var description = document.createElement('p');
    // var commonLocation = document.createElement('ul');
    // var Location = document.createElement('li');
    // var Drops = document.createElement('ul');
    // var drops = document.createElement('li');

    name.innerText = item.name;
    IMG.src = item.image;
    // description.innerText = item.description;
    // commonLocation.innerText = 'Common Locations:';
    // Location.innerText = `${item.common_locations}`;
    // Drops.innerText = 'Drops:';
    // drops.innerText = `${item.drops}`;

    // commonLocation.appendChild(Location);
    // Drops.appendChild(drops);
    Container.appendChild(IMG);
    Container.appendChild(name);
    // Container.appendChild(description);
    // Container.appendChild(commonLocation);
    // Container.appendChild(Drops);

    Container.classList.add('item');
    name.classList.add('name');
    IMG.classList.add('image');
    // description.classList.add('description');

    document.getElementsByClassName('treasure')[0].appendChild(Container);
  });
}
getTreasure();
