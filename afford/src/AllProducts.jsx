import React, { useEffect, useState } from 'react';
import axios from 'axios';

const AllProducts = () => {
    const [products, setProducts] = useState([]);
    const [selectedCompany, setSelectedCompany] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('');

    useEffect(() => {
        const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiZXhwIjoxNzEyMTQ4OTM0LCJpYXQiOjE3MTIxNDg2MzQsImlzcyI6IkFmZm9yZG1lZCIsImp0aSI6IjYwYWIyNDZlLTkzNTMtNDBjOC04OTVlLWVkYmM3ODMzNWQxMiIsInN1YiI6ImFzOTg3NUBzcm1pc3QuZWR1LmluIn0sImNvbXBhbnlOYW1lIjoiZ29NYXJ0IiwiY2xpZW50SUQiOiI2MGFiMjQ2ZS05MzUzLTQwYzgtODk1ZS1lZGJjNzgzMzVkMTIiLCJjbGllbnRTZWNyZXQiOiJZSEt0VlVxR2JWUkFtbEVXIiwib3duZXJOYW1lIjoiQXJ5YW4iLCJvd25lckVtYWlsIjoiYXM5ODc1QHNybWlzdC5lZHUuaW4iLCJyb2xsTm8iOiIxIn0.DMTcDzqczGQcB6ulSKukOLeV6wytRuBhklZW_vllvcw";

        const fetchData = async () => {
            try {
                const response = await axios.get(`/test/companies/${selectedCompany}/categories/${selectedCategory}/products`, {
                    params: {
                        top: 'n',
                        minPrice: 'p',
                        maxPrice: 'q'
                    },
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                setProducts(response.data);
            } catch (error) {
                console.error(error);
            }
        };

        if (selectedCompany && selectedCategory) {
            fetchData();
        }
    }, [selectedCompany, selectedCategory]);

    const handleCompanyChange = (event) => {
        setSelectedCompany(event.target.value);
    };

    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">AFFORD medicals E-Commerce website</h1>
            <div className="mb-4">
                <label htmlFor="companies" className="mr-2">Companies:</label>
                <select id="companies" onChange={handleCompanyChange} className="border border-gray-300 rounded px-2 py-1">
                    <option value="AMZ">AMZ</option>
                    <option value="FLP">FLP</option>
                    <option value="SNP">SNP</option>
                    <option value="MYN">MYN</option>
                    <option value="AZO">AZO</option>
                </select>
            </div>
            <div className="mb-4">
                <label htmlFor="categories" className="mr-2">Categories:</label>
                <select id="categories" onChange={handleCategoryChange} className="border border-gray-300 rounded px-2 py-1">
                    <option value="Phone">Phone</option>
                    <option value="Computer">Computer</option>
                    <option value="TV">TV</option>
                    <option value="Earphone">Earphone</option>
                    <option value="Tablet">Tablet</option>
                    <option value="Charger">Charger</option>
                    <option value="Mouse">Mouse</option>
                    <option value="Keypad">Keypad</option>
                    <option value="Bluetooth">Bluetooth</option>
                    <option value="Pendrive">Pendrive</option>
                    <option value="Remote">Remote</option>
                    <option value="Speaker">Speaker</option>
                    <option value="Headset">Headset</option>
                    <option value="Laptop">Laptop</option>
                    <option value="PC">PC</option>
                </select>
            </div>
            <ul>
                {products && products.map((product) => (
                    <li key={product.id}>{product.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default AllProducts;
