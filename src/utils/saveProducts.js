import { addDoc, collection } from 'firebase/firestore';
import { db } from '../firebase/config';

const saveProducts = async() =>  {
    const response = await fetch('/mocks/data.json');
    const productsToSave = await response.json();

    productsToSave.forEach(async (product) => {
        const docRef = await addDoc(collection(db, "products"), {
            title: product.title,
            price: product.price,
            currency: product.currency,
            description: product.description,
            category: product.category,
            image: product.image,
            stock: product.stock
        })
    });
}

export default saveProducts