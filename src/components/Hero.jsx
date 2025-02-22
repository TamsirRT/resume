import React from 'react';
import { Link } from 'react-scroll';

const Hero = ({ data }) => {
  return (
    <section 
      className="min-h-screen bg-cover bg-center bg-no-repeat flex items-center justify-center"
      style={{ backgroundImage: 'url("/hero-image.webp")' }}
    >
      <div className="max-w-4xl mx-auto text-center px-4">
        {/* Optional overlay for better text readability */}
        <div className="bg-black/30 p-8 rounded-lg backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in text-white">
            {data.name}
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 mb-8">{data.title}</p>
          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">
            {data.bio}
          </p>
          
          {/* Reorganized buttons with grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-3xl mx-auto">
            <a
              href={data.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-primary hover:bg-primary-light text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Connect on LinkedIn</span>
            </a>
            
            {/* <a
              href={`mailto:${data.email}`}
              className="bg-accent hover:bg-accent-light text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Email Me</span>
            </a> */}

            <a
              href="/resume.pdf"
              download="Tamsir_Toure_Resume.pdf"
              className="bg-text hover:bg-text/80 text-white px-6 py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              <span>Download Resume</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 