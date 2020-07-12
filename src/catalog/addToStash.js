class Store{
  constructor(){

  }

  getProducts(){
    let products = [],
        productsLcStorage = localStorage.getItem('StashProducts');

    if (productsLcStorage !== null){
      products = JSON.parse(productsLcStorage);
    }

    return products;
  }

  putProduct(id){
    let products = this.getProducts(),
        index = products.indexOf(id),
        statusProduct;

    if(index === -1){
      products.push(id);
      statusProduct = true;
    } else{
      products.splice(index, 1);
      statusProduct = false;
    }

    localStorage.setItem('StashProducts', JSON.stringify(products));

    return {
      products: products,
      statusProduct: statusProduct
    }
  }
}


let store = new Store();

export {store};
