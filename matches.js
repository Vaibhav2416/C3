// write js code here corresponding to matches.html
var create=JSON.parse(localStorage.getItem("schedule"))

displayevent(create)
document.querySelector("#filterVenue")
function ftrvenue() {
    var point=document.querySelector("#filterVenue").value
    var ftr=create.filter(function(el){
    return el.place==point;
   })
   displayevent(ftr)
}


var fav=JSON.parse(localStorage.getItem("favourites"))||[]


function displayevent(create)
{
    document.querySelector("tbody").innerHTML="";

    create.forEach(function(el){
      var tr=document.createElement("tr")
      
      var td1=document.createElement("td")
      td1.innerText=el.number;
      var td2=document.createElement("td")
      td2.innerText=el.team1;
      var td3=document.createElement("td")
      td3.innerText=el.team2;
      var td4=document.createElement("td")
      td4.innerText=el.tarikh;
      var td5=document.createElement("td")
      td5.innerText=el.place;
      var td6=document.createElement("td")
      td6.innerText="Add as Favourites";
      td6.addEventListener("click",function(){
          addingfav(el)
      })
      tr.append(td1,td2,td3,td4,td5,td6)
      document.querySelector("tbody").append(tr)   
    });

}
function addingfav(el)
{
    fav.push(el)
    localStorage.setItem("favourites",JSON.stringify(fav))
}