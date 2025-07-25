import { motion } from 'framer-motion';
import { ArrowLeft, Briefcase, Calendar, Download, GraduationCap, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutPage = () => {
  const experiences = [
    {
      title: 'Senior UI/UX Designer',
      company: 'Designo Creative Agency',
      period: '2023 - Present',
      description: 'Lead the design team in creating user-centered digital experiences. Collaborate with clients and developers to ensure design excellence.',
    },
    {
      title: 'Web Designer & Developer',
      company: 'TechVision',
      period: '2021 - 2023',
      description: 'Designed and developed websites and applications for clients across various industries. Implemented responsive designs and interactive elements.',
    },
    {
      title: 'UI Designer',
      company: 'Digital Crafters',
      period: '2019 - 2021',
      description: 'Created user interfaces for web and mobile applications. Conducted user research and usability testing to improve design outcomes.',
    },
  ];

  const education = [
    {
      degree: 'Master of Design',
      institution: 'Design Institute of Technology',
      period: '2017 - 2019',
      description: 'Specialized in Digital Product Design with focus on user experience and interaction design.',
    },
    {
      degree: 'Bachelor of Computer Science',
      institution: 'University of Technology',
      period: '2013 - 2017',
      description: 'Focused on web development and human-computer interaction. Graduated with honors.',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white pt-20 pb-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Link to="/" className="inline-flex items-center text-indigo-400 hover:text-indigo-300 mb-8 transition-colors">
          <ArrowLeft size={18} className="mr-2" /> Back to Home
        </Link>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <motion.div 
            className="lg:col-span-2 order-2 lg:order-1"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl font-bold mb-6">About Me</h1>
            
            <div className="prose prose-invert max-w-none">
              <p className="text-xl text-gray-300 mb-6">
                I'm Alex Chen, a passionate web designer and developer with over 5 years of experience in creating beautiful, functional digital experiences.
              </p>
              
              <p className="text-gray-300 mb-6">
                My journey in design began with a curiosity about how things work and a desire to create experiences that delight users. Over the years, I've refined my skills and developed a design philosophy that centers on simplicity, usability, and visual appeal. I believe that great design is not just about aesthetics, but about solving problems and improving lives.
              </p>
              
              <p className="text-gray-300 mb-10">
                I specialize in user-centered design that balances form and function. My technical background allows me to bridge the gap between design and development, ensuring that creative visions can be implemented effectively. Whether I'm designing a mobile app, a website, or a digital product, my goal is always to create experiences that feel intuitive and engaging.
              </p>
            </div>
            
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <Briefcase size={20} className="mr-2 text-indigo-400" /> Work Experience
            </h2>
            
            <div className="space-y-8 mb-16">
              {experiences.map((exp, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-indigo-500 before:to-purple-500 before:rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <div className="absolute left-0 top-0 w-2 h-2 bg-indigo-500 rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold text-white">{exp.title}</h3>
                  <div className="flex items-center text-indigo-400 mb-2">
                    <span>{exp.company}</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-400">{exp.period}</span>
                  </div>
                  <p className="text-gray-300">{exp.description}</p>
                </motion.div>
              ))}
            </div>
            
            <h2 className="text-2xl font-semibold mb-6 flex items-center">
              <GraduationCap size={20} className="mr-2 text-indigo-400" /> Education
            </h2>
            
            <div className="space-y-8">
              {education.map((edu, index) => (
                <motion.div 
                  key={index}
                  className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gradient-to-b before:from-indigo-500 before:to-purple-500 before:rounded-full"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 * (index + 1) }}
                >
                  <div className="absolute left-0 top-0 w-2 h-2 bg-indigo-500 rounded-full transform -translate-x-1/2"></div>
                  <h3 className="text-xl font-semibold text-white">{edu.degree}</h3>
                  <div className="flex items-center text-indigo-400 mb-2">
                    <span>{edu.institution}</span>
                    <span className="mx-2">•</span>
                    <span className="text-gray-400">{edu.period}</span>
                  </div>
                  <p className="text-gray-300">{edu.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            className="lg:col-span-1 order-1 lg:order-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10 sticky top-24">
              <div className="relative rounded-xl overflow-hidden mb-6 border border-white/10">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                  alt="Alex Chen" 
                  className="w-full h-auto"
                />
              </div>
              
              <h2 className="text-xl font-semibold mb-6">Personal Info</h2>
              
              <div className="space-y-4 mb-8">
                <div className="flex items-center">
                  <Calendar size={16} className="text-indigo-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Birthday</p>
                    <p className="text-white">May 12, 1991</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <MapPin size={16} className="text-indigo-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Location</p>
                    <p className="text-white">San Francisco, CA</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail size={16} className="text-indigo-400 mr-3" />
                  <div>
                    <p className="text-sm text-gray-400">Email</p>
                    <p className="text-white">hello@studiowave.design</p>
                  </div>
                </div>
              </div>
              
              <div className="pt-4 space-y-4">
                <a 
                  href="#"
                  className="inline-flex items-center px-5 py-2.5 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 w-full justify-center"
                >
                  <Download size={16} className="mr-2" /> Download Resume
                </a>
                <Link 
                  to="/contact"
                  className="inline-flex items-center px-5 py-2.5 border border-indigo-500 text-sm font-medium rounded-md text-indigo-400 bg-transparent hover:bg-indigo-900/20 w-full justify-center"
                >
                  <Mail size={16} className="mr-2" /> Contact Me
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
