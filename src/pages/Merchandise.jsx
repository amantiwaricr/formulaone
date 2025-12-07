import { useState } from 'react';
import ProductCard from '../components/ProductCard';
import { products } from '../data/productsData';
import './Merchandise.css';

function Merchandise() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Apparel', 'Accessories', 'Merchandise', 'Collectibles'];

  const filteredProducts = selectedCategory === 'All'
    ? products
    : products.filter(p => p.category === selectedCategory);

  return (
    <div className="merchandise">
      <div className="merch-hero">
        <h1>F1 Elite Shop</h1>
        <p>Exclusive merchandise and team apparel</p>
      </div>

      <div className="merch-container">
        <div className="filters">
          <h3>Categories</h3>
          <div className="category-buttons">
            {categories.map(category => (
              <button
                key={category}
                className={`category-btn ${selectedCategory === category ? 'active' : ''}`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="products-section">
          <div className="products-header">
            <h2>{selectedCategory === 'All' ? 'All Products' : selectedCategory}</h2>
            <p className="product-count">{filteredProducts.length} items</p>
          </div>

          <div className="products-grid">
            {filteredProducts.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {filteredProducts.length === 0 && (
            <div className="no-products">
              <p>No products found in this category.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Merchandise;
