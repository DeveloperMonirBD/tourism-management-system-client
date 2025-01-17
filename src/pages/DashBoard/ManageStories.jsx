import { useContext } from 'react';
import useAxiosPublic from '../../hook/useAxiosPublic';
import { AuthContext } from '../../provider/AuthProvider';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';

const ManageStories = () => {
    const { user } = useContext(AuthContext);
    const axiosPublic = useAxiosPublic();
    const queryClient = useQueryClient();

    // Null check for user
    if (!user) return <div>Loading...</div>;

    // Fetch stories using tanstack query
    const { data: stories = [] } = useQuery({
        queryKey: ['stories', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/api/stories/${user.email}`);
            return res.data;
        }
    });

    const deleteStoryMutation = useMutation({
        mutationFn: async (storyId) => {
            await axiosPublic.delete(`/api/stories/${storyId}`);
        },
        onSuccess: () => {
            queryClient.invalidateQueries(['stories', user.email]);
        }
    });

    const handleDelete = (storyId) => {
        deleteStoryMutation.mutate(storyId);
    };

    return (
        <div>
            <h1>Manage Stories : {stories.length}</h1>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                {stories.map(story => (
                    <div key={story._id} className="p-4 border rounded-md shadow-sm flex flex-col justify-between">
                        <div>
                            <div className="flex gap-2 items-center">
                                <img src={story.touristImageURL} className="w-14 h-14 rounded-full" alt={story.displayName} />
                                <p className="font-bold">{story.touristName}</p>
                            </div>
                            <div className="space-y-3 mt-3">
                                <h3 className="text-xl font-semibold">{story.title}</h3>
                                <p>{story.text}</p>
                                <div className="h-[220px] bg-cover">
                                    <img src={story.image_url} alt="" className="w-full h-full bg-cover" />
                                </div>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between">
                            <button onClick={() => window.location.href = `/edit-story/${story._id}`} className="bg-blue-500 text-white px-4 py-2 rounded">
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
