import { useQuery } from '@tanstack/react-query';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const fetchPackageById = async id => {
    const response = await axios.get(`http://localhost:5000/api/packages/${id}`);
    return response.data;
};

const PackageDetails = () => {
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
        <div className="container mx-auto p-4 h-screen pt-20 lg:pt-32">
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
                    <h1 className="text-3xl font-bold my-4">{pkg.trip_title}</h1>
                    <p className="text-lg mb-4">{pkg.description}</p>

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
        </div>
    );
};

export default PackageDetails;
