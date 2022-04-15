// You've been asked to freshen a webpage atmosphere by displaying shades of cold colors.

// Check the colors array provided in the data file below.

//     Write the generateClasses function which creates a <style> tag in the <head> tag and generates, for each color of colors, a class setting the background attribute and taking the color as value, like following:

// .blue {
//   background: blue;
// }

//     Write the generateColdShades function which creates a <div> for each color of the colors array whose name contains aqua, blue, turquoise, green, cyan, navy or purple.
//     Each <div> must have the corresponding generated class and display the name of the color, like following:

// <div class="blue">blue</div>

//     The function choseShade is triggered when clicking on a div.
//     Write the body of this function, which receives the shade of the clicked element as argument, and replaces all the other elements class by the chosen shade.

function generateClasses() {
    let style = document.createElement('style')
    document.head.appendChild(style)
    for (let i = 0; i < colors.length; i++) {
        style.innerHTML += `.${colors[i]} {
            background: ${colors[i]};
        }`
    }
}

function generateColdShades() {
    let divs = document.querySelectorAll('div')
    for (let i = 0; i < divs.length; i++) {
        for (let j = 0; j < colors.length; j++) {
            if (colors[j].includes('aqua') || colors[j].includes('blue') || colors[j].includes('turquoise') || colors[j].includes('green') || colors[j].includes('cyan') || colors[j].includes('navy') || colors[j].includes('purple')) {
                divs[i].classList.add(colors[j])
                divs[i].innerHTML = colors[j]
            }
        }
    }
}