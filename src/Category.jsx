import React from 'react';
import SearchBar from './SearchBar.jsx';
import ProductList from './Product/ProductList.jsx';
import {connect} from 'react-redux';
import {CategoryStateToPropsBinding, CategoryDispatchToPropsBinding} from "./Category.bindings.jsx";

@connect(CategoryStateToPropsBinding, CategoryDispatchToPropsBinding)
export default class Category extends React.Component {
    state = {
        inStock: false
    };

    componentWillMount() {
        this.props.fetchProducts();
    }

    onInstockChange(instock) {
        this.setState({
           inStock: instock
        });
    }

    render() {
        return (
            <div>
                <SearchBar onInstockChange={::this.onInstockChange}></SearchBar>
                <ProductList inStock={this.state.inStock} products={this.props.products}></ProductList>
            </div>
        )
    }
}