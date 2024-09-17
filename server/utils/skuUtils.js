function generateRandomSKU(length) {  
    let sku = '';  
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';  
    for (let i = 0; i < length; i++) {  
      sku += characters.charAt(Math.floor(Math.random() * characters.length));  
    }  
    return sku;  
  }  

  module.exports = generateRandomSKU;