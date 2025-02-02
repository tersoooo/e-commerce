import React, {useState} from 'react'
import { addCategory, addProduct } from "../../../firebase/firestoreService.js";

export default function CategoryProductForm() {

    const [categoryName, setCategoryName] = useState("");
    const [product, setProduct] = useState(
        {
            name: "",
            price: "",
            category: "",
            imageUrl: "",

        }
    )

    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        if (categoryName){
            await addCategory(categoryName);
            setCategoryName("");
        }
    }

    const handleProductSubmit = async (e) => {
        e.preventDefault();
        if (product.name && product.price && product.category){
            await addProduct(product)
            setProduct({ name: "", price: "", category: "", imageUrl: "" });
        }
    }
    
    return (
        <div>

            <h2>Ürün Ekle</h2>
            <form onSubmit={handleProductSubmit}>
                <input
                    type="text"
                    placeholder="Ürün Adı"
                    value={product.name}
                    onChange={(e) => setProduct({...product, name: e.target.value})}
                />
                <input
                    type="number"
                    placeholder="Fiyat"
                    value={product.price}
                    onChange={(e) => setProduct({...product, price: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Kategori (ID veya Adı)"
                    value={product.category}
                    onChange={(e) => setProduct({...product, category: e.target.value})}
                />
                <input
                    type="text"
                    placeholder="Resim URL"
                    value={product.imageUrl}
                    onChange={(e) => setProduct({...product, imageUrl: e.target.value})}
                />
                <button type="submit">Ekle</button>
            </form>
        </div>
    )
}
