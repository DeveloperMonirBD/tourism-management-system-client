import useGuides from "../../../../hook/useGuides";

const TourGuides = () => {
    const [guides] = useGuides()
    return (
        <div>
            <div className="packages grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {guides.map(guide => (
                    <div key={guide._id} className="card card-compact bg-base-100 shadow-xl">
                        <figure className="h-[230px] lg:h-[280px]">
                            <img src={guide.cover} alt={guide.name} className="w-full bg-cover" />
                        </figure>
                        <div className="card-body mx-auto">
                            <div className="flex gap-6">
                                <div className="overflow-hidden">
                                    <img src={guide.image} alt={guide.name} className="w-16 h-16 rounded-full" />
                                </div>
                                <h2 className="card-title">{guide.name}!</h2>
                            </div>
                            {/* <p className="text-xl font-bold text-brandPrimary">{guide.bio}</p> */}
                            <p className="text-xl font-bold text-brandPrimary">Rating: {guide.rating}</p>
                            <p className="text-xl font-bold text-brandPrimary">Experience:{guide.experience}</p>
                            <div className="card-actions justify-end py-2">
                                <button className="btn w-full text-brandPrimary text-lg font-bold" onClick={() => (window.location.href = `/tourGuide/${guide._id}`)}>
                                    View Details
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourGuides;