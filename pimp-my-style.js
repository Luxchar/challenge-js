import {styles} from './pimp-my-style.data.js'
let pimper = 0
let unpimp = 14
export function pimp(){
    let elem = document.querySelector("button")
    if (pimper < styles.length){
        unpimp = 14
        elem.classList.add(styles[k])
        pimper++
        if(pimper == 15){
            elem.classList.add('unpimp')
        }
    } else {
        elem.classList.add('unpimp')
        elem.classList.remove(styles[unpimp])
        pimper++
        unpimp--
        if(unpimp == -1){
            elem.classList.remove('unpimp')
        }
            
     }
}