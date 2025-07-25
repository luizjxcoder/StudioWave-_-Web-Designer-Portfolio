import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Clock, Download, Mail, Trophy, Users, Zap } from 'lucide-react';
import { Link } from 'react-router-dom';

export const AboutSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const stats = [
    { icon: <Clock size={20} />, value: '5+', label: 'Years Experience' },
    { icon: <Trophy size={20} />, value: '40+', label: 'Projects Completed' },
    { icon: <Users size={20} />, value: '25+', label: 'Happy Clients' },
    { icon: <Zap size={20} />, value: '15+', label: 'Design Awards' },
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-black/50 to-black/30" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-16 items-center">
          <motion.div 
            ref={ref}
            initial={{ opacity: 0, x: -20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
            transition={{ duration: 0.6 }}
            className="lg:order-2 mb-12 lg:mb-0"
          >
            <div className="relative">
              <div className="aspect-w-3 aspect-h-4 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
                <img 
                  src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80" 
                  alt="Portrait of me" 
                  className="w-full h-full object-cover object-center"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-indigo-600 to-purple-600 rounded-full blur-2xl opacity-50"></div>
              <div className="absolute -top-6 -left-6 w-40 h-40 bg-indigo-600/30 rounded-full blur-2xl"></div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:order-1"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Me</span>
            </h2>
            
            <p className="text-gray-300 mb-6 text-lg">
              Hi, I'm Alex Chen, a passionate web designer and developer with over 5 years of experience 
              creating beautiful, functional digital experiences.
            </p>
            
            <p className="text-gray-400 mb-8">
              I specialize in crafting user-centered designs that not only look stunning but also solve real problems. 
              My approach combines aesthetic sensibility with technical expertise to deliver websites and applications 
              that exceed expectations. I believe in the power of design to transform businesses and enhance user experiences.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-10">
              {stats.map((stat, index) => (
                <motion.div 
                  key={index} 
                  className="text-center p-4 rounded-lg bg-white/5 backdrop-blur-sm border border-white/10"
                  whileHover={{ y: -5, backgroundColor: 'rgba(255, 255, 255, 0.1)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="text-indigo-400 mb-2 flex justify-center">
                    {stat.icon}
                  </div>
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
            
            <div className="flex flex-wrap gap-4">
              <a 
                href="#" 
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700"
              >
                <Download className="mr-2 h-5 w-5" /> Download Resume
              </a>
              <Link 
                to="/contact" 
                className="inline-flex items-center px-6 py-3 border border-indigo-500 text-base font-medium rounded-md text-indigo-400 bg-transparent hover:bg-indigo-900/20"
              >
                <Mail className="mr-2 h-5 w-5" /> Contact Me
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
