import { catalogProducts } from "./produts";
import { store } from "../catalog/addToStash";
import { getProductItem } from "./getProductItem";

class AllProducts {
  constructor(containerProducts, catalogAllProducts, containerCounter) {
    this.containerProducts = document.querySelector(containerProducts);
    this.catalogAllProducts = catalogAllProducts;
    this.containerCounter = document.querySelector(containerCounter);
    this.createProducts();
  }

  createProducts() {
    let wrapper = document.createElement("div"),
      summ = 0,
      products = store.getProducts();
    if (localStorage.getItem("howDollars") !== null) {
      summ = localStorage.getItem("howDollars");
      +summ;
    }
    wrapper.classList.add("cards");

    for (let i = 0; i < this.catalogAllProducts.length; i++) {
      let index = products.indexOf(this.catalogAllProducts[i].id),
        arr = this.catalogAllProducts[i],
        activeText;
      this.containerCounter.innerHTML = products.length;
      document.querySelector(".burger-stash-meter").innerHTML = products.length;

      if (localStorage.getItem("howDollars") !== null) {
        for (let dollars of document.querySelectorAll(".stash-dollars")) {
          dollars.innerText = localStorage.getItem("howDollars");
        }
      }

      if (index === -1) {
        activeText = "Add";
      } else {
        activeText = "Remove";
      }

      let item = getProductItem.getProductItem({
          nameTag: "div",
          nameClass: "details-left",
        }),
        itemCard = getProductItem.getProductItem({
          nameTag: "div",
          nameClass: "card",
        }),
        aboutCard = getProductItem.getProductItem({
          nameTag: "div",
          nameClass: "card-about",
        }),
        imgBox = getProductItem.getProductItem({
          nameTag: "div",
          nameClass: "img-container",
        }),
        moreInfo = getProductItem.getProductItem({
          nameTag: "div",
          nameClass: "more-info",
        }),
        itemSort = getProductItem.getProductItem({
          nameTag: "span",
          nameClass: "sort",
          contentText: this.catalogAllProducts[i].sort + " | ",
        }),
        itemName = getProductItem.getProductItem({
          nameTag: "h4",
          nameClass: "name",
          contentText: this.catalogAllProducts[i].name,
        }),
        costItem = getProductItem.getProductItem({
          nameTag: "div",
          nameClass: "cost",
        }),
        itemImg = getProductItem.getProductItem({
          nameTag: "img",
          nameClass: "itemImg",
          srcImg: this.catalogAllProducts[i].image,
        }),
        itemPrice = getProductItem.getProductItem({
          nameTag: "div",
          nameClass: "price",
          contentText: this.catalogAllProducts[i].price + " $",
        }),
        itemBrewery = getProductItem.getProductItem({
          nameTag: "span",
          nameClass: "brand",
          contentText: this.catalogAllProducts[i].brewery,
        }),
        itemVolume = getProductItem.getProductItem({
          nameTag: "span",
          nameClass: "ml",
          contentText: this.catalogAllProducts[i].volume + "L",
        }),
        btn = getProductItem.getProductItem({
          nameTag: "button",
          nameClass: "btn",
          contentText: activeText,
          id: this.catalogAllProducts[i].id,
        });

      btn.addEventListener("click", function () {
        let id = this.getAttribute("id"),
          result = store.putProduct(id);

        for (let dollars of document.querySelectorAll(".stash-dollars")) {
          if (dollars.innerHTML == 0) {
            dollars.innerHTML = 0;
          }
        }

        allProducts.containerCounter.innerHTML = result.products.length;

        document.querySelector(".burger-stash-meter").innerHTML =
          result.products.length;

        if (result.statusProduct) {
          this.innerHTML = "Remove";
          summ += arr.price;
        } else {
          this.innerHTML = "Add";
          summ -= arr.price;
        }
        for (let dollars of document.querySelectorAll(".stash-dollars")) {
          dollars.innerText = summ;
        }

        localStorage.setItem("howDollars", summ);
        event.stopPropagation();
      });

      moreInfo.appendChild(itemSort);
      moreInfo.appendChild(itemVolume);
      costItem.appendChild(itemPrice);
      item.appendChild(itemBrewery);
      item.appendChild(itemName);
      item.appendChild(moreInfo);
      aboutCard.appendChild(item);
      aboutCard.appendChild(costItem);
      aboutCard.appendChild(btn);
      imgBox.appendChild(itemImg);
      itemCard.appendChild(imgBox);
      itemCard.appendChild(aboutCard);
      wrapper.appendChild(itemCard);
    }
    this.containerProducts.appendChild(wrapper);
  }
}

let allProducts = new AllProducts(".catalog", catalogProducts, ".stash-meter");

export { allProducts };
