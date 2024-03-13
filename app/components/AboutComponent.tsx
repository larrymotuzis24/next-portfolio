import React from 'react';


const AboutMeComponent: React.FC = () => {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-4xl font-bold text-center mb-4">About Me</h1>
      <p className="text-base text-center mb-6">
        I am a Full Stack Developer with a passion for building scalable web
        applications and engaging user experiences.
      </p>
      {/* Add more about your experience, interests, etc. */}
    </div>
  );
};

export default AboutMeComponent;
