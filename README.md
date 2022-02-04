## About 

[Live project](https://hazigabriel.github.io/shopping-cart/), hosted via github pages.

This CRUD app was deveveloped using ReactJs in order to learn about react-router. We have a simple 3 page website(home, shop, cart) where the user can add products items in their cart, either via the main shop page or via the items's dedicated page and update their quantity or delete them from the cart.

Besides react-router, I've also learned more about passing states through different componenets and conditional rendering. 

Initially I wanted to use the [Metropolitan Museum of Art's API](https://www.programmableweb.com/api/metropolitan-museum-art-met-collection-rest-api-v10) but I wanted to have a specific array of items to be rendered and simmilar information, and I could not generate ID's to be rendered as the API returns more than 85.000 values. Another option was to find specific values to be rendered, and call them in an useEffect hook but rather can calling an amount of X items manually from an array I have decided to visit the British Museum souvenir shop and create my own objects with items to be rendered.

This project was created as part of the [theOdinProject's Javascript curriculum](https://www.theodinproject.com/paths/full-stack-javascript/courses/javascript#react-js).

## Features
-Shop page where the user can add an item directly to the cart or view it's details;

-Individual item page where more information is displayed about the product, and if the product has more than 1 image available a function image carousel is rendered;

-The possibility to promotional codes and validate them. (the promo codes are 15OFF, 50OFF and 99OFF, both  upper and lower cases are valid);

-User can visit the item page through the cart upp, and increase/decrese the item quantity or delete the product;

-The option to filter products by category;

-Responsive design;

## How to run locally

- Clone the repo
- Open your terminal, run "npm install" to install the requiredapp dependencies
- Run "npm start" in order to

 
