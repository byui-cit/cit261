const ships = {
  count: 10,
  next: 'https://swapi.co/api/starships/?page=2',
  previous: null,
  results: [
    {
      name: 'Executor',
      model: 'Executor-class star dreadnought',
      manufacturer: 'Kuat Drive Yards, Fondor Shipyards',
      cost_in_credits: '1143350000',
      length: '19000',
      max_atmosphering_speed: 'n/a',
      crew: '279144',
      passengers: '38000',
      cargo_capacity: '250000000',
      consumables: '6 years',
      hyperdrive_rating: '2.0',
      MGLT: '40',
      starship_class: 'Star dreadnought',
      pilots: [],
      films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/'],
      created: '2014-12-15T12:31:42.547000Z',
      edited: '2017-04-19T10:56:06.685592Z',
      url: 'https://swapi.co/api/starships/15/'
    },
    {
      name: 'Sentinel-class landing craft',
      model: 'Sentinel-class landing craft',
      manufacturer: 'Sienar Fleet Systems, Cyngus Spaceworks',
      cost_in_credits: '240000',
      length: '38',
      max_atmosphering_speed: '1000',
      crew: '5',
      passengers: '75',
      cargo_capacity: '180000',
      consumables: '1 month',
      hyperdrive_rating: '1.0',
      MGLT: '70',
      starship_class: 'landing craft',
      pilots: [],
      films: ['https://swapi.co/api/films/1/'],
      created: '2014-12-10T15:48:00.586000Z',
      edited: '2014-12-22T17:35:44.431407Z',
      url: 'https://swapi.co/api/starships/5/'
    },
    {
      name: 'Death Star',
      model: 'DS-1 Orbital Battle Station',
      manufacturer:
        'Imperial Department of Military Research, Sienar Fleet Systems',
      cost_in_credits: '1000000000000',
      length: '120000',
      max_atmosphering_speed: 'n/a',
      crew: '342953',
      passengers: '843342',
      cargo_capacity: '1000000000000',
      consumables: '3 years',
      hyperdrive_rating: '4.0',
      MGLT: '10',
      starship_class: 'Deep Space Mobile Battlestation',
      pilots: [],
      films: ['https://swapi.co/api/films/1/'],
      created: '2014-12-10T16:36:50.509000Z',
      edited: '2014-12-22T17:35:44.452589Z',
      url: 'https://swapi.co/api/starships/9/'
    },
    {
      name: 'Millennium Falcon',
      model: 'YT-1300 light freighter',
      manufacturer: 'Corellian Engineering Corporation',
      cost_in_credits: '100000',
      length: '34.37',
      max_atmosphering_speed: '1050',
      crew: '4',
      passengers: '6',
      cargo_capacity: '100000',
      consumables: '2 months',
      hyperdrive_rating: '0.5',
      MGLT: '75',
      starship_class: 'Light freighter',
      pilots: [
        'https://swapi.co/api/people/13/',
        'https://swapi.co/api/people/14/',
        'https://swapi.co/api/people/25/',
        'https://swapi.co/api/people/31/'
      ],
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/7/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
      ],
      created: '2014-12-10T16:59:45.094000Z',
      edited: '2014-12-22T17:35:44.464156Z',
      url: 'https://swapi.co/api/starships/10/'
    },
    {
      name: 'Y-wing',
      model: 'BTL Y-wing',
      manufacturer: 'Koensayr Manufacturing',
      cost_in_credits: '134999',
      length: '14',
      max_atmosphering_speed: '1000km',
      crew: '2',
      passengers: '0',
      cargo_capacity: '110',
      consumables: '1 week',
      hyperdrive_rating: '1.0',
      MGLT: '80',
      starship_class: 'assault starfighter',
      pilots: [],
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
      ],
      created: '2014-12-12T11:00:39.817000Z',
      edited: '2014-12-22T17:35:44.479706Z',
      url: 'https://swapi.co/api/starships/11/'
    },
    {
      name: 'X-wing',
      model: 'T-65 X-wing',
      manufacturer: 'Incom Corporation',
      cost_in_credits: '149999',
      length: '12.5',
      max_atmosphering_speed: '1050',
      crew: '1',
      passengers: '0',
      cargo_capacity: '110',
      consumables: '1 week',
      hyperdrive_rating: '1.0',
      MGLT: '100',
      starship_class: 'Starfighter',
      pilots: [
        'https://swapi.co/api/people/1/',
        'https://swapi.co/api/people/9/',
        'https://swapi.co/api/people/18/',
        'https://swapi.co/api/people/19/'
      ],
      films: [
        'https://swapi.co/api/films/2/',
        'https://swapi.co/api/films/3/',
        'https://swapi.co/api/films/1/'
      ],
      created: '2014-12-12T11:19:05.340000Z',
      edited: '2014-12-22T17:35:44.491233Z',
      url: 'https://swapi.co/api/starships/12/'
    },
    {
      name: 'TIE Advanced x1',
      model: 'Twin Ion Engine Advanced x1',
      manufacturer: 'Sienar Fleet Systems',
      cost_in_credits: 'unknown',
      length: '9.2',
      max_atmosphering_speed: '1200',
      crew: '1',
      passengers: '0',
      cargo_capacity: '150',
      consumables: '5 days',
      hyperdrive_rating: '1.0',
      MGLT: '105',
      starship_class: 'Starfighter',
      pilots: ['https://swapi.co/api/people/4/'],
      films: ['https://swapi.co/api/films/1/'],
      created: '2014-12-12T11:21:32.991000Z',
      edited: '2014-12-22T17:35:44.549047Z',
      url: 'https://swapi.co/api/starships/13/'
    },
    {
      name: 'Slave 1',
      model: 'Firespray-31-class patrol and attack',
      manufacturer: 'Kuat Systems Engineering',
      cost_in_credits: 'unknown',
      length: '21.5',
      max_atmosphering_speed: '1000',
      crew: '1',
      passengers: '6',
      cargo_capacity: '70000',
      consumables: '1 month',
      hyperdrive_rating: '3.0',
      MGLT: '70',
      starship_class: 'Patrol craft',
      pilots: ['https://swapi.co/api/people/22/'],
      films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/5/'],
      created: '2014-12-15T13:00:56.332000Z',
      edited: '2014-12-22T17:35:44.716273Z',
      url: 'https://swapi.co/api/starships/21/'
    },
    {
      name: 'Imperial shuttle',
      model: 'Lambda-class T-4a shuttle',
      manufacturer: 'Sienar Fleet Systems',
      cost_in_credits: '240000',
      length: '20',
      max_atmosphering_speed: '850',
      crew: '6',
      passengers: '20',
      cargo_capacity: '80000',
      consumables: '2 months',
      hyperdrive_rating: '1.0',
      MGLT: '50',
      starship_class: 'Armed government transport',
      pilots: [
        'https://swapi.co/api/people/1/',
        'https://swapi.co/api/people/13/',
        'https://swapi.co/api/people/14/'
      ],
      films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/'],
      created: '2014-12-15T13:04:47.235000Z',
      edited: '2014-12-22T17:35:44.795405Z',
      url: 'https://swapi.co/api/starships/22/'
    },
    {
      name: 'EF76 Nebulon-B escort frigate',
      model: 'EF76 Nebulon-B escort frigate',
      manufacturer: 'Kuat Drive Yards',
      cost_in_credits: '8500000',
      length: '300',
      max_atmosphering_speed: '800',
      crew: '854',
      passengers: '75',
      cargo_capacity: '6000000',
      consumables: '2 years',
      hyperdrive_rating: '2.0',
      MGLT: '40',
      starship_class: 'Escort ship',
      pilots: [],
      films: ['https://swapi.co/api/films/2/', 'https://swapi.co/api/films/3/'],
      created: '2014-12-15T13:06:30.813000Z',
      edited: '2014-12-22T17:35:44.848329Z',
      url: 'https://swapi.co/api/starships/23/'
    }
  ]
};

const shipRepository = {
  baseUrl: 'https://swapi.co/api/starships/',
  getShips(page = null) {
    // normal return of ships
    return ships.results;
    // Promise example
    // return new Promise((resolve, reject) => {
    //   setTimeout(() => {  // just here to simulate a delay
    //     if (ships.results) {
    //       resolve(ships.results);
    //     } else {
    //       reject(Error('No ships were found'));
    //     }
    //   }, 3000);
    // });

    // get from API instead of from local

    // const url = page || this.baseUrl;
    // return fetch(url)
    //   .then((response) => {
    //     if (response.ok) {
    //       return response.json();
    //     }
    //     throw Error(response.statusText);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //   });
  },
  getShipByName(name) {
    return ships.results.find(aShip => aShip.name === name);
    // the code in the parenthesis above might look a bit weird if you haven't seen something like that before.
    // It could be re-written like this:
    // function(aShip) {
    //   if (aShip.name === name) {
    //     return aShip;
    //   }
    // }
  },
  getRandomShip() {
    // code to get a random ship here
  },
  getShipsByPassengerCapacity(min, max) {
    // returns a list of ships that can carry at least min passengers, but no more than max
  }
};

// this code functions exactly the same as the code above.  Just a different way of writing functions!
// const shipRepository = {
//   getShips: () => ships,
//   getShipByName: name => ships.results.find(aShip => aShip.name === name),
//   getRandomShip: () => {
//     // code to get a random ship here
//   },
//   getShipsByPassengerCapacity: (min, max) => {
//      // returns a list of ships that can carry at least min passengers, but no more than max
//   }
// };
export default shipRepository;
