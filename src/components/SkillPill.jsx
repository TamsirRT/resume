import React from 'react';

const SkillPill = ({ skill }) => {
  return (
    <span className="px-3 py-1 bg-accent/10 text-accent rounded-full text-sm font-medium m-1 hover:bg-accent/20 transition-colors">
      {skill}
    </span>
  );
};

export default SkillPill; 