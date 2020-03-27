const superman = {
  name: 'Superman',
  'real name': 'Clark Kent',
  height: 75,
  weight: 235,
  hero: true,
  villain: false,
  allies: ['Batman', 'Supergirl', 'Superboy'],
  fly() {
    return 'Up, up and away!';
  }
};

const spiderman = {}; //preferred way to create an object literal

//const spiderman = new Object(); the other way, I can't have both of these active or I get an error.

const name = 'Iron Man';
const realName = 'Tony Stark';

// Long way this creates and adds values to the object in one shot.
// const ironMan = { name: name, realName: realName };

//Short ES6 way. This only works if my property names are the same as the variable names I provide.
const ironMan = { name, realName };

//accessing properties
//dot notation
console.log(superman.name);

//can do this too but dots are more common (shorter to type)
console.log(superman['name']);
//reason to use bracket notation, can't do this with a dot
console.log(superman['real' + ' ' + 'name']);
//I wonder if this works
console.log(superman['height' + 'lbs']);
//Nope!
console.log(superman['height'] + 'lbs');
//There we go!

//calling methods
console.log(superman.fly());

//Looping through an object.
for (const key in superman) {
  console.log(key + ': ' + superman[key]);
}

//add a property
superman.city = 'Metropolis';

//output the object again to see if it worked
for (const key in superman) {
  console.log(key + ': ' + superman[key]);
}

//It might be nice if I could output any object easily. I wonder how hard it would be to turn that into a function?
function outputObject(objectName) {
  for (const key in objectName) {
    if (objectName.hasOwnProperty(key)) {
      //check to make sure the object has the key
      console.log(key + ': ' + objectName[key]);
    }
  }
}

console.log(outputObject(superman));
console.log(outputObject(ironMan));
//It works! I can also type 'superman' directly in the console and see the same thing!

const jla = {
  superman: { realName: 'Clark Kent' }, //I thought I made a superman object above. why didn't this give me an error?
  batman: { realName: 'Bruce Wayne' },
  wonderWoman: { realName: 'Diana Prince' },
  flash: { realName: 'Barry Allen' },
  aquaman: { realName: 'Arthur Curry' }
};

console.log(jla.wonderWoman.realName);
//This can link dots together to drill into the object,
//and apparently "jla.superman" is a different object than just plain "superman".  That was why there was no error above. I wonder if I can use my "superman" object to initialize my jla.superman?
