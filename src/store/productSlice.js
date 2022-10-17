const {createSlice} = require("@reduxjs/toolkit")
const productSlice = createSlice({
    name: "product",
    initialState:localStorage.getItem("productData") ? JSON.parse(localStorage.getItem("productData")) : [],
    reducers: {
        add(state, action){
            state.pop()
            state.push(action.payload)
            localStorage.setItem("productData", JSON.stringify(state))
        }
    }
})

export const {add, remove} = productSlice.actions;
export default productSlice.reducer;
