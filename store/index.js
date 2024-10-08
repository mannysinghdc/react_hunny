import { configureStore, createSlice } from '@reduxjs/toolkit'  //React Redux Counter Store

const INITIAL_VALUE = {
    counter: 15,
    show: false
}

const counterSlice = createSlice({
    name: 'counter',
    initialState: { counterVal: 0 },
    reducers: {
        increment: (state, action) => {

        },
        decrement: (state, action) => {

        },
        addition: (state, action) => {

        },
        substration: (state, action) => {

        },
    },
})

// const reducer = (store = INITIAL_VALUE, action) => {       // Reducer

//     if (action.type === "INCREMENT") {
//         return { ...store, counter: store.counter + 1 }
//     } else if (action.type === "DECREMENT") {
//         return { ...store, counter: store.counter - 1 }

//     } else if (action.type === "ADDITION") {
//         return { ...store, counter: store.counter + Number(action.payload.num) }

//     } else if (action.type === "SUBSTRACTION") {
//         return { ...store, counter: store.counter - action.payload.num }
//     } else if (action.type === "TOGGLE") {
//         return { ...store, show: !store.show }
//     }
//     return store
// }

const CounterStore = configureStore({
    reducer: {
        counter: counterSlice.reducer,
    },
})

export const counterActions = counterSlice.actions
export default CounterStore