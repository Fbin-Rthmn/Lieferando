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
                  <input type="text" id="search" placeholder="Suche hier dein Lieblingsgericht..." onkeypress="filterFoods(allArticles, 'Suchergebnis...')">
              </div>
      `;
  }