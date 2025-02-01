import React from 'react'

export default function Filter({ filters, setFilters }) {

    const handleFilterChange = (category, value) => {
        setFilters((prevFilters) => {
            const updatedFilters = { ...prevFilters };

            if (updatedFilters[category].includes(value)) {
                updatedFilters[category] = updatedFilters[category].filter((item) => item !== value);
            } else {
                updatedFilters[category] = [...updatedFilters[category], value];
            }

            return updatedFilters;
        });
    };

    return (
        <div className="w-64 h-screen bg-zinc-100 p-4">
            <h2 className="text-xl font-bold mb-4">Filtreler</h2>
            <div className="mb-4">
                <h3 className="font-semibold">Beden</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {["S", "M", "L", "XL"].map((size) => (
                        <label key={size} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                onChange={() => handleFilterChange("size", size)}
                                checked={filters.size.includes(size)}
                            />
                            <span>{size}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold">Renk</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                    {["Kırmızı", "Mavi", "Yeşil", "Siyah"].map((color) => (
                        <label key={color} className="flex items-center space-x-2">
                            <input
                                type="checkbox"
                                onChange={() => handleFilterChange("color", color)}
                                checked={filters.color.includes(color)}
                            />
                            <span>{color}</span>
                        </label>
                    ))}
                </div>
            </div>
            <div className="mb-4">
                <h3 className="font-semibold">Filtreler</h3>
                {["İndirimli", "Yeni Ürünler", "Ücretsiz Kargo"].map((feature) => (
                    <label key={feature} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            onChange={() => handleFilterChange("features", feature)}
                            checked={filters.features.includes(feature)}
                        />
                        <span>{feature}</span>
                    </label>
                ))}
            </div>

            {/* Astar */}
            <div className="mb-4">
                <h3 className="font-semibold">Astar</h3>
                {["Pamuk", "Polyester", "İpek"].map((lining) => (
                    <label key={lining} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            onChange={() => handleFilterChange("lining", lining)}
                            checked={filters.lining.includes(lining)}
                        />
                        <span>{lining}</span>
                    </label>
                ))}
            </div>

            {/* Desen */}
            <div>
                <h3 className="font-semibold">Desen</h3>
                {["Çizgili", "Düz", "Kareli"].map((pattern) => (
                    <label key={pattern} className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            onChange={() => handleFilterChange("pattern", pattern)}
                            checked={filters.pattern.includes(pattern)}
                        />
                        <span>{pattern}</span>
                    </label>
                ))}
            </div>
        </div>
    )
}
