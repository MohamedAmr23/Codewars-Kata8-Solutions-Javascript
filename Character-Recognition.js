function correct(string)
{
    // return string.replace(/5/g,'S').replace(/0/g,'O').replace(/1/g,'I')
    const characters = {
        '0' : 'O',
        '1': 'I',
        '5': 'S'
    }
    return string.replace(/[015]/g,character=>characters[character])
}
console.log(correct('51NGAP0RE'))