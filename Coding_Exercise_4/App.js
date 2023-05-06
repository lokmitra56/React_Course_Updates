import React from 'react';

import Product from './Product';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    
    const items = [
        {
            Title: "Product 1",
            Price: 10,
            Description: "First product"
        },
        {
            Title: "Product 2",
            Price: 20,
            Description: "Second product"
        }
        ];
    
    return (
        <div>
            <Product 
            title = {items[0].Title} 
            price = {items[0].Price}
            description = {items[0].Description}>
            </Product>
            
            <Product 
            title = {items[1].Title} 
            price = {items[1].Price}
            description = {items[1].Description}>
            </Product>
        </div>
    );
}
