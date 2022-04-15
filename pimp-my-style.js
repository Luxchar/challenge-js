import {styles} from './pimp-my-style.data.js'
let pimper = 0
let unpimp = 15
export function pimp(){
    let button = document.querySelector("button")
    if (pimper === 15){
        button.classList.remove(styles[unpimp])
        unpimp--
        if (unpimp === 0) {
            button.classList.remove('unpimp')
            pimper = 0
        }
    } else {
        button.classList.add(styles[pimper])
        pimper++
        if (pimper === 15) {
            button.classList.add('unpimp')
            unpimp = 15
        }
    }
}