// write js code here corresponding to favourites.html
var imp=JSON.parse(localStorage.getItem("favourites"))
hello(imp)
function hello(imp){
    imp.forEach(function(el,index){
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
      td6.innerText="Delete";
      td6.addEventListener("click",function(){
          remove(el,index)
      })
      tr.append(td1,td2,td3,td4,td5,td6)
      document.querySelector("tbody").append(tr) 
        
    });
}
function remove(el,index)
{
    imp.splice(index,1);

    localStorage.setItem("favourites",JSON.stringify(imp))
     window.location.reload()
}