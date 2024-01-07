import Button1 from '../../../components/externalComponents/Button1'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { useNavigate } from 'react-router-dom'
import LoginImg from "../../../assets/logindesign.png"
import { useState } from 'react';
import { auth, googleProvider } from '@/firebase';
import { signInWithEmailAndPassword, signInWithPopup} from 'firebase/auth'
import { ToastContainer, toast } from 'react-toastify';



const Login = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)

  
    const signInWithGoogle = async () => {
        try {
          const data = await signInWithPopup(auth, googleProvider);
          toast.success('LoggedIn Successfully');
          setTimeout(() => {
            data.user.emailVerified &&  navigate("/overview")
          }, 1000)
     
        } catch (err) {
          setError(true)
        }
      };

    const handleLogin = async () => {
        try {
         const data = await signInWithEmailAndPassword(auth, email, password);
         toast.success('LoggedIn Successfully');
         setTimeout(() => {
            data.user.emailVerified && navigate("/overview")
          }, 1000)
         
        } catch (error) {
            setError(true)
        }
      };
    return (
        <>
        <ToastContainer autoClose={3000}/>
        <div className=' container mx-auto  pt-32 px-6'>

            <div className='flex gap-10 lg:flex-row flex-col lg:items-center justify-between'>
                <div className='lg:w-1/2'>
                    <h2 className='font-semibold text-2xl'>Log In</h2>
                    <div className='my-6'>
                        <div className="mb-6">
                            <label htmlFor="Phone Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:placeholder-gray-400 dark:text-white "
                                placeholder="2340000000"
                                value={email}
                                onChange={(e) => setEmail(e.target.value )}
                                required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Phone Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input
                                type="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:placeholder-gray-400 dark:text-white "
                                placeholder="2340000000"
                                value={password}
                                onChange={(e) => setPassword(e.target.value )}
                                required />
                        </div>
                    </div>
                    <small className=''>
                    {error && <span className='text-red-500 -pt-10'>Wrong email or password!</span>}
                    </small>
                    <p className='text-sm py-4'>Don't have an account? <span>Register</span></p>

                    <div className='flex items-center py-6 flex-col'>
                        {/* <Link to="/merchant">
                            <Button title='Login' onClick={handleLogin}/>
                        </Link> */}
                        <Button1 variant="secondary" onClick={handleLogin} className='bg-red-500 px-10 py-3 text-white rounded-full'>Sign in</Button1>
                     
                    </div>
                    <p className='text-center'>OR</p>

                    <div className="text-sm flex flex-col items-center py-4">
                        <button onClick={signInWithGoogle} className="flex items-center justify-center space-x-2 text-gray-600 my-2 w-1/2 py-2 border border-gray-200 rounded">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" ><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path></svg>
                            <span>Sign in with Google</span>
                        </button>
                        
                    </div>
                </div>
                <div className='w-1/2 hidden lg:flex justify-center'>
                    <LazyLoadImage
                        src={LoginImg}
                        // width={300}
                        // height={100}
                        alt="logo"
                        className='' />
                </div>
            </div>
        </div>
        </>
    )
}

export default Login