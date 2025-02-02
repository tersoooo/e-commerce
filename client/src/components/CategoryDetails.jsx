import React, { useEffect, useState } from "react";
import Filter from "./Filter.jsx";
import Products from "./Products.jsx";
import { getProductByCategory } from "../../firebase/firestoreService.js";
import { useParams } from "react-router-dom";
import { slugToNormal } from "../utils/helper.js";

export default function CategoryDetails() {
    const { categoryName } = useParams();
    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true);

    const [filters, setFilters] = useState({
        size: [],
        color: [],
        features: [],
        lining: [],
        pattern: [],
    });

    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const normalCategoryName = slugToNormal(categoryName);
                const data = await getProductByCategory(normalCategoryName);
                setProducts(data);
            } catch (err) {
                console.error("Ürünleri çekerken hata oluştu:", err);
            }
            setLoading(false); // ✅ Yükleme tamamlandı
        };
        fetchProducts();
    }, [categoryName]);

    if (loading) return <p className="text-center mt-5">Yükleniyor...</p>;

    return (
        <div className="flex">
            <Filter filters={filters} setFilters={setFilters} />
            <section className="container mx-auto px-4">
                <h2 className="text-2xl font-bold text-gray-800 mt-6 mb-4">{slugToNormal(categoryName)}</h2>

                {products.length > 0 ? (
                    <div className="grid grid-cols-4 gap-6">
                        {products.map((product) => (
                            <div key={product.id} className="border p-4 rounded-lg shadow-md">
                                <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover rounded" />
                                <h3 className="text-lg font-semibold mt-2">{product.name}</h3>
                                <p className="text-gray-600">₺{product.price}</p>
                            </div>
                        ))}
                    </div>
                ) : (
                    <p className="text-center text-gray-500">Bu kategoriye ait ürün bulunmamaktadır.</p>
                )}
            </section>
        </div>
    );
}
