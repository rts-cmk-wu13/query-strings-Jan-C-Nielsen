let Fav = []
let checkbox;
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
      <div class="card__more"><span  id="spade${x.id}" onclick="heartclick(${x.id})">
      ${Fav.includes(x.id) ? "❤️" : "🖤"}</span><a href="detail.html?id=${x.id}">More</a></div>
      </div>`).join("");
      innerHTML += `<label for="check">Dark mode:</label>
       <input type="checkbox" id="check" name="check" value="check" onchange="checkchanged()">`;
    div.innerHTML = innerHTML;
    body.append(div);
    
    checkbox = document.querySelector("#check");
    let darkmode = GetLocalStorage("darkmode");
    if (darkmode == null)
      rootElm.setAttribute("data-dark", checkbox.checked);
    else
    {
      rootElm.setAttribute("data-dark", darkmode);
      checkbox.checked = darkmode;
    }
  })

  let rootElm = document.documentElement;
console.log(rootElm); 

function checkchanged(){
    console.log("changed"+checkbox.checked);
    rootElm.setAttribute("data-dark", checkbox.checked);
    SaveLocalStorage("darkmode", checkbox.checked);
}




