import {catalogProducts} from './produts';

class GetProductItem{
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
}

let getProductItem = new GetProductItem('.stash-meter', catalogProducts)

export{getProductItem};
