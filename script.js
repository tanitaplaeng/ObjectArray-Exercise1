let characters = [
    {name: 'Daisy', health: 100},
    {name: 'Forrest', health: 100},
    {name: 'Jack', health: 100}
];

// console.log(characters[1].name, characters[1].health);

const opponent = { 
    name: 'Barb',
    health: 175,
}

function printNames() {
    console.log(`Name: ${characters[0].name} Health: ${characters[0].health}`)
    console.log(`Name: ${characters[1].name} Health: ${characters[1].health}`)
    console.log(`Name: ${characters[2].name} Health: ${characters[2].health}`)
    console.log(`Name: ${opponent.name} Health: ${opponent.health}`)
}

printNames();

let pickCharacters = prompt("Ready to begin? Pick your character: 1, 2 or 3!");

if (pickCharacters === "1") { 
    alert(`You are ${characters[0].name} with ${characters[0].health} health!`);
    alert(`Your opponent is ${opponent.name} with ${opponent.health} health`);
    while (true) { 
        characters[0].health - 5;
        opponent.health - 5;
        console.log(`${characters[0].health} and ${opponent.health}`);
        break;
    }
    // for (initial expression; condition; increment expression) {
        // loop attacks on character and opponent
        // break
   // }
}
// } else if (pickCharacters === "2") { 
//     alert(`You are ${characters[1].name} with ${characters[1].health} health!`);
//     alert(`Your opponent is ${opponent.name} with ${opponent.health}`);
// } else if (pickCharacters === "3") {
//     alert(`You are ${characters[2].name} with ${characters[2].health} health!`);
//     alert(`Your opponent is ${opponent.name} with ${opponent.health}`);
// } else { 
//     alert(`Uhhh...`);
// }


// while (play === "1") { 
//     alert(`You are ${characters[0].name} with ${characters[0].health} health!`);
//     alert(`Your opponent is ${opponent.name} with ${opponent.health}`);
//     if (characters[0].health <= 0) { 
//         alert(`You have been defeated by ${opponent.name}`);
//         break;
//     }
// } 



// let objectArray = [
//     {id: 1, name: 'something'},
//     {id: 2, name: 'something else'}
// ];

// let object1 = { 
//     id: 1, 
//     name: 'something'
// }

// let object2 = { 
//     id: 2,
//     name: 'something'
// }

// let objectArray = [object1, object2]