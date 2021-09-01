const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};

// getting all properties names
const keys = Object.keys(bottle);
// console.log(keys);

// get all values 
const values = Object.values(bottle);
// console.log(values);

// get total variable
const pairs = Object.entries(bottle);
// console.log(pairs);


// seal ba freez korle pore r kisu delete ba add kora jay na. just jeigula thake oi propartie gula change kora jay
Object.seal(bottle);
Object.freeze(bottle);
// delete one propartie 
delete bottle.isCleaned;
// console.log(bottle);
bottle.price = 100;
bottle.height = 16;
console.log(bottle);
