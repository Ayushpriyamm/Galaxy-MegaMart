import { RootState } from '@/app/store'
import { useSelector } from 'react-redux'
import { Navigate, Outlet } from 'react-router-dom'

export default function protectedRoutes(){
    const {currentUser}=useSelector((state:RootState)=>state.user)
  return currentUser?<Outlet/>:<Navigate to={'/login'}/>
}
