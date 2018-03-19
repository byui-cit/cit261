const superman = {
name: 'Superman',
'real name': 'Clark Kent',
height: 75,
weight: 235,
hero: true,
villain: false,
allies: ['Batman','Supergirl','Superboy'],
fly() {
    return 'Up, up and away!';
}
};

const spiderman = {};  //preferred way to create an object literal

//const spiderman = new Object(); the other way...I can't have both of these active or I get an error.

const name = 'Iron Man';
const realName = 'Tony Stark';

// long way this creates and adds values to the object in one shot.
//const ironMan = ( name: name, realName: realName };

// short ES6 way This only works if my property names are the same as the variable names I provide.
const ironMan = { name, realName };
                 
//accessing properties
//dot notation
console.log(superman.name);

//can do this too but dots are more common (shorter to type)
console.log(superman['name']);
//reason to use bracket notation...can't do this with a dot
console.log(superman["real" + " " + "name"])
//I wonder if this works
console.log(superman["height" + "lbs"]);
//nope!
console.log(superman["height"]+"lbs");
//There we go!

//calling methods
console.log(superman.fly());

//looping through an object
for(const key in superman) {
console.log(key + ": " + superman[key]);
} 

//add a property
superman.city = 'Metropolis';

//output the object again to see if it worked
for(const key in superman) {
console.log(key + ": " + superman[key]);
}

//hmm...it might be nice if I could output any object easily...I wonder how hard it woul dbe to turn that into a function
function outputObject(objectName) {
    for(const key in objectName) {
        if(objectName.hasOwnProperty(key)){  //check to make sure the object has the key
        console.log(key + ": " + objectName[key]);
    }
    }
}

console.log(outputObject(superman));
console.log(outputObject(ironMan));
//works!  of course just figured out I can type 'superman' directly in the console and see the same thing!

const jla = {
//superman: { realName: 'Clark Kent' },  //this line gave me an error...oh I created superman above...won't let me redeclare that object
batman: { realName: 'Bruce Wayne' },
wonderWoman: { realName: 'Diana Prince' },
flash: { realName: 'Barry Allen' },
aquaman: { realName: 'Arthur Curry' },
}

console.log(jla.wonderWoman.realName);
//can link dots together to drill into the object