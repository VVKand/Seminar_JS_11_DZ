
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

const cardHove = document.querySelectorAll('.card__hov');
const korzina = document.querySelector('.korzina');
const obj = JSON.parse(database);

cardHove.forEach(function(element, i) {
  element.addEventListener("click", function() {
korzina.insertAdjacentHTML('afterbegin',
`
<div class="korz__card">
        <div class="korz__img">
          <img src="${obj[i].img}" alt="photo" />
        </div>
        <div class="korz__content">
          <h2>${obj[i].h5}</h2>
          <p class="cont_par">
            Price: <span class="korz__price">&nbsp;${obj[i].h6}</span>
          </p>
          <p class="cont_par">Color: <span class="dop">&nbsp;'Black'</span></p>
          <p class="cont_par">Size: <span class="dop">&nbsp;'XL'</span></p>
          <p class="cont_par">Quantity: <input type="number" value=1 /></p>

          <button class="clouse" onclick="this.parentElement.parentElement.style.display='none';"><img src="/img/Vector (6).png" alt="" /></button>
        </div>
      </div>
`)
  });
});
