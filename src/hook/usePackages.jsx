import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const usePackages = () => {
    // tan stack query
    const axiosPublic = useAxiosPublic();
    const { data: packageData = [] } = useQuery({
        queryKey: ['packageData'],
        queryFn: async () => {
            const res = await axiosPublic.get(`${import.meta.env.VITE_API_URL}/api/trips`);
            return res.data;
        }
    });
    return [packageData];
};

export default usePackages;
