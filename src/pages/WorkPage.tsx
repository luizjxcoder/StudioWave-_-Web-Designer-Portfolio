import { motion } from 'framer-motion';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProjectCard, { ProjectProps } from '../components/ProjectCard';

const projects: ProjectProps[] = [
  {
    id: 'eco-store',
    title: 'Eco Store Redesign',
    description: 'A complete redesign of an e-commerce platform focused on sustainability and user experience.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    category: 'E-commerce',
    link: 'https://example.com',
  },
  {
    id: 'finance-app',
    title: 'Finance Dashboard',
    description: 'A comprehensive finance tracking application with data visualization and insights.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
    category: 'Dashboard',
  },
  {
    id: 'travel-app',
    title: 'Travel Experience App',
    description: 'Mobile application for discovering and booking unique travel experiences around the world.',
    imageUrl: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1121&q=80',
    category: 'Mobile App',
    link: 'https://example.com',
  },
  {
    id: 'agency-site',
    title: 'Creative Agency Website',
    description: 'A modern website for a creative agency with interactive elements and smooth animations.',
    imageUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Website',
  },
  {
    id: 'health-app',
    title: 'Health & Fitness Tracker',
    description: 'Wellness application that helps users track their fitness goals and maintain healthy habits.',
    imageUrl: 'https://images.unsplash.com/photo-1576678927484-cc907957088c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80',
    category: 'Mobile App',
  },
  {
    id: 'restaurant-site',
    title: 'Gourmet Restaurant Platform',
    description: 'Digital presence for a high-end restaurant with online reservations and menu showcase.',
    imageUrl: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Website',
    link: 'https://example.com',
  },
  {
    id: 'education-platform',
    title: 'Online Learning Platform',
    description: 'Interactive educational platform with courses, quizzes, and progress tracking.',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Website',
  },
  {
    id: 'social-network',
    title: 'Community Social Platform',
    description: 'Social networking app focused on connecting people with similar interests and hobbies.',
    imageUrl: 'https://images.unsplash.com/photo-1516251193007-45ef944ab0c6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    category: 'Mobile App',
  },
  {
    id: 'productivity-tool',
    title: 'Task Management Solution',
    description: 'Productivity tool designed to help teams collaborate and manage projects efficiently.',
    imageUrl: 'https://images.unsplash.com/photo-1611224923853-80b023f02d71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80',
    category: 'Dashboard',
  },
];

export const WorkPage = () => {
  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <Link to="/" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors">
            <ArrowLeft size={18} className="mr-2" /> Back to Home
          </Link>
          
          <motion.h1 
            className="text-4xl md:text-5xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Work</span>
          </motion.h1>
          
          <motion.p 
            className="text-gray-400 max-w-3xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            Browse through my portfolio of design and development projects. Each piece represents a unique challenge and solution, showcasing my approach to creating effective digital experiences.
          </motion.p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 * Math.min(index, 5) }}
            >
              <ProjectCard project={project} />
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WorkPage;
