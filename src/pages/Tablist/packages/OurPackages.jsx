import useCart from "../../../hook/useCart";


const OurPackages = () => {
    const [cart] = useCart()
    return (
        <div className="packages grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
            {cart.map(pkg => (
                <div key={pkg.id} className="card card-compact bg-base-100 shadow-xl">
                    <figure className="h-[230px] lg:h-[280px]">
                        <img src={pkg.photo} alt={pkg.trip_title} className="w-full bg-cover" />
                    </figure>
                    <div className="card-body mx-auto">
                        <h2 className="card-title">{pkg.trip_title}!</h2>
                        <p className="text-xl font-bold text-brandPrimary">{pkg.tour_type}</p>
                        <p className="text-xl font-bold text-brandPrimary">${pkg.price}</p>
                        <div className="card-actions justify-end py-2">
                            <button className="btn w-full text-brandPrimary text-lg font-bold" onClick={() => (window.location.href = `/package/${pkg._id}`)}>
                                View Details
                            </button>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default OurPackages;
