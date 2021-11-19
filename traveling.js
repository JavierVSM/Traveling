let tigger = { character: "Tigger" };
let pooh = { character: "Winnie the Pooh" };
let piglet = { character: "Piglet"};
let kid = { character: "Christopher Robin" };
let bees = { character: "Bees" };
let rabbit = { character: "Rabbit" };
let owl = { character: "Owl" };
let eeyore = { character: "Eeyore" };
let heffalumps = { character: "Heffalump" };
let kanga = { character: "Kanga" };
let gopher = { character: "Gopher" };


tigger.north = pooh; 

pooh.north = kid; 
pooh.south = tigger; 
pooh.west = piglet; 
pooh.east = bees;

piglet.north = owl; 
piglet.east = pooh;

bees.north = rabbit; 
bees.west = pooh; 

rabbit.south = bees; 
rabbit.west = kid; 
rabbit.east = gopher;

gopher.west = rabbit; 

kid.north = kanga; 
kid.south = pooh; 
kid.west = owl; 
kid.east = rabbit;

owl.south = piglet; 
owl.east = kid;

kanga.north = eeyore; 
kanga.south = kid; 

eeyore.south=kanga;
eeyore.east=heffalumps;

heffalumps.west=eeyore;

let player = {
    location: tigger
};

function move (dir) {
    player.location=player.location[dir];
    if (player.location[dir]  === undefined){
      console.log("You may not go that way!");   
    }
    else{
        console.log(`You are now in ${player.location.character}'s house.`);
    }
}

console.log ("Welcome to the game");
