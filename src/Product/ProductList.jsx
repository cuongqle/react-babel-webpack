import React from 'react';
import ProductRow from './ProductRow.jsx';
import {map, filter} from 'lodash';

export default class ProductList extends React.Component {
    render() {
        let filteredProducts = this.props.products;
        if (this.props.inStock) {
            filteredProducts = filter(filteredProducts, (p) => { return p.stocked });
        }
        return (
            <table>
                <thead>
                    <tr>
                        <th>Category</th>
                        <th>Price</th>
                        <th>In stock</th>
                        <th>Name</th>
                    </tr>
                </thead>
                <tbody>
                {
                    map(filteredProducts, (p, i) => {
                        return <ProductRow key={i} product={p}></ProductRow>
                    })
                }
                </tbody>
            </table>
        )
    }
}