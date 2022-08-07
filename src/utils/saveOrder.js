import { addDoc, collection, doc, getDoc, writeBatch } from "firebase/firestore"
import { db } from "../firebase/config"

const saveOrder = async (cart, order) => {    
    const batch = writeBatch(db)
    
    const productsUpdated = cart.map(async (productAddedToCart) => {
        const documentSnapshot = await getDoc(doc(db, 'products', productAddedToCart.id));
        const product = {...documentSnapshot.data(), id: documentSnapshot.id};

        return batch.update(doc(db, 'products', product.id) ,{
            stock: product.stock - productAddedToCart.addedProducts
        });
    });
    await Promise.all(productsUpdated);

    const newOrder = await addDoc(collection(db, 'orders'), order);
    batch.commit();
    return newOrder;
}

export default saveOrder;