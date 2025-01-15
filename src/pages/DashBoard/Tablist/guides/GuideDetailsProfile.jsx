import { useParams } from "react-router-dom";
import useAxiosPublic from "../../../../hook/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


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
        <div className="py-20">
            <div className="container mx-auto p-4 pt-6">
                <div className="flex flex-col lg:flex-row gap-8 lg:gap-10">
                    <div className='lg:w-2/3"'>
                        {/* Image Gallery */}
                        <div className="gallery lg:min-w-[850px]">
                            <img src={guide.cover} alt="background img" className="w-full object-cover" />
                        </div>
                    </div>
                    <div className="lg:w-1/3">
                        {/* Title and Description */}
                        <div className="flex gap-6">
                            <div className="overflow-hidden">
                                <img src={guide.image} alt={guide.name} className="w-20 h-20 rounded-full" />
                            </div>
                            <h2 className="card-title">{guide.name}!</h2>
                        </div>

                        <div className="space-y-3">
                            <p className="text-xl mt-4">
                                <strong>Rating: </strong> {guide.rating}
                            </p>
                            <p className="text-xl ">
                                <strong>Experience: </strong>
                                {guide.experience}
                            </p>
                            <p className="text-xl">
                                <strong> Languages: </strong>
                                {guide.languages}
                            </p>
                        </div>

                        <p className="text-lg text-justify mb-4 mt-4">{guide.bio}</p>

                        {/* Tour Plan */}
                        <section className="tour-plan my-3 ">
                            <h2 className="text-2xl font-semibold">Tour Plan</h2>
                        </section>
                        <p className="text-base text-justify">{guide.description}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GuideDetailsProfile;