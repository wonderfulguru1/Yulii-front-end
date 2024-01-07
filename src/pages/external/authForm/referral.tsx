import Button1 from '../../../components/externalComponents/Button1'
import { useState, } from 'react';
import { useParams } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '@/redux/hooks';
import { invitationsData } from '@/redux/invitationSlice';
import { ToastContainer, toast } from 'react-toastify';
import { osName } from "react-device-detect";

const Referral = () => {

    const { id } = useParams();
    const dispatch = useAppDispatch();
    const [email, setEmail] = useState("")
    const [loading, setLoading] = useState(false)
    const invitations = useAppSelector(state => state.invitations)
    const handleLogin = async () => {
        setLoading(true)
        try {
            var inviteObj = {
                createdAt: 1702584563067,
                receiver: email,
                sender: id,
                status: "Pending",
                external_invite: true,
                updatedAt: 1702584563067,
            }
            dispatch(invitationsData({ invitations: inviteObj }));
            if (invitations.status == "succeeded") {
                setLoading(false)
                toast.success('Created Successfully');
                if (osName === "ios") {
                    window.location.replace('https://testflight.apple.com/join/NfaF2ZrT');
                } else {
                    window.location.replace('https://we.tl/t-77EBpwI8VM');
                }
            }

        } catch (error) {
            // setError(true)
            // console.log(error)
        }
    };
    return (
        <>
            <ToastContainer autoClose={3000} />

            <div className=' container mx-auto  pt-32 px-6'>
                <div className='flex md:flex-row flex-col justify-between'>


                    <div>
                        <h1 className='lg:text-4xl text-xl  text-center font-semibold lg:px-10' data-aos="fade-right" >Join Yulii and enjoy a new world of fun with friends and family
                        </h1>
                        <p className='py-10 text-center text-xl  text-center lg:px-64' data-aos="fade-left">Ensure you enter the same email you want to use in registering your account</p>

                        <div className='py-10  text-xl lg:px-64'>
                            <label htmlFor="Phone Number" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Enter your email</label>
                            <input
                                type="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5  dark:placeholder-gray-400 dark:text-white "
                                placeholder="e.g emma@gmail.com"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required />
                        </div>

                        <div className='flex items-center flex-col lg:px-64'>
                            <Button1 variant="secondary" onClick={handleLogin} className='bg-red-500 px-10 py-3 text-white block  w-full p-2.5  px-6 rounded-full'>
                                {loading == true ? "loading" : "Summit"}
                            </Button1>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default Referral