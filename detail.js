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
     <h2>${x.title}</h2>  
     <div> <img src=img/${x.image}></div>
      <p>${x.destination}</p>
      <p>${x.text}</p>  
      `;
        // <p>${x.facilities.map(y => y).join("<br>")}</p>  
       section.innerHTML = innerHTML;
       body.append(section);
    
});