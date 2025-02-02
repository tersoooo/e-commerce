import React, {useState, useEffect} from "react";
import {getCategories, updateCategory,deleteCategory} from "../../../firebase/firestoreService.js";
import {toast} from "react-toastify";

export default function ShowCategory() {

    const [categories, setCategories] = useState([]);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [updateName, setUpdateName] = useState("")
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const data = await getCategories();
                setCategories(data);
            } catch (error) {
                console.error("Kategorileri çekerken hata oluştu:", error);
            }
            setLoading(false);
        };
        fetchCategories();
    }, []);

    const handleEdit = (category) => {
        setSelectedCategory(category);
        setUpdateName(category.name);
        setIsModalOpen(true);
    }

    const handleUpdate = async () => {
        if (!updateName.trim()) {
            toast.error("Kategori adı boş olamaz!");
            return;
        }

        try {
            await updateCategory(selectedCategory.id, { name: updateName.trim() });

            setCategories(prevCategories =>
                prevCategories.map(cat => cat.id === selectedCategory.id ? { ...cat, name: updateName } : cat)
            );

            toast.success("Kategori başarıyla güncellendi!");
            setIsModalOpen(false);
        } catch (error) {
            toast.error("Güncelleme başarısız!");
        }
    };

    const handleDelete = async (categoryId) => {
        if(!window.confirm("Silmek istediğine emin misin?")) return;

        try{
            await deleteCategory(categoryId);
            setCategories(prevCategories => prevCategories.filter(cat => cat.id !== categoryId));
            toast.success('Kategori silindi!')
        }catch (err){
            console.log('Kategori silinirken bir sorun oluştu!', err)
        }
    }

    if (loading) return <p className="text-center mt-5">Yükleniyor...</p>;

    return (
        <section className="">
            <h2 className="text-lg font-medium text-gray-800 mt-6 px-2">Category</h2>

            {isModalOpen && (
                <div className="fixed inset-0 flex items-center justify-center bg-black/70 bg-opacity-50">
                    <div className="bg-white p-6 rounded-lg shadow-lg w-96">
                        <h2 className="text-lg font-semibold mb-4">Edit Category</h2>
                        <input
                            type="text"
                            value={updateName}
                            onChange={(e) => setUpdateName(e.target.value)}
                            className="border px-4 py-2 w-full rounded mb-4"
                        />
                        <div className="flex justify-end space-x-2">
                            <button
                                onClick={() => setIsModalOpen(false)}
                                className="px-4 py-2 bg-gray-300 rounded"
                            >
                                X
                            </button>
                            <button
                                onClick={handleUpdate}
                                className="px-4 py-2 bg-zinc-100 text-black cursor-pointer hover:bg-transparent rounded transition-colors border border-gray-200"
                            >
                                Update
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="flex flex-col mt-6">
                <div className="-mx-4 -my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
                    <div className="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8">
                        <div className="border border-gray-200 md:rounded-lg">
                            <table className="w-full border-collapse border border-gray-200">
                                <thead className="bg-gray-50">
                                <tr>
                                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                        Category Name
                                    </th>
                                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                        Category Created At
                                    </th>
                                    <th className="px-4 py-3.5 text-sm font-normal text-left text-gray-500">
                                        Options
                                    </th>
                                </tr>
                                </thead>
                                <tbody className="bg-white divide-y divide-gray-200">
                                {categories.length > 0 ? (
                                    categories.map((category) => (
                                        <tr key={category.id}>
                                            <td className="px-4 py-4 text-sm font-medium text-gray-800">
                                                {category.name}
                                            </td>
                                            <td className="px-4 py-4 text-sm text-gray-600">
                                                {category.createdAt?.toDate().toLocaleDateString() || "-"}
                                            </td>
                                            <td className="px-4 py-4 text-sm whitespace-nowrap space-x-4">
                                                <button
                                                    onClick={() => handleEdit(category)}
                                                    className="px-2 py-1 text-gray-800 hover:bg-transparent transition-colors cursor-pointer font-medium rounded hover:underline bg-zinc-100"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => handleDelete(category.id)}
                                                    className="px-2 py-1 text-red-600 hover:bg-transparent transition-colors cursor-pointer font-medium rounded hover:underline bg-zinc-100"
                                                >
                                                    Delete
                                                </button>
                                            </td>
                                        </tr>
                                    ))
                                ) : (
                                    <tr>
                                        <td colSpan="3" className="px-4 py-4 text-center text-gray-500">
                                            Henüz kategori eklenmemiş.
                                        </td>
                                    </tr>
                                )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
