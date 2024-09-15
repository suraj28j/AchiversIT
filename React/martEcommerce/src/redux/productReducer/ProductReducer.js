const initState = {
    cartData: [],
    products: []
}

export const productReducer = (state = initState, action) => {
    // console.log(action);        
    switch (action.type) {
        case 'ADD_TO_CART':
            let findItem = state.cartData.find((item) => {
                return item.id === action.payload.id
            })
            if (findItem) {
                findItem.quantity = findItem.quantity + 1;
                return {
                    ...state, cartData: [...state.cartData]
                }
            } else {
                action.payload.quantity = 1;
                return {
                    ...state, cartData: [...state.cartData, action.payload]
                }
            }

        case 'REMOVE_FROM_CART':
            let filterItem = state.cartData.filter((item) => {
                return item.id !== action.payload
            })
            return {
                ...state, cartData: filterItem
            }

        case 'SET_DECREMENT':
            let itemForDecrement = state.cartData.find((item) => {
                return item.id === action.payload;
            })
            itemForDecrement.quantity = itemForDecrement.quantity > 1 ? itemForDecrement.quantity - 1 : 1;
            return {
                ...state, cartData: [...state.cartData]
            }
        default: return state
    }
}