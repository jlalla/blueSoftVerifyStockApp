import base64 from 'react-native-base64';

const url = 'http://qreative.eastus.cloudapp.azure.com/restdev/api';

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

export function getStockByProductWithVariants(company, password, product){  
    return fetch(url + '/stock/ConVariantesAgrupadasPorColor/' + product + '?solamenteConStock=true',{
        headers: new Headers({'Authorization': 'Basic ' + base64.encode(company + ":" + password)})
    })
    .then(response => response.json())      
    .catch((error) => console.error(error));
}

export function getBarCodeConfiguration(company, password, product){      
    return fetch(url + '/configuracion/codigoDeBarras',{
        headers: new Headers({'Authorization': 'Basic ' + base64.encode(company + ":" + password)})
      })
      .then(response => response.json())      
      .catch((error) => console.error(error));
  }