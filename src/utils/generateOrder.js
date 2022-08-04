const generateOrder = (email, name, address, cart, total) =>  {
   return {  
       buyer: {
           email: email,
           name: name,
           address: address, 
        },
        items: cart,
        total: total,
        createdAt: new Date().toLocaleString()
    }    
}

export default generateOrder