import { useContext, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FacebookIcon } from 'react-share';
import useAxiosPublic from '../../../hook/useAxiosPublic';
import { AuthContext } from '../../../provider/AuthProvider';

const TouristStory = () => {
    const axiosPublic = useAxiosPublic();
    const { user } = useContext(AuthContext);
    const [stories, setStories] = useState([]);
    const [doShare, setDoShare] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchStories = async () => {
            try {
                const response = await axiosPublic.get('/api/stories/random');
                setStories(response.data);
            } catch (error) {
                console.error('Error fetching stories:', error);
            }
        };

        fetchStories();
    }, [axiosPublic]);

    useEffect(() => {
        if (user && doShare) {
            // Automatically share on Facebook if user just logged in
            window.open(`https://facebook.com/share.php?u=http://localhost:3000/stories/${doShare}`, '_blank');
            setDoShare(null);
        }
    }, [user, doShare]);

    const handleShare = storyId => {
        if (!user) {
            setDoShare(storyId);
            navigate('/auth/login');
        } else {
            window.open(`https://facebook.com/share.php?u=http://localhost:3000/stories/${storyId}`, '_blank');
        }
    };

    return (
        <div className="container mx-auto p-10 bg-white shadow-md rounded-md">
            <h2 className="text-4xl font-bold text-center mb-8">Tourist Stories</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                {stories.map(story => (
                    <div key={story._id} className="p-4 border rounded-md shadow-sm">
                        <div className="flex gap-2 items-center ">
                            <img src={story.touristImageURL} className="w-14 h-14 rounded-full" alt="story.displayName" />
                            <p className="font-bold">{story.touristName}</p>
                        </div>

                        <div className="space-y-3 mt-3">
                            <h3 className="text-xl font-semibold">{story.title}</h3>
                            <p>{story.text}</p>
                            <div className="h-[220px] bg-cover">
                                <img src={story.image_url} alt="" className="w-full h-full bg-cover" />
                            </div>

                            <div className="flex justify-between items-center mt-6">
                                <button className="btn" onClick={() => handleShare(story._id)}>
                                    <FacebookIcon size={32} round />
                                    Share on Facebook
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="mt-8 flex justify-center gap-8">
                <button className="btn btn-base" onClick={() => navigate('/dashboard/addStories')}>
                    Add Stories
                </button>
                <button className="btn btn-base" onClick={() => navigate('/dashboard/allStories')}>
                    All Stories
                </button>
            </div>
        </div>
    );
};

export default TouristStory;
