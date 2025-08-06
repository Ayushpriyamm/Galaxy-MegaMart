
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import DefaultLayout from '@/layouts/default';
import { useSignout } from '@/core/hooks/useAuth';
import { NavLink, Outlet, useNavigate } from 'react-router-dom';
import { clearUser } from '@/features/user/userSlice';
import { Avatar, AvatarIcon, Button, Spinner } from '@heroui/react';
import { clearCart } from '@/features/cart/cartSlice';


const Profile = () => {
    const { currentUser } = useSelector((state: RootState) => state.user)
    const { mutate: signoutUser, isPending } = useSignout()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    if (!currentUser) {
        return <div>Please log in to view your profile.</div>;
    }

    //handle logout 
    const handleLogout = () => {
        signoutUser(
            undefined,
            {
                onSuccess: () => {
                    dispatch(clearCart());
                    dispatch(clearUser());
                    navigate("/login");
                },
                onError: (error) => {
                    console.error("Logout failed", error);
                    // you could show a toast here
                }
            }
        )
    }


    if (isPending) {
        return <Spinner />
    }
    return (
        <DefaultLayout>
            <section className="flex gap-2 items-center">
                <div className="sidebar w-1/4 flex flex-col space-y-4 p-4 mx-auto  ">
                    <div className="w-full  flex justify-center ">
                        <Avatar
                            classNames={{
                                base: "bg-linear-to-br from-[#FFB457] to-[#FF705B] w-[100px] h-[100px]",
                                icon: "text-black/80",
                            }}
                            src=""
                            icon={<AvatarIcon />}
                        />
                    </div>
                    <NavLink
                        to="/profile/personal"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg ${isActive ? "bg-green-600 text-white" : "hover:bg-green-500"
                            }`
                        }
                    >
                        Personal Information
                    </NavLink>
                    <NavLink
                        to="/profile/orders"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg ${isActive ? "bg-green-600 text-white" : "hover:bg-green-500"
                            }`
                        }
                    >
                        My Orders
                    </NavLink>

                    <NavLink
                        to="/profile/payment"
                        className={({ isActive }) =>
                            `px-4 py-2  rounded-lg ${isActive ? "bg-green-600 text-white" : "hover:bg-green-500"
                            }`
                        }
                    >
                        Payment Method
                    </NavLink>
                    <NavLink
                        to="/profile/password"
                        className={({ isActive }) =>
                            `px-4 py-2 rounded-lg  ${isActive ? "bg-green-600 text-white" : "hover:bg-green-500"
                            }`
                        }
                    >
                        Password Manager
                    </NavLink>
                    
                    <Button onPress={handleLogout} className='hover:bg-red-600'>Logout</Button>

                </div>
                <div className="main-layout w-3/4 p-2 flex justify-center">
                    <Outlet />
                </div>
            </section>
        </DefaultLayout>
    )
}

export default Profile