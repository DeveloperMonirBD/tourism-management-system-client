import ReactStars from 'react-rating-stars-component';
import useGuides from '../../../hook/useGuides';

const TourGuides = () => {
    const [guides] = useGuides();
    return (
        <div>
            <div className="packages grid md:grid-cols-2 lg:grid-cols-3 gap-8 mt-16">
                {guides.map(guide => (
                    <div key={guide._id} className="px-4 pb-4 pt-2 border rounded-lg shadow-sm flex flex-col justify-between">
                        <div className="flex-1 space-y-3 mt-3">
                            <div className="h-[220px] lg:h-[260px] bg-cover">
                                <img src={guide.cover} alt={guide.name} className="w-full h-full bg-cover rounded-md" />
                            </div>
                            <div className=" flex gap-5 lg:gap-16 pl-3 pt-4 text-left">
                                <div className="overflow-hidden">
                                    <img src={guide.image} alt={guide.name} className="w-16 h-16 rounded-full" />
                                </div>

                                <div className="text-lg space-y-2 ">
                                    <h2 className="text-xl font-semibold">{guide.name}!</h2>
                                    <div className="flex gap-2 items-center">
                                        <ReactStars count={5} value={guide.rating} size={24} activeColor="#ffd700" edit={false} isHalf={true} />
                                        <span className="ml-2 text-sm">{guide.rating} / 5</span>
                                    </div>
                                    <p>
                                        <span className="font-semibold">Experience : </span> {guide.experience}
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="mt-6 flex-none pb-1">
                            <button className="btn w-full text-lg font-bold" onClick={() => (window.location.href = `/tourGuide/${guide._id}`)}>
                                View Details
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TourGuides;
