import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const skills = [
  { category: 'Design', items: ['UI/UX Design', 'Web Design', 'Mobile Design', 'Brand Identity', 'Wireframing', 'Prototyping'] },
  { category: 'Development', items: ['HTML/CSS', 'JavaScript', 'React', 'TypeScript', 'Tailwind CSS', 'Responsive Design'] },
  { category: 'Tools', items: ['Figma', 'Adobe XD', 'Photoshop', 'Illustrator', 'VS Code', 'Git'] },
  { category: 'Soft Skills', items: ['Communication', 'Problem Solving', 'Collaboration', 'Time Management', 'Adaptability', 'Attention to Detail'] },
];

export const SkillsSection = () => {
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-24 bg-black" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            My <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 to-purple-500">Skills</span> & Expertise
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            I've cultivated a diverse skill set that enables me to handle all aspects of the design and development process.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skillGroup, groupIndex) => (
            <motion.div 
              key={skillGroup.category}
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.1 * groupIndex }}
              className="bg-white/5 backdrop-blur-sm rounded-xl p-6 border border-white/10"
            >
              <h3 className="text-xl font-semibold text-white mb-4">{skillGroup.category}</h3>
              <ul className="space-y-3">
                {skillGroup.items.map((skill, skillIndex) => (
                  <li key={skill} className="flex items-center">
                    <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 mr-2"></div>
                    <span className="text-gray-300">{skill}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-20 bg-gradient-to-r from-indigo-900/30 to-purple-900/30 backdrop-blur-sm rounded-xl p-8 border border-white/10"
        >
          <div className="text-center mb-10">
            <h3 className="text-2xl font-bold text-white mb-2">My Design Process</h3>
            <p className="text-gray-400">A systematic approach that ensures successful outcomes for every project</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {['Discovery', 'Design', 'Development', 'Delivery'].map((step, index) => (
              <div key={step} className="relative">
                <div className="flex items-center mb-4">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full bg-indigo-600 text-white font-bold">
                    {index + 1}
                  </div>
                  <div className="ml-4 font-semibold text-white text-lg">{step}</div>
                </div>
                <p className="text-gray-400 text-sm pl-14">
                  {index === 0 && "Understanding project goals, audience, and requirements."}
                  {index === 1 && "Creating wireframes, mockups, and interactive prototypes."}
                  {index === 2 && "Building the solution with clean, efficient code."}
                  {index === 3 && "Testing, refinement, and successful project launch."}
                </p>
                
                {index < 3 && (
                  <div className="hidden lg:block absolute top-5 left-[45px] w-[calc(100%-45px)] h-0.5">
                    <div className="w-full h-full bg-gradient-to-r from-indigo-600 to-transparent"></div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;
