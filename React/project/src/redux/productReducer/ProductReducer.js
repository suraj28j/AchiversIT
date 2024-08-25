const initState = {
    cartData : [],
    products : []
}

export const productReducer = (state=initState,action) => {
        // console.log(action);        
        switch(action.type){
            case 'ADD_TO_CART' :
                    return{
                        ...state,cartData:[...state.cartData,action.payload]
                    }
            case 'REMOVE_FROM_CART' :
                let filterItem = state.cartData.filter((item)=>{
                    return  item.id !== action.payload
                })
                return {
                    ...state,cartData:filterItem
                }
            default :return state
        }
}