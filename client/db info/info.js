const marvelPark = [
  {
    name: 'Universal Orlando, Marvel Super Hero Island',
    park_hours: 'From 9AM to 9PM',
    location: '6000 Universal Blvd, Orlando, FL 32819',
    atractions: '',
    about:
      'How would you like to take a photo with Captain America, be catapulted into the sky like the Incredible Hulk, go web-slinging high above the streets with the Amazing Spider-Man or collect unique Marvel souvenirs? Sounds like an epic adventure, right?! You can do all of that and more in Marvel Super Hero Island at Universal Orlando Islands of Adventure. Here is everything you need to know to get your epic adventure started.',
    images:
      'https://blog.discoveruniversal.com/wp-content/uploads/2019/06/CaptailAmericaAndTeam-MarvelSuperHeroIsland-1.png'
  }
]

const Shops = [
  {
    name: 'Marvel Alterniverse Store',
    about:
      'If you are always ready to save the day, we got the Marvel Super Hero supplies you need. Stock up on character t-shirts, sweatshirts, toys, collectibles, mugs and more. Plus you might get the chance to have your photo taken with Spider-Man.',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-marvel-alterniverse-store-exterior-a.jpg'
  },
  {
    name: 'Comic book store',
    about:
      'POW! Prepare to enter the inner circle of classic comic lore. KA-BLAM! Books and graphic novels line the shelves, packed with the legends that have defined Marvel for over 80 years. You will also find posters, apparel and, of course, official Marvel comics as you snake your way through stacks of stupefying souvenirs.',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-comic-book-store-islands-of-adventure-exterior-a.jpg'
  },
  {
    name: 'Marvel Boutique',
    about:
      'The store may be small—hence being a boutique—but ther is so much selection to choose from. You will find something you wont want to leave the park without whether you like to subtly express your passion for comics or wear it loud and proud. This one-of-a-kind shop can be found right in between the larger than life drawings of Doctor Octopus and Storm in Marvel Super Hero Island. You might have a tough time leaving the island with how much cool stuff there is to check out in this hidden gem.',
    image:
      'https://blog.discoveruniversal.com/wp-content/uploads/2018/07/Store-Interior-Wide.jpg'
  },
  {
    name: 'Spider-Man shop',
    about:
      'The moment a shy shutterbug from Forest Hills crossed paths with a radioactive arachnid, he began his transformation into Spider-Man. Created just for fans, this store is stacked with toys, action figures, mugs, t-shirts, and more. You will need your web shooters handy to ensnare all the souvenirs you can carry.',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-spider-man-shop-universal-front-a.jpg'
  }
]
const Ride = [
  {
    ride: 'The Incredible Hulk Coaster',
    ride_type: 'Thrill',
    requirements: 'Minimum Height 54"',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-incredible-hulk-coaster-universal-dusk-a.jpg'
  },
  {
    ride: 'The Amazing Adventures of Spider-Man',
    ride_type: 'Motion Simulation, 3-D / 4-D Experience',
    requirements:
      'Minimum Height 40”. Under 48” (122 cm) Requires Supervising Companion',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-amazing-adventures-of-spiderman-ride-screen-a.jpg'
  },
  {
    ride: 'Doctor Dooms Fearfall',
    ride_type: 'Thrill',
    requirements: 'Minimum Height 52”',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-dr-dooms-fearfall-towers-a.jpg'
  },
  {
    ride: 'Storm Force Accelatron',
    ride_type: 'Kid friendly',
    requirements: 'No Minimum Height',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-storm-force-accelatron-front-a.jpg'
  },
  {
    ride: 'Kingpins Arcade',
    ride_type: 'Arcade, Kid Friendly',
    requirements: 'Kid Friendly',
    image:
      'https://cache.undercovertourist.com/blog/2022/04/0422-superhero-universal-orlando-kingpin-arcade.jpg'
  }
]
const Restaurant = [
  {
    name: 'Marvel Character Dinner',
    type: 'Dinner',
    about:
      'Team-up with your favorite Super Heroes after a day of adventures and defeat the most formidable foe of all—your empty stomach. You’re dining at Cafe 4 when in walk Captain America, Spider-Man, Wolverine, Storm and Rogue. This is no ordinary dinner. This is an experience that no true believer can miss.',
    reservation: 'needed',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-marvel-character-dinner-spiderman-family-a.jpg'
  },
  {
    name: 'Cafe 4',
    type: 'Quick Service',
    about:
      'Tell your hunger, "It is clobberin time!" Atop of the Baxter Building, the elite super group the Fantastic Four meets in their prominent headquarters and high-tech laboratory. And on the infamous buildings ground floor, you will find a convenient Italian eatery serving pizza, spaghetti and meatballs, fettuccini, meatball subs, and chicken Caesar salads.',
    reservation: 'not needed',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-cafe-4-universal-inside-a.jpg'
  },
  {
    name: 'Captain America Diner',
    type: 'Quick Service',
    about:
      'Avengers Assemble! Superhuman hunger does not stand a chance at this eye-catching eatery. You have found the place where the heroes hang out, and you will see them all over the walls of this star-spangled diner. Enjoy a classic and delicious menu of cheeseburgers, chicken sandwiches, chicken fingers, crispy chicken salads, and more.',
    reservation: 'not needed',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-captain-america-diner-ceiling-a.jpg'
  },
  {
    name: 'Chill Ice Cream',
    type: 'Ice cream, milkshakes',
    about:
      'Even Super Heroes need a snack break—especially Iceman, whose frozen facade stands solid outside this cool walk-up counter. Here, Häagen-Dazs® ice cream is proudly served up just the way you like. Scoop up a sundae, milkshake, ice cream float, or freshly made waffle cone before heading on to your next adventure.',
    reservation: 'not needed',
    image:
      'https://www.universalorlando.com/webdata/k2/en/us/files/Images/gds/ioa-chill-ice-cream-universal-iceman-sign-a.jpg'
  },
  {
    name: '',
    type: '',
    about: '',
    image: ''
  }
]
