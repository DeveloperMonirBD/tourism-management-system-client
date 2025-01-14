import { useQuery } from '@tanstack/react-query';
import useAxiosPublic from './useAxiosPublic';


const usePackage = () => {
   // tan stack query
    const axiosPublic = useAxiosPublic()
    const { data: packages = [] } = useQuery({
        queryKey: ['packages'],
        queryFn: async () => {
            const res = await axiosPublic.get('/api/packages')
            return res.data;
        }
    });
    return [packages];
};

export default usePackage;
