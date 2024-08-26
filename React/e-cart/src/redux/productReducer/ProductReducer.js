const initState = {
    cartData:[]
}
export const productReducer = (state=initState,action) => {
    // console.log(action);
    
    switch(action.type){
        case 'ADD_TO_CART':
            const checkItem = state.cartData.find((item)=>{
                return item.id === action.payload.id;
            })
            if(checkItem){
                checkItem.quantity = checkItem.quantity+1;
                return{
                    ...state, cartData:[...state.cartData]
                }
            }
            else{
                action.payload.quantity = 1;
                return{
                    ...state,cartData:[...state.cartData,action.payload]
                }
            }
            
        case 'REMOVE_FROM_CART':
            let findItem = state.cartData.filter((item)=>{
                return item.id !== action.payload
            })
                return{
                   ...state,cartData:findItem
                }
        case 'SET_DECREMENT':
            let itemForDecrement = state.cartData.find((item)=>{
                return item.id === action.payload
            })
            if(itemForDecrement){
                itemForDecrement.quantity = itemForDecrement.quantity > 1 ? itemForDecrement.quantity-1 : 1;
            }
            return {
                ...state,cartData:[...state.cartData]
            }
        default:return state
    }
}