fetch("./data/destinations.json")
  .then(response => response.json())
  .then(y => {
    console.log(y);
    const body = document.querySelector("body");
    const div = document.createElement("div");
    div.classList.add("grid");
    let innerHTML = y.destinations.map(x => `
      <div class="card">  
      <h2>${x.title}</h2>  
     <div> <img src=img/${x.image}></div>
      <p>${x.destination}</p>
      
      <p>${x.facilities.join("<br>")}</p>  
    <div class="card__more"><span>❤️</span><a href="detail.html?id=${x.id}">More</a></div>
     </div>   `).join("");
    div.innerHTML = innerHTML;
    console.log(innerHTML);
    body.append(div);
  })