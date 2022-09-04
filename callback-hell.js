const heading1 = document.querySelector(".heading1")
const heading2 = document.querySelector(".heading2")
const heading3 = document.querySelector(".heading3")
const heading4 = document.querySelector(".heading4")
const heading5 = document.querySelector(".heading5")
const heading6 = document.querySelector(".heading6")
const heading7 = document.querySelector(".heading7")


function changeText(element, text, color, time, onSuccess, onFailure) {
    setTimeout(()=>{
        console.log("inside settimeout");
        if(element) {
            element.textContent = text;
            element.style.color = color;
            if(onSuccess) {
                onSuccess();
            } else {
                onFailure();
            }
        }
    }, time)
}

changeText(heading1, "heading1", "red", 1000, () => {
   changeText(heading2, "heading2", "violet", 1000, () => {
        changeText(heading3, "heading3", "purple", 1000, () => {
            changeText(heading4, "heading4", "cyan", 1000, () => {
                changeText(heading5, "heading5", "green", 1000, () => {
                    changeText(heading6, "heading6", "orange", 1000, () => {
                        changeText(heading7, "heading7", "yellow", 1000, () => {
                
                        }, ()=>{ console.log("heading7 does not exist") })
                    }, ()=>{ console.log("Heading6 does not exist") })
                }, ()=>{ console.log("Heading5 does not exist") })
            }, ()=>{ console.log("Heading4 does not exist") })
        }, ()=>{ console.log("Heading3 does not exist") })
   }, ()=>{ console.log("Heading2 does not exist") })
}, ()=>{ console.log("Heading1 does not exist") });