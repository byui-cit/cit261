// The dataset only has a relative path in it. We need more to find the images, so we have a path variable below. Why isn't this in the object? What advantages or disadvantages are there to having it here instead of as part of the View object?
const imgBasePath = '//byui-cit.github.io/cit261/examples/';

// Since we have multiple methods we need to export, it would make sense to group them together with an object of some sort. This could be as simple as an object literal...or more complex as a class.

const hikesView = {
  renderHikeList: function(hikeListElement, hikeList) {
    // I decided to let the controller handle where the list gets placed. So instead of getting the element here in the function, when I created the view I decided to pass the target element in.
    // const hikeListElement = document.getElementById('hikes');

    hikeListElement.innerHTML = '';
    // the list of hikes doesn't exist here in the view either, so I've passed that in as well.
    hikeList.forEach(hike => {
      // notice the call to 'this' below. 'this' is like adding './' at the beginning of a path. It helps the computer find things.
      hikeListElement.appendChild(this.renderOneHikeLight(hike));
    });
  },
  renderOneHikeLight: function(hike) {
    const item = document.createElement('li');
    item.classList.add('light');
    // setting this to make getting the details for a specific hike easier later.
    item.setAttribute('data-name', hike.name);
    item.innerHTML = ` <h2>${hike.name}</h2>
    <div class="image"><img src="${imgBasePath}${hike.imgSrc}" alt="${
      hike.imgAlt
    }"></div>
    <div>
            <div>
                <h3>Distance</h3>
                <p>${hike.distance}</p>
            </div>
            <div>
                <h3>Difficulty</h3>
                <p>${hike.difficulty}</p>
            </div>
    </div>`;

    return item;
  },
  renderOneHikeFull: function(parent, hike) {
    const backButton = document.createElement('button');
    backButton.innerHTML = '&lt;- All Hikes';
    const item = document.createElement('li');
    item.innerHTML = ` 
        
            <img src="${imgBasePath}${hike.imgSrc}" alt="${hike.imgAlt}">
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
    parent.innerHTML = '';
    item.insertBefore(backButton, item.childNodes[0]);
    parent.appendChild(item);
    // Send the button back to the controller to attach a listener.
    return backButton;
  }
};
export default hikesView;
