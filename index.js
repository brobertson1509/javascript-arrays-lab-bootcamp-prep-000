var kittens = ['Milo', 'Otis', 'Garfield']; //define your array here

function destructivelyAppendKitten(Ralp){
kittens.push("Ralph")
}

function destructivelyPrependKitten(Bob){
  kittens.unshift("Bob")
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
}

function appendKitten(Broom){
 [...kittens, "Broom"]
}

function prependKitten(Arnold){
 ["Arnold", ...kittens];
}

function removeLastKitten(){
var removeLastKitten = kittens.slice(0, kittens.length - 1)
}

function removeFirstKitten(){
var removeFirstKitten = kittens.slice(1)
}
