let allArticles = [
    {
      name: "Chicken Nuggets (7 Stück)",
      price: 7.0,
    },
    {
      name: "Chicken Nuggets (10 Stück)",
      price: 11.5,
    },
    {
      name: "Gebackene Wan Tan (7 Stück)",
      price: 7.0,
    },
    {
      name: "Jalapenos (7 Stück)",
      price: 10.0,
    },
    {
      name: "Grüner Salat",
      price: 5.0,
    },
    {
      name: "Gurkensalat",
      price: 5.5,
    },
    {
      name: "Tomatensalat",
      price: 5.5,
    },
    {
      name: "Gemischter Salat",
      price: 7.5,
    },
    {
      name: "Griechischer Salat",
      price: 9.5,
    },
    {
      name: "Meeresfrüchte Salat",
      price: 11.5,
    },
    {
      name: "Pizzabrot",
      price: 5.5,
    },
    {
      name: "Pizza Margherita",
      price: 7.5,
    },
    {
      name: "Pizza Salami",
      price: 8.0,
    },
    {
      name: "Pizza Schinken",
      price: 8.0,
    },
    {
      name: "Pizza Parmaschinken mit Rucola",
      price: 10.0,
    },
    {
      name: "Pizza Indisch",
      price: 10.0,
    },
    {
      name: "Hamburger",
      price: 6.0,
    },
    {
      name: "Cheeseburger",
      price: 7.5,
    },
    {
      name: "Doppel Cheeseburger",
      price: 9.0,
    },
    {
      name: "Chickenburger",
      price: 7.5,
    },
    {
      name: "Coca-Cola 0,33l",
      price: 2.0,
    },
    {
      name: "Coca-Cola 1,0l",
      price: 3.0,
    },
    {
      name: "Fanta Orange 0,33l",
      price: 2.0,
    },
    {
      name: "Fanta Orange 1,0l",
      price: 3.0,
    },
    {
      name: "Sprite 0,33l",
      price: 2.0,
    },
    {
      name: "Sprite 1,0l",
      price: 3.0,
    },
    {
      name: "Mineralwasser 0,7l",
      price: 2.5,
    },
    {
      name: "Red Bull 0,33l",
      price: 3.0,
    },
  ];
  let appetizers = [
    {
      name: "Chicken Nuggets (7 Stück)",
      price: 7.0,
    },
    {
      name: "Chicken Nuggets (10 Stück)",
      price: 11.5,
    },
    {
      name: "Gebackene Wan Tan (7 Stück)",
      price: 7.0,
    },
    {
      name: "Jalapenos (7 Stück)",
      price: 10.0,
    },
  ];
  let salads = [
    {
      name: "Grüner Salat",
      price: 5.0,
    },
    {
      name: "Gurkensalat",
      price: 5.5,
    },
    {
      name: "Tomatensalat",
      price: 5.5,
    },
    {
      name: "Gemischter Salat",
      price: 7.5,
    },
    {
      name: "Griechischer Salat",
      price: 9.5,
    },
    {
      name: "Meeresfrüchte Salat",
      price: 11.5,
    },
  ];
  let pizzas = [
    {
      name: "Pizzabrot",
      price: 5.5,
    },
    {
      name: "Pizza Margherita",
      price: 7.5,
    },
    {
      name: "Pizza Salami",
      price: 8.0,
    },
    {
      name: "Pizza Schinken",
      price: 8.0,
    },
    {
      name: "Pizza Parmaschinken mit Rucola",
      price: 10.0,
    },
    {
      name: "Pizza Indisch",
      price: 10.0,
    },
  ];
  let burgers = [
    {
      name: "Hamburger",
      price: 6.0,
    },
    {
      name: "Cheeseburger",
      price: 7.5,
    },
    {
      name: "Doppel Cheeseburger",
      price: 9.0,
    },
    {
      name: "Chickenburger",
      price: 7.5,
    },
  ];
  let softDrinks = [
    {
      name: "Coca-Cola 0,33l",
      price: 2.0,
    },
    {
      name: "Coca-Cola 1,0l",
      price: 3.0,
    },
    {
      name: "Fanta Orange 0,33l",
      price: 2.0,
    },
    {
      name: "Fanta Orange 1,0l",
      price: 3.0,
    },
    {
      name: "Sprite 0,33l",
      price: 2.0,
    },
    {
      name: "Sprite 1,0l",
      price: 3.0,
    },
    {
      name: "Mineralwasser 0,7l",
      price: 2.5,
    },
    {
      name: "Red Bull 0,33l",
      price: 3.0,
    },
  ];
  let basket = [];


  function saveBasket() {
    let basketAsText = JSON.stringify(basket);

    localStorage.setItem('basket', basketAsText);
}


function loadBasket() {
    let basketAsText = localStorage.getItem('basket');

    basket = JSON.parse(basketAsText);
}
