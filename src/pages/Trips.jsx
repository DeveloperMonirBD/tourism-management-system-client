import React, { useState } from 'react';
import usePackages from '../hook/usePackages';

const Trips = () => {
    const [packageData] = usePackages();
    const [sortCriteria, setSortCriteria] = useState('asc'); // 'asc' or 'desc'

    // Function to handle sorting
    const sortPackages = criteria => {
        setSortCriteria(criteria);
    };

    // Sort the packageData based on the current sorting criteria
    const sortedPackages = [...packageData].sort((a, b) => {
        if (sortCriteria === 'asc') {
            return a.price - b.price;
        } else {
            return b.price - a.price;
        }
    });

    return (
        <div className="py-20 dark:border-b dark:border-gray-700">
            <h2 className="text-4xl font-bold text-center">Our Packages </h2>

            {/* Sorting buttons */}
            <div className="flex justify-center mt-10 space-x-4">
                <button onClick={() => sortPackages('asc')} className={`px-4 py-2 text-lg font-bold ${sortCriteria === 'asc' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-md`}>
                    Sort by Price: Low to High
                </button>
                <button onClick={() => sortPackages('desc')} className={`px-4 py-2 text-lg font-bold ${sortCriteria === 'desc' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'} rounded-md`}>
                    Sort by Price: High to Low
                </button>
            </div>

            <div className="container mx-auto packages grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-10">
                {sortedPackages.map(pkg => (
                    <div key={pkg._id} className="px-4 pb-4 pt-2 border dark:border-gray-700 rounded-lg shadow-sm flex flex-col justify-between">
                        <div className="flex-1 space-y-3 mt-3">
                            <div className="h-[220px] bg-cover">
                                <img src={pkg.photo} alt="" className="w-full h-full bg-cover rounded-md" />
                            </div>
                            <div className="pl-3 pt-2">
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
                            <button
                                className="btn w-full text-lg font-bold dark:bg-gray-800 dark:text-white dark:border-gray-700 dark:hover:text-gray-800"
                                onClick={() => (window.location.href = `/package/${pkg._id}`)}>
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Trips;
