fetch("./data/destinations.json")
  .then(response => response.json())
  .then(y => {
    console.log(y);
 
    const body = document.querySelector("body");
    const div = document.createElement("div");
    let innerHTML = y.destinations.map(x => `
        <h2>${x.title}</h2>  
     <div> <img src=img/${x.image}></div>
      <p>${x.destination}</p>
      <p>${x.text}</p>  
      <p>${x.facilities.join("<br>")}</p>  
    <div><a href="detail.html?id=${x.id}">Details</a></div>
       `).join("");
    div.innerHTML = innerHTML;
    console.log(innerHTML);
    body.append(div);
  })