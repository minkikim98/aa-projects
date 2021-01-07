window.addEventListener("DOMContentLoaded", (event) => {

  let cart = document.getElementById("shopping-cart");
  let ul = document.createElement("ul");
  cart.appendChild(ul);

  function removeItem(key) {
    localStorage.removeItem(key);
    location.reload();
  } 

  function updateItem(key, newValue) {
    localStorage.setItem(key, newValue);
    location.reload();
  }

  function showCart() {
    for (let i = 0; i < localStorage.length; i++) {
      let key = localStorage.key(i);
      let value = localStorage.getItem(key);

      let li = document.createElement("li");
      li.innerText = `${key} : `;

      let spinner = document.createElement("input");
      spinner.setAttribute("type", "number");
      spinner.setAttribute("value", value);
      spinner.addEventListener("change", event => updateItem(key, spinner.value));
      li.appendChild(spinner);

      let newButton = document.createElement('button');
      newButton.setAttribute('id', `${key}`);
      newButton.innerText = "X";
      li.appendChild(newButton);
      newButton.addEventListener('click', event => removeItem(key));

      ul.appendChild(li);
    }
  };


  function storeItem() {
    let button = document.getElementById('add-to-cart');
    button.addEventListener('click', (event) => {
      let item = document.getElementById('items').value;
      let quantity = Number(document.getElementById('quantity').value);
      let numInCart = Number(localStorage.getItem(item));

      if (numInCart === null) localStorage.setItem(item, quantity);
      else localStorage.setItem(item, quantity + numInCart);
      
    });
    showCart();
  };
  storeItem();
});
