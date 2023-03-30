
let menuActive = document.querySelector(".menu");
let headerMenu = document.querySelector(".burger__box");
function toggleMenu() {
  menuActive.classList.toggle("hidden");
}
headerMenu.addEventListener("click", toggleMenu);

const data = JSON.parse(database);
const base = document.querySelector(".sail__card__lst");

data.reverse().forEach((obj) => {
  base.insertAdjacentHTML(
    "afterbegin",
    `
    <div class="sail__card">
    <div class="card__hov">
      <img src="${obj.img}" alt="pic" />
    </div>
    <div>
      <h5>${obj.h5}</h5>
      <p>${obj.p}</p>
      <h6>${obj.h6}}</h6>
    </div>
  </div>`
  );
});
