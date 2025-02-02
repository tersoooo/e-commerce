import {db} from './firebaseConfig.js';
import {collection, addDoc, getDocs} from 'firebase/firestore';

export const addCategory = async (categoryName) => {
    try {
        const docRef = await addDoc(collection(db, 'categories'), {
            name: categoryName,
            createdAt: new Date(),
        });
        console.log('Kategori Eklendi, ID:', docRef.id)
    } catch (err) {
        console.error('Hata:', err)
    }
}

export const addProduct = async (product) => {
    try{
        const docRef = await addDoc(collection(db, "product"), {
            name: product.name,
            price: product.price,
            category: product.category,
            imageUrl: product.imageUrl,
            createdAt: new Date(),
        });
        console.log("Ürün eklendi, ID:", docRef.id);
    }catch (err){
        console.log("Bir sorun var : ", err);
    }
}

export const getCategories = async () => {
    const querySnapshot = await getDocs(collection(db, "categories"));
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}