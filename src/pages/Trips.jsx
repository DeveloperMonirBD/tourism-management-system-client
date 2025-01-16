import usePackages from '../hook/usePackages';

const Trips = () => {
    const [packageData] = usePackages();
    return (
        <div className="py-20">
            <h2 className="text-4xl font-bold text-center">Our Packages </h2>
            <div className=" container mx-auto packages grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-16">
                {packageData.map(pkg => (
                    <div key={pkg._id} className="px-4 pb-4 pt-2 border rounded-lg shadow-sm flex flex-col justify-between">
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
                            <button className="btn w-full text-lg font-bold" onClick={() => (window.location.href = `/package/${pkg._id}`)}>
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
