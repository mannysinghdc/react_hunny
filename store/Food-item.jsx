import { createContext, useState } from "react";

export const FoodContext = createContext()

const FoodContextProvider = ({ children }) => {
    const [food, setFood] = useState([])

    const onKeyDownAdd = (e) => {
        if (e.key == 'Enter' && e.target.value) {
            const newAddFood = { id: food.length, elm: e.target.value }
            setFood([newAddFood, ...food])
            alert(`${e.target.value} has been added`)
            e.target.value = ""
        }

    }

    //Delete funtionility
    const deleteFoodItem = (id) => {
        if (id !== undefined) {
            if (confirm("Are you sure want to delete this food item?")) {
                const deleteFood = food.filter((item) => item.id !== id)
                setFood(deleteFood)
            }
        }

    }

    return <FoodContext.Provider value={{ food, setFood, onKeyDownAdd, deleteFoodItem }}>
        {children}
    </FoodContext.Provider>
}

export default FoodContextProvider