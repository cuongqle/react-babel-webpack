import {FETCH_PRODUCTS_SUCCESS} from './product.service';

let initialState = {
    products: []
};

export default function Category(state = initialState, action)  {
    switch (action.type) {
        case FETCH_PRODUCTS_SUCCESS:
            return {...state, products: action.products }
    }

    return state;
};



