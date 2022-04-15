// Being stuck at home, bored, desperate and coming up with a lot of weird ideas, a friend asks you to develop a tool to measure his ocular skills: one of those Monoyer charts that ophthalmologists use.

// Generate a board where each new letter is harder, bigger, bolder and stronger!

// Write the function generateLetters which creates 120 div, each containing a letter randomly picked through the uppercase alphabet, and whose style properties have to be increased:

//     each letter font-size has to grow from 11 to 130 pixels
//     font-weight has to be 300 for the first third of the letters, 400 for the second third, and 600 for the last third

export function generateLetters(){
    let alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    for(let i=1;i<=120;i++){
        let l = ''
        l += alphabet.charAt(Math.floor(Math.random()*alphabet.length))
        let div = document.createElement('div')
        div.innerHTML = l
        div.style.fontSize = (i+10)+'px';
        if (i <= 40 ){
            div.style.fontWeight = "300";
        } else if (i <= 80) {
            div.style.fontWeight = "400";
        } else {
            div.style.fontWeight = "600";
        }
        document.body.append(div)
    }
}