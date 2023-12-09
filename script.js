function loadArticles(array, headH2) {
  let foodHead = document.getElementById('main-foods');

  foodHead.innerHTML = /*html*/ `
    <h2>${headH2}</h2>
    <div id="list-foods">
    </div>
    `;

  showArticles(array);
  loadTemplateNavbar();
  renderBasket();
  renderSumBasket();
}


function showArticles(array) {
  for (let i = 0; i < array.length; i++) {
    let foodName = array[i]["name"];
    let foodPrice = array[i]["price"];

    loadTemplateFoods(foodName, foodPrice);
  }
}


function addClassActive(add) {
  document.getElementById(add).classList.add('active');
}


function removeClassActive() {
  document.getElementById('appetizers').classList.remove('active');
  document.getElementById('salads').classList.remove('active');
  document.getElementById('pizzas').classList.remove('active');
  document.getElementById('burgers').classList.remove('active');
  document.getElementById('softDrinks').classList.remove('active');
}


function addToBasket(name, price) {
  let amount = 1;
  let sumPrice = price * amount;
  let article = { name: name, price: price, amount: amount, summe: sumPrice };

  let findArticle = basket.findIndex(function (obj) { //check for duplicate items in basket
    return obj.name === name;
  });
  queryFindAritcle(findArticle, article);
  saveBasket();
}


function queryFindAritcle(findArticle, article) {
  if (findArticle < 0) {
    basket.push(article);

    renderSumBasket();
    renderBasket();
  } else {
    amountUp(findArticle);
  }
}


function amountUp(i) {
  let obj = basket[i];

  obj.amount = basket[i].amount + 1;
  obj.summe = basket[i].price * obj.amount;

  renderSumBasket();
  renderBasket();
  saveBasket();
}


function amountDown(i) {
  let obj = basket[i];

  obj.amount = basket[i].amount - 1;
  obj.summe = basket[i].price * obj.amount;

  queryAmountDown(i, obj.amount);
  saveBasket();
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


function basketSum() {
  let summe = 0;

  for (let i = 0; i < basket.length; i++) {
    if (basket[i].hasOwnProperty("summe"));
    summe += basket[i].summe;
  }
  return summe;
}


function renderSumBasket() {
  if (basketSum() == 0) {
    contentEmptyBasket();
  } else {
    contentFullBasket();
  }
}


function renderBasket() {
  for (let i = 0; i < basket.length; i++) {
      let foodName = basket[i]["name"];
      let foodSumPrice = basket[i]["summe"];
      let amount = basket[i]["amount"];
      let foodPrice = basket[i]["price"];

      templateContentBasket(i, foodName, foodSumPrice, amount, foodPrice);
  }
}


function filterFoods() {    //Suchfunktion
  let mainFoods = document.getElementById('list-foods');
  let search = document.getElementById('search').value;
  search = search.toLowerCase();

  mainFoods.innerHTML = /*html*/ ``;

  findFoods(search);
}


function findFoods(search) {
  for (let i = 0; i < allArticles.length; i++) {
    let foodName = allArticles[i]["name"];
    let foodPrice = allArticles[i]["price"];

    if (foodName.toLowerCase().includes(search)) {
      filterFoodsTemplate(foodName, foodPrice);
    }
  }
}