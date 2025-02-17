let search = window.location.search;
let params = new URLSearchParams(search);
console.log(params);
let id = params.get("id");
let path =`./data/${id}.json`;
console.log(path);
fetch(path).
then(r => r.json()).
then(x => {
    console.log(x);
    const body = document.querySelector("body");
    let section = document.createElement("section");
    let innerHTML = `
    <div> <img src=img/${x.image}></div>
    <div class="textarea">
      <p class="dest">${x.destination}</p>
      <h2>${x.title}</h2>  
      <p>${x.text}</p>  
      <h3>Facilities</h3>
      <p>${x.facilities.join("<br>")}</p>  
    </div>
      `;
       
       section.innerHTML = innerHTML;
       body.append(section);
    
});