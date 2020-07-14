import {allProducts} from './addAllproduts';
import {getProductItem } from "./getProductItem";
import {store} from "../catalog/addToStash";

function filter(){
  let products = store.getProducts(),
      summ = 0,
      wrapper = document.createElement("div");
      wrapper.classList.add("cards");

  function addElements(elem){
    let index = products.indexOf(elem.id),
        activeText;
        allProducts.containerCounter.innerHTML = products.length;
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
          contentText: elem.sort + " | ",
        }),
        itemName = getProductItem.getProductItem({
          nameTag: "h4",
          nameClass: "name",
          contentText: elem.name,
        }),
        costItem = getProductItem.getProductItem({
          nameTag: "div",
          nameClass: "cost",
        }),
        itemImg = getProductItem.getProductItem({
          nameTag: "img",
          nameClass: "itemImg",
          srcImg: elem.image,
        }),
        itemPrice = getProductItem.getProductItem({
          nameTag: "div",
          nameClass: "price",
          contentText: elem.price + " $",
        }),
        itemBrewery = getProductItem.getProductItem({
          nameTag: "span",
          nameClass: "brand",
          contentText: elem.brewery,
        }),
        itemVolume = getProductItem.getProductItem({
          nameTag: "span",
          nameClass: "ml",
          contentText: elem.volume + "L",
        }),
        btn = getProductItem.getProductItem({
          nameTag: "button",
          nameClass: "btn",
          contentText: activeText,
          id: elem.id,
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
          summ += elem.price;
        } else {
          this.innerHTML = "Add";
          summ -= elem.price;
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
      allProducts.containerProducts.appendChild(wrapper);
  }


  document.getElementById('style-select').addEventListener('change', function (){
    allProducts.containerProducts.innerHTML = '';
    wrapper.innerHTML = '';

    allProducts.catalogAllProducts.forEach((elem)=>{
      if(elem.sort == document.getElementById('style-select').value){
        addElements(elem);

    } else if (document.getElementById('style-select').value == 'all'){
      addElements(elem);
    }
  })
  })
  document.getElementById('brewery-select').addEventListener('change', function (){
    allProducts.containerProducts.innerHTML = '';
    wrapper.innerHTML = '';
    allProducts.catalogAllProducts.forEach((elem)=>{
      if(elem.brewery == document.getElementById('brewery-select').value){
        addElements(elem);
    } else if (document.getElementById('brewery-select').value == 'all'){
      addElements(elem);
    }
  })
  console.log(allProducts.createProducts);
    // event.preventDefault();
  })
}

export {filter};
