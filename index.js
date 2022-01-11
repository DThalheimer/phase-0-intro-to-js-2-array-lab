// Write your solution here!


const cats = ["Milo", "Otis", "Garfield"]

cats.length = 0;

cats.push('Milo', 'Otis', 'Garfield')

function destructivelyAppendCat() {
    return cats.splice(3, 0, "Ralph");
}

function destructivelyPrependCat() {
    return cats.splice(0, 0, "Bob");
}

function destructivelyRemoveLastCat() {
    return cats.pop()
}

function destructivelyRemoveFirstCat() {
    return cats.shift()
}


const newCats = [...cats,"Broom"];

function appendCat() {
    cats.slice("Broom");
    return newCats;
}

const otherCats = ["Arnold", ...cats];

function prependCat() {
    cats.slice("Arnold");
    return otherCats;
}

const moreCats = ["Milo", "Otis", "Garfield"];

function removeLastCat() {
    return moreCats.slice(0, moreCats.length - 1);
}

const evenMoreCats = ["Milo", "Otis", "Garfield"];

function removeFirstCat() {
    return evenMoreCats.slice(1, evenMoreCats.length);
}