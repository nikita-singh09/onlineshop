const {createSlice} = require("@reduxjs/toolkit")

const cartSlice = createSlice({
    name: "cart",
    initialState:localStorage.getItem("cartItems") ? JSON.parse(localStorage.getItem("cartItems")) : [],
    reducers: {
        add(state, action){
            //we should not change data directly
            state.push(action.payload)
            localStorage.setItem("cartItems", JSON.stringify(state));
        },
        remove(state, action){
            return state.filter(item => item._id !== action.payload)
        },
        increaseCart(state, action){
            let itemIndex = state.findIndex(item => item._id === action.payload._id);
            if(itemIndex >= 0){
                let num = (state[itemIndex].qty) += 1
                let tempItem = {...action.payload}
                if(state[itemIndex]._id !== action.payload._id){
                    state.push(tempItem)
                }
                localStorage.setItem("cartItems", JSON.stringify(state));
            }
        },
        decreaseCart(state, action){
            let itemIndex = state.findIndex(item => item._id === action.payload._id);
            let num = (state[itemIndex].qty) -= 1;
            if(itemIndex >= 0 && num >= 0){
                let tempItem = {...action.payload};
                if(state[itemIndex]._id !== action.payload._id){
                    state.push(tempItem)
                }
            }
            else if(itemIndex >= 0 && num < 0){
                state.splice(itemIndex, 1)
            }
            localStorage.setItem("cartItems", JSON.stringify(state));
        },
        emptyCart(state, action){
            let newState = [];
            localStorage.setItem("cartItems", JSON.stringify(newState));
            return newState;
        }
    }
})

export const {add, remove, increaseCart, decreaseCart, emptyCart} = cartSlice.actions;
export default cartSlice.reducer;

//core redux me state directly change ni karte the hum
//reduxtoolkit se hume yeh feature milta h createSlice ka jisse hum directly bhi state ko change kar skate h
