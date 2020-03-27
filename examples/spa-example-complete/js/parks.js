//Create an array of parks.
const parkList = [
  {
    id: 1,
    name: 'Yellowstone National Park',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Yellowstone National Park',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
      'Beautiful short park along the Bechler river to Yellowstone National Park',
    directions:
      'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  },
  {
    id: 2,
    name: 'Craters of The Moon',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
      'Beautiful short park along the Bechler river to Bechler Falls',
    directions:
      'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  },
  {
    id: 3,
    name: 'Harriman State Park',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
      'Beautiful short park along the Bechler river to Bechler Falls',
    directions:
      'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  }
];

function renderParkList(park) {
  const item = document.createElement('li');
  item.classList.add('hikeList');
  item.innerHTML = ` 
       <h2>${park.name}</h2>
       <div>
       <img src="${park.imgSrc}" alt="${park.imgAlt}">
          <div>
              <h3>Distance</h3>
              <p>${park.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${park.difficulty}</p>
          </div>
          </div>
      `;
  item.addEventListener('touchend', e => {
    parks.getPark(park.id);
  });
  return item;
}

function renderParkFull(park) {
  const item = document.createElement('li');
  const backButton = document.createElement('button');
  backButton.innerHTML = '&lt;- All parks';
  backButton.ontouchend = () => {
    parks.getAllParks();
  };

  item.innerHTML = ` 
    
        <img src="${park.imgSrc}" alt="${park.imgAlt}">
        <h2>${park.name}</h2>
        <div>
            <h3>Distance</h3>
            <p>${park.distance}</p>
        </div>
        <div>
            <h3>Difficulty</h3>
            <p>${park.difficulty}</p>
        </div>
        <div>
            <h3>Description</h3>
            <p>${park.description}</p>
        </div>
        <div>
            <h3>How to get there</h3>
            <p>${park.directions}</p>
        </div>
    
    `;

  item.insertBefore(backButton, item.childNodes[0]);
  return item;
}
const parks = {
  _parkListElement: null,
  _parkList: null,
  init: function() {
    this._parkListElement = document.querySelector('#parks > ul');
    this._parkList = parkList;
    this.getAllParks();
  },
  getAllParks: function() {
    this._parkListElement.innerHTML = '';
    this._parkList.map(park => {
      this._parkListElement.appendChild(renderParkList(park));
    });
  },
  getPark: function(id) {
    let park = this._parkList.filter(item => item.id == id);
    this._parkListElement.innerHTML = '';
    this._parkListElement.appendChild(renderParkFull(park[0]));
  }
};

export default parks;
