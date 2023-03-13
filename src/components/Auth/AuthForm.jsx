import React, { useState } from 'react'
import SocialBtn from './Buttons/SocialBtn'
import logo from './../../assets/images/logos/logo.png'
import { NavLink } from 'react-router-dom'


const AuthForm = ({ handleSubmit, authHeaderText, authPageType }) => {

    const [showPassword, setShowPassword] = useState(false)

    const togglePassword = () => {
        setShowPassword(prevShowPassword => !prevShowPassword)
    }
    

  return (
    <form onSubmit={handleSubmit} className={`z-20 m-auto max-w-lg md:max-w-none md:m-0 h-fit w-ninetyFivePercent sm:w-eightyPercent rounded-ten md:rounded-none md:w-auto md:static bg-white col-span-8 lg:col-span-5 xl:col-span-4 px-4 sm:px-9 py-12 md:h-full`}>
        <div className='w-full pb-12 md:pb-20'>
            <img src={logo} alt="logo" className='w-44' />
        </div>
      
        <section className='text-sm sm:text-base max-w-sm md:max-w-none md:w-fit mx-auto sm:px-5 space-y-6 sm:space-y-8'>
            <div className='md:pb-5'>
                <h1 className='text-center text-2xl font-avenirBlack'>{authHeaderText}</h1>
            </div>
            {/* <div className='grid gap-6 sm:gap-8'>
                <SocialBtn id={`${authPageType === 'signup' ? 'googleSignUp' : 'googleSignIn'}`} type={'google'} text={`${authPageType === 'signup' ? 'Sign up with Google' : 'Sign in with Google'}`} imgSrc={'/src/assets/images/icons/social/google.svg'} />
                <SocialBtn id={`${authPageType === 'signup' ? 'fbSignUp' : 'fbSignIn'}`} type={'facebook'} text={`${authPageType === 'signup' ? 'Sign up with Facebook' : 'Sign in with Facebook'}`} imgSrc={'/src/assets/images/icons/social/facebook.svg'} />
            </div>

            <div className='flex items-center gap-2 w-full'>
                <div className='w-full bg-brandGray28x h-0.5'></div>
                <div>or</div>
                <div className='w-full bg-brandGray28x h-0.5'></div>
            </div> */}

            {
                authPageType === 'signup' && 
                <>
                    <label htmlFor={`orgName`} className='bg-brandGray28x flex flex-col focus-within:outline focus-within:outline-1 focus-within:outline-brandGreen7x px-10 py-3 rounded-thirty'>
                        <p  className='text-brandGray31x'>Name of Organization</p>
                        <div>
                            <input type="text" name="orgName" id={`orgName`} placeholder='E.g Etia Organisation' className='bg-transparent focus:outline-none'/>
                        </div>
                    </label>
                    <label htmlFor={`address`} className='bg-brandGray28x flex flex-col focus-within:outline focus-within:outline-1 focus-within:outline-brandGreen7x px-10 py-3 rounded-thirty'>
                        <p  className='text-brandGray31x'>Enter Address</p>
                        <div>
                            <input type="text" name="address" id={`address`} placeholder='e.g 123 Street, Udom City' className='bg-transparent focus:outline-none'/>
                        </div>
                    </label>
                    <label htmlFor={`phone`} className='bg-brandGray28x flex flex-col focus-within:outline focus-within:outline-1 focus-within:outline-brandGreen7x px-10 py-3 rounded-thirty'>
                        <p  className='text-brandGray31x'>Enter Phone Number</p>
                        <div>
                            <input type="tel" name="phone" id={`phone`} placeholder='e.g +2348170000000' className='bg-transparent focus:outline-none'/>
                        </div>
                    </label>
                </>
            }

            <label htmlFor={`${authPageType === 'signup' ? 'signUpEmail' : 'signInEmail'}`} className='bg-brandGray28x flex flex-col focus-within:outline focus-within:outline-1 focus-within:outline-brandGreen7x px-10 py-3 rounded-thirty'>
                <p  className='text-brandGray31x'> {authPageType === 'signup' ? 'Enter Your Email Address' : 'Your email'}</p>
                <div>
                    <input type="email" name="" id={`${authPageType === 'signup' ? 'signUpEmail' : 'signInEmail'}`} placeholder='johndoe@email.com' className='bg-transparent focus:outline-none'/>
                </div>
            </label>

            {
                authPageType === 'signup' && 
                <>
                    <label htmlFor={`city`} className='bg-brandGray28x flex flex-col focus-within:outline focus-within:outline-1 focus-within:outline-brandGreen7x px-10 py-3 rounded-thirty'>
                        <p  className='text-brandGray31x'>Enter your City</p>
                        <div>
                            <input type="text" name="city" id={`city`} placeholder='e.g Uyo' className='bg-transparent focus:outline-none'/>
                        </div>
                    </label>
                </>
            }

            <label htmlFor={`${authPageType === 'signup' ? 'signUpPassword' : 'signInPassword'}`} className='relative bg-brandGray28x flex flex-col focus-within:outline focus-within:outline-1 focus-within:outline-brandGreen7x px-10 py-3 rounded-thirty'>
                <p  className='text-brandGray31x'>Your password</p>
                <input type={`${showPassword ? 'text' : 'password'}`} name="" id={`${authPageType === 'signup' ? 'signUpPassword' : 'signInPassword'}`} placeholder='Enter Password here' className='bg-transparent focus:outline-none w-full pr-8 authPassword'/>
                <button type='button' onClick={togglePassword} className='absolute right-8 top-fiftyPercent -translate-y-fiftyPercent group'>
                        <svg className='group' width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path className='group-hover:stroke-brandGreen7x' opacity="0.4" d="M15.58 12C15.58 13.98 13.98 15.58 12 15.58C10.02 15.58 8.41998 13.98 8.41998 12C8.41998 10.02 10.02 8.42 12 8.42C13.98 8.42 15.58 10.02 15.58 12Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path className='group-hover:stroke-brandGreen7x' d="M12 20.27C15.53 20.27 18.82 18.19 21.11 14.59C22.01 13.18 22.01 10.81 21.11 9.4C18.82 5.8 15.53 3.72 12 3.72C8.47003 3.72 5.18003 5.8 2.89003 9.4C1.99003 10.81 1.99003 13.18 2.89003 14.59C5.18003 18.19 8.47003 20.27 12 20.27Z" stroke="#797979" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <div className={`bg-brandGray31x group-hover:bg-brandGreen7x h-6 w-0.5 -rotate-45 ${showPassword || 'hidden'} absolute right-3 top-fiftyPercent -translate-y-fiftyPercent translate-x-fiftyPercent`}></div>
                </button>
            </label>

            <div>
                <SocialBtn id={`${authPageType === 'signup' ? 'signUpBtn' : 'signInBtn'}`} type={'mail'} bgColor={'bg-brandGreen7x'} textColor={'text-white'} font={'font-avenirBlack'} text={`${authPageType === 'signup' ? 'Sign up with Email' : 'Sign in with Email'}`} imgSrc={'/src/assets/images/icons/vuesax/sms.svg'} />
            </div>


            {authPageType === 'signup' && 
                <div className='text-xs sm:text-sm font-avenirLight text-brandGray31x'>
                    By clicking “Signup”, you  agree to our <a href="#" className='underline hover:text-brandGreen7x'>Terms of Service</a> and <a href="#" className='underline hover:text-brandGreen7x'>Privacy Policy</a>. We occasionally send you account related emails.
                </div>
            }


           {authPageType === 'signup' 
           ? 
                <div className='font-avenirLight text-center'>
                    Already have an account? <NavLink to='/login' className="text-brandGreen7x underline">Login</NavLink>
                </div>
            :
                <div className='font-avenirLight text-center'>
                    Don't have an account? <NavLink to='/sign-up' className="text-brandGreen7x underline">Create an account</NavLink>
                </div>
            }

        </section>

        
    </form>
  )
}

export default AuthForm