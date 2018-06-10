import React from 'react';
import sections from 'config/sections';
import Section from 'components/Section';

const AllSections = ({ data }) => {
  return (
    <div>
      {sections.map(section => (
        <Section key={section.title} section={section} data={data} />
      ))}
    </div>
  );
};

export default AllSections;
