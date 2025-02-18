let Fav = []

function Read() {
  let temp = GetLocalStorage("heart");
  console.log(temp)
  if (temp == null)
    return [];
  else
    return JSON.parse(temp);
}


Fav = Read();
console.log(Fav);


function SaveLocalStorage(key, value) {
  console.log(value);
  localStorage.setItem(key, value);
}


function GetLocalStorage(key) {
  return localStorage.getItem(key);
}


function DeleteLocalStorage(key) {
  localStorage.removeItem(key);
}


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
    document.querySelector(`#spade${id}`).innerHTML = "❤️";
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
      <div class="card__more"><span  id="spade${x.id}" onclick="heartclick(${x.id})">🖤</span><a href="detail.html?id=${x.id}">More</a></div>
      </div>`).join("");

    div.innerHTML = innerHTML;

    body.append(div);
  })


