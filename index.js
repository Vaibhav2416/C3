// write js code here corresponding to index.html
// You should add submit event on the form
document.querySelector("#masaiForm").addEventListener("submit",match)
var kram=JSON.parse(localStorage.getItem("schedule")) || []
function match(){
    event.preventDefault()
    var cricket={
        number: masaiForm.matchNum.value,
        team1: masaiForm.teamA.value,
        team2: masaiForm.teamB.value,
        tarikh: masaiForm.date.value,
        place: masaiForm.venue.value

    }
    kram.push(cricket)
    localStorage.setItem("schedule",JSON.stringify(kram))
    
}
console.log(kram)
