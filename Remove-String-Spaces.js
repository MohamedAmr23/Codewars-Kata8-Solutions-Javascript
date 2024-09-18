function noSpace(x){
    return  x.replace(/\s/g, '')
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))

// another solution
function noSpace(x){
    return  x.split(' ').join("")
}
console.log(noSpace('8 j 8   mBliB8g  imjB8B8  jl  B'))



