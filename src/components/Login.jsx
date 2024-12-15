import { useLoginContext } from "../context/LoginContext";
import guitar from '../assets/guitar.webp'
import google from '../assets/google.webp'
import phone from '../assets/phone.png'
import { signInWithPopup } from "firebase/auth";
import { auth,googleProvider } from "../firebase/Setup";
import olx from '../assets/olx-logo.png'
import { useState } from "react";
import {login,signup} from '../firebase/Setup'
import { useNavigate } from "react-router-dom";

const Login = () => {

  const [showEmailForm,setShowEmailForm] = useState(false)
  const [signState,setSignState] = useState("Sign In")
  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [password,setPassword] = useState("")
  
  const navigate = useNavigate()

  const user_auth = async(event) => {
    event.preventDefault()
    try{
      if(signState==="Sign In"){
        await login(email,password)
        alert("Login sucessfull")
      }else{
        await signup(name,email,password)
        alert("Sign up sucessfull")
      }
      navigate('/')
    }catch(error){
      console.error(error)
      alert("Please try again")
    }
  }

  const handleEmailClick = () => {
    setShowEmailForm(true)
  }

    const googleSignIn = async() => {
        try{
            await signInWithPopup(auth,googleProvider)
        }catch(err){
            console.error(err)
        }
    }

    const {isLoginOpen,toggleLoginForm} = useLoginContext()

    if(!isLoginOpen) return null
    
  return (
    <div className="relative z-10" aria-labelledby="modal-title" role="dialog" aria-modal="true">
        
        <div className="fixed inset-0 bg-zinc-950 bg-opacity-75 transition-opacity" aria-hidden="true"></div>
      
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">

            <div className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all  sm:w-96 sm:max-w-lg">
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="flex justify-end">
                    <button className="font-semibold text-3xl" onClick={toggleLoginForm}>
                        X
                    </button>
                </div>
               <div className="sm:flex sm:items-start">
                <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div className="mt-2">
                      {!showEmailForm && (
                        <div>
                           <img src={guitar} className="w-20 h-20 ml-32"/>
                           <p className="text-base font-medium mt-5 text-center">Help us become one of the safest places <br/> to buy and sell</p>
                           <div className="flex border-2 border-black p-2 rounded-md mt-12 cursor-pointer">
                            <img src={phone} className="w-6 h-6"/>
                            <h1 className="font-semibold ml-3">Continue with phone</h1>
                           </div>
                            <div onClick={googleSignIn} className="flex border-2 border-gray-300 p-2 rounded-md mt-4 cursor-pointer">
                            <img src={google} className="w-6 h-6"/>
                            <h1 className="font-semibold ml-12">Continue with Google</h1>
                            </div>
                            <h1 className="text-center mt-4 cursor-pointer">OR</h1>
                            <h1 className="text-center mt-4 underline cursor-pointer" onClick={handleEmailClick}>Login with Email</h1>
                            <h1 className="text-center mt-28 text-xs">All your personal details are safe with us.</h1>
                            <h1 className="text-center mt-4 text-xs">If you continue, you are accepting <span className="text-blue-600">OLX Terms and Conditions and Privacy Policy</span></h1>
                   
                        </div>
                      )}
                      {showEmailForm && (
                         <div className="">
                         <img className="w-20 p-4 ml-32" src={olx} alt=''/>
                         <h1 className="text-center ml-12 font-semibold">Login with Email</h1>
                        <form className="h-[200px]">
                          <div className="flex flex-col mb-4">
                            {signState==="Sign Up"?<input 
                                value={name} type="text" 
                                onChange={(e) => {setName(e.target.value)}}
                                className="p-2 border border-gray-300 rounded-md"
                                placeholder="Name"
                              />:<></>}
                          </div>
                          
                          <div className="flex flex-col mb-4">
                            <input
                              type="email"
                              value={email}
                              onChange={(e) => {setEmail(e.target.value)}}
                              className="p-2 border border-gray-300 rounded-md"
                              placeholder="Email"
                              required
                            />
                          </div>
                         <div className="flex flex-col mb-4">
                            <input
                              type="password"
                              value={password}
                              onChange={(e) => {setPassword(e.target.value)}}
                              className="p-2 border border-gray-300 rounded-md"
                              placeholder="Password"
                              required
                            />
                          </div>
                         <button onClick={user_auth} type="submit" className="mt-6 w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-800 bg-custom-light-gray hover:bg-custom-dark-gray focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-custom-dark-gray">
                           Sign Up
                         </button>
                        </form>
                        <div className='form-switch mt-4'>
                          {signState === "Sign In" ? (
                            <div className="flex flex-col justify-center items-center w-[300px]">
                            <p>New to Olx?{' '}</p>
                            <p><span onClick={() => {setSignState("Sign Up"); 
                            }} className="font-bold text-blue-600 underline cursor-pointer">
                             Sign Up Now
                           </span></p>
                           </div>
                          ) : (
                            <div className="flex flex-col justify-center items-center w-[300px]">
                            <p>Have a account?{' '}</p>
                            <p><span onClick={() => {setSignState("Sign In"); 
                            }} className="font-bold text-blue-600 underline cursor-pointer">
                             Sign In
                           </span></p>
                           </div>
                          )}
                        </div>


                         <h1 className="text-center mt-4 underline cursor-pointer" onClick={() => setShowEmailForm(false)}>Back</h1>
                       </div>
                      )}
                     </div>
                   
                </div>
               </div>               
              </div>             
            </div>
          </div>
        </div>
    </div>
  )
}

export default Login

