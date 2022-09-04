const bjp = document.getElementById("bjp")
const cong = document.getElementById("congress");
const aap = document.getElementById("aap");
const submitBtn = document.getElementById("submitBtn");
const mainContainerLastChild = document.querySelector("#main button:last-child");



let bjpVote = 0;
let congVote = 0;
let aapVote = 0

function addVote(event){
   if(event.target.id === "bjp"){
        bjpVote++;
   }
   else if(event.target.id === "congress"){
        congVote++;
   }
   else {
        aapVote++;
   }
}

function showPartyVotes() {
    const divElement = document.createElement('div');
    divElement.innerHTML = `
        <p> BJP got ${bjpVote} votes<p>
        <p>Congress got ${congVote} votes<p>
        <p>AAP got ${aapVote} votes<p>
    `
    mainContainerLastChild.after(divElement);
}

bjp.addEventListener("click", (e)=>{addVote(e)});
cong.addEventListener("click", (e)=>{addVote(e)});
aap.addEventListener("click", (e)=>{addVote(e)});
submitBtn.addEventListener("click", () => {showPartyVotes()})