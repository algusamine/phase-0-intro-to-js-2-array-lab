const cats = ["Milo", "Otis", "Garfield"];
/*function catsList(){
    let cats = [];
    cats.push("Milo", "Otis", "Garfield");
    console.log(cats);
};*/
function destructivelyAppendCat(name){
cats.push(name);
}
function destructivelyRemoveLastCat(){
    cats.pop();
}
function destructivelyPrependCat(name){
    cats.unshift(name);
}

function destructivelyRemoveFirstCat(){
    cats.shift();
}
function appendCat(name){
    return [...cats, name];
}

function prependCat(name){
    return [name, ...cats];
}
function removeLastCat(){
    return cats.slice(0,2);
}
function removeFirstCat(){
    return cats.slice(1);
}