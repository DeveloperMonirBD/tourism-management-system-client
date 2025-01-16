import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import ReactStars from 'react-rating-stars-component';

const GuideDetailsProfile = () => {
    const axiosPublic = useAxiosPublic();

    const fetchGuideById = async id => {
        const response = await axiosPublic.get(`/api/tourGuides/${id}`);
        return response.data;
    };

    const { id } = useParams();
    const {
        data: guide,
        isLoading,
        error
    } = useQuery({
        queryKey: ['tourGuide', id],
        queryFn: () => fetchGuideById(id)
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="py-20 container mx-auto ">
            <div className="p-4 pt-6">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
                    <div className='lg:w-1/2"'>
                        {/* Image Gallery */}
                        <div className="gallery lg:min-w-[750px] lg:max-w-[750px]">
                            <img src={guide.cover} alt="background img" className="w-full object-cover" />
                        </div>
                    </div>
                    <div className="lg:w-1/2">
                        {/* Title and Description */}

                        <div className="overflow-hidden bg-cover my-6">
                            <img src={guide.image} alt={guide.name} className="w-28 h-28 rounded-full bg-cover" />
                        </div>

                        <div className="space-y-3">
                            <h2 className="card-title">{guide.name}!</h2>

                            <div className="flex gap-2 items-center">
                                <ReactStars count={5} value={guide.rating} size={24} activeColor="#ffd700" edit={false} isHalf={true} />
                                <span className="ml-2 text-sm">{guide.rating} / 5</span>
                            </div>
                            <p className="text-lg ">
                                <strong>Experience: </strong>
                                {guide.experience}
                            </p>
                            <p className="text-lg">
                                <strong> Languages: </strong>
                                {guide.languages}
                            </p>
                        </div>
                        <p className="text-lg text-justify mb-4 mt-4">
                            <strong>Biodata: </strong>
                            {guide.bio}
                        </p>
                    </div>
                </div>
                {/* Tour Plan */}
                <section className="tour-plan my-3 lg:mt-12">
                    <h2 className="text-4xl font-bold mb-6">Tour Plan</h2>
                </section>
                <p className="text-lg text-justify leading-relaxed">{guide.description}</p>
            </div>
        </div>
    );
};

export default GuideDetailsProfile;
