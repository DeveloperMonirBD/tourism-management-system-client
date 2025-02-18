import { FaBookOpen, FaDollarSign, FaSuitcase, FaUserAlt, FaUsers } from 'react-icons/fa';
import useGuides from '../../../../hook/useGuides';
import usePackages from '../../../../hook/usePackages';
import useUsers from '../../../../hook/useUsers';
import { useQuery } from '@tanstack/react-query';
import { AuthContext } from '../../../../provider/AuthProvider';
import { useContext } from 'react';
import useAxiosSecure from '../../../../hook/useAxiosSecure';


const AdminStatistics = () => {
    const [guides] = useGuides();
  const [packageData] = usePackages();
  const { user } = useContext(AuthContext);
  const [users] = useUsers();
   const axiosSecure = useAxiosSecure();

    const totalUsers = users.filter(user => user.role == 'Tourist').length;

    // Fetch stories using tanstack query
    const { data: stories = [] } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosSecure.get('/api/stories');
            return res.data;
        }
    });

    // Fetch stories using tanstack query
    const { data: booking = [] } = useQuery({
        queryKey: ['booking'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/bookings`);
            return res.data;
        }
    });

    const totalPrice = booking.reduce((total, item) => total + Number(item.price || 0), 0);

    return (
        <div>
            <div className="mt-12">
                {/* small cards */}
                <div className="mb-8 grid gap-y-10 gap-x-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 flex-grow">
                    {/* payment Card */}
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-100 text-gray-700 shadow-md dark:bg-neutral dark:text-white">
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-orange-600 to-orange-400 text-white shadow-orange-500/40 `}>
                            <FaDollarSign className="w-6 h-6 text-white" />
                        </div>
                        <div className="p-4 text-right">
                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Payment</p>
                            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">${totalPrice}</h4>
                        </div>
                    </div>

                    {/* TotalTour Guide */}
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-100 text-gray-700 shadow-md dark:bg-neutral dark:text-white">
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-blue-600 to-blue-400 text-white shadow-blue-500/40`}>
                            <FaUsers className="w-6 h-6 text-white" />
                        </div>
                        <div className="p-4 text-right">
                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Tour Guides</p>
                            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{guides.length}</h4>
                        </div>
                    </div>

                    {/* Total Packages */}
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-100 text-gray-700 shadow-md dark:bg-neutral dark:text-white">
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-pink-600 to-pink-400 text-white shadow-pink-500/40`}>
                            <FaSuitcase className="w-6 h-6 text-white" />
                        </div>
                        <div className="p-4 text-right">
                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Packages</p>
                            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{packageData.length}</h4>
                        </div>
                    </div>

                    {/* Total Client */}
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-100 text-gray-700 shadow-md dark:bg-neutral dark:text-white">
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}>
                            <FaUserAlt className="w-6 h-6 text-white" />
                        </div>
                        <div className="p-4 text-right">
                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Client</p>
                            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{totalUsers}</h4>
                        </div>
                    </div>

                    {/* Total Stories */}
                    <div className="relative flex flex-col bg-clip-border rounded-xl bg-gray-100 text-gray-700 shadow-md dark:bg-neutral dark:text-white">
                        <div
                            className={`bg-clip-border mx-4 rounded-xl overflow-hidden bg-gradient-to-tr shadow-lg absolute -mt-4 grid h-16 w-16 place-items-center from-green-600 to-green-400 text-white shadow-green-500/40`}>
                            <FaBookOpen className="w-6 h-6 text-white" />
                        </div>
                        <div className="p-4 text-right">
                            <p className="block antialiased font-sans text-sm leading-normal font-normal text-blue-gray-600">Total Stories</p>
                            <h4 className="block antialiased tracking-normal font-sans text-2xl font-semibold leading-snug text-blue-gray-900">{stories.length}</h4>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AdminStatistics;
