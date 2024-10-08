import { Outlet } from "react-router-dom"
import Navbar from "./Component/Navbar"
import { Provider } from 'react-redux'
import CounterStore from "../store/index"
import { useContext, useEffect } from "react"
import { useNavigate } from "react-router-dom";
import { ColorContext } from "../store/Color-Item"
import FoodWeb from "./Component/FoowWeb/FoodWeb"
import Social from "./Component/Social/Social"

const App = () => {
  const { showCmpt } = useContext(ColorContext) //htis state is used for chidren cmpt
  const navigate = useNavigate()


  const showCmptValue = () => {   // this render chidren cmpt
    if (showCmpt == "foodweb") {
      return <>
        <FoodWeb />
      </>
    } else if (showCmpt == "social") {
      return <>
        <Social />
      </>
    } else {
      return <>
        <Navbar />
        <Outlet />
      </>
    }
  }

  useEffect(() => {
    navigate("/")
  }, [])
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
