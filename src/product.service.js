import 'whatwg-fetch';

export const FETCH_PRODUCTS_SUCCESS = 'FETCH_PRODUCTS_SUCCESS';
export const FETCH_PRODUCTS_ERROR = 'FETCH_PRODUCTS_ERROR';

function fetchProductsSuccess(response) {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        products: response
    };
}

function  fetchProductsError(error) {
    return {
        type: FETCH_PRODUCTS_ERROR,
        error: error
    };
}

function checkStatus(response, onSuccess, onError) {
    switch (response.status) {
        case 200:
            var resp = response.json();
            return resp.then(onSuccess);
        case 404:
            return onError('Not found');
    }
}

export function fetchProducts() {
    var url = 'http://localhost:1234/products';
    var options = {
        credentials: "include",
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    };

    return fetch(url, options)
            .then(data => checkStatus(data, fetchProductsSuccess, fetchProductsError));
}