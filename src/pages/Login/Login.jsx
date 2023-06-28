import { React, useContext,useState } from 'react'
import { AppContext } from '../../App'
import { useNavigate } from 'react-router-dom'
import { FormLogin } from '../../helper/FormLogin/FormLogin'
import { fetchStorage } from '../../helper/localStorage'
import ModalLogin from '../../components/ModalLogin/ModalLogin'
import './Login.css'

const Login = () => {
  const {isLogin,setIsLogin} = useContext(AppContext)
  const[loginError, setLoginError]=useState(false)
  const navigate = useNavigate()
  const handleLogin = (data) => {
    const user = fetchStorage('register')
    if (data.email === user?.email && data.password === user?.password) {
      navigate('/')
      setIsLogin(true)
      setLoginError(false)
    }
    else setLoginError(true)
  }
  const handleCloseModal = () => {
    setLoginError(false)
    navigate('/register')
  }
  const handleChangeLogin = () => {
    setLoginError(false)
    navigate('/login')
  }
  return (
    <div className='login'>
      {loginError?<ModalLogin onClose={handleCloseModal} onChange={handleChangeLogin}/>:null}
      <FormLogin onSubmit={handleLogin}  />
    </div>
  )
}

export default Login
