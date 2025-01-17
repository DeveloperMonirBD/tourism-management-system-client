import { useQuery } from '@tanstack/react-query';
import { useContext } from 'react';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';
import Loading from '../Loading';
import Swal from 'sweetalert2';
// import useAxiosPublic from '../../hook/useAxiosPublic';

const ManageStories = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();

    // Fetch stories using tanstack query
    const { data: stories = [], refetch } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/manageStories/${user.email}`);
            return res.data;
        }
    });


    const handleDelete = (id) => {
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then(result => {
            if (result.isConfirmed) {  
                axiosSecure.delete(`/api/stories/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success'
                        });
                    }
                })


            }
        });
    }


    // Null check for user
    if (!user) return <Loading />;

    return (
        <div>
            <h1 className='text--2xl md:text-4xl font-bold text-center mb-8'>Manage Stories : {stories.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {stories.map(story => (
                    <div key={story._id} className="p-4 border rounded-md shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex gap-2 items-center">
                                <img src={story.image} className="w-14 h-14 rounded-full" alt={story.displayName} />
                                <p className="font-bold">{story.name}</p>
                            </div>
                            <div className="space-y-3 mt-3">
                                <h3 className="text-xl font-semibold">{story.title}</h3>
                                <p>{story.text}</p>
                                <div className="h-[220px] bg-cover">
                                    <img src={story.photo_url} alt="" className="w-full h-full bg-cover" />
                                </div>
                            </div>
                        </div>
                        
                        <div className="mt-4 flex justify-between">
                            <button onClick={() => (window.location.href = `/edit-story/${story._id}`)} className="bg-blue-500 text-white px-4 py-2 rounded">
                                Edit
                            </button>

                            <button onClick={() => handleDelete(story._id)} className="bg-red-500 text-white px-4 py-2 rounded">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default ManageStories;
