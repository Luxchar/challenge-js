// Check out that button on the HTML page:

// <button class="button">pimp my style</div>

// For now, it's only a lonely, basic and sad element ; let's pimp it up!

// On each click on the page, a function pimp is triggered. Write the body of that function so that the button's class is altered:

//     Add in order the next class of the styles array provided in the data file below
//     When the end of the array is reached, remove backwards each class
//     Toggle the class 'unpimp' when removing classes

// Example for a `styles` array with only 3 classes:

// Page load --> <button class="button"></div>

// ...adding
// Click 1 --> <button class="button one"></div>
// Click 2 --> <button class="button one two"></div>

// ...toggling `unpimp`
// Click 3 --> <button class="button one two three unpimp"></div>

// ...and removing backwards
// Click 4 --> <button class="button one two unpimp"></div>
// Click 5 --> <button class="button one unpimp"></div>
// Click 6 --> <button class="button"></div>


import {styles} from './pimp-my-style.data.js'
let pimper = 0
let unpimp = 14
export function pimp(){
    pimper++
    if (pimper >= styles.length){
        document.querySelector('.button').classList.add(styles[unpimp])
        unpimp--
        if (unpimp === -1) {
            document.querySelector('.button').classList.remove('pimp')
            pimper = 0
        }
    } else {
        document.querySelector('.button').classList.add(styles[pimper])
        pimper--
        if (pimper === -1){
            document.querySelector('.button').classList.toggle('unpimp')
            unpimp = styles.length - 1
        }
    }
}