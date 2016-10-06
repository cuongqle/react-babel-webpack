import React from 'react';

export default class ProductRow extends React.Component {

    render() {
        let product = this.props.product;
        return (
            <tr>
                <td>{product.category}</td>
                <td>{product.price}</td>
                <td>
                    <input type="checkbox" checked={product.stocked} disabled/>
                </td>
                <td>{product.name}</td>
            </tr>
        )
    }
}