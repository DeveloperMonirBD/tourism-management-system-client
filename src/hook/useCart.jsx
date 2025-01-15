import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';

const useCart = () => {
    // tan stack query
    const axiosPublic = useAxiosPublic();
    const { data: cart = [] } = useQuery({
        queryKey: ['cart'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/packages');
            return res.data;
        }
    });
    return [cart];
};

export default useCart;
