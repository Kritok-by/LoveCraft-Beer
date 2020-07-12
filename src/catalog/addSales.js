import {catalogProducts} from './produts';
import {store} from '../catalog/addToStash';
import {getProductItem} from './getProductItem';



class AllProducts{
  constructor(containerProducts,catalogAllProducts,containerCounter){
    this.containerProducts = document.querySelector(containerProducts);
    this.catalogAllProducts = catalogAllProducts;
    this.containerCounter = document.querySelector(containerCounter);
    this.createProducts();
  };

  createProducts(){
    let summ = 0,
        products = store.getProducts();

        if (localStorage.getItem("howDollars") !== null){
          summ = localStorage.getItem("howDollars");
          +summ;
        }

    for(let i = 0; i < this.catalogAllProducts.length; i++){
      let index = products.indexOf(this.catalogAllProducts[i].id),
          arr = this.catalogAllProducts[i],
          activeText;

          this.containerCounter.innerHTML = products.length;
          document.querySelector('.burger-stash-meter').innerHTML = products.length;

          if(localStorage.getItem("howDollars") !== null){
            for (let dollars of document.querySelectorAll('.stash-dollars')){
            dollars.innerText = localStorage.getItem("howDollars");}};

          if(index === -1){
            activeText = 'Add';
          }else{
            activeText = 'Remove';
          };



      let item = getProductItem.getProductItem({
        nameTag: 'div',
        nameClass: 'details-left'
      }),
      itemCard = getProductItem.getProductItem({
        nameTag: 'div',
        nameClass: 'card'
      }),
      swiperSlide = getProductItem.getProductItem({
        nameTag: 'div',
        nameClass: 'swiper-slide'
      }),
      aboutCard = getProductItem.getProductItem({
        nameTag: 'div',
        nameClass: 'card-about'
      }),
      imgBox = getProductItem.getProductItem({
        nameTag: 'div',
        nameClass: 'img-container'
      }),
      moreInfo = getProductItem.getProductItem({
        nameTag: 'div',
        nameClass: 'more-info'
      }),
      itemSort = getProductItem.getProductItem({
        nameTag: 'span',
        nameClass: 'sort',
        contentText: this.catalogAllProducts[i].sort + " | "
      }),
      itemName = getProductItem.getProductItem({
        nameTag: 'h4',
        nameClass: 'name',
        contentText: this.catalogAllProducts[i].name
      }),
      costItem = getProductItem.getProductItem ({
        nameTag: 'div',
        nameClass: 'cost',
      }),
      itemImg = getProductItem.getProductItem ({
        nameTag: 'img',
        nameClass: 'itemImg',
        srcImg: this.catalogAllProducts[i].image
      }),
      itemPrice = getProductItem.getProductItem({
          nameTag: 'div',
          nameClass: 'del',
          contentText: this.catalogAllProducts[i].price + ' $'
      }),
      itemSale = getProductItem.getProductItem({
        nameTag: 'div',
        nameClass: 'now',
        contentText: this.catalogAllProducts[i].newPrice + ' $'
    }),
      itemBrewery = getProductItem.getProductItem({
        nameTag: 'span',
        nameClass: 'brand',
        contentText: this.catalogAllProducts[i].brewery
      }),
      itemVolume = getProductItem.getProductItem({
        nameTag: 'span',
        nameClass: 'ml',
        contentText: this.catalogAllProducts[i].volume + "L"
      }),
      btn = getProductItem.getProductItem({
        nameTag: 'button',
        nameClass: 'btn',
        contentText: activeText,
        id: this.catalogAllProducts[i].id
      }),
      timer = getProductItem.getProductItem({
        nameTag: 'div',
        nameClass: 'timer-of-sale'+ this.catalogAllProducts[i].id + " sale",
      }),
      days = getProductItem.getProductItem({
        nameTag: 'span',
        nameClass: 'days countdown-time'
      }),
      hours = getProductItem.getProductItem({
        nameTag: 'span',
        nameClass: 'hours countdown-time'
      }),
      minutes = getProductItem.getProductItem({
        nameTag: 'span',
        nameClass: 'minutes countdown-time'
      }),
      seconds = getProductItem.getProductItem({
        nameTag: 'span',
        nameClass: 'seconds countdown-time'
      })


      btn.addEventListener('click', function(){
        let id = this.getAttribute('id'),
            result = store.putProduct(id);

            for (let dollars of document.querySelectorAll('.stash-dollars')){
            if(dollars.innerHTML == 0){
              dollars.innerHTML = 0;
            }}


            addSales.containerCounter.innerHTML = result.products.length;

            document.querySelector('.burger-stash-meter').innerHTML = result.products.length;

        if(result.statusProduct){
          this.innerHTML = 'Remove';
          summ += arr.price;
        } else {
          this.innerHTML = 'Add';
          summ -= arr.price;
        }
          for (let dollars of document.querySelectorAll('.stash-dollars')){
          dollars.innerText = summ;}

        localStorage.setItem("howDollars", summ)
        event.stopPropagation();
      })

      if (this.catalogAllProducts[i].newPrice !== ''){
      moreInfo.appendChild(itemSort);
      moreInfo.appendChild(itemVolume);
      costItem.appendChild(itemPrice);
      costItem.appendChild(itemSale);
      timer.appendChild(days);
      timer.appendChild(hours);
      timer.appendChild(minutes);
      timer.appendChild(seconds);
      item.appendChild(itemBrewery);
      item.appendChild(itemName);
      item.appendChild(moreInfo);
      aboutCard.appendChild(item);
      aboutCard.appendChild(costItem);
      aboutCard.appendChild(timer);
      aboutCard.appendChild(btn);
      imgBox.appendChild(itemImg);
      itemCard.appendChild(imgBox);
      itemCard.appendChild(aboutCard);
      swiperSlide.appendChild(itemCard);
      this.containerProducts.append(swiperSlide);
    }
  }



  };
  getProductItem(card){
    let element = document.createElement(card.nameTag);
    if('nameClass' in card){
      element.setAttribute('class', card.nameClass);
    }
    if ('id' in card){
      element.setAttribute('id', card.id);
    }
    if('contentText' in card){
      element.innerText = card.contentText;
    }
    if('srcImg' in card){
      element.src = card.srcImg;
    }
    if ('id' in card){
      element.id = card.id;
    }
    return element;
  };
};

let addSales = new AllProducts('.swipe-to', catalogProducts, '.stash-meter');
console.log(addSales);

export {addSales};
