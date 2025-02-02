import {db} from './firebaseConfig.js';
import {
    collection,
    addDoc,
    getDocs,
    updateDoc,
    doc,
    deleteDoc,
    query,
    where,
    orderBy
} from 'firebase/firestore';

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
    const q = query(
        collection(db, "categories"),
        orderBy("createdAt", "desc")
    );
    const querySnapshot = await getDocs(q);
    return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
}

export const updateCategory = async (categoryId, newData) => {
    try{
        const categoryRef = doc(db, "categories", categoryId);
        await updateDoc(categoryRef, newData)
        console.log('Kategori Güncellendi', categoryId);
    }catch (err){
        console.log('Kategori güncellenirken bir hata oluştu!', err)
    }
}

export const deleteCategory = async (categoryId) => {
    try{
        const categoryRef = doc(db, 'categories', categoryId);
        await deleteDoc(categoryRef);
    }catch (err){
        console.log('Kategori silinirken bir sorun oluştu!', err);
    }
}

export const getProductByCategory = async (categoryName) => {
    try {
        const q = query(
            collection(db, "product"),
            where("category", "==", categoryName),
            orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (err) {
        console.error("Kategoriye ait ürünler alınamadı:", err);
        throw err;
    }
}

export const getProducts = async () => {
    try {
        const q = query(
            collection(db, 'product'),
            orderBy("createdAt", "desc")
        );
        const querySnapshot = await getDocs(q);
        return querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    } catch (err) {
        console.log('Ürünler çekilirken bir sorun oluştu!', err);
        throw err;
    }
}