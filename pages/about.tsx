// pages/About.tsx
import type { NextPage } from 'next';
import AboutMeComponent from '../app/components/AboutComponent';

const About: NextPage = () => {
  return (
    <div>
      {/* Add any page-specific layout you need */}
      <AboutMeComponent />
    </div>
  );
};

export default About;
