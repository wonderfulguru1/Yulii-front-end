
import { LazyLoadImage } from 'react-lazy-load-image-component';
import LoginImg from "../../../assets/logindesign.png"
import { useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, sendEmailVerification, signInWithPopup } from 'firebase/auth';
import { auth } from '@/firebase';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';


const Register = () => {
    const navigate = useNavigate()
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailSignup = async () => {
        try {
            await createUserWithEmailAndPassword(auth, email, password)
            onAuthStateChanged(auth,async (user:any) => {
                await sendEmailVerification(user)
            })
            navigate("/login")
        } catch (err) {
            console.error(err)
        }
    }

    const handleGoogleRegister = async () => {
        const provider = new GoogleAuthProvider();
        try {
          await signInWithPopup(auth, provider);
          console.log("User registered with Google successfully!");
        } catch (error) {
          console.error("Error registering with Google:", error);
        }
      };


    return (
        <div className=' container mx-auto py-10 pt-16'>
            <div className='flex  items-center justify-center'>
                <div className='w-3/6'>
                    <h2 className='font-semibold text-2xl'>Create your Plenti Account</h2>
                    <p className='text-sm'>Earn Cashback and points when you shop at your favourite store</p>
                    <div className='my-6'>
                        <div className="mb-6">
                            <label htmlFor="Phone Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Email</label>
                            <input
                                type="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:placeholder-gray-400 dark:text-white "
                                placeholder="2340000000"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>
                        <div className="mb-6">
                            <label htmlFor="Phone Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input
                                type="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:placeholder-gray-400 dark:text-white "
                                placeholder="2340000000"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div>
                        {/* <div className="mb-6">
                            <label htmlFor="Phone Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Password</label>
                            <input
                                type="password"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:placeholder-gray-400 dark:text-white "
                                placeholder="2340000000"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required />
                        </div> */}
                    </div>
                    <small>Already have an account? <span>Login</span></small>

                    <div className='flex items-center py-6 gap-6 flex-col'>
                        <Button
                            type="button"
                            variant="ghost"
                            size="lg"
                            className="bg-black  text-white rounded-3xl hover:bg-black-100 hover:text-white"
                            onClick={emailSignup}
                        >
                            Create
                        </Button>
                 
                    <p className='text-center'>OR</p>

                    {/* <div className=" flex items-center py-4" onClick={handleGoogleRegister}> */}
                    <Button onClick={handleGoogleRegister} className="flex hover:bg-transparent items-center justify-center space-x-2 text-gray-600 my-2 w-1/2 py-2 border border-gray-200 rounded">
                            <svg className="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 326667 333333" ><path d="M326667 170370c0-13704-1112-23704-3518-34074H166667v61851h91851c-1851 15371-11851 38519-34074 54074l-311 2071 49476 38329 3428 342c31481-29074 49630-71852 49630-122593m0 0z" fill="#4285f4"></path><path d="M166667 333333c44999 0 82776-14815 110370-40370l-52593-40742c-14074 9815-32963 16667-57777 16667-44074 0-81481-29073-94816-69258l-1954 166-51447 39815-673 1870c27407 54444 83704 91852 148890 91852z" fill="#34a853"></path><path d="M71851 199630c-3518-10370-5555-21482-5555-32963 0-11482 2036-22593 5370-32963l-93-2209-52091-40455-1704 811C6482 114444 1 139814 1 166666s6482 52221 17777 74814l54074-41851m0 0z" fill="#fbbc04"></path><path d="M166667 64444c31296 0 52406 13519 64444 24816l47037-45926C249260 16482 211666 1 166667 1 101481 1 45185 37408 17777 91852l53889 41853c13520-40185 50927-69260 95001-69260m0 0z" fill="#ea4335"></path></svg>
                            <span>Sign up with Google</span>
                        </Button>
                        </div>
                    {/* </div> */}
                </div>
                <div className='w-4/6 '>
                    <LazyLoadImage
                        src={LoginImg}
                        alt="logo"
                        className='md:py-10' />
                </div>
            </div>
        </div>
    )
}

export default Register