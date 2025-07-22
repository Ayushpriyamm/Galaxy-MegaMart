import { LoginFrom, SignupFrom } from '@/components/appComponents/LoginFrom'
import DefaultLayout from '@/layouts/default'
import loginImage from '../../public//images/loginImage.png'
import { useState } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Logo } from '@/components/icons'



export default function Login() {
    const [activeForm, setActiveForm] = useState<'login' | 'signup'>('login')

    const onToggelHandler = (form: 'login' | 'signup') => {
        setActiveForm(form)

    }
    return (
        <DefaultLayout>
            <section className=' flex flex-col sm:flex-row justify-center space-y-4 items-center '>
                <div className="  w-full sm:w-1/3  sm:h-auto rounded-xl overflow-hidden group">
                    <img
                        src={loginImage}
                        alt=""
                        className='hidden sm:block h-[400px] w-[400px] object-contain transition-all duration-500  '
                    />
                    <div className="flex flex-col-reverse sm:hidden justify-center mx-auto">
                        <h1 className=' text-center text-2xl font-bold'>Galaxy <span className='text-green-600'>MegaMart</span></h1>
                        <div className="mx-auto">
                            <Logo size={100} />
                        </div>
                    </div>
                </div>
                <div className="w-full sm:w-1/2  p-2 space-y-2">
                    <div className=" flex justify-center p-2 gap-2">
                        <div
                            onClick={() => onToggelHandler('signup')}
                            className={`w-full text-center p-2 rounded-lg cursor-pointer transition ${activeForm == 'signup' ? 'bg-green-800 ' : 'bg-transparent border-1 '}`}
                        >
                            Signup
                        </div>
                        <div
                            onClick={() => onToggelHandler('login')}
                            className={`w-full text-center p-2 rounded-lg cursor-pointer transition ${activeForm == 'login' ? 'bg-green-800 ' : 'bg-transparent border-1  '}`}
                        >
                            Login
                        </div>
                    </div>
                    <AnimatePresence mode="wait">
                        {activeForm === 'login' ? (
                            <motion.div
                                key="login"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <LoginFrom />
                            </motion.div>
                        ) : (
                            <motion.div
                                key="signup"
                                initial={{ opacity: 0, x: 50 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -50 }}
                                transition={{ duration: 0.3 }}
                            >
                                <SignupFrom />
                            </motion.div>
                        )}
                    </AnimatePresence>

                </div>
            </section>
        </DefaultLayout >
    )
}
