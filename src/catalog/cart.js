import {catalogProducts} from './produts';
import {store} from './addToStash';
import {getProductItem} from './getProductItem';

class Cart {
  constructor(containerCart, containerCounter, catalogAllProducts) {
    this.containerCart = document.querySelector(containerCart);
    this.containerCounter = document.querySelectorAll(containerCounter);
    this.catalogAllProducts = catalogAllProducts;
    this.createCart();
  }

  /* <div class="item">
        <div class="name">Product1</div>
        <div class="img"></div>
        <div class="price">199</div>
      </div> */

  createCart() {
    let summ = 0;

        if (localStorage.getItem("howDollars") !== null){
          summ = localStorage.getItem("howDollars");
          +summ;
        }
    for (let s of this.containerCounter){

      s.addEventListener("click", function () {
        cart.containerCart.style.display = "grid";
        let productsCart = cart.getProductCart();
        let wrapper = document.createElement("slot");
        wrapper.className = "wrapper_cart";
        for (let i = 0; i < productsCart.length; i++) {
          let item = getProductItem.getProductItem({
            nameTag: "div",
            nameClass: "item",
          });
          let info = getProductItem.getProductItem({
            nameTag: "div",
            nameClass: "info",
          });
          let remove = getProductItem.getProductItem({
            nameTag: "div",
            nameClass: "rem-div",
          });
          let name = getProductItem.getProductItem({
            nameTag: "div",
            nameClass: "name",
            contentText: productsCart[i].name,
          });
          let bgImg = getProductItem.getProductItem({
            nameTag: 'img',
            nameClass: 'img-in-cart',
            srcImg: productsCart[i].image
          });
          let price = getProductItem.getProductItem({
            nameTag: "div",
            nameClass: "price",
            contentText: productsCart[i].price + ' $',
          });
          let btn = getProductItem.getProductItem({
            nameTag: 'button',
            nameClass: 'btn',
            contentText: 'Remove',
            id: productsCart[i].id
          });

          info.appendChild(bgImg);
          info.appendChild(name);
          remove.appendChild(price);
          remove.appendChild(btn);
          item.appendChild(info);
          item.appendChild(remove);
          wrapper.appendChild(item);

          btn.addEventListener('click', function(){
            let id = this.getAttribute('id'),
                result = store.putProduct(id);

                for (let dollars of document.querySelectorAll('.stash-dollars')){
                if(dollars.innerHTML == 0){
                  dollars.innerHTML = 0;
                }}


                document.querySelector('.stash-meter').innerHTML = result.products.length;

                document.querySelector('.burger-stash-meter').innerHTML = result.products.length;


                summ -= productsCart[i].price;

              for (let dollars of document.querySelectorAll('.stash-dollars')){
              dollars.innerText = summ;}

            localStorage.setItem("howDollars", summ)

            item.remove();
          })
        }

        let close = getProductItem.getProductItem({
          nameTag: "img",
          nameClass: "close-cart",
          srcImg: "./img/close.svg",
        });



        //let type = 'click'||'keypress';

        close.addEventListener("click", function (/* keyPressed */) {
          //if(keyPressed.which === 27){
          cart.containerCart.style.display = "none";
          cart.containerCart.innerHTML = "";
          //}
        });

        cart.containerCart.appendChild(close);
        cart.containerCart.appendChild(wrapper);
      });
    }
  }

  getProductCart() {
    let products = store.getProducts();
    let productsInCart = [];

    for (let i = 0; i < this.catalogAllProducts.length; i++) {
      if (products.indexOf(this.catalogAllProducts[i].id) !== -1) {
        productsInCart.push(this.catalogAllProducts[i]);
      }
    }

    return productsInCart;
  }
}

let cart = new Cart(".container-cart", ".main-stash", catalogProducts);

export {cart};
