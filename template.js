function loadTemplateNavbar() {
    let contentNav = document.getElementById("main-navbar");
  
    contentNav.innerHTML = /*html*/ `
              <div class="main-navbar">
                  <div id="appetizers" class="main-navbar-article" onclick="loadArticles(appetizers, 'Vorspeisen'); addClassActive('appetizers')"><h4>Vorspeisen</h4></div>
                  <div id="salads" class="main-navbar-article" onclick="loadArticles(salads, 'Salate'); addClassActive('salads')"><h4>Salate</h4></div>
                  <div id="pizzas" class="main-navbar-article" onclick="loadArticles(pizzas, 'Pizza'); addClassActive('pizzas')"><h4>Pizza</h4></div>
                  <div id="burgers" class="main-navbar-article" onclick="loadArticles(burgers, 'Burger'); addClassActive('burgers')"><h4>Burger</h4></div>
                  <div id="softDrinks" class="main-navbar-article" onclick="loadArticles(softDrinks, 'Alkoholfreie Getränke'); addClassActive('softDrinks')"><h4>Alkoholfreie Getränke</h4></div>
              </div>
              <div class="search-input">
                  <input onclick="removeClassActive()" type="text" id="search" placeholder="Suche hier dein Lieblingsgericht..." onkeypress="filterFoods(allArticles, 'Suchergebnis...')">
              </div>
      `;
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


  function contentEmptyBasket() {
    let contentSumBasket = document.getElementById("basket");
  
    contentSumBasket.innerHTML = /*html*/ `
    <div><h2>Warenkorb</h2></div>
    <div><h3>Fülle deinen Warenkorb</h3></div>
        <div id="order-article-section"></div>      
    `;
  }
  
  
  function contentFullBasket() {
    let contentSumBasket = document.getElementById("basket");
  
    contentSumBasket.innerHTML = /*html*/ `
    <div><h2>Warenkorb</h2></div>
    <div id="order-article-section"></div>
    <div class="contain-pay"><h4>Gesamtsumme: ${basketSum().toFixed(2).replace(".", ",")} €</h4></div>
    <div class="contain-pay-button"><h3>Bezahlen (${basketSum().toFixed(2).replace(".", ",")} €)</h3></div>       
    `;
  }


  function templateContentBasket(i, foodName, foodSumPrice, amount, foodPrice) {
    let contentBasket = document.getElementById("order-article-section");
  
    contentBasket.innerHTML += /*html*/ `
    <div class="order-article">
        <div id="order-amount${i}" class="order-amount"><p>${amount}</p></div>
        <div id="order-food-name"><p>${foodName}<br> (${foodPrice.toFixed(2).replace(".", ",")} €)</p></div>
        <div id="sum-price${i}" class="sum-price"><p>${foodSumPrice.toFixed(2).replace(".", ",")} €</p></div>
    </div>
    <div class="counter"><button onclick="amountDown(${i})">-</button><p>${amount}</p><button onclick="amountUp(${i})">+</button></div>
  `;
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
      </div>
      `;
  }