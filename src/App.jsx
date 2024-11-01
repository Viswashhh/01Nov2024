import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const OrbitingSphere = () => (
  <motion.div
    className="absolute w-4 h-4 bg-blue-500 rounded-full orbit"
    style={{
      top: '50%',
      left: '50%',
      transform: 'translate(-50%, -50%)',
    }}
  />
);

const ExperienceCard = ({ title, company, period, description }) => (
  <div className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400 mb-2">{company} ({period})</p>
    <p className="text-gray-300">{description}</p>
  </div>
);

function App() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  const experiences = [
    {
      title: "Lecturer",
      company: "Pulchowk Campus, Institute of Engineering, Nepal",
      period: "May 2023 - April 2024",
      description: "Taught postgraduate courses in Advanced Power Electronics and Advanced Semiconductor Devices."
    },
    {
      title: "Lecturer",
      company: "Kathmandu Engineering College, Kalimati, Nepal",
      period: "May 2023 - April 2024",
      description: "Conducted undergraduate courses in Basic Electrical Engineering and Utilization of Electrical Energy."
    },
    {
      title: "Lecturer",
      company: "Westcliff University Affiliated King's College, Babarmahal, Kathmandu",
      period: "January 2024 - April 2024",
      description: "Taught Numerical Methods, employing a Western teaching style that enhanced my pedagogy and led to positive student feedback."
    },
    {
      title: "Assistant Manager",
      company: "TheeGo, Nepal",
      period: "August 2023 - April 2024",
      description: "Worked with a local EV company to address battery pack maintenance and issues in electric vehicles, a relatively new technology for Nepal. This role required resourcefulness in overcoming technical challenges in a developing market."
    },
    {
      title: "Product Development Engineer",
      company: "EBOLT, Nepal",
      period: "June 2021 - August 2023",
      description: "As part of a pioneering startup, I helped develop Nepal's first electric passenger scooter. This position significantly shaped my professional journey, expanding my technical and product development skills."
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto px-4 py-16">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeIn}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-5xl font-bold mb-4">Bishwas Basnet</h1>
          <h2 className="text-2xl text-gray-400">Power Electronics Engineer and Doctoral Researcher</h2>
        </motion.div>
      </header>

      <main className="container mx-auto px-4">
        <section className="mb-20 relative">
          <div className="relative w-64 h-64 mx-auto mb-8">
            <img
              src="https://res.cloudinary.com/daujepex5/image/upload/w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1730375208/IMG_5897_b9scxe.jpg"
              alt="Bishwas Basnet"
              className="rounded-full w-full h-full object-cover z-10 relative"
            />
            {[...Array(3)].map((_, i) => (
              <OrbitingSphere key={i} />
            ))}
          </div>

          <motion.div
            ref={ref}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
            variants={fadeIn}
            transition={{ duration: 0.8 }}
            className="prose prose-lg prose-invert mx-auto max-w-3xl"
          >
            <p className="text-lg leading-relaxed mb-6">
              Since May 2024, I have been a doctoral researcher at Tampere University, Tampere, Finland, specializing in the design of galvanically isolated DC/DC converters for ultra-high power (500kW) and ultra-high frequency (500kHz) applications. Additionally, I'm a fellow researcher at the Coalition for Disaster Resilience Infrastructure (CDRI) in Delhi, India, working with a team of four on a solar-based power backup system designed for high-altitude areas. This system, using second-life batteries, aims to provide lightweight, reliable backup power for critical medical equipment or essential loads during disaster scenarios. It is designed to be both portable and modular, enabling scalable power output when multiple units are connected. Our project is currently funded until 2025.
            </p>
          </motion.div>
        </section>

        <motion.section
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Experience</h2>
          <div className="grid gap-6">
            {experiences.map((exp, index) => (
              <ExperienceCard key={index} {...exp} />
            ))}
          </div>
        </motion.section>

        <motion.section
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          variants={fadeIn}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-6">Skills</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              "DC/DC Converter Design",
              "High-Power Electronics",
              "Project Management",
              "Technical Writing",
              "Battery Management Systems",
              "Product Development"
            ].map((skill, index) => (
              <div key={index} className="bg-gray-800 p-4 rounded-lg text-center hover:bg-gray-700 transition-colors">
                {skill}
              </div>
            ))}
          </div>
        </motion.section>
      </main>

      <footer className="container mx-auto px-4 py-8 text-center text-gray-400">
        <p>© 2024 Bishwas Basnet. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;