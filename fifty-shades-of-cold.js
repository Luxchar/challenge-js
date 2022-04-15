import {colors} from './fifty-shades-of-cold-data.js';

export function generateClasses(){
    let style = document.createElement('style')
    style.innerHTML=''
    for(let i = 0; i < colors.length;i++){
        style.innerHTML +=  '.'+colors[i]+'{background:'+colors[i]+';}'
    }
    document.getElementsByTagName('head')[0].appendChild(style);
}

export function generateColdShades(){
    let view = ['aqua', 'blue', 'turquoise', 'green', 'cyan', 'navy', 'purple']
    for(let i = 0;i<colors.length;i++){
        for(let j = 0;j<view.length;j++){
            let regex = new RegExp(view[j])
            let bool = colors[i].match(regex)
            if(bool !== null){
                let div = document.createElement('div')
                div.className = colors[i]
                div.textContent = colors[i]
                document.body.append(div)
            }
        }
    }
}

export function choseShade(newshade){
    let shade = document.querySelectorAll('div')
    for(let i = 0;i<colors.length;i++){
        let style = shade[i].className
        let good = shade[i].classList.contains(newshade)
        if(!good){
            shade[i].classList.replace(style, newshade)
        } 
    }
    
}