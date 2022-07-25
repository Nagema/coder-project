import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"

const saveOrder = (cart, order) => {    
    const batch = writeBatch(db)
    const outOfStock = []
    
    cart.forEach((productAddedToCart) => {
        getDoc(doc(db, 'products', productAddedToCart.id))
        .then(async (documentSnapshot) => {
            const product = {...documentSnapshot.data(), id: documentSnapshot.id};
            if (product.stock >= productAddedToCart.addedProducts) {
                batch.update(doc(db, 'products', product.id) ,{
                    stock: product.stock - productAddedToCart.addedProducts
                })
            } else {
                outOfStock.push(product)
            }
            if (outOfStock.length === 0) {
                addDoc(collection(db, 'orders'), order).then(({ id }) => {
                    batch.commit().then(() => {
                        alert("Generated order: " + id)
                    })
                }).catch(() => {
                  //nope
                })
            } else {
                let message = ''
                for (const product of outOfStock) {
                    message += `${product.title}`
                }
                alert(`Out of stock: ${message}`)
            }
        })
    })
}

export default saveOrder;