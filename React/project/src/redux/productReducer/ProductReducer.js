const initState = [
    cartData = []
]

export const productReducer = (state=initState,action) => {
        console.log(action);
        
        switch(action.type){
            case 'ADD_TO_CART' :
                return {}
            case 'REMOVE_FROM_CART' :
                return {}
            default :return state
        }
}