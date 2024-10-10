import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import { Provider } from 'react-redux'
import CounterStore from "../store/index"
import { useContext } from "react"
import { ColorContext } from "../store/Color-Item"
import FoodWeb from "./Component/FoowWeb/FoodWeb"
import Social from "./Component/Social/Social"
import Shopping from "./Component/Shopping/Shopping"

const App = () => {
  const { showCmpt } = useContext(ColorContext) //this state is used for chidren cmpt

  const showCmptValue = () => {   // this function render children cmpt
    if (showCmpt == "foodweb") {
      return <>
        <FoodWeb />
      </>
    } else if (showCmpt == "social") {
      return <>
        <Social />
      </>
    } else if (showCmpt == "shopping") {
      return <Shopping />
    } else {
      return <>
        <Navbar />
        <Outlet />
      </>
    }
  }


  return (
    <>
      <Provider store={CounterStore}>     {/* React Redux Provider For counter */}
        {
          showCmptValue()
        }

      </Provider>
    </>
  )
}

export default App
