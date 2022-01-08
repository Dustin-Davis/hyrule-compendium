function fetchAPI(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, false);
  request.send();
  return request.responseText;
}

function getCategories(category) {
  var app = fetchAPI('https://botw-compendium.herokuapp.com/api/v2/category' + '/' + category);
  var appData = JSON.parse(app);
  var newArray = appData.data;
  if (category === 'creatures') {
    newArray = appData.data.food.concat(appData.data.non_food);
  } else {
    newArray = appData.data;
  }

  Array.from(newArray).sort((a, b) => a.id - b.id).forEach(item => {

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

    document.getElementsByClassName('category')[0].appendChild(container);

  });
}
getCategories('creatures');
getCategories('monsters');
getCategories('equipment');
getCategories('materials');
getCategories('treasure');
