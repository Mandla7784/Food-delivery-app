document.addEventListener("DOMContentLoaded", () => {
  const base_path_url = "./data/foodMenu.json";
  const menuContainer = document.querySelector(".container-menu");
  const itemsTobeStoredOnCart = [];

  /**
   *
   * @param {*} path
   * @returns {Array} data
   * This funcion gets menu items from a json file
   */
  async function getMenu(path) {
    try {
      const resposne = await fetch(path);
      const data = await resposne.json();
      const menuItems = data["menu"];

      displayItems(menuItems);
    } catch (error) {
      console.log("Opps erro from Resource", error.message);
    }
  }

  // call get menu and parse the url
  getMenu(base_path_url);

  /**
   *
   * @param {*} data
   * This is a render function , it loops on the list of items  and for each item
   * it creates a card and display the data according to the specified properties
   */
  function displayItems(data) {
    data.forEach((element) => {
      const { Description, name, price, image } = element;

      // creates a DOM element
      const itemCard = document.createElement("div");
      const itemImage = document.createElement("img");
      const itemDescription = document.createElement("p");
      const itemName = document.createElement("h2");
      const itemPrice = document.createElement("p");
      const addCartBtn = document.createElement("button");

      // events on cart '
      addCartBtn.onclick = () => {
        itemsTobeStoredOnCart.push(itemCard.innerHTML);

        localStorage.setItem(
          "cartitems",
          JSON.stringify(itemsTobeStoredOnCart)
        );
      };

      // Loading data to elements
      itemImage.src = `${image}`;
      itemDescription.textContent = Description.slice(0, 50);
      itemName.innerHTML = name;
      itemPrice.textContent = `R${price.toFixed(2)}`;
      itemCard.classList.add("item-card");
      addCartBtn.classList.add("cartbtn");
      addCartBtn.textContent = "Add to Cart";
      // appending to Card

      itemCard.append(
        itemImage,

        itemName,
        itemPrice,
        addCartBtn
      );
      menuContainer.append(itemCard);
    });
  }

  // Categries

  function getCategories() {
    fetch("./data/catergories.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data["categories"]);
      });
  }
  getCategories();
});
