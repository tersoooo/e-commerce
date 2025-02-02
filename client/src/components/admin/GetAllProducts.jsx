import React, {useState, useEffect} from 'react'
import {getProducts, addProduct, getCategories, updateProduct} from "../../../firebase/firestoreService.js";
import { toast } from 'react-toastify'

export default function GetAllProducts() {

    const [products, setProducts] = useState([]);
    const [loading, setLoading] = useState(true)
    const [addProductModal, setAddProductModal] = useState(false)

    // Ürün ekleme
    const [productName, setProductName] = useState("")
    const [price, setPrice] = useState("")
    const [selectedCategory, setSelectedCategory] = useState('');
    const [imageUrl, setImageUrl] = useState("")
    const [categories, setCategories] = useState([])

    // Edit
    const [editProductModal, setEditProductModal] = useState(false)
    const [selectedProduct, setSelectedProduct] = useState(null)
    const [editName, setEditName] = useState("")
    const [editPrice, setEditPrice] = useState("")
    const [editCategory, setEditCategory] = useState("")
    const [editImageUrl, setEditImageUrl] = useState("")


    useEffect(() => {
        const fetchProducts = async () => {
            try{
                const data = await getProducts();
                setProducts(data);
                console.log("Getirilen ürünler:", data)
            }catch (err){
                console.error("Ürünler alınırken hata oluştu:", err);
            }
            setLoading(false)
        }

        fetchProducts();
    }, []);

    useEffect(() => {
        const fetchCategories = async () => {
            try{
                const catData = await getCategories();
                setCategories(catData);
                if(catData.length > 0){
                    setSelectedCategory(catData[0].name)
                }
            }catch (err){
                console.error("Kategoriler alınırken hata oluştu:", err);
            }
        }
        fetchCategories();
    }, []);

    const handleAddProduct = async (e) => {
        e.preventDefault();
        if (!productName.trim() || !price || !selectedCategory || !imageUrl.trim()) {
            toast.error("Lütfen tüm alanları doldurun!");
            return;
        }
        setLoading(true)
        try{
            await addProduct({
                name: productName.trim(),
                price: parseFloat(price),
                category: selectedCategory,
                imageUrl: imageUrl.trim(),
            });
            toast.success("Ürün başarıyla eklendi!");
            setProductName('');
            setPrice('');
            setImageUrl('');
            setAddProductModal(false);
            const data = await getProducts();
            setProducts(data);
        }catch (err) {
            toast.error("Ürün eklenirken hata oluştu!");
        }
        setLoading(false);
    }

    const handleEdit = (product) => {
        setSelectedProduct(product)
        setEditPrice(product.price)
        setEditName(product.name)
        setEditCategory(product.category)
        setEditImageUrl(product.imageUrl)
        setEditProductModal(true);
    }

    const handleUpdateProduct = async (e) => {
        e.preventDefault();
        if (!editName.trim() || !editPrice || !editCategory || !editImageUrl.trim()) {
            toast.error("Lütfen tüm alanları doldurun!");
            return;
        }
        setLoading(true);
        try{
            await updateProduct(selectedProduct.id, {
                name: editName.trim(),
                price: parseFloat(editPrice),
                category: editCategory,
                imageUrl: editImageUrl,
            });
            toast.success("Ürün başarıyla güncellendi")
            const data = await getProducts();
            setProducts(data);
            setEditProductModal(false)
            setSelectedProduct(null)
        }catch (err){
            toast.error("Ürün güncellenirken hata oluştu!");
        }
        setLoading(false);
    }


    if (loading) return <p className="text-center mt-5">Yükleniyor...</p>;


    return (
        <section className="p-4">
            <h2 className="text-xl font-semibold mb-4">Ürünler</h2>
            <div className="flex justify-end mb-4">
                <button
                    className="bg-zinc-100 text-blue-600 hover:underline hover:bg-transparent transition-colors cursor-pointer px-4 py-2 rounded"
                    onClick={() => setAddProductModal(true)}
                >
                    Add New Product
                </button>
            </div>
            {addProductModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h3 className="text-lg font-medium mb-4">Ürün Ekle</h3>
                        <form onSubmit={handleAddProduct} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Ürün Adı"
                                value={productName}
                                onChange={(e) => setProductName(e.target.value)}
                                className="w-full border border-gray-200 px-3 py-2 rounded"
                            />
                            <input
                                type="number"
                                placeholder="Fiyat"
                                value={price}
                                onChange={(e) => setPrice(e.target.value)}
                                className="w-full border border-gray-200 px-3 py-2 rounded"
                            />
                            <select
                                value={selectedCategory}
                                onChange={(e) => setSelectedCategory(e.target.value)}
                                className="w-full border border-gray-200 px-3 py-2 rounded"
                            >
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.name}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                placeholder="Resim URL"
                                value={imageUrl}
                                onChange={(e) => setImageUrl(e.target.value)}
                                className="w-full border border-gray-200 px-3 py-2 rounded"
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setAddProductModal(false)}
                                    className="px-4 py-2 bg-zinc-100 text-black font-medium text-sm hover:bg-transparent transition-colors cursor-pointer rounded"
                                >
                                    X
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-zinc-100 text-black font-medium text-sm hover:bg-transparent transition-colors cursor-pointer rounded"
                                >
                                    Add
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            {editProductModal && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70">
                    <div className="bg-white p-6 rounded-lg w-96">
                        <h3 className="text-lg font-medium mb-4">Ürün Düzenle</h3>
                        <form onSubmit={handleUpdateProduct} className="space-y-4">
                            <input
                                type="text"
                                placeholder="Ürün Adı"
                                value={editName}
                                onChange={(e) => setEditName(e.target.value)}
                                className="w-full border border-gray-200 px-3 py-2 rounded"
                            />
                            <input
                                type="number"
                                placeholder="Fiyat"
                                value={editPrice}
                                onChange={(e) => setEditPrice(e.target.value)}
                                className="w-full border border-gray-200 px-3 py-2 rounded"
                            />
                            <select
                                value={editCategory}
                                onChange={(e) => setEditCategory(e.target.value)}
                                className="w-full border border-gray-200 px-3 py-2 rounded"
                            >
                                {categories.map((cat) => (
                                    <option key={cat.id} value={cat.name}>
                                        {cat.name}
                                    </option>
                                ))}
                            </select>
                            <input
                                type="text"
                                placeholder="Resim URL"
                                value={editImageUrl}
                                onChange={(e) => setEditImageUrl(e.target.value)}
                                className="w-full border border-gray-200 px-3 py-2 rounded"
                            />
                            <div className="flex justify-end space-x-2">
                                <button
                                    type="button"
                                    onClick={() => setEditProductModal(false)}
                                    className="px-4 py-2 bg-zinc-100 text-black font-medium text-sm hover:bg-transparent transition-colors cursor-pointer rounded"
                                >
                                    X
                                </button>
                                <button
                                    type="submit"
                                    className="px-4 py-2 bg-zinc-100 text-black font-medium text-sm hover:bg-transparent transition-colors cursor-pointer rounded"
                                >
                                    Update
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            )}
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Ürün
                        Adı
                    </th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Fiyat</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Kategori</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Resim</th>
                    <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"></th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {products.map((product) => (
                    <tr key={product.id}>
                        <td className="px-6 py-4 whitespace-nowrap">{product.name}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{product.price}</td>
                        <td className="px-6 py-4 whitespace-nowrap">{product.category}</td>
                        <td className="px-6 py-4 whitespace-nowrap">
                            <img
                                src={product.imageUrl}
                                alt={product.name}
                                className="w-16 h-16 object-cover"
                            />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap space-x-2">
                            <button
                                onClick={() => handleEdit(product)}
                                className="px-3 rounded py-0.5 bg-zinc-100 text-black cursor-pointer hover:bg-transparent hover:underline transition-all">Edit
                            </button>
                            <button
                                className="bg-zinc-100 px-2 py-0.5 rounded text-red-600 cursor-pointer hover:bg-transparent hover:underline transition-all">Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </section>
    )
}
