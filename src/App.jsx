import React from 'react';
import { resumeData } from './data/resume';
import Hero from './components/Hero';
import SectionHeader from './components/SectionHeader';
import ProjectCard from './components/ProjectCard';
import SkillPill from './components/SkillPill';

function App() {
  return (
    <div className="bg-gray-50">
      <Hero data={resumeData} />
      
      <main className="max-w-4xl mx-auto px-4 py-16 space-y-16">
        <section id="experience">
          <SectionHeader title="Experience" />
          {resumeData.experience.map((exp, index) => (
            <div key={index} className="mb-8">
              <h3 className="text-xl font-semibold text-primary">{exp.company}</h3>
              <p className="text-secondary mb-2">{exp.role} | {exp.period}</p>
              <ul className="list-disc list-inside text-gray-600">
                {exp.highlights.map((highlight, i) => (
                  <li key={i}>{highlight}</li>
                ))}
              </ul>
            </div>
          ))}
        </section>

        <section id="skills">
          <SectionHeader title="Skills" />
          <div className="grid md:grid-cols-2 gap-8">
            {Object.entries(resumeData.skills).map(([category, skills]) => (
              <div key={category}>
                <h3 className="text-lg font-semibold text-primary mb-3 capitalize">
                  {category}
                </h3>
                <div className="flex flex-wrap">
                  {skills.map((skill, index) => (
                    <SkillPill key={index} skill={skill} />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* <section id="projects">
          <SectionHeader title="Projects" />
          <div className="grid md:grid-cols-2 gap-6">
            {resumeData.projects.map((project, index) => (
              <ProjectCard key={index} project={project} />
            ))}
          </div>
        </section> */}

        <section id="education">
          <SectionHeader title="Education" />
          <div className="bg-white rounded-lg p-6 shadow-sm">
            <h3 className="text-xl font-semibold text-primary">
              {resumeData.education.university}
            </h3>
            <p className="text-secondary">
              {resumeData.education.major} | Expected Graduation: {resumeData.education.graduation}
            </p>
            <p className="text-gray-600">GPA: {resumeData.education.gpa}</p>
          </div>
        </section>
      </main>

      <footer className="bg-primary text-white py-8 mt-16">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} {resumeData.name}</p>
          <p className="text-gray-400 mt-2">
            Built with React & Tailwind CSS
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App; 