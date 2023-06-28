import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()
import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import HomeEdit from './pages/HomeEdit/HomeEdit'
import PaymentForm from './pages/PaymentForm/PaymentForm'
import Error from './pages/Error/Error'

const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Home />,
        errorElement: <Error />,
      },

      {
        path: '/login',
        element: <Login />,
        errorElement: <Error />,
      },

      {
        path: '/register',
        element: <Register />,
        errorElement: <Error />,
      },
      {
        path: '/payment-form',
        element: <PaymentForm />,
        errorElement: <Error />,
      },
      {
        path: 'home-edit',
        errorElement: <Error />,
        children: [
          {
            path: ':id',
            element: <HomeEdit />,
            errorElement: <Error />,
          },
        ],
      },
    ],
  },
])
function App() {
  const [selectedData,setSelectedData]=useState([])
  const [isLogin,setIsLogin]=useState(false)
  return (
    <div className='App'>
      <AppContext.Provider value={{selectedData,setSelectedData,isLogin,setIsLogin}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
