import React from 'react';

const SectionHeader = ({ title }) => {
  return (
    <h2 className="text-2xl font-bold mb-6 text-primary border-b-2 border-accent pb-2">
      {title}
    </h2>
  );
};

export default SectionHeader; 