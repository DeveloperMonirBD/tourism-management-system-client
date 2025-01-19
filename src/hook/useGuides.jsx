import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useGuides = () => {
    // tan stack query
    const axiosPublic = useAxiosPublic();
    const { data: guides = [] } = useQuery({
        queryKey: ['guide'],
        queryFn: async () => {
            const res = await axiosPublic.get(`${import.meta.env.VITE_API_URL}/api/tourGuides`);
            return res.data;
        }
    });
    return [guides];
};

export default useGuides;
