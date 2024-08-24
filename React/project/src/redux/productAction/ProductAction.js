import { ACTION_TYPE } from "../type/actionType"

export const add_to_cart = (product) => {
        return {type:ACTION_TYPE.ADD_TO_CART,payload:product}
}
export const remove_from_cart = (id) => {
    return {type:ACTION_TYPE.REMOVE_FROM_CART,payload:id}
}