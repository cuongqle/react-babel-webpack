import {fetchProducts} from './product.service';

export const CategoryStateToPropsBinding = (state) => {
    return {
        products: state.products
    }
}

export const CategoryDispatchToPropsBinding = (dispatch, ownProps) => ({
    fetchProducts: () => fetchProducts().then(dispatch)
})