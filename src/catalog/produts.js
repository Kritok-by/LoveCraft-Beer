const catalogProducts = [
  {
    id: 'id1',
    name: 'Hefe-Weizen Dunkel',
    image: './img/brew/weizen.png',
    price: 5,
    newPrice: 4.7,
    sort: 'Dunkelweizen',
    brewery: 'Herbsthäuser Brauerei',
    volume: 0.50,
    alk: 5.2,
    timeout: "Jule 15 2020 12:30:00 GMT+0300"
  },
  {
    id: 'id2',
    name: 'Paulaner Hefe-Weißbier Naturtrüb',
    image: './img/brew/paul.png',
    price: 4.3,
    newPrice: 4,
    sort: 'Hefeweizen',
    brewery: 'Paulaner Brauerei',
    volume: 0.50,
    alk: 5.5,
    timeout: "Jule 20 2020 12:30:00 GMT+0300"
  },
  {
    id: 'id3',
    name: 'Hoegaarden Wit',
    image: './img/brew/huegarden.png',
    price: 2.5,
    newPrice: '',
    sort: 'Wheat Beer - Witbier',
    brewery: 'Brouwerij van Hoegaarden',
    volume: 0.33,
    alk: 4.9,
    timeout: ''
  },
  {
    id: 'id4',
    name: 'O’Hara’s Irish Red',
    image: './img/brew/ohara.png',
    price: 6,
    newPrice: 5,
    sort: 'Red Ale - Irish',
    brewery: 'O’Hara’s Brewery',
    volume: 0.50,
    alk: 4.3,
    timeout: "Jule 12 2020 19:30:00 GMT+0300"
  },
  {
    id: 'id5',
    name: 'Kilkenny',
    image: './img/brew/kilkenny.png',
    price: 2,
    newPrice: '',
    sort: 'Red Ale - Irish',
    brewery: 'Guinness',
    volume: 0.50,
    alk: 4.3,
    timeout: ''
  },
  {
    id: 'id6',
    name: 'Goose IPA',
    image: './img/brew/goose-ipa.png',
    price: 1.7,
    newPrice: 1.5,
    sort: 'IPA - English',
    brewery: 'Goose Island',
    volume: 0.50,
    alk: 5.9,
    timeout: new Date(Date.parse(new Date()) + 24 * 24 * 60 * 60 * 1000)
  },
];




export {catalogProducts};
