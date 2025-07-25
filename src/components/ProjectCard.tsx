import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';
import { Link } from 'react-router-dom';

export interface ProjectProps {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  category: string;
  link?: string;
}

export const ProjectCard = ({ project }: { project: ProjectProps }) => {
  return (
    <motion.div 
      className="group relative bg-black/30 backdrop-blur-sm rounded-xl overflow-hidden border border-white/10"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="relative h-64 overflow-hidden">
        <img 
          src={project.imageUrl} 
          alt={project.title} 
          className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-70"></div>
        <div className="absolute bottom-0 left-0 p-4 text-white">
          <span className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-600/80 backdrop-blur-sm rounded-full">
            {project.category}
          </span>
        </div>
      </div>
      
      <div className="p-5">
        <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm mb-4">{project.description}</p>
        
        <div className="flex justify-between items-center">
          <Link 
            to={`/work/${project.id}`} 
            className="text-indigo-400 hover:text-indigo-300 text-sm font-medium"
          >
            View Details
          </Link>
          
          {project.link && (
            <a 
              href={project.link} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <ExternalLink size={18} />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
