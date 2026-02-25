const cut_scenes = {
tchotch_naughts:{
text:`The Bowery, Tchotch-Naughts Bodega, 12:34pm,
You stumble down the dark stairway sporting yesterdays clothes and last weeks odor. You’re not sure if it’s broken glass, potato chips or bone but the stairs crunch and crackle under foot. The only thing guiding you through the darkness is a dim light glowing at the end of the stairs.

Walking into the bodega below you see the man that you'd detest if you were still capable of emotional response, the landlord, you owe him the rent.

There he is, John F Kennedy, a reconstructed abomination of the 35th President of the United States. You’re not sure if he is the real JFK, but you don't do your job at work so why start on the off hours?

He's yelling at a film of Apollo 11 coverage while cutting Macy’s security tags off of a haul of Hawaiian shirts and putting them on the sales rack. The mechanical jaw the hack surgeons gave him needs more oil. If this store didn't sell Schaefer it'd be a complete wash.

Just give him the rent and don't look at Armstrong on the screen, you have no energy for that again.`},
apartment:{
text:`
Your apartment. You sit up on your bed with a comforter that used to be blue, and sheets that used to be white. A dim fluorescent light bulb hanging from it's cord oscillates in the middle of the room. A goldfish tank festers in the corner, that's a new smell. Just another damn day.`},
street_intro:{
text:`New York City, The Bowery, 1972. 9pm
There you are piss drunk, shuffling down the street on a Tuesday parting the rats, cockroaches, and old newspapers like Moses parting the red sea, that is if you count the people you're leading as the almost finished 18 pack of Schaefer in your hand and a lingering question of if you should chase the last one down with a bullet.
But there's no time to finally finish something, someone stops you in your path flashing a switchblade demanding money. You pause.`},
street_intro_full:{
text:`New York City, The Bowery, 1972. 9pm
There you are piss drunk, shuffling down the street on a Tuesday parting the rats, cockroaches, and old newspapers like Moses parting the red sea, that is if you count the people you're leading as the almost finished 18 pack of Schaefer in your hand and a lingering question of if you should chase the last one down with a bullet.
But there's no time to finally finish something, someone stops you in your path flashing a switchblade demanding money. You pause.

As you finish smashing the last bottle over the man's head everything comes back into focus, Ray's is open for another hour. After finishing 2 slices and cleaning the blood off in the bathroom you decide to start the shuffle back home. There's so much to do tomorrow, and you don't want anything to do with it.

You walk up the stairs to your apartment and go to bed, hopefully the bats are already sleeping.`},
};

const intro_screen =
`
  ____       _            _                 ____             _
 |  _ \\  ___| |_ ___  ___| |_(_)_   _____  | __ ) _   _  ___| | __
 | | | |/ _ \\ __/ _ \\/ __| __| \\ \\ / / _ \\ |  _ \\| | | |/ __| |/ /
 | |_| |  __/ ||  __/ (__| |_| |\\ V /  __/ | |_) | |_| | (__|   <
 |____/ \\___|\\__\\___|\\___|\\__|_| \\_/ \\___| |____/ \\__,_|\\___|_|\\_\\

                     ____
                    |  _ \\ __ _ ___ ___  ___ _ __
                    | |_) / _\` / __/ __|/ _ \\ '__|
                    |  __/ (_| \\__ \\__ \\  __/ |
                    |_|   \\__,_|___/___/\\___|_|


          ,   /\\   ,             |=|                     .-.
         / '-'  '-' \\           /   \\                   /  /
        |    NYPD    |         /     \\                 /. /
        \\    .--.    /        /       \\       )       /c\\/
         |  (9th )  |        |         |       (     /'\\/
         \\   '--'   /        | _______ |      )     /  /
          '--.  .--'         | Colt 45 |     (     /  /
              \\/             | ------- |      )   /  /
                             |  40 Oz  |       ( /. /
                             |         |       .\`.'.
                             |         |        \`'\`\`
                             |         |
                             |;;;;;;;;;|
`;

/*
 * Characters
 * */
const characters = [
  {
    name: "switchblade man",
    roomId: 'street',
    desc: 'Shlub with a shaky hand and a shakier grasp of whats healthy',
  },
  {
    name:'Bear',
    roomId:"hotel lobby",
    desc:`Trust fund animal. Yeah he sucks but his net worth is absurd. Problem is he wouldn't stop calling at dinner. Really his existance was the issue. If you're thinking one shouldn't speak ill of the dead, you clearly didn't know Bear. Also he's starting to smell.`
  },
  {
    name:'The Tire Hooker',
    roomId:"apartment window",
    desc:`Hooker eating a tire, looks like a Perelli.`
  },
  {
    name: 'Six Dollar Man',
    roomId: 'hotel 2A',
    desc:`Randy Savage except with a viciously failed wrestling career following a failed marriage. Weakness are his ex wife Sharron, alimony, and the IRS.`
    /*
     *
	NULL,'{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "I ain|t got time for this brother, you seen Sharron", "nextOpts" : []}}}', 0);
     * */
  },
  {
    name:'Old Lady',
    roomId:'hotel 2B',
    desc:`There is a significant chance that she will be eaten by her herds of cats.`
    /*
     *
	NULL,'{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "You want the old foot in the boot?", "nextOpts" : []}}}', 0);
     * */
  },
  {
    name:'Steve The Canadian',
    roomId:'hotel 2C',
    desc:`6'6\`\` caucasian male, claims to be from the praries, wherever the hell that is. Could be anywhere as you've never looked at a map. If you cared you be asking why he was carrying a Bowie knife and asking what we were planning on doing with the victim's \`hide\``
    /*'{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "Real shit hole ya got here bud. Worse mess than when my cousin Tom got in a tiffy with a moose in heat. If you need any help come talk to me in 1A, I`ll have a cold Molson waiting for ya.", "nextOpts" : []}}}', '{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "Oh hey there bud, ya want a Molson?", "nextOpts" : []}}}', 0);
     *
     * */
  },
  {
    name:'JFK',
    roomId:'bodega',
    desc:`35th president of the United State of America, you know the guy. The way they reattached the bits of his head they managed to scrape off Jackie were unfortunately put together like a muppet. He now runs Tchotch Naught, a novelty store in north Any Town, USA. He's a moon landing 'truther' just like Charlie Rose... the schmuck.`
/*
	'{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "The moon landing was STTTAAAGGGEEEDDD", "nextOpts" : ["opt2"]}, "opt2" : {"ques" : "Who staged it?", "resp" : "Armstrong`s a fraaaauuuddd", "nextOpts" : []}}}',

	'{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "The flag was waving, the flag was WAVING!", "nextOpts" : []}}}', 0);
  */
  },
  {
    name:'Robot',
    roomId:'hotle lobby',
    desc:`Early Yahoo AI experiment. After learning everything it knows from the combined knowledge of Geocities, Myspace, tomagachis, and The Charlie Rose Show... the putz, he has been left unplugged and abandoned. The net of his knowledge has left him with the operating IQ of a mid 2000's Crunk rapper. Due a Nas CD left in his drive when unplugged he claims to understand 'the struggle' and knows 'the Bridge'. Thinks OE in plastic is bullshit, coincidentaly Charlie Roses favorite beverage, the narc.`
/*
	NULL,'{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "404: Robot not found", "nextOpts" : []}}}', 0);
  */
  },
  {
    name:'Joe',
    roomId:'hotel 7A',
    desc:`Bear's AA sponsor, had to constantly deal with bear`,
/*
	NULL, '{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "I|m not gonna say I|m glad hes dead, but we haven|t had to hear anymore Reel Big Fish...", "nextOpts" : []}}}', 0);
  */
  },
  {
    name:'Veterinarian',
    roomId:'hotel lobby',
    desc:`Battle fatigued veterinarian. He enjoys putting down animals a bit too much. 'You ever seen what piano wire will do to a pomeranians neck?`,
/*
	NULL,'{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "Well, lost another patient", "nextOpts" : []}}}', 0);
  */
  },
  {
    name:'Derrick The Salesman',
    roomId:'hotel 4A',
    desc:`Don't buy a car from this guy`,
      /*
       *
	NULL,'{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "Heeyyy muchacho, wanna buy a Pontiac?", "nextOpts" : []}}}', 0);
       * */
  },

  {
    name:'Guy Fieri',
    roomId:'hotel 3A',
    desc:`Oh dear god no`
    /*
     *
	NULL,'{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "Welcome to Flavortown", "nextOpts" : []}}}', 0);
     * */
  },
  {
    name:'Hammer Guy',
    roomId:'Parking Lot',
    desc:`A complete animal by moral standards, but hey, there's a lot to this guy. He hangs out in fornt of the Home Depot waiting for people to hire him. He's a real ladies man in his thickly motor oil permeated suede duster and his burnt-out '82 Pontic Fiero. Denied access to all local fast food restaurant bathrooms.`
    /*
	'{"startOpts" : ["opt1"], "options" : {"opt1" : {"ques" : null, "resp" : "You seen my keys? My cars", "nextOpts" : []}}}', 0);
     * */
  },
];


/**
 * objects, list of none critical objects
 * **/
const objects = {
  "Beer Bottle": {
    name: ["beer", "bottle", "beer bottle"],
    desc: 'A full case of Schaefer bottles, three left.',
    isTakeable: true
    //onUse: () => {}
  },
  "Bears Corpse": {
    name: ["Bear's Corpse", "body", "bear", "corpse"],
    desc: `Trust fund animal. Yeah he sucks but his net worth is absurd. Problem is he wouldn't stop calling at dinner. Really his existance was the issue. If you're thinking one shouldn't speak ill of the dead, you clearly didn't know Bear. Also he's starting to smell.`,
    onUse: () => {
      println("Better leave that for someone else actually");
    },
    onInspect: () => {
      println("A cold stiff corpse of a poorly groomed Kodiak Grizzly");
    }
  },
  "Toilet":{
    name:["toilet", "throne", "john"],
    desc:`It's just a flowery plush arm chair with the seat cut out strategically placed over an empty can of Beefarino`,
    onUse: () => {
      println("You heave the can of beefarino out the window, no one notices, not even the alley cats or the hooker eating a tire");
    },
    inspect: "I guess it's a toilet"
  },
  "Magazine":{
    name:"Magazine",
    desc:`Dog eared copy of Better Homes and Gardens, the June, 1964 edition`,
    inspect:`You read the magazine as you have 700 times before. Maybe one day you'll try and make some of these improvements, but there you are with a can as your toilet.`
  },
  "Phone":{
    name: "Phone",
    desc:`The cord is hopelessly tangled, the reciever is partially clogged with beefarino. If anyone ever wanted to talk to you you'd have to get a new one. Of course they don't so here it is.`,
    inspect:`Your shitty beige couch`,
    use:`As you throw yourself gracelessly onto the greasy sofa what looks like a cockroach exodus complete with a cockroach Moses leading his people out of the sofa through the parting of the couch cushions begins. You have a quick nap in your natural habitat.`
/*
insert into objects values(0,3, 'Phone', "", 'Your home phone, you have a message','Messages', "Check your messages, do something for once.", "It's the Chief. 'Passer, there's been a murder down the street from you at the Kodiak Apartments. It sounds grizzly, go check it out. I want a report on my desk tomorrow, and it had better be good you layabout.'",203, 0);
*/
  },
  "Couch":{
    name:"Couch",
    desc:`It looks like it used to be suade before the layers of hair grease and cheap whiskey have left it in a state reminiscent of your soul.`,
    inspect:"Your shitty beige couch"
  }
};

const rooms = [
  {
    id:'start',
    name:'Filthy Street',
    desc: cut_scenes.street_intro_full.text + "\n type go **HOME** to head into your dump",
    exits: [
      {
        dir:'home',
        id:'home'
      }
    ]
  },
  {
    id:'home',
    name:'Home',
    desc:`Your apartment. You sit up on your bed with a comforter that used to be blue, and sheets that used to be white. A dim fluorescent light bulb hanging from it's cord oscillates in the middle of the room. A goldfish tank festers in the corner, that's a new smell. Just another damn day.`,
    items: [objects["Couch"], objects["Phone"]],
    exits: [
      {
        dir:'bathroom',
        id:'bathroom'
      },
      {
        dir:'kitchen',
        id:'kitchen'
      },
      {
        dir:'bed',
        id:'bed'
      },
      {
        dir:["apartment window", "window"],
        id:"apartment window"
      }
    ],
  },
  {
    id:'bathroom',
    name:'\"Bathroom\"',
    desc:`You shuffle to the corner of the room. Technically it's a bathroom, minus the bath... and the room. It's just a flowery plush arm chair with the seat cut out strategically placed over an empty can of Beefarino. There's a stack of Better Homes and Gardens magazines next to the can, what mess.`,
    items:[objects["toilet"], objects["magazine"]]
  },
  {
    id:'kitchen',
    name:'Kitchen',
    desc:`The kitchen, oh boy the kitchen. Stacks of Beefarino and a rusty can opener. It used to be your favorite spot to watch people on the street pass by, but the window was bricked over by the new expansion of the fancy feast cannery. The brick fails to dampen the smell`,
    exits: [
      {
        dir:'bathroom',
        id:'bathroom'
      },
      {
        dir:'kitchen',
        id:'kitchen'
      },
      {
        dir:'bed',
        id:'bed'
      },
      {
        dir:["apartment window", "window"],
        id:"apartment window"
      }
    ],
  },
  {
    id:'apartment window',
    name:['Apartment Window','window'],
    desc:`As you survey your neighborhood you realize it's the same as always. A sickening red glow from the Hustler sign douses the streets which are littered with emaciated alley cats drawn to the cannery. A hooker is eating a tire.`,
    exits: [
      {
        dir:'bathroom',
        id:'bathroom'
      },
      {
        dir:'kitchen',
        id:'kitchen'
      },
      {
        dir:'bed',
        id:'bed'
      },
      {
        dir:["apartment window", "window"],
        id:"apartment window"
      }
    ],
  },
  {
    id: 'rays',
    name: 'Ray\'s Pizza',
    desc: `The rats are the best patrons, it\'s probably a front. At least its open.`,
    exits: [
      {
        dir: 'south',
        id: 'start'
      },
    ],
  },
  {
    id: 'street',
    name: 'Filthy Street', // Displayed each time the player enters the room.
    desc: cut_scenes.street_intro.text, // Displayed when the player first enters the room.
    items: [
      {
        name: ["beer", "bottle", "beer bottle"],
        desc: 'A full case of Schaefer bottles, three left.',
        isTakeable: true,
        onUse: () => {
          // Remove the block on the room's only exit.
          const room = getRoom('start');
          const character = getCharacter("switchblade man");
          character.room = "";
          room.desc = "Same filthy street, last weeks \"Looking For Love\" section blows over the body to your left. Broken glass and the smell of cheap beer surround you. Your hands are sticky. You're out of beer.";
          const exit = getExit('rays', room.exits);

          if (exit.block) {
            delete exit.block;
            println(`As you finish smashing the bottle over the man's head everything comes back into focus, Ray's is open for another hour.`);
          } else {
            println(`Has that Milwaukee rust flavor you know so well`);
          }
        },
      },
      {
        name: ['Ray\'s Pizza Entrance', 'pizza', 'rays', 'restaurant'],
        desc: `Ray's Pizza, they're open for another hour`,
      },
    ],
    exits: [
      {
        dir: 'rays', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
        id: 'rays',
        block: `This guys interfering`,
      },
    ],
  },
];

const game_disk = {
  intro_screen: intro_screen,
  roomId: 'start', // Set this to the ID of the room you want the player to start in.
  characters: characters,
  rooms: rooms,
};
// global properties, assigned with let for easy overriding by the user
let disk;

// store user input history
let inputs = [''];
let inputsPos = 0;

// define list style
let bullet = '•';

// reference to the input element
let input = document.querySelector('#input');

// add any default values to the disk
// disk -> disk
let init = (disk) => {
  const initializedDisk = Object.assign({}, disk);
  initializedDisk.rooms = disk.rooms.map((room) => {
    // number of times a room has been visited
    room.visits = 0;
    return room;
  });

  if (!initializedDisk.inventory) {
    initializedDisk.inventory = [];
  }

  if (!initializedDisk.characters) {
    initializedDisk.characters = [];
  }

  initializedDisk.characters = initializedDisk.characters.map(char => {
    // player's conversation history with this character
    char.chatLog = [];
    return char;
  });

  return initializedDisk;
};

// register listeners for input events
let setup = () => {
  input.addEventListener('keypress', (e) => {
    const ENTER = 13;

    if (e.keyCode === ENTER) {
      applyInput();
    }
  });

  input.addEventListener('keydown', (e) => {
    input.focus();

    const UP = 38;
    const DOWN = 40;
    const TAB = 9;

    if (e.keyCode === UP) {
      navigateHistory('prev');
    } else if (e.keyCode === DOWN) {
      navigateHistory('next');
    } else if (e.keyCode === TAB) {
      e.stopPropagation();
      e.preventDefault()
      autocomplete();
    }
  });

  input.addEventListener('focusout', () => {
    input.focus({preventScroll: true});
  });
};

// convert the disk to JSON and store it
// (optionally accepts a name for the save)
let save = (name) => {
  const save = JSON.stringify(disk, (key, value) => typeof value === 'function' ? value.toString() : value);
  localStorage.setItem(name, save);
  const line = name.length ? `Game saved as "${name}".` : `Game saved.`;
  println(line);
};

// restore the disk from storage
// (optionally accepts a name for the save)
let load = (name) => {
  const save = localStorage.getItem(name);

  if (!save) {
    println(`Save file not found.`);
    return;
  }

  disk = JSON.parse(save, (key, value) => {
    try {
      return eval(value);
    } catch (error) {
      return value;
    }
  });

  const line = name.length ? `Game "${name}" was loaded.` : `Game loaded.`;
  println(line);
  enterRoom(disk.roomId);
};

// list player inventory
let inv = () => {
  const items = disk.inventory.filter(item => !item.isHidden);

  if (!items.length) {
    println(`You don't have any items in your inventory.`);
    return;
  }

  println(`You have the following items in your inventory:`);
  items.forEach(item => {
    println(`${bullet} ${getName(item.name)}`);
  });
};

// show room description
let look = () => {
  const room = getRoom(disk.roomId);

  if (typeof room.onLook === 'function') {
    room.onLook({disk, println});
  }

  println(room.desc)
};

// look in the passed way
// string -> nothing
let lookThusly = (str) => println(`You look ${str}.`);

// look at the passed item or character
// array -> nothing
let lookAt = (args) => {
  const [_, name] = args;
  const item = getItemInInventory(name) || getItemInRoom(name, disk.roomId);

  if (item) {
    // Look at an item.
    if (item.desc) {
      println(item.desc);
    } else {
      println(`You don\'t notice anything remarkable about it.`);
    }

    if (typeof(item.onLook) === 'function') {
      item.onLook({disk, println, getRoom, enterRoom, item});
    }
  } else {
    const character = getCharacter(name, getCharactersInRoom(disk.roomId));
    if (character) {
      // Look at a character.
      if (character.desc) {
        println(character.desc);
      } else {
        println(`You don't notice anything remarkable about them.`);
      }

      if (typeof(character.onLook) === 'function') {
        character.onLook({disk, println, getRoom, enterRoom, item});
      }
    } else {
      println(`You don't see any such thing.`);
    }
  }
};

// list available exits
let go = () => {
  const room = getRoom(disk.roomId);
  const exits = room.exits.filter(exit => !exit.isHidden);

  if (!exits) {
    println(`There's nowhere to go.`);
    return;
  }

  println(`Where would you like to go? Available directions are:`);
  exits.forEach((exit) => {
    const rm = getRoom(exit.id);

    if (!rm) {
      return;
    }

    const dir = getName(exit.dir).toUpperCase();
    // include room name if player has been there before
    const directionName = rm.visits > 0
      ? `${dir} - ${rm.name}`
      : dir

    println(`${bullet} ${directionName}`);
  });
};

// find the exit with the passed direction in the given list
// string, array -> exit
let getExit = (dir, exits) => exits.find(exit =>
  Array.isArray(exit.dir)
    ? exit.dir.includes(dir)
    : exit.dir === dir
);

// go the passed direction
// string -> nothing
let goDir = (dir) => {
  const room = getRoom(disk.roomId);
  const exits = room.exits;

  if (!exits) {
    println(`There's nowhere to go.`);
    return;
  }

  const nextRoom = getExit(dir, exits);

  if (!nextRoom) {
    println(`There is no exit in that direction.`);
    return;
  }

  if (nextRoom.block) {
    println(nextRoom.block);
    return;
  }

  enterRoom(nextRoom.id);
};

// shortcuts for cardinal directions
let n = () => goDir('north');
let s = () => goDir('south');
let e = () => goDir('east');
let w = () => goDir('west');
let ne = () => goDir('northeast');
let se = () => goDir('southeast');
let nw = () => goDir('northwest');
let sw = () => goDir('southwest');

// if there is one character in the room, engage that character in conversation
// otherwise, list characters in the room
let talk = () => {
  const characters = getCharactersInRoom(disk.roomId);

  // assume players wants to talk to the only character in the room
  if (characters.length === 1) {
    talkToOrAboutX('to', getName(characters[0].name));
    return;
  }

  // list characters in the room
  println(`You can talk TO someone or ABOUT some topic.`);
  chars();
};

// speak to someone or about some topic
// string, string -> nothing
let talkToOrAboutX = (preposition, x) => {
  const room = getRoom(disk.roomId);

  if (preposition !== 'to' && preposition !== 'about') {
    println(`You can talk TO someone or ABOUT some topic.`);
    return;
  }

  const character =
    preposition === 'to' && getCharacter(x, getCharactersInRoom(room.id))
      ? getCharacter(x, getCharactersInRoom(room.id))
      : disk.conversant;
  let topics;

  // give the player a list of topics to choose from for the character
  const listTopics = () => {
    // capture reference to the current conversation
    disk.conversation = topics;

    if (topics.length) {
      const availableTopics = topics.filter(topic => topicIsAvailable(character, topic));

      if (availableTopics.length) {
        println(`What would you like to discuss?`);
        availableTopics.forEach(topic => println(`${bullet} ${topic.option ? topic.option : topic.keyword.toUpperCase()}`));
        println(`${bullet} NOTHING`);
      } else {
        // if character isn't handling onTalk, let the player know they are out of topics
        if (!character.onTalk) {
          println(`You have nothing to discuss with ${getName(character.name)} at this time.`);
        }
        endConversation();
      }
    } else if (Object.keys(topics).length) {
      println(`Select a response:`);
      Object.keys(topics).forEach(topic => println(`${bullet} ${topics[topic].option}`));
    } else {
      endConversation();
    }
  };

  if (preposition === 'to') {
    if (!getCharacter(x)) {
      println(`There is no one here by that name.`);
      return;
    }

    if (!getCharacter(getName(x), getCharactersInRoom(room.id))) {
      println(`There is no one here by that name.`);
      return;
    }

    if (!character.topics) {
      println(`You have nothing to discuss with ${getName(character.name)} at this time.`);
      return;
    }

    if (typeof(character.topics) === 'string') {
      println(character.topics);
      return;
    }

    if (typeof(character.onTalk) === 'function') {
      character.onTalk({disk, println, getRoom, enterRoom, room, character});
    }

    topics = typeof character.topics === 'function'
      ? character.topics({println, room})
      : character.topics;

    if (!topics.length && !Object.keys(topics).length) {
      println(`You have nothing to discuss with ${getName(character.name)} at this time.`);
      return;
    }

    // initialize the chat log if there isn't one yet
    character.chatLog = character.chatLog || [];
    disk.conversant = character;
    listTopics(topics);
  } else if (preposition === 'about') {
    if (!disk.conversant) {
      println(`You need to be in a conversation to talk about something.`);
      return;
    }
    const character = eval(disk.conversant);
    if (getCharactersInRoom(room.id).includes(disk.conversant)) {
      const response = x.toLowerCase();
      if (response === 'nothing') {
        endConversation();
        println(`You end the conversation.`);
      } else if (disk.conversation && disk.conversation[response]) {
        disk.conversation[response].onSelected();
      } else {
        const topic = disk.conversation.length && conversationIncludesTopic(disk.conversation, response);
        const isAvailable = topic && topicIsAvailable(character, topic);
        if (isAvailable) {
          if (topic.line) {
            println(topic.line);
          }
          if (topic.onSelected) {
            topic.onSelected({disk, println, getRoom, enterRoom, room, character});
          }
          // add the topic to the log
          character.chatLog.push(getKeywordFromTopic(topic));
        } else {
          println(`You talk about ${removePunctuation(x)}.`);
          println(`Type the capitalized KEYWORD to select a topic.`);
        }
      }

      // continue the conversation.
      if (disk.conversation) {
        topics = typeof character.topics === 'function'
          ? character.topics({println, room})
          : character.topics;
        listTopics(character);
      }
    } else {
      println(`That person is no longer available for conversation.`);
      disk.conversant = undefined;
      disk.conversation = undefined;
    }
  }
};

// list takeable items in room
let take = () => {
  const room = getRoom(disk.roomId);
  const items = (room.items || []).filter(item => item.isTakeable && !item.isHidden);

  if (!items.length) {
    println(`There's nothing to take.`);
    return;
  }

  println(`The following items can be taken:`);
  items.forEach(item => println(`${bullet} ${getName(item.name)}`));
};

// take the item with the given name
// string -> nothing
let takeItem = (itemName) => {
  const room = getRoom(disk.roomId);
  const findItem = item => objectHasName(item, itemName);
  let itemIndex = room.items && room.items.findIndex(findItem);

  if (typeof itemIndex === 'number' && itemIndex > -1) {
    const item = room.items[itemIndex];
    if (item.isTakeable) {
      disk.inventory.push(item);
      room.items.splice(itemIndex, 1);

      if (typeof item.onTake === 'function') {
        item.onTake({disk, println, room, getRoom, enterRoom, item});
      } else {
        println(`You took the ${getName(item.name)}.`);
      }
    } else {
      if (typeof item.onTake === 'function') {
        item.onTake({disk, println, room, getRoom, enterRoom, item});
      } else {
        println(item.block || `You can't take that.`);
      }
    }
  } else {
    itemIndex = disk.inventory.findIndex(findItem);
    if (typeof itemIndex === 'number' && itemIndex > -1) {
      println(`You already have that.`);
    } else {
      println(`You don't see any such thing.`);
    }
  }
};

// list useable items in room and inventory
let use = () => {
  const room = getRoom(disk.roomId);

  const useableItems = (room.items || [])
    .concat(disk.inventory)
    .filter(item => item.onUse && !item.isHidden);

  if (!useableItems.length) {
    println(`There's nothing to use.`);
    return;
  }

  println(`The following items can be used:`);
  useableItems.forEach((item) => {
    println(`${bullet} ${getName(item.name)}`)
  });
};

// use the item with the given name
// string -> nothing
let useItem = (itemName) => {
  const item = getItemInInventory(itemName) || getItemInRoom(itemName, disk.roomId);

  if (!item) {
    println(`You don't have that.`);
    return;
  }

  if (item.use) {
    console.warn(`Warning: The "use" property for Items has been renamed to "onUse" and support for "use" has been deprecated in text-engine 2.0. Please update your disk, renaming any "use" methods to be called "onUse" instead.`);

    item.onUse = item.use;
  }

  if (!item.onUse) {
    println(`That item doesn't have a use.`);
    return;
  }

  // use item and give it a reference to the game
  if (typeof item.onUse === 'string') {
    const use = eval(item.onUse);
    use({disk, println, getRoom, enterRoom, item});
  } else if (typeof item.onUse === 'function') {
    item.onUse({disk, println, getRoom, enterRoom, item});
  }
};

// list items in room
let items = () => {
  const room = getRoom(disk.roomId);
  const items = (room.items || []).filter(item => !item.isHidden);

  if (!items.length) {
    println(`There's nothing here.`);
    return;
  }

  println(`You see the following:`);
  items
    .forEach(item => println(`${bullet} ${getName(item.name)}`));
}

// list characters in room
let chars = () => {
  const room = getRoom(disk.roomId);
  const chars = getCharactersInRoom(room.id).filter(char => !char.isHidden)

  if (!chars.length) {
    println(`There's no one here.`);
    return;
  }

  println(`You see the following:`);
  chars
    .forEach(char => println(`${bullet} ${getName(char.name)}`));
};

// display help menu
let help = () => {
  const instructions = `The following commands are available:
    LOOK:   'look at key'
    TAKE:   'take book'
    GO:     'go north'
    USE:    'use door'
    TALK:   'talk to mary'
    ITEMS:  list items in the room
    INV:    list inventory items
    SAVE:   save the current game
    LOAD:   load the last saved game
    HELP:   this help menu
  `;
  println(instructions);
};

// handle say command with no args
let say = () => println([`Say what?`, `You don't say.`]);

// say the passed string
// string -> nothing
let sayString = (str) => println(`You say ${removePunctuation(str)}.`);

// retrieve user input (remove whitespace at beginning or end)
// nothing -> string
let getInput = () => input.value.trim();

// objects with methods for handling commands
// the array should be ordered by increasing number of accepted parameters
// e.g. index 0 means no parameters ("help"), index 1 means 1 parameter ("go north"), etc.
// the methods should be named after the command (the first argument, e.g. "help" or "go")
// any command accepting multiple parameters should take in a single array of parameters
// if the user has entered more arguments than the highest number you've defined here, we'll use the last set
let commands = [
  // no arguments (e.g. "help", "chars", "inv")
  {
    inv,
    i: inv, // shortcut for inventory
    look,
    l: look, // shortcut for look
    go,
    n,
    s,
    e,
    w,
    ne,
    se,
    sw,
    nw,
    talk,
    t: talk, // shortcut for talk
    take,
    get: take,
    items,
    use,
    chars,
    help,
    say,
    save,
    load,
    restore: load,
  },
  // one argument (e.g. "go north", "take book")
  {
    look: lookThusly,
    go: goDir,
    take: takeItem,
    get: takeItem,
    use: useItem,
    say: sayString,
    save: x => save(x),
    load: x => load(x),
    restore: x => load(x),
    x: x => lookAt([null, x]), // IF standard shortcut for look at
    t: x => talkToOrAboutX('to', x), // IF standard shortcut for talk
  },
  // two+ arguments (e.g. "look at key", "talk to mary")
  {
    look: lookAt,
    say(args) {
      const str = args.reduce((cur, acc) => cur + ' ' + acc, '');
      sayString(str);
    },
    talk: args => talkToOrAboutX(args[0], args[1]),
    x: args => lookAt([null, ...args]),
  },
];

// process user input & update game state (bulk of the engine)
// accepts optional string input; otherwise grabs it from the input element
let applyInput = (input) => {
  input = input || getInput();
  inputs.push(input);
  inputsPos = inputs.length;
  println(`> ${input}`);

  const val = input.toLowerCase();
  setInput(''); // reset input field

  const exec = (cmd, arg) => {
    if (cmd) {
      cmd(arg);
    } else if (disk.conversation) {
      println(`Type the capitalized KEYWORD to select a topic.`);
    } else {
      println(`Sorry, I didn't understand your input. For a list of available commands, type HELP.`);
    }
  };

  let args = val.split(' ')

  // remove articles (except for the say command, which prints back what the user said)
  if (args[0] !== 'say') {
    args = args.filter(arg => arg !== 'a' && arg !== 'an' && arg != 'the');
  }

  const [command, ...arguments] = args;
  const room = getRoom(disk.roomId);

  if (arguments.length === 1) {
    exec(commands[1][command], arguments[0]);
  } else if (command === 'take' && arguments.length) {
    // support for taking items with spaces in the names
    // (just tries to match on the first word)
    takeItem(arguments[0]);
  } else if (command === 'use' && arguments.length) {
    // support for using items with spaces in the names
    // (just tries to match on the first word)
    useItem(arguments[0]);
  } else if (arguments.length >= commands.length) {
    exec(commands[commands.length - 1][command], arguments);
  } else if (room.exits && getExit(command, room.exits)) {
    // handle shorthand direction command, e.g. "EAST" instead of "GO EAST"
    goDir(command);
  } else if (disk.conversation && (disk.conversation[command] || conversationIncludesTopic(disk.conversation, command))) {
    talkToOrAboutX('about', command);
  } else {
    exec(commands[arguments.length][command], arguments);
  }
};

// allows wrapping text in special characters so println can convert them to HTML tags
// string, string, string -> string
let addStyleTags = (str, char, tagName) => {
  let odd = true;
  while (str.includes(char)) {
    const tag = odd ? `<${tagName}>` : `</${tagName}>`;
    str = str.replace(char, tag);
    odd = !odd;
  }

  return str;
};

// overwrite user input
// string -> nothing
let setInput = (str) => {
  input.value = str;
  // on the next frame, move the cursor to the end of the line
  setTimeout(() => {
    input.selectionStart = input.selectionEnd = input.value.length;
  });
};

// render output, with optional class
// (string | array | fn -> string) -> nothing
let println = (line, className) => {
  // bail if string is null or undefined
  if (!line) {
    return;
  }

  str =
    // if this is an array of lines, pick one at random
    Array.isArray(line) ? pickOne(line)
    // if this is a method returning a string, evaluate it
    : typeof line  === 'function' ? line()
    // otherwise, line should be a string
    : line;

  const output = document.querySelector('#output');
  const newLine = document.createElement('div');

  if (className) {
    newLine.classList.add(className);
  }

  // add a class for styling prior user input
  if (line[0] === '>') {
    newLine.classList.add('user');
  }

  // support for markdown-like bold, italic, underline & strikethrough tags
  if (className !== 'img') {
    str = addStyleTags(str, '__', 'u');
    str = addStyleTags(str, '**', 'b');
    str = addStyleTags(str, '*', 'i');
    str = addStyleTags(str, '~~', 'strike');
  }

  // maintain line breaks
  while (str.includes('\n')) {
    str = str.replace('\n', '<br>');
  }

  output.appendChild(newLine).innerHTML = str;
  window.scrollTo(0, document.body.scrollHeight);
};

// predict what the user is trying to type
let autocomplete = () => {
  const room = getRoom(disk.roomId);
  const words = input.value.toLowerCase().trim().split(/\s+/);
  const wordsSansStub = words.slice(0, words.length - 1);
  const itemNames = (room.items || []).concat(disk.inventory).map(item => item.name);

  const stub = words[words.length - 1];
  let options;

  if (words.length === 1) {
    // get the list of options from the commands array
    // (exclude one-character commands from auto-completion)
    const allCommands = commands
      .reduce((acc, cur) => acc.concat(Object.keys(cur)), [])
      .filter(cmd => cmd.length > 1);

    options = [...new Set(allCommands)];
    if (disk.conversation) {
      options = Array.isArray(disk.conversation)
        ? options.concat(disk.conversation.map(getKeywordFromTopic))
        : Object.keys(disk.conversation);
      options.push('nothing');
    }
  } else if (words.length === 2) {
    const optionMap = {
      talk: ['to', 'about'],
      take: itemNames,
      use: itemNames,
      go: (room.exits || []).map(exit => exit.dir),
      look: ['at'],
    };
    options = optionMap[words[0]];
  } else if (words.length === 3) {
    const characterNames = (getCharactersInRoom(room.id) || []).map(character => character.name);
    const optionMap = {
      to: characterNames,
      at: characterNames.concat(itemNames),
    };
    options = (optionMap[words[1]] || []).flat().map(string => string.toLowerCase());
  }

  const stubRegex = new RegExp(`^${stub}`);
  const matches = (options || []).flat().filter(option => option.match(stubRegex));

  if (!matches.length) {
    return;
  }

  if (matches.length > 1) {
    const longestCommonStartingSubstring = (arr1) => {
      const arr = arr1.concat().sort();
      const a1 = arr[0];
      const a2 = arr[arr.length-1];
      const L = a1.length;
      let i = 0;
      while (i < L && a1.charAt(i) === a2.charAt(i)) {
        i++;
      }
      return a1.substring(0, i);
    };

    input.value = [...wordsSansStub,longestCommonStartingSubstring(matches)].join(' ');
  } else {
    input.value = [...wordsSansStub, matches[0]].join(' ');
  }
};

// select previously entered commands
// string -> nothing
let navigateHistory = (dir) => {
  if (dir === 'prev') {
    inputsPos--;
    if (inputsPos < 0) {
      inputsPos = 0;
    }
  } else if (dir === 'next') {
    inputsPos++;
    if (inputsPos > inputs.length) {
      inputsPos = inputs.length;
    }
  }

  setInput(inputs[inputsPos] || '');
};

// get random array element
// array -> any
let pickOne = arr => arr[Math.floor(Math.random() * arr.length)];

// return the first name if it's an array, or the only name
// string | array -> string
let getName = name => typeof name === 'object' ? name[0] : name;

// retrieve room by its ID
// string -> room
let getRoom = (id) => disk.rooms.find(room => room.id === id);

// remove punctuation marks from a string
// string -> string
let removePunctuation = str => str.replace(/[.,\/#?!$%\^&\*;:{}=\_`~()]/g,"");

// remove extra whitespace from a string
// string -> string
let removeExtraSpaces = str => str.replace(/\s{2,}/g," ");

// move the player into room with passed ID
// string -> nothing
let enterRoom = (id) => {
  const room = getRoom(id);

  if (!room) {
    println(`That exit doesn't seem to go anywhere.`);
    return;
  }

  println(room.img, 'img');

  if (room.name) {
    println(`${getName(room.name)}`, 'room-name');
  }

  if (room.visits === 0) {
    println(room.desc);
  }

  room.visits++;

  disk.roomId = id;

  if (typeof room.onEnter === 'function') {
    room.onEnter({disk, println, getRoom, enterRoom});
  }

  // reset any active conversation
  delete disk.conversation;
  delete disk.conversant;
};

// determine whether the object has the passed name
// item | character, string -> bool
let objectHasName = (obj, name) => {
  const compareNames = n => n.toLowerCase().includes(name.toLowerCase());

  return Array.isArray(obj.name)
    ? obj.name.find(compareNames)
    : compareNames(obj.name);
}

// get a list of all characters in the passed room
// string -> characters
let getCharactersInRoom = (roomId) => disk.characters.filter(c => c.roomId === roomId);

// get a character by name from a list of characters
// string, characters -> character
let getCharacter = (name, chars = disk.characters) => chars.find(char => objectHasName(char, name));

// get item by name from room with ID
// string, string -> item
let getItemInRoom = (itemName, roomId) => {
  const room = getRoom(roomId);

  return room.items && room.items.find(item => objectHasName(item, itemName))
};

// get item by name from inventory
// string -> item
let getItemInInventory = (name) => disk.inventory.find(item => objectHasName(item, name));

// retrieves a keyword from a topic
// topic -> string
let getKeywordFromTopic = (topic) => {
  if (topic.keyword) {
    return topic.keyword;
  }

  // find the keyword in the option (the word in all caps)
  const keyword = removeExtraSpaces(removePunctuation(topic.option))
    // separate words by spaces
    .split(' ')
    // find the word that is in uppercase
    // (must be at least 2 characters long)
    .find(w => w.length > 1 && w.toUpperCase() === w)
    .toLowerCase();

  return keyword;
};

// determine whether the passed conversation includes a topic with the passed keyword
// conversation, string -> boolean
let conversationIncludesTopic = (conversation, keyword) => {
  // NOTHING is always an option
  if (keyword === 'nothing') {
    return true;
  }

  if (Array.isArray(disk.conversation)) {
    return disk.conversation.find(t => getKeywordFromTopic(t) === keyword);
  }

  return disk.conversation[keyword];
};

// determine whether the passed topic is available for discussion
// character, topic -> boolean
let topicIsAvailable = (character, topic) => {
  // topic has no prerequisites, or its prerequisites have been met
  const prereqsOk = !topic.prereqs || topic.prereqs.every(keyword => character.chatLog.includes(keyword));
  // topic is not removed after read, or it hasn't been read yet
  const readOk = !topic.removeOnRead || !character.chatLog.includes(getKeywordFromTopic(topic));

  return prereqsOk && readOk;
};

// end the current conversation
let endConversation = () => {
  disk.conversant = undefined;
  disk.conversation = undefined;
};

// load the passed disk and start the game
// disk -> nothing
let loadDisk = (uninitializedDisk) => {
  // initialize the disk
  disk = init(uninitializedDisk);

  println(disk.intro_screen, "img");

  // start the game
  enterRoom(disk.roomId);

  // start listening for user input
  setup();

  // focus on the input
  input.focus();
};

// npm support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = loadDisk;
}
