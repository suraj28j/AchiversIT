import { ACTION_TYPE } from "../type/actionType"

export const addToCart = (product) => {
        return {type:ACTION_TYPE.ADD_TO_CART,payload:product}
}
export const removeFromCart = (id) => {
    return {type:ACTION_TYPE.REMOVE_FROM_CART,payload:id}
}

export const setDecrement = (id) => {
    return {type:ACTION_TYPE.SET_DECREMENT,payload:id}
}