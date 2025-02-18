import { useEffect, useState } from 'react';
import useAxiosPublic from '../../../hook/useAxiosPublic';

const OurPackages = () => {
    const axiosPublic = useAxiosPublic();
    const [packages, setPackages] = useState([]);

    useEffect(() => {
        const fetchPackages = async () => {
            try {
                const response = await axiosPublic.get('/api/packages');
                setPackages(response.data);
            } catch (error) {
                console.error('Error fetching stories:', error);
            }
        };

        fetchPackages();
    }, [axiosPublic]);

    return (
        <div className="packages grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
            {packages.map(pkg => (
                <div key={pkg._id} className="px-4 pb-4 pt-2 border dark:border-gray-700 rounded-lg shadow-sm flex flex-col justify-between">
                    <div className="flex-1 space-y-3 mt-3">
                        <div className="h-[220px] lg:h-[260px] bg-cover">
                            <img src={pkg.photo} alt="" className="w-full h-full bg-cover rounded-md" />
                        </div>
                        <div className="pl-3 pt-2 text-left">
                            <h2 className="text-xl font-semibold">{pkg.trip_title}</h2>
                            <div className="text-lg space-y-2 mt-2">
                                <p>
                                    <span className="font-semibold">Tour Type :</span> {pkg.tour_type}
                                </p>
                                <p>
                                    <span className="font-semibold">Price : </span> ${pkg.price}
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className="mt-6 flex-none pb-1">
                        <button className="btn w-full text-lg font-bold dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-gray-800" onClick={() => (window.location.href = `/package/${pkg._id}`)}>
                            View Details
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OurPackages;
