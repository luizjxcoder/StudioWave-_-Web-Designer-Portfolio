import { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, ExternalLink, Tag, User } from 'lucide-react';
import { ProjectProps } from '../components/ProjectCard';

const projects: (ProjectProps & {
  fullDescription?: string;
  date?: string;
  client?: string;
  services?: string[];
  challenge?: string;
  solution?: string;
  result?: string;
  images?: string[];
})[] = [
  {
    id: 'eco-store',
    title: 'Eco Store Redesign',
    description: 'A complete redesign of an e-commerce platform focused on sustainability and user experience.',
    imageUrl: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    category: 'E-commerce',
    link: 'https://example.com',
    fullDescription: 'Green Earth is an e-commerce platform dedicated to eco-friendly and sustainable products. The client approached me to redesign their online store to improve user experience, increase conversions, and better communicate their brand values.',
    date: 'January 2025',
    client: 'Green Earth Co.',
    services: ['UX/UI Design', 'E-commerce Design', 'Frontend Development', 'CMS Integration'],
    challenge: 'The existing website had poor navigation, lacked visual hierarchy, and didn\'t effectively communicate the brand\'s sustainable mission. The checkout process was complicated, leading to high cart abandonment rates.',
    solution: 'I redesigned the entire user interface with a focus on simplicity and sustainability. I implemented a more intuitive category structure, created a streamlined checkout process, and developed a design system that reflected the brand\'s eco-friendly values.',
    result: 'The redesign resulted in a 45% increase in conversions, a 30% decrease in cart abandonment, and significantly improved user satisfaction scores. The new design effectively communicates the brand\'s mission and values.',
    images: [
      'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
      'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=774&q=80',
      'https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    ]
  },
  {
    id: 'finance-app',
    title: 'Finance Dashboard',
    description: 'A comprehensive finance tracking application with data visualization and insights.',
    imageUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
    category: 'Dashboard',
    fullDescription: 'MoneyWise is a personal finance management application that helps users track their spending, set budgets, and plan for financial goals. I was tasked with designing a dashboard that makes complex financial data accessible and actionable.',
    date: 'March 2025',
    client: 'MoneyWise Inc.',
    services: ['UI/UX Design', 'Data Visualization', 'Frontend Development'],
    challenge: 'Financial data can be overwhelming, and the client needed a way to present complex information in an intuitive and user-friendly manner. The dashboard needed to appeal to both financial experts and novices.',
    solution: 'I designed a modular dashboard with customizable widgets that allow users to focus on the financial metrics that matter most to them. I developed clear data visualizations that make trends and patterns immediately apparent and implemented a color-coding system to indicate financial health at a glance.',
    result: 'The new dashboard received overwhelmingly positive feedback from beta testers, with 92% reporting that they found it easier to understand their finances. The application saw a 60% increase in daily active users after the redesign.',
    images: [
      'https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1050&q=80',
      'https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1115&q=80',
      'https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    ]
  },
  // Only including two fully detailed projects to keep the file smaller
  // Other projects would follow the same pattern
];

export const ProjectDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [project, setProject] = useState<(ProjectProps & {
    fullDescription?: string;
    date?: string;
    client?: string;
    services?: string[];
    challenge?: string;
    solution?: string;
    result?: string;
    images?: string[];
  }) | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      const foundProject = projects.find(p => p.id === id) || null;
      setProject(foundProject);
      setIsLoading(false);
    }, 500);
  }, [id]);

  if (isLoading) {
    return (
      <div className="min-h-screen bg-black text-white pt-24 flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-t-2 border-indigo-500 rounded-full"></div>
      </div>
    );
  }

  if (!project) {
    return (
      <div className="min-h-screen bg-black text-white pt-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl font-bold mb-4">Project Not Found</h1>
          <p className="text-gray-400 mb-8">The project you're looking for doesn't exist or has been moved.</p>
          <Link to="/work" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
            <ArrowLeft className="mr-2 h-5 w-5" /> Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/work" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors">
          <ArrowLeft size={18} className="mr-2" /> Back to Projects
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative rounded-xl overflow-hidden mb-8 border border-white/10">
              <img 
                src={project.imageUrl} 
                alt={project.title} 
                className="w-full h-auto"
              />
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{project.title}</h1>
            <p className="text-xl text-gray-300 mb-8">{project.fullDescription || project.description}</p>
            
            {project.challenge && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">The Challenge</h2>
                <p className="text-gray-300">{project.challenge}</p>
              </div>
            )}
            
            {project.solution && (
              <div className="mb-8">
                <h2 className="text-2xl font-semibold mb-4">The Solution</h2>
                <p className="text-gray-300">{project.solution}</p>
              </div>
            )}
            
            {project.result && (
              <div className="mb-12">
                <h2 className="text-2xl font-semibold mb-4">The Result</h2>
                <p className="text-gray-300">{project.result}</p>
              </div>
            )}
            
            {project.images && project.images.length > 0 && (
              <div>
                <h2 className="text-2xl font-semibold mb-6">Project Gallery</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {project.images.map((img, index) => (
                    <motion.div 
                      key={index}
                      className="rounded-xl overflow-hidden border border-white/10"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                    >
                      <img src={img} alt={`${project.title} - Image ${index + 1}`} className="w-full h-auto" />
                    </motion.div>
                  ))}
                </div>
              </div>
            )}
          </motion.div>
          
          <motion.div 
            className="lg:col-span-1"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 sticky top-24">
              <h2 className="text-xl font-semibold mb-6">Project Details</h2>
              
              <div className="space-y-6">
                {project.client && (
                  <div className="flex items-start">
                    <User size={20} className="text-indigo-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Client</p>
                      <p className="text-white font-medium">{project.client}</p>
                    </div>
                  </div>
                )}
                
                {project.date && (
                  <div className="flex items-start">
                    <Calendar size={20} className="text-indigo-400 mt-1 mr-3" />
                    <div>
                      <p className="text-sm text-gray-400">Date</p>
                      <p className="text-white font-medium">{project.date}</p>
                    </div>
                  </div>
                )}
                
                <div className="flex items-start">
                  <Tag size={20} className="text-indigo-400 mt-1 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Category</p>
                    <p className="text-white font-medium">{project.category}</p>
                  </div>
                </div>
                
                {project.services && (
                  <div>
                    <p className="text-sm text-gray-400 mb-2">Services</p>
                    <div className="flex flex-wrap gap-2">
                      {project.services.map((service, index) => (
                        <span 
                          key={index}
                          className="px-3 py-1 text-xs font-medium bg-indigo-900/50 text-indigo-300 rounded-full border border-indigo-600/30"
                        >
                          {service}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
                
                {project.link && (
                  <div className="pt-4">
                    <a 
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-full justify-center"
                    >
                      Visit Live Project <ExternalLink size={16} className="ml-2" />
                    </a>
                  </div>
                )}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetailPage;
