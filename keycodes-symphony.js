export function compose(){
    document.addEventListener("keydown", (key)=>{
        let event = key.keyCode //needs keycode for color change
        if(event === 27){ //esc key
            document.querySelectorAll("div").forEach((item) => {
                item.remove()
            })
        }else if(event === 8){ //backspace key
            let removeletter = document.querySelectorAll("div")
            removeletter[removeletter.length-1].remove()
        }else{
            let eventletter = event.key
            let block = document.createElement("div")
            block.classList.add("note")
            let color = "#"+99+event+event
            block.style.background = color
            document.body.appendChild(block)
            block.innerHTML = eventletter
        }
    })
}