const express = require('express');

const app = express();

const server = app.listen(8000);

const io = require('socket.io')(server);

// let connectedClients = 0;

io.on('connection', socket =>{
    console.log('connected');
    socket.on('new', socket=>{
        deal();
        next();
        setGoals();
        let allStacks = [
            {topStacks: stacks[0][stacks[0].length-1],
                discardStacks: discards[0][discards[0].length-1]},
            {topStacks: stacks[1][stacks[0].length-1],
                discardStacks: discards[1][discards[0].length-1]},
            {topStacks: stacks[2][stacks[0].length-1],
                discardStacks: discards[2][discards[0].length-1]}];
        let remaining = stacks[0].length;
        io.emit('gamestart', {allStacks,remaining, goalsStack, gameStatus});
    })
    socket.on('next',socket=>{
        next();
        let allStacks = [
            {topStacks: stacks[0][stacks[0].length-1],
                discardStacks: discards[0][discards[0].length-1]},
            {topStacks: stacks[1][stacks[0].length-1],
                discardStacks: discards[1][discards[0].length-1]},
            {topStacks: stacks[2][stacks[0].length-1],
                discardStacks: discards[2][discards[0].length-1]}];
        let remaining = stacks[0].length;
        io.emit('decks',{allStacks,remaining} )
    })
    socket.on('reshuffle', socket =>{
        reshuffle();
        let allStacks = [
            {topStacks: stacks[0][stacks[0].length-1],
                discardStacks: discards[0][discards[0].length-1]},
            {topStacks: stacks[1][stacks[0].length-1],
                discardStacks: discards[1][discards[0].length-1]},
            {topStacks: stacks[2][stacks[0].length-1],
                discardStacks: discards[2][discards[0].length-1]}];
        let remaining = stacks[0].length;
        io.emit('decks',{allStacks,remaining} )
    })
});

var stacks = [[],[],[]];
var discards = [[],[],[]];
var goalsStack = [];
const gameStatus= true;
var deck = [
    {number: 1,
    ability: 'park'},
    {number: 2,
    ability: 'park'},
    {number: 4,
    ability: 'park'},
    {number: 5,
    ability: 'park'},
    {number: 5,
    ability: 'park'},
    {number: 6,
    ability: 'park'},
    {number: 7,
    ability: 'park'},
    {number: 7,
    ability: 'park'},
    {number: 8,
    ability: 'park'},
    {number: 8,
    ability: 'park'},
    {number: 9,
    ability: 'park'},
    {number: 9,
    ability: 'park'},
    {number: 10,
    ability: 'park'},
    {number: 11,
    ability: 'park'},
    {number: 11,
    ability: 'park'},
    {number: 12,
    ability: 'park'},
    {number: 14,
    ability: 'park'},
    {number: 15,
    ability: 'park'},
    {number: 1,
    ability: 'stock_exchange'},
    {number: 2,
    ability: 'stock_exchange'},
    {number: 4,
    ability: 'stock_exchange'},
    {number: 5,
    ability: 'stock_exchange'},
    {number: 5,
    ability: 'stock_exchange'},
    {number: 6,
    ability: 'stock_exchange'},
    {number: 7,
    ability: 'stock_exchange'},
    {number: 7,
    ability: 'stock_exchange'},
    {number: 8,
    ability: 'stock_exchange'},
    {number: 8,
    ability: 'stock_exchange'},
    {number: 9,
    ability: 'stock_exchange'},
    {number: 9,
    ability: 'stock_exchange'},
    {number: 10,
    ability: 'stock_exchange'},
    {number: 11,
    ability: 'stock_exchange'},
    {number: 11,
    ability: 'stock_exchange'},
    {number: 12,
    ability: 'stock_exchange'},
    {number: 14,
    ability: 'stock_exchange'},
    {number: 15,
    ability: 'stock_exchange'},
    {number: 1,
    ability: 'fence'},
    {number: 2,
    ability: 'fence'},
    {number: 3,
    ability: 'fence'},
    {number: 5,
    ability: 'fence'},
    {number: 5,
    ability: 'fence'},
    {number: 6,
    ability: 'fence'},
    {number: 6,
    ability: 'fence'},
    {number: 7,
    ability: 'fence'},
    {number: 8,
    ability: 'fence'},
    {number: 8,
    ability: 'fence'},
    {number: 9,
    ability: 'fence'},
    {number: 10,
    ability: 'fence'},
    {number: 10,
    ability: 'fence'},
    {number: 11,
    ability: 'fence'},
    {number: 11,
    ability: 'fence'},
    {number: 13,
    ability: 'fence'},
    {number: 14,
    ability: 'fence'},
    {number: 15,
    ability: 'fence'},
    {number: 3,
    ability: 'pool'},
    {number: 4,
    ability: 'pool'},
    {number: 6,
    ability: 'pool'},
    {number: 7,
    ability: 'pool'},
    {number: 8,
    ability: 'pool'},
    {number: 9,
    ability: 'pool'},
    {number: 10,
    ability: 'pool'},
    {number: 12,
    ability: 'pool'},
    {number: 13,
    ability: 'pool'},
    {number: 3,
    ability: 'biz'},
    {number: 4,
    ability: 'biz'},
    {number: 6,
    ability: 'biz'},
    {number: 7,
    ability: 'biz'},
    {number: 8,
    ability: 'biz'},
    {number: 9,
    ability: 'biz'},
    {number: 10,
    ability: 'biz'},
    {number: 12,
    ability: 'biz'},
    {number: 13,
    ability: 'biz'},
    {number: 3,
    ability: 'temp_agency'},
    {number: 4,
    ability: 'temp_agency'},
    {number: 6,
    ability: 'temp_agency'},
    {number: 7,
    ability: 'temp_agency'},
    {number: 8,
    ability: 'temp_agency'},
    {number: 9,
    ability: 'temp_agency'},
    {number: 10,
    ability: 'temp_agency'},
    {number: 12,
    ability: 'temp_agency'},
    {number: 13,
    ability: 'temp_agency'}

]

var goals = [[
    {level: 1,
    goal: '[#] [#] [#] [#] [#] [#]',
    description: 'Six [1]s',
    first_points: 8,
    second_points: 4},
    {level: 1,
    goal: '[##] [##] [##] [##]',
    description: 'Four [2]s',
    first_points: 8,
    second_points: 4},
    {level: 1,
    goal: '[###] [###] [###]',
    description: 'Three [3]s',
    first_points: 8,
    second_points: 4},
    {level: 1,
    goal: '[####] [####] [####] [####]',
    description: 'Four [4]s',
    first_points: 6,
    second_points: 3},
    {level: 1,
    goal: '[######] [######]',
    description: 'Two [6]s',
    first_points: 10,
    second_points: 6},
    {level: 1,
    goal: '[#####] [#####]',
    description: 'Two [5]s',
    first_points: 8,
    second_points: 4}],
    [
    {level: 2,
    goal: '[#####] [##] [##]',
    description: 'One [5] Two [2]s',
    first_points: 10,
    second_points: 6},
    {level: 2,
    goal: '[###] [###] [####]',
    description: 'Two [3]s One [4]',
    first_points: 12,
    second_points: 7},
    {level: 2,
    goal: '[######] [#] [#] [#]',
    description: 'One [6] Three [1]s',
    first_points: 11,
    second_points: 6},
    {level: 2,
    goal: '[###] [######]',
    description: 'One [3] One [6]',
    first_points: 8,
    second_points: 4},
    {level: 2,
    goal: '[####] [#] [#] [#]',
    description: 'One [4] Three [1]s',
    first_points: 9,
    second_points: 5},
    {level: 2,
    goal: '[#####] [####]',
    description: 'One [5] One [4]',
    first_points: 9,
    second_points: 5},
],
[
    {level: 3,
    goal: '[##] [###] [#####]',
    description: 'One [2] One [3] One [5]',
    first_points: 13,
    second_points: 7},
    {level: 3,
    goal: '[#] [##] [######]',
    description: 'One [1] One [2] One [6]',
    first_points: 12,
    second_points: 7},
    {level: 3,
    goal: '[##] [#####]',
    description: 'One [2] One [5]',
    first_points: 7,
    second_points: 3},
    {level: 3,
    goal: '[#] [##] [##] [###]',
    description: 'One [1] Two [2] One [3]',
    first_points: 11,
    second_points: 6},
    {level: 3,
    goal: '[#] [####] [#####]',
    description: 'One [1] One [4] One [5]',
    first_points: 13,
    second_points: 7},
    {level: 3,
    goal: '[###] [####]',
    description: 'One [3] One [4]',
    first_points: 7,
    second_points: 3},
]
]

function reset(){
stacks = [[],[],[]];
discards = [[],[],[]];
goalsStack = [];
deck = [
    {number: 1,
    ability: 'park'},
    {number: 2,
    ability: 'park'},
    {number: 4,
    ability: 'park'},
    {number: 5,
    ability: 'park'},
    {number: 5,
    ability: 'park'},
    {number: 6,
    ability: 'park'},
    {number: 7,
    ability: 'park'},
    {number: 7,
    ability: 'park'},
    {number: 8,
    ability: 'park'},
    {number: 8,
    ability: 'park'},
    {number: 9,
    ability: 'park'},
    {number: 9,
    ability: 'park'},
    {number: 10,
    ability: 'park'},
    {number: 11,
    ability: 'park'},
    {number: 11,
    ability: 'park'},
    {number: 12,
    ability: 'park'},
    {number: 14,
    ability: 'park'},
    {number: 15,
    ability: 'park'},
    {number: 1,
    ability: 'stock_exchange'},
    {number: 2,
    ability: 'stock_exchange'},
    {number: 4,
    ability: 'stock_exchange'},
    {number: 5,
    ability: 'stock_exchange'},
    {number: 5,
    ability: 'stock_exchange'},
    {number: 6,
    ability: 'stock_exchange'},
    {number: 7,
    ability: 'stock_exchange'},
    {number: 7,
    ability: 'stock_exchange'},
    {number: 8,
    ability: 'stock_exchange'},
    {number: 8,
    ability: 'stock_exchange'},
    {number: 9,
    ability: 'stock_exchange'},
    {number: 9,
    ability: 'stock_exchange'},
    {number: 10,
    ability: 'stock_exchange'},
    {number: 11,
    ability: 'stock_exchange'},
    {number: 11,
    ability: 'stock_exchange'},
    {number: 12,
    ability: 'stock_exchange'},
    {number: 14,
    ability: 'stock_exchange'},
    {number: 15,
    ability: 'stock_exchange'},
    {number: 1,
    ability: 'fence'},
    {number: 2,
    ability: 'fence'},
    {number: 3,
    ability: 'fence'},
    {number: 5,
    ability: 'fence'},
    {number: 5,
    ability: 'fence'},
    {number: 6,
    ability: 'fence'},
    {number: 6,
    ability: 'fence'},
    {number: 7,
    ability: 'fence'},
    {number: 8,
    ability: 'fence'},
    {number: 8,
    ability: 'fence'},
    {number: 9,
    ability: 'fence'},
    {number: 10,
    ability: 'fence'},
    {number: 10,
    ability: 'fence'},
    {number: 11,
    ability: 'fence'},
    {number: 11,
    ability: 'fence'},
    {number: 13,
    ability: 'fence'},
    {number: 14,
    ability: 'fence'},
    {number: 15,
    ability: 'fence'},
    {number: 3,
    ability: 'pool'},
    {number: 4,
    ability: 'pool'},
    {number: 6,
    ability: 'pool'},
    {number: 7,
    ability: 'pool'},
    {number: 8,
    ability: 'pool'},
    {number: 9,
    ability: 'pool'},
    {number: 10,
    ability: 'pool'},
    {number: 12,
    ability: 'pool'},
    {number: 13,
    ability: 'pool'},
    {number: 3,
    ability: 'biz'},
    {number: 4,
    ability: 'biz'},
    {number: 6,
    ability: 'biz'},
    {number: 7,
    ability: 'biz'},
    {number: 8,
    ability: 'biz'},
    {number: 9,
    ability: 'biz'},
    {number: 10,
    ability: 'biz'},
    {number: 12,
    ability: 'biz'},
    {number: 13,
    ability: 'biz'},
    {number: 3,
    ability: 'temp_agency'},
    {number: 4,
    ability: 'temp_agency'},
    {number: 6,
    ability: 'temp_agency'},
    {number: 7,
    ability: 'temp_agency'},
    {number: 8,
    ability: 'temp_agency'},
    {number: 9,
    ability: 'temp_agency'},
    {number: 10,
    ability: 'temp_agency'},
    {number: 12,
    ability: 'temp_agency'},
    {number: 13,
    ability: 'temp_agency'}

]
}


function reshuffle(){
    var ddeck = [];
    for (let i = 0; i < discards.length; i++){
        let temp = discards[i].splice(0,discards[i].length-1);
        ddeck.push(...temp)
    }
    shuffle(ddeck);
    while(ddeck.length > 0){
        for (let j = 0; j < stacks.length; j++){
            let card = ddeck.shift();
            stacks[j].unshift(card);
        }
    }
    // next();
}

function shuffle(cardDeck){ 
    let newDeck = cardDeck;
    var m = newDeck.length, t, i;
    while (m) {
    i = Math.floor(Math.random() * m--);
    t = newDeck[m];
    newDeck[m] = newDeck[i];
    newDeck[i] = t;
    }
    return newDeck;
    }


function deal(){
    reset();
    shuffle(deck);
    while(deck.length > 0){
        for (let j = 0; j < stacks.length; j++){
            let card = deck.pop();
            stacks[j].push(card);
        }
    }
    }

    function next(){
        for (let i =0; i < 3; i++){
            let card = stacks[i].pop();
            discards[i].push(card);
        }
    }

function setGoals(){
    for (let i = 0; i < goals.length; i++){
        shuffle(goals[i]);
        let num  = Math.floor((Math.random() * 6));
        let card = goals[i][num];
        goalsStack.push(card);
    }
}