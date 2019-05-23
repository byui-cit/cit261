import Comments from './comments.js';
// old code using an obj literal instead of a class. This isn't being used, but is an example of
//create an array of hikes
const hikeList = [
  {
    id: 1,
    name: 'Bechler Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
      'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
      'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  },
  {
    id: 2,
    name: 'Teton Canyon',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
      'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
      'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  },
  {
    id: 3,
    name: 'Denanda Falls',
    imgSrc: 'falls.jpg',
    imgAlt: 'Image of Bechler Falls',
    distance: '3 miles',
    difficulty: 'Easy',
    description:
      'Beautiful short hike along the Bechler river to Bechler Falls',
    directions:
      'Take Highway 20 north to Ashton. Turn right into the town and continue through. Follow that road for a few miles then turn left again onto the Cave Falls road.Drive to the end of the Cave Falls road. There is a parking area at the trailhead.'
  }
];

function renderHikeList(hike) {
  const item = document.createElement('li');
  item.classList.add('hikeList');
  item.innerHTML = ` 
       <h2>${hike.name}</h2>
       <div>
       <img src="${hike.imgSrc}" alt="${hike.imgAlt}">
          <div>
              <h3>Distance</h3>
              <p>${hike.distance}</p>
          </div>
          <div>
              <h3>Difficulty</h3>
              <p>${hike.difficulty}</p>
          </div>
          </div>
      `;
  item.addEventListener('touchend', e => {
    hikes.getHike(hike.id);
  });
  return item;
}

function renderHikeFull(hike) {
  const item = document.createElement('li');
  const backButton = document.createElement('button');
  backButton.innerHTML = '&lt;- All Hikes';
  backButton.ontouchend = () => {
    hikes.getAllHikes();
  };

  item.innerHTML = ` 
    
        <img src="${hike.imgSrc}" alt="${hike.imgAlt}">
        <h2>${hike.name}</h2>
        <div>
            <h3>Distance</h3>
            <p>${hike.distance}</p>
        </div>
        <div>
            <h3>Difficulty</h3>
            <p>${hike.difficulty}</p>
        </div>
        <div>
            <h3>Description</h3>
            <p>${hike.description}</p>
        </div>
        <div>
            <h3>How to get there</h3>
            <p>${hike.directions}</p>
        </div>
      
    `;

  item.insertBefore(backButton, item.childNodes[0]);
  return item;
}
const hikes = {
  _hikeListElement: null,
  _commentsListElement: null,
  _hikeList: null,
  _comments: new Comments('hikes', 'comments'),
  init: function() {
    this._hikeListElement = document.querySelector('#hikes > ul');
    this._commentsListElement = document.querySelector('#comments > ul');
    this._hikeList = hikeList;
    this.getAllHikes();
    this._comments.showCommentList();
  },
  getAllHikes: function() {
    this._hikeListElement.innerHTML = '';
    this._hikeList.map(hike => {
      this._hikeListElement.appendChild(renderHikeList(hike));
    });
    this._comments.showCommentList();
  },
  getHike: function(id) {
    let hike = this._hikeList.find(item => item.id == id);
    this._hikeListElement.innerHTML = '';
    this._hikeListElement.appendChild(renderHikeFull(hike));

    this._comments.showCommentList(hike.name);
  },
  getAllComments: function(q = null) {
    this._comments.showCommentList(this._commentsListElement, q);
  }
};

export default hikes;
