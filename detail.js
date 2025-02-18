let Fav = []

/**
* @returns {string}
*/
function Init() {
  let temp = GetLocalStorage("heart");
  console.log(temp)
  if (temp == null)
    return [];
  else
    return JSON.parse(temp);
}


Fav = Init();
console.log(Fav);

/**
* @param {string} key
* @param {string} value
*/
function SaveLocalStorage(key, value) {
  console.log(value);
  localStorage.setItem(key, value);
}

/**
* @param {string} key
* @returns {string}
*/
function GetLocalStorage(key) {
  return localStorage.getItem(key);
}

/**
* @param {string} key
* 
*/
function DeleteLocalStorage(key) {
  localStorage.removeItem(key);
}

/**
* @param {string} id
* 
*/
function heartclick(id) {
  let spade = document.querySelector(`#spade${id}`);
  // console.log("heartclick:" + id);
  if (Fav.includes(id)) {
    Fav = Fav.filter(x => id != x);
    console.log(Fav);
    spade.innerHTML = "🖤";   
  }
  else {
    Fav.push(id);
    spade.innerHTML = "❤️";
  }
  SaveLocalStorage("heart", JSON.stringify(Fav));
}




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
      <div class="card__more"><span  id="spade${x.id}" onclick="heartclick(${x.id})">
       ${Fav.includes(x.id) ? "❤️" : "🖤"}</span></div>
    </div>
    
      `;
       
       section.innerHTML = innerHTML;
       body.append(section);
    
});