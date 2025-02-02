import React, {useState} from 'react'
import {addCategory} from "../../../firebase/firestoreService.js";
import {toast} from 'react-toastify';
export default function AddCategory() {

    const [categoryName, setCategoryName] = useState("");
    const [loading, setLoading] = useState(false);

    const handleCategorySubmit = async (e) => {
        e.preventDefault();
        if(!categoryName) return;
        setLoading(true);
        if (categoryName){
           try{
               await addCategory(categoryName);
               toast.success("Kategori başarıyla eklendi!");
               setCategoryName("");
           }catch (error) {
               toast.error("Kategori eklenirken hata oluştu!");
           }
           setLoading(false)
        }
    }

    return (
        <div className="w-2/3 container mx-auto">
            <h2 className="text-2xl font-semibold mt-5">Kategori Ekle</h2>
            <form
                onSubmit={handleCategorySubmit}
                className="flex flex-col gap-y-2"
            >
                <input
                    type="text"
                    placeholder="Kategori Adı"
                    value={categoryName}
                    onChange={(e) => setCategoryName(e.target.value)}
                    className="border px-4 rounded border-gray-200 text-base"
                    disabled={loading}
                />
                <button
                    type="submit"
                    className="bg-zinc-100 px-2 rounded text-base font-medium py-1 border border-zinc-200"
                    disabled={loading}
                >
                    {loading ? (
                        <button
                            type="submit"
                            className="h-5 w-5 border-2 border-blue-500 border-t-transparent rounded-full animate-spin"></button>

                    ) : (
                        "Ekle"
                    )}
                </button>
            </form>
        </div>
    )
}
