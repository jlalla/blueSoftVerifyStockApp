import base64 from 'react-native-base64';

const url = 'http://API-BLUESOFT/rest/api';

export function getStockByProduct(company, password, product){      
  return fetch(url + '/stock/' + product,{
      headers: new Headers({'Authorization': 'Basic ' + base64.encode(company + ":" + password)})
    })
    .then(response => response.json())      
    .catch((error) => console.error(error));
}

export function getStockByProductSizeColor(company, password, product, size, color){  
    return fetch(url + '/stock/' + product + '/' + size + '/' + color,{
        headers: new Headers({'Authorization': 'Basic ' + base64.encode(company + ":" + password)})
    })
    .then(response => response.json())      
    .catch((error) => console.error(error));
}