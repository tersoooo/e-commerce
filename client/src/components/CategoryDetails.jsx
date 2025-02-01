import React, {useState} from 'react'
import Filter from "./Filter.jsx";
import Products from "./Products.jsx";
import { useParams } from 'react-router-dom';

export default function CategoryDetails() {

    const { categoryName } = useParams()

    const [filters, setFilters] = useState({
        size: [],
        color: [],
        features: [],
        lining: [],
        pattern: [],
    });

    return (
        <div className="flex">
            <Filter filters={filters} setFilters={setFilters} />
            <div className="flex-1 p-6">
                <h1>Ürünler</h1>
                <Products filters={filters} />
            </div>
        </div>
    )
}
