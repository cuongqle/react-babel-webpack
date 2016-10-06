import React from 'react';

export default class SearchBar extends React.Component {

    onHandleChange() {
        this.props.onInstockChange(this.refs.inStockOnlyInput.checked);
    }

    render() {
        return(
            <div>
                <input type="checkbox" ref="inStockOnlyInput" onChange={::this.onHandleChange}/>Only show products in stock
            </div>
        )
    }
}