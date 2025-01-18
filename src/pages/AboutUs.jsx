import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import useAxiosPublic from '../hook/useAxiosPublic';
import { FaGithub } from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa6';

const AboutUs = () => {
    const axiosPublic = useAxiosPublic();
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const fetchProjects = async () => {
            try {
                const response = await axiosPublic.get('/api/projects');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching stories:', error);
            }
        };

        fetchProjects();
    }, [axiosPublic]);

    return (
        <div className="max-w-[1200px]  mx-auto bg-white p-20 rounded-lg shadow-sm w-full border mb-12">
            <div className="text-center mb-6">
                <h2 className="text-4xl font-bold mb-4">Md. Monirul Islam</h2>
                <p className="mb-4">Email: mrmonir0558@gmail.com | Phone: (+88) 01745286828</p>
            </div>
            <div className="flex justify-between mb-6">
                <Link to="https://github.com/DeveloperMonirBD" target="_blank">
                    <div className="flex items-center gap-2">
                        <FaGithub /> <span className="text-blue-500 underline">Github</span>
                    </div>
                </Link>
                
                <Link to="https://www.linkedin.com/in/monirdeveloper" target="_blank">
                    <div className="flex items-center gap-2">
                        <FaLinkedin /> <span className="text-blue-500 underline">Linkedin</span>
                    </div>
                </Link>
            </div>
            <p className="mb-4">Skills: HTML, CSS, JavaScript, React, Next.js, Node.js, Express.js, MongoDB, Firebase</p>
            <h3 className="text-xl font-semibold mb-2">Education</h3>
            <p className="mb-4">MBA in Accounting from Govt MM College, Jessore (Jan 2019 - Dec 2020)</p>
            <h3 className="text-xl font-semibold mb-2">Projects</h3>
            {projects.map((project, index) => (
                <div key={index} className="mb-4 border-b pb-4">
                    <h4 className="text-lg font-bold ">{project.name}</h4>
                    <p>{project.description}</p>
                    <p className="text-sm">Technologies: {project.technologies.join(', ')}</p>
                    <div>
                        <Link to={project.links.live} className="text-blue-500 hover:underline" target="_blank">
                            Live Link
                        </Link>
                        <span> | </span>
                        <Link to={project.links.clientSide} className="text-blue-500 hover:underline" target="_blank">
                            Client Side
                        </Link>
                        <span> | </span>
                        <Link to={project.links.serverSide} className="text-blue-500 hover:underline" target="_blank">
                            Server Side
                        </Link>
                    </div>
                </div>
            ))}
            <h3 className="text-xl font-semibold mb-2">Hobbies/Interests</h3>
            <p className="mb-4">Gaming, Traveling</p>
            <h3 className="text-xl font-semibold mb-2">Languages</h3>
            <p className="mb-4">Bangla, English</p>
        </div>
    );
};

export default AboutUs;
