import useManageProfile from '../../hook/useManageProfile';
import MyProfile from '../MyProfile';
import AdminProfile from './Admin/Profile/AdminProfile';

const ManageProfile = () => {
    const [manageProfile] = useManageProfile();

    const userRole = manageProfile.role;

    return (
        <>
            {userRole == 'Tourist' && (
                <MyProfile />)}
            {userRole == 'Guide' && (
                <MyProfile />)}
            {userRole == 'Admin' && (
                <AdminProfile />)}
        </>
    );
};

export default ManageProfile;
