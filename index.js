const farmAnimals = 'cow horse sheep pig chicken';

const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];

const muppet = {
  muppetName: 'Miss Piggy',
  color: 'pink',
  song: 'Never Before, Never Again',
  job: 'Cast member of The Muppet Show',
  partner: 'Kermit'
};

const nestedMuppet = {
  nestedName: 'Kermit',
  nestedColor: 'green',
  album: {
    theMuppetMovie: {
      song1: 'Rainbow Connection',
      song2: 'Moving Right Along',
      song3: 'Never Before, Never Again',
      song4: 'I Hope That Something Better Comes Along',
    },
  },
  nestedJob: 'Host of The Muppet Show',
  nestedPartner: 'Miss Piggy'
};

// Strings
// **************************************************************assignment number 1 **************************************************************
// 1. Use destructuring to assign appropriate variables based on the sounds animals make.
const [cow, horse,sheep,pig,chicken] = farmAnimals.split(' ')

const [soundcow, soundhorse, soundsheep, soundpig, soundchicken] = ['moo', 'neigh', 'baa', 'oink','cluck']

// console.log(`A ${cow} produces a ${soundcow} sound.`);
// console.log(`A ${horse} produces a ${soundhorse} sound.`);
// console.log(`A ${sheep} produces a ${soundsheep} sound.`);
// console.log(`A ${pig} produces a ${soundpig} sound.`);
// console.log(`A ${chicken} produces a ${soundchicken} sound.`);

// **************************************************************assignment number 2 **************************************************************
// 2. Bolt the horse wandered off, so just give us four animals, and let's name them bessie, dolly, babe, and little.
const removeHorse = (farmAnimals, matchinganimal) => {

  let newAnimals = []
  for (const animal of farmAnimals.split(' ')) {

    if (animal == matchinganimal) {
      newAnimals = farmAnimals.split(' ').filter(e => e !== animal);
      // console.log(bessie); //cow
    }
  }
  return newAnimals
}

const animals_without_horse = removeHorse(farmAnimals, 'horse')

const [bessie, dolly, babe, little] = animals_without_horse

console.log(little); // chicken

// **************************************************************assignment number 3 **************************************************************
// 3. Little the chicken had to go back to the coop, so now we're left with three. Let's use color variables of blackAndWhite, black, and pink.

const removeChicken = (farmAnimals, matchinganimal) => {

  let newAnimals = []
  for (const animal of farmAnimals) {

    if (animal == matchinganimal) {
      newAnimals = farmAnimals.filter(e => e !== animal);
    }
  }
  return newAnimals
}

const animals_without_chicken = removeChicken(animals_without_horse, 'chicken')

const [blackAndWhite, black, pink] = animals_without_chicken

console.log(pink); // pig

// Arrays

// **************************************************************assignment number 4**************************************************************
// 4. Use destructuring to assign appropriate variables using the color names.

const [red,orange,yellow,green,blue,indigo,violet] = colors
// console.log(red); //red
// console.log(indigo); //indigo

// **************************************************************assignment number 5 **************************************************************
// 5. Some people have a really hard time picking out indigo, so let's leave that one out, using the first letter of each color as the variable names.
const removeIndigoColor = (colors, matchingletter) => {
  let newColors=[]
  for (const color of colors) {
    const firstLetterfromArray = color.split('')[0];
    if (firstLetterfromArray == matchingletter) {
      newColors = colors.filter(e => e !== color); 
      // console.log(newColors); //results are:[ 'red', 'orange', 'yellow', 'green', 'blue', 'violet' ]
    }
  }

  return newColors
}

const colors_without_indigo=removeIndigoColor(colors, 'i')
console.log(colors_without_indigo);

// **************************************************************assignment number 6 **************************************************************
// 6. But wait! Indigo is now feeling *super* left out. Let's only assign indigo using indg. 



// Objects
// **************************************************************assignment number 7 **************************************************************
// 7. Use destructuring to assign all variables using the keys as the variable names

const {muppetName,color,song,job,partner} = muppet
// console.log(muppetName); //Miss Piggy

// **************************************************************assignment number 8 **************************************************************
// 8. Use destructuring to assign songs 2 and 4, and Kermit's job and partner

const {song2,song4} = nestedMuppet.album.theMuppetMovie

// console.log(song2);
// console.log(song4);

const {nestedJob,nestedPartner}=nestedMuppet

// console.log(nestedJob);
// console.log(nestedPartner);