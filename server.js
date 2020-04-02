const express = require('express');

const app = express();

const server = app.listen(8000);

const io = require('socket.io')(server);

// let connectedClients = 0;

io.on('connection', socket =>{
    console.log('connected');
    socket.on('new', socket=>{
        deal(deck);
        let allStacks = [
            {topStacks: stacks[0][0],
                discardStacks: discards[0][0]},
            {topStacks: stacks[1][0],
                discardStacks: discards[1][0]},
            {topStacks: stacks[2][0],
                discardStacks: discards[2][0]}];
        let remaining = stacks[0].length;
        console.log(allStacks);
        socket.emit('decks', {allStacks,remaining});
    })
    socket.on('next',socket=>{
        next();
        socket.emit('decks',{allStacks,remaining} )

    })
});


const stacks = [[],[],[]];
const discards = [[],[],[]];
const goalsStack = [];

const deck = [
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

const goals = [[
    {goal: '[x] [x] [x] [x] [x] [x]',
    description: 'six 1s',
    first_points: 8,
    second_points: 4},
    {goal: '[xx] [xx] [xx] [xx]',
    description: 'four 2s',
    first_points: 8,
    second_points: 4},
    {goal: '[xxx] [xxx] [xxx]',
    description: 'three 3s',
    first_points: 8,
    second_points: 4},
    {goal: '4 four',
    first_points: 6,
    second_points: 3},
    {goal: '2 six',
    first_points: 10,
    second_points: 6},
    {goal: '2 five',
    first_points: 8,
    second_points: 4}],
    [
    {goal: '1 five 2 two',
    first_points: 10,
    second_points: 6},
    {goal: '2 three 1 four',
    first_points: 12,
    second_points: 7},
    {goal: '3 one 1 six',
    first_points: 11,
    second_points: 6},
    {goal: '1 three 1 six',
    first_points: 8,
    second_points: 4},
    {goal: '1 four 3 one',
    first_points: 9,
    second_points: 5},
    {goal: '1 five 1 four',
    first_points: 9,
    second_points: 5},
],
[
    {goal: '1 two 1 three 1 five',
    first_points: 13,
    second_points: 7},
    {goal: '1 one 1 two 1 six',
    first_points: 12,
    second_points: 7},
    {goal: '1 two 1 five',
    first_points: 7,
    second_points: 3},
    {goal: '1 one 2 two 1 three',
    first_points: 11,
    second_points: 6},
    {goal: '1 one 1 four 1 five',
    first_points: 13,
    second_points: 7},
    {goal: '1 three 1 four',
    first_points: 7,
    second_points: 3},
]
]

function reshuffle(){
    const ddeck = [...discards[0], ...discards[1], ...discards[2]];
    shuffle(ddeck);
    while(ddeck.length > 0){
        for (let j = 0; j < stacks.length; j++){
            let card = ddeck.shift();
            stacks[j].push(card);
        }

    }
}

function shuffle(deck){ 
    var m = deck.length, t, i;
    while (m) {
    i = Math.floor(Math.random() * m--);
    t = deck[m];
    deck[m] = deck[i];
    deck[i] = t;
    }
    return deck;
    }


function deal(deck){
    shuffle(deck);
    while(deck.length > 0){
        for (let j = 0; j < stacks.length; j++){
            let card = deck.shift();
            stacks[j].unshift(card);
        }
    }
    next();
        return stacks;
    }

    function next(){
        for (let i =0; i < 3; i++){
            let card = stacks[i].shift();
            discards[i].unshift(card);
        }
    }

function setGoals(){
    for (let i = 0; i < goals.length; i++){
        shuffle(goals[i]);
        let card = goals[i].pop();
        goalsStack.push(card);

    }
}
