import React from 'react'


const products = [
    { id: 1, name: "Kırmızı Kazak", size: "M", color: "Kırmızı", features: ["İndirimli"] },
    { id: 2, name: "Mavi Jean", size: "L", color: "Mavi", features: ["Yeni Ürünler"] },
    { id: 3, name: "Siyah Mont", size: "XL", color: "Siyah", features: ["Ücretsiz Kargo"] },
];

export default function Products({ filters }) {

    const filteredProducts = products.filter((product) => {
        return (
            (filters.size.length === 0 || filters.size.includes(product.size)) &&
            (filters.color.length === 0 || filters.color.includes(product.color)) &&
            (filters.features.length === 0 || filters.features.some((feature) => product.features.includes(feature)))
        );
    });



    return (
        <div className="grid grid-cols-3 gap-4">
            {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                    <div key={product.id} className="border p-4 rounded-lg shadow">
                        <h2 className="text-lg font-bold">{product.name}</h2>
                        <p>Beden: {product.size}</p>
                        <p>Renk: {product.color}</p>
                    </div>
                ))
            ) : (
                <p className="col-span-3 text-center">Sonuç bulunamadı</p>
            )}
        </div>
    )
}
