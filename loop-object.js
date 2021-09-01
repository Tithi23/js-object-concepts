const bottle = {
    color: 'yellow',
    hold: 'water',
    price: 50,
    isCleaned: true
};


/*
for(let i = 0; i<10;i++){}
for(const num of numbers){} // array
for(const prop in student){} // object
*/

for (const prop in bottle) {
    // console.log(prop, bottle[prop]);
}

// keys diye loop
const keys = Object.keys(bottle);
// console.log(keys);
for (const prop of keys) {
    // console.log(prop, bottle[prop]);
}



// advanced
for (const [key, value] of Object.entries(bottle)) {
    console.log(key, value);
}