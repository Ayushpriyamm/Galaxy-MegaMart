
import { useSelector } from 'react-redux'
import { RootState } from '@/app/store'
import DefaultLayout from '@/layouts/default';


const Profile = () => {
    const { currentUser } = useSelector((state: RootState) => state.user)
    if (!currentUser) {
        return <div>Please log in to view your profile.</div>;
    }
    return (
        <DefaultLayout>
            <div>{currentUser.userName}</div>
            <div>{currentUser.email}</div>
            <div>{currentUser.phoneNumber}</div>
        </DefaultLayout>
    )
}

export default Profile