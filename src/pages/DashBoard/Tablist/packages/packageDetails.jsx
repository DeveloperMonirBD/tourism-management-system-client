import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../../../../hook/useAxiosPublic';
import useGuides from '../../../../hook/useGuides';



const PackageDetails = () => {
    const axiosPublic = useAxiosPublic();
    const [guides] = useGuides();
    
    const fetchPackageById = async id => {
        const response = await axiosPublic.get(`/api/packages/${id}`);
        return response.data;
    };

    const { id } = useParams();
    const {
        data: pkg,
        isLoading,
        error
    } = useQuery({
        queryKey: ['package', id],
        queryFn: () => fetchPackageById(id)
    });

    if (isLoading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <div className="container mx-auto p-4 min-h-screen pt-20 lg:pt-32">
            <div className="flex flex-col lg:flex-row lg:gap-10">
                <div className='lg:w-1/2"'>
                    {/* Image Gallery */}
                    <div className="gallery grid gap-4 lg:gap-6 grid-cols-2 md:grid-cols-2 lg:grid-cols-2">
                        {pkg.gallery.map((img, index) => (
                            <img key={index} src={img} alt={`${pkg.trip_title} ${index + 1}`} className="object-cover w-full h-32 md:h-48 lg:h-[200px] rounded-md shadow-md" />
                        ))}
                    </div>
                </div>
                <div className="lg:w-1/2">
                    {/* Title and Description */}
                    <h1 className="text-3xl font-bold my-4 mt-6">{pkg.trip_title}</h1>
                    <p className="text-lg mb-4">{pkg.description}</p>
                    <p className="text-xl font-bold">{pkg.tour_type}</p>
                    <p className="text-xl font-bold mt-2">${pkg.price}</p>

                    {/* Tour Plan */}
                    <section className="tour-plan my-4">
                        <h2 className="text-2xl font-semibold">Tour Plan</h2>
                        <ul className="list-disc list-inside">
                            {pkg.tour_plan?.map((day, index) => (
                                <li key={index} className="my-2">
                                    <strong>Day {day.day}:</strong> {day.title} - {day.description}
                                </li>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>

            {/* all tour guides  */}
            <div>
                <div>
                    <h1 className='text-4xl font-bold text-center uppercase mt-20'>all tour guides</h1>
                </div>
                <div className="my-14 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 fri mx-auto">
                    {guides.map(guide => (
                        <div key={guide._id} className="" onClick={() => (window.location.href = `/tourGuide/${guide._id}`)}>
                            <img src={guide.image} alt="" className="w-52 h-40 object-cover" />
                            <p className="my-2 text-center font-bold">{guide.name}</p>
                        </div>
                    ))}
                </div>
            </div>


            {/* booking form */}

        </div>
    );
};

export default PackageDetails;
