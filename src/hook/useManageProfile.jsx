import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import useAxiosSecure from './useAxiosSecure';

const useManageProfile = () => {
    const { user } = useContext(AuthContext);

    // tan stack query
    const axiosSecure = useAxiosSecure();

    const { data: manageProfile = [], error } = useQuery({
        queryKey: ['manageProfile', user.email], // added dependency
        queryFn: async () => {
            const res = await axiosSecure.get(`${import.meta.env.VITE_API_URL}/api/users/${user.email}`);
            return res.data;
        },
        onError: error => {
            console.error('Error fetching profile:', error); // added error handling
        }
    });

    return [manageProfile, error]; // returning error as well
};

export default useManageProfile;
