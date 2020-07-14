import {catalogProducts} from './produts';

function selectsAdd(){
  let style = document.getElementById('style-select'),
      brewery = document.getElementById('brewery-select'),
      styleItem = [],
      breweryItem = [],
      option = new Option('All', 'all');
      style.append(option);
      option.selected = true;
      option = new Option('All', 'all');
      brewery.append(option);
      option.selected = true;
      console.log(style.options);
  catalogProducts.forEach((item) =>{
    styleItem.push(item.sort);
    breweryItem.push(item.brewery);
  })
  styleItem = [...new Set(styleItem)];
  breweryItem = [...new Set(breweryItem)];

  for(let i=0;i<styleItem.length;i++){
    option = new Option(styleItem[i], styleItem[i]);
    style.append(option);
  }
  for(let i=0;i<breweryItem.length;i++){
    option = new Option(breweryItem[i], breweryItem[i]);
    brewery.append(option);
  }
}

export{selectsAdd};
