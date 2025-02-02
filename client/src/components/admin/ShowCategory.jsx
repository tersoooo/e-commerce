import React, { useState, useEffect } from "react";
import { getCategories } from "../../../firebase/firestoreService.js";

export default function ShowCategory() {
    const [categories, setCategories] = useState([]);
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

    if (loading) return <p className="text-center mt-5">Yükleniyor...</p>;

    return (
        <section className="">
            <h2 className="text-lg font-medium text-gray-800 mt-6 px-2">Category</h2>

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
                                                    onClick={() => handleEdit(category.id)}
                                                    className="px-2 py-1 text-gray-800 hover:bg-transparent transition-colors cursor-pointer font-medium rounded hover:underline bg-zinc-100"
                                                >
                                                    Edit
                                                </button>
                                                <button
                                                    onClick={() => deleteCategory(category.id)}
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
