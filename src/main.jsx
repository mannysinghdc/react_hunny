import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
// MDB CSS import
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import "@fortawesome/fontawesome-free/css/all.min.css"

import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Todo from './Component/Todo/Todo.jsx'
import Food from './Component/Food/Food.jsx'
import Clock from './Component/Clock/Clock.jsx'
import Calulator from './Component/Calculator/Calulator.jsx'
import Social from './Component/Social/Social.jsx'
import Create from './Component/Social/Create.jsx'
import PostList from './Component/Social/PostList.jsx'
import Home from './Component/Home.jsx'
import Counter from './Component/Counter/Counter.jsx'
import Color from './Component/Color/Color.jsx'
import Color2 from './Component/Color/Color2.jsx'
import ColorContextProvider from '../store/Color-Item.jsx'
import NotFoundPage from './Component/404.jsx'
import Accor from './Component/Accordian/Accor.jsx'
import Calsi from './Component/Calculator/Calsi.jsx'
import SearchImage from './Component/SearchImage/SearchImage.jsx'
import './index.css' // global css
import Weather from './Component/Weather/Weather.jsx'
import MealSearch from './Component/SearchImage/MealSearch.jsx'
import Rating from './Component/Rating/Rating.jsx'
import Carousel from './Component/SearchImage/Carousel.jsx'
import Curd from './Component/Curd/Curd.jsx'
import TextConter from './Component/TextConter/TextConter.jsx'
import TextCounterContextProvider from '../store/Text-Coounter-Item.jsx'
import HomeFood from './Component/FoowWeb/HomeFood.jsx'
import AboutFood from './Component/FoowWeb/AboutFood.jsx'
import ContactFood from './Component/FoowWeb/ContactFood.jsx'
import SearchFood from './Component/FoowWeb/SearchFood.jsx'
import ProtectRoute from './Component/ProtectRoute.jsx'
import Login from './Component/LoginFuc/Login.jsx'
import SignUp from './Component/LoginFuc/SignUp.jsx'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "*",
        //element: <Navigate to="/" replace={true} />     //Redirect to home page
        element: <NotFoundPage />
      },
      {
        path: "/",
        element: <ProtectRoute><Home /></ProtectRoute>,
        index: true
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/signUp",
        element: <SignUp />
      },
      {
        path: "accordion",
        element: <ProtectRoute><Accor /></ProtectRoute>
      },
      {
        path: "calculator",
        element: <ProtectRoute><Calulator /></ProtectRoute>,
        children: [
          {
            path: "calsi",
            element: <Calsi />
          }
        ]
      },
      {
        path: "clock",
        element: <ProtectRoute><Clock /></ProtectRoute>
      },
      {
        path: "color",
        element: <ProtectRoute><Color /></ProtectRoute>,
        children: [
          {
            path: "color2",
            element: <ProtectRoute><Color2 /></ProtectRoute>
          }
        ]
      },
      {
        path: "counter",
        element: <ProtectRoute><Counter /></ProtectRoute>
      },
      {
        path: "curd",
        element: <ProtectRoute><Curd /></ProtectRoute>
      },
      {
        path: "todo",
        element: <ProtectRoute><Todo /></ProtectRoute>
      },
      {
        path: "media",
        element: <ProtectRoute>{""}</ProtectRoute>,
        children: [
          {
            path: "home",
            element: <h1>home</h1>
          },
          {
            path: "create",
            element: <Create />
          },
          {
            path: "post",
            element: <PostList />
          },
        ]
      },
      {
        path: "searhimage",
        element: <ProtectRoute><SearchImage /></ProtectRoute>
      },
      {
        path: "mealsearch",
        element: <ProtectRoute><MealSearch /></ProtectRoute>
      },
      {
        path: "carousel",
        element: <ProtectRoute><Carousel /></ProtectRoute>
      },
      {
        path: "foodweb",
        element: <ProtectRoute>{""}</ProtectRoute>,
        children: [
          {
            path: "home",
            element: <HomeFood />
          },
          {
            path: "about",
            element: <AboutFood />
          },
          {
            path: "contact",
            element: <ContactFood />
          },
          {
            path: "home/menu",
            element: <Food />,
          },
          {
            path: "home/searchfood",
            element: <SearchFood />
          },

        ]
      },
      {
        path: "rating",
        element: <ProtectRoute><Rating /></ProtectRoute>
      },
      {
        path: "textcounter",
        element: <ProtectRoute><TextConter /></ProtectRoute>
      },
      {
        path: "weather",
        element: <ProtectRoute><Weather /></ProtectRoute>
      }

    ]
  },
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <TextCounterContextProvider>
      <ColorContextProvider>
        <RouterProvider router={router} />
      </ColorContextProvider>
    </TextCounterContextProvider>
  </StrictMode>
)
