function position(letter){
    const alphpet = 'abcdefghijklmnopqrstuvwxyz';
    return `Position of alphabet: ${alphpet.indexOf(letter) + 1}`;
}

console.log(position('z'))