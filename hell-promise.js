const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")

const authorized = false;
function changeText(element, text, color, time) {
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            if(authorized) {
                element.textContent = text;
                element.style.color = color;
                resolve();
            } else {
                throw new Error("you dont have authorization")
            }
        }, time)
    })
}

changeText(heading1, "heading1", "violet", 1000)
    .then(()=>changeText(heading2, "heading2", "purple", 1000))
    .then(()=>changeText(heading3, "heading3", "red", 1000))
    .then(()=>changeText(heading4, "heading4", "blue", 1000))
    .then(()=>changeText("", "heading5", "cyan", 1000))
    .then(()=>changeText(heading6, "heading6", "yellow", 1000))
    .then(()=>changeText(heading7, "heading7", "green", 1000))
    .catch((error)=>{alert(error)})

