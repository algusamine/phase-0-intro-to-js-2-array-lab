// Write your solution here!
const cats = ["Milo", "Otis", "Garfield"];

const destructivelyAppendCat= (Ralph) =>{
     cats.push(Ralph);
};

function destructivelyPrependCat(Bob) {
    cats.unshift(Bob)
};

function destructivelyRemoveLastCat() {
    cats.pop();
};

function destructivelyRemoveFirstCat() {
    cats.shift();
};

function appendCat(Broom) {
    return [...cats, "Broom"];
};

function prependCat(Arnold) {
    return ["Arnold", ...cats];
};

function removeLastCat() {
    return cats.slice(0,2);
};

function removeFirstCat() {
    return cats.slice(1);
};