import { useQuery } from '@tanstack/react-query';
import { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../../hook/useAxiosSecure';
import { AuthContext } from '../../provider/AuthProvider';
import Loading from '../Loading';
import EditStoryModal from './EditStoryModal';

const ManageStories = () => {
    const { user } = useContext(AuthContext);
    const axiosSecure = useAxiosSecure();
    const [selectedStory, setSelectedStory] = useState(null);
    const [showEditModal, setShowEditModal] = useState(false);

    // Fetch stories using tanstack query
    const { data: stories = [], refetch } = useQuery({
        queryKey: ['stories'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/api/manageStories/${user.email}`);
            return res.data;
        }
    });

    // Delete stories card
    const handleDelete = id => {
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
                axiosSecure.delete(`/api/stories/${id}`).then(res => {
                    if (res.data.deletedCount > 0) {
                        refetch();
                        Swal.fire({
                            title: 'Deleted!',
                            text: 'Your file has been deleted.',
                            icon: 'success'
                        });
                    }
                });
            }
        });
    };

    // Open edit modal
    const handleEdit = story => {
        setSelectedStory(story);
        setShowEditModal(true);
    };

    // Null check for user
    if (!user) return <Loading />;

    return (
        <div>
            <h1 className="text-2xl md:text-3xl font-semibold text-center mb-10 mt-4">Manage Stories: {stories.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                {stories.map(story => (
                    <div key={story._id} className="p-4 border rounded-md shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex gap-2 items-center">
                                <img src={story.image} className="w-14 h-14 rounded-full" alt={story.displayName} />
                                <p className="font-bold">{story.displayName}</p>
                            </div>
                            <div className="space-y-3 mt-3">
                                <h3 className="text-xl font-semibold">{story.title}</h3>
                                <p>{story.text}</p>
                                <div className="h-[250px] md:h-[230px] bg-cover">
                                    <img src={story.photo_url} alt="" className="w-full h-full bg-cover" />
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 flex justify-center gap-6">
                            <button onClick={() => handleEdit(story)} className="bg-gray-700 text-white btn text-lg">
                                Edit
                            </button>

                            <button onClick={() => handleDelete(story._id)} className="bg-red-500 text-white btn text-lg">
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>

            {showEditModal && <EditStoryModal story={selectedStory} onClose={() => setShowEditModal(false)} onUpdate={refetch} />}
        </div>
    );
};

export default ManageStories;
