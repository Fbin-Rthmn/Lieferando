function loadArticles(array, headH2) {
  let foodHead = document.getElementById("main-foods");

  foodHead.innerHTML = /*html*/ `
    <h2>${headH2}</h2>
    <div id="list-foods">
    </div>
    `;

  for (let i = 0; i < array.length; i++) {
    let foodName = array[i]["name"];
    let foodPrice = array[i]["price"];

    loadTemplateFoods(foodName, foodPrice);
  }
  loadTemplateNavbar();
}


function loadTemplateFoods(name, price) {
  let mainFoods = document.getElementById("list-foods");

  mainFoods.innerHTML += /*html*/ `
    <div class="food-order">
      <div class="food-article">
        <h2>${name}</h2>
        <span>${price.toFixed(2).replace(".", ",")} €</span>
      </div>
        <div><button onclick="addToBasket('${name}', ${price})">+</button></div>
    </div>
        `;
}


function addClassActive(add) {
  document.getElementById(add).classList.add("active");
}

function addToBasket(name, price) {
  let amount = 1;
  let sumPrice = price * amount;
  let article = { name: name, price: price, amount: amount, summe: sumPrice };

  let findArticle = basket.findIndex(function (obj) {
    return obj.name === name;
  });

  if (findArticle < 0) {
    basket.push(article);

    renderSumBasket();
    renderBasket();
  } else {
    amountUp(findArticle);
  }
}

function basketSum() {
  let summe = 0;

  for (let i = 0; i < basket.length; i++) {
    if (basket[i].hasOwnProperty("summe"));
    summe += basket[i].summe;
  }
  return summe;
}

function renderSumBasket() {
  let contentSumBasket = document.getElementById("basket");

  if (basketSum() == 0) {
    contentSumBasket.innerHTML = /*html*/ `
        <div><h2>Warenkorb</h2></div>
        <div><h3>Fülle deinen Warenkorb</h3></div>
            <div id="order-article-section"></div>      
        `;
  } else {
    contentSumBasket.innerHTML = /*html*/ `
        <div><h2>Warenkorb</h2></div>
        <div id="order-article-section"></div>
        <div class="contain-pay"><h4>Gesamtsumme: ${basketSum()
          .toFixed(2)
          .replace(".", ",")} €</h4></div>
        <div class="contain-pay-button"><h3>Bezahlen (${basketSum()
          .toFixed(2)
          .replace(".", ",")} €)</h3></div>       
        `;
  }
}

function renderBasket() {
  let contentBasket = document.getElementById("order-article-section");

    contentBasket.innerHTML = /*html*/ ``;

    for (let i = 0; i < basket.length; i++) {
      let foodName = basket[i]["name"];
      let foodSumPrice = basket[i]["summe"];
      let amount = basket[i]["amount"];
      let foodPrice = basket[i]["price"];

      contentBasket.innerHTML += /*html*/ `
        <div class="order-article">
            <div id="order-amount${i}" class="order-amount"><p>${amount}</p></div>
            <div id="order-food-name"><p>${foodName}<br> (${foodPrice
        .toFixed(2)
        .replace(".", ",")} €)</p></div>
            <div id="sum-price${i}" class="sum-price"><p>${foodSumPrice
        .toFixed(2)
        .replace(".", ",")} €</p></div>
        </div>
        <div class="counter"><button onclick="amountDown(${i})">-</button><p>${amount}</p><button onclick="amountUp(${i})">+</button></div>
    `;
    }
}

function amountUp(i) {
  let obj = basket[i];

  obj.amount = basket[i].amount + 1;
  obj.summe = basket[i].price * obj.amount;

  renderSumBasket();
  renderBasket();
}

function amountDown(i) {
  let obj = basket[i];

  obj.amount = basket[i].amount - 1;
  obj.summe = basket[i].price * obj.amount;

  queryAmountDown(i, obj.amount);
}

function queryAmountDown(i, amount) {
  if (amount == 0) {
    deleteArticle(i);
    renderSumBasket();
    renderBasket();
  } else {
    renderSumBasket();
    renderBasket();
  }
}

function deleteArticle(i) {
  basket.splice(i, 1);
  renderBasket();
}

function filterFoods() {
  //Suchfunktion
  let mainFoods = document.getElementById("list-foods");
  let search = document.getElementById("search").value;
  search = search.toLowerCase();

  mainFoods.innerHTML = /*html*/ ``;

  for (let i = 0; i < allArticles.length; i++) {
    let foodName = allArticles[i]["name"];
    let foodPrice = allArticles[i]["price"];

    if (foodName.toLowerCase().includes(search)) {
      filterFoodsTemplate(foodName, foodPrice);
    }
  }
}

function filterFoodsTemplate(foodName, foodPrice) {
  let mainFoods = document.getElementById("list-foods");

  mainFoods.innerHTML += /*html*/ `
    <div class="food-order">
        <div class="food-article">
            <h2>${foodName}</h2>
            <span>${foodPrice.toFixed(2).replace(".", ",")} €</span>
        </div>
        <div><button onclick="addToBasket('${foodName}', ${foodPrice})">+</button></div>
    </div>`;
}

// function unChecked() {
//     let radioBtnPickUp = document.getElementById('pick-up');
//     let radioBtnDelivery = document.getElementById('delivery');

//     if (radioBtnDelivery.checked = true) {
//         radioBtnPickUp = false;
//     } if (radioBtnPickUp = true) {
//         radioBtnDelivery = false;
//     }

//     console.log(radioBtnPickUp);
//     console.log(radioBtnDelivery);
// }
