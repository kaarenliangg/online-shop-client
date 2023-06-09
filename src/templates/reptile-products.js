import React , { useState } from "react";
import { Link } from "gatsby";
import ProductFilter from "../components/product-filter";

const ReptileProductsTemplate = ({ pageContext }) => {
    const { reptileProducts } = pageContext;

    const [filteredProducts, setFilteredProducts] = useState(reptileProducts);

    const applyFilters = (updatedProducts) => {
        setFilteredProducts(updatedProducts);
    };

    return (
        <div className="container mx-auto">
            <h1>Reptile Products</h1>
            <ProductFilter products={reptileProducts} onApplyFilters={applyFilters} />
            <div className="bg-white place-content-center grid grid-cols-4 gap-4">
                {filteredProducts.length > 0 ? (
                    filteredProducts.map(product => (
                        <div key={product.id}>
                            <Link to={`/product/${product.id}`}>
                                <figure className="px-10 pt-10 w-100 h-100">
                                    <img src={`http://localhost:3000${product.image}`} alt={product.product_name} className="w-full h-60 object-cover" />
                                </figure>
                                <h2 className="card-title text-black">{product.product_name}</h2>
                                <p className="badge badge-secondary">${ product.retail_price }</p>
                                <div className="card-actions">
                                    <button className="btn btn-primary">Add to Cart</button>
                                </div>
                            </Link>
                        </div>
                    ))
                ) : (
                    <h2>No Items Found</h2>
                )}
            </div>
        </div>
    );
};

export default ReptileProductsTemplate;
