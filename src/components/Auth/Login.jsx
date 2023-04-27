import React, { useLayoutEffect, useState } from 'react'
import AuthForm from './AuthForm'
import useIsAuthPage from '../../customHooks/Stores/useIsAuthPage'
import $ from 'jquery'
import axios from 'axios'


const Login = () => {
  const setAuthPage = useIsAuthPage(state => state.setIsAuthPage)
  const setAuthPageFalse = useIsAuthPage(state => state.changeIsAuthPage)
  const [authPageType] = useState('login')
  const [submitting, setSubmitting] = useState(false)

  const [loginData, setLoginData] = useState({
    email:'',
    password:''
  })


  const handleAuth = () =>{
    setAuthPage()
  }

  useLayoutEffect(() => {
    handleAuth()

    return(()=>{
      setAuthPageFalse()
    })
  }, [])


  const handleSkeleton = () => {
    $(this).removeClass('skeleton')
  }

  const handleChange = (e) => {
    setLoginData({...loginData, [e.target.name]:e.target.value})
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(loginData.email && loginData.password){
      setSubmitting(true)
      setTimeout(() => {
        setSubmitting(false)
      }, 500);
      axios.post(`${import.meta.env.VITE_BASE_URL}users/signin`, loginData)
      .then(response => {
        // Handle the response data
        // console.log('Response:', response.data.data);

        // Store the data in local storage
        localStorage.setItem('token', JSON.stringify(response.data.data));

        // navigate to dashboard
        window.location.href = '/dashboard'
      })
      .catch(error => {
        // Handle errors
        console.error('Error:', error);
      });
    }
  }
  

  return (
    <div className='col-span-12 flex py-20 md:py-0 md:grid grid-cols-12 min-h-screen'>
        <AuthForm handleChange={handleChange} btnDisabled={submitting} handleSubmit={handleSubmit} authHeaderText={'Welcome back to ShoppersBag!'} authPageType={authPageType} />
        <section className="absolute md:static top-0 left-0 login--img--sect col-span-4 lg:col-span-7 xl:col-span-8 h-full">
            <img src="src/assets/images/pngs/loginImg.png" alt="hand with oranges" onLoad={handleSkeleton}  className='object-cover skeleton min-h-screen h-full' />
        </section>
    </div>
  )
}

export default Login