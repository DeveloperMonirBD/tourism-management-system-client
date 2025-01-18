import useManageProfile from '../../hook/useManageProfile';
import MyProfile from '../MyProfile';

const ManageProfile = () => {
    const [manageProfile] = useManageProfile();

    const userRole = manageProfile.role;

    return (
        <>
            
            {userRole ? (
                <>
                    <MyProfile />
                </>
            ) : (
                <></>
            )}
        </>
    );
};

export default ManageProfile;
