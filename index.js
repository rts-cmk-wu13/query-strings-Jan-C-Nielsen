
function heartclick(id){
  console.log("heartclick:" + id);
}

fetch("./data/destinations.json")
  .then(response => response.json())
  .then(y => {
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.classList.add("grid");
    let innerHTML = y.destinations.map(x => `  
      <div class="card">  
      <h2>${x.title}</h2>  
     <div> <img src=img/${x.image}></div>
      <p>${x.destination}</p>
      
      <p>${x.facilities.join("<br>")}</p>  
    <div class="card__more"><span  id="${x.id}" onclick="heartclick(${x.id})">❤️</span><a href="detail.html?id=${x.id}">More</a></div>
     </div>   `).join("");

    div.innerHTML = innerHTML;
   
    body.append(div);
    //console.log(uniqueID);
   // let heart = document.querySelector(`#${x.id}`);
   // console.log(heart);
    //heart.addEventListener("click", heartclick);
    
  })


  