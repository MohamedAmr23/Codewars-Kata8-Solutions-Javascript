function feast(beast, dish) {
    let beastFirstChar = beast.split('')[0]
    let beastLastChar = beast.slice(-1)
    let dishFirstChar = dish.split('')[0]
    let dishLastChar = dish.slice(-1)
    if(beastFirstChar == dishFirstChar && beastLastChar == dishLastChar){
        return true
    }else{
        return false
    }
}
console.log(feast("brown bear", "bear claw"))
function feast(beast, dish) {
    return beast.at(0) == dish.at(0) && beast.at(-1) == dish.at(-1)
}
console.log(feast("brown bear", "bear claw"))
