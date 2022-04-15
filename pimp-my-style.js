import {styles} from './pimp-my-style.data.js'
let pimper = -1
let unpimp = 14
export function pimp(){
    let button = document.querySelector("button")
    if (pimper < styles.length){
        unpimp = 14
        button.classList.add(styles[k])
        pimper++
        if(pimper == 15){
            button.classList.add('unpimp')
        }
    } else {
        button.classList.add('unpimp')
        button.classList.remove(styles[unpimp])
        unpimp--
        if(unpimp == -1){
            button.classList.remove('unpimp')
            pimper = -1
            unpimp = 14
        }           
     }
}