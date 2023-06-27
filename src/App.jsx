import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createContext, useState } from 'react'
export const AppContext = createContext()
import Main from './layouts/Main/Main'
import Home from './pages/Home/Home'
import Login from './pages/Login/Login'
import Register from './pages/Register/Register'
import HomeEdit from './pages/HomeEdit/HomeEdit'
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
  return (
    <div className='App'>
      <AppContext.Provider value={{}}>
        <RouterProvider router={router} />
      </AppContext.Provider>
    </div>
  )
}

export default App
