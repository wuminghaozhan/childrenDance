// filepath: /Users/eeo/personal/myNext/childrenDance/app/index/home/page.tsx
import { ContactUs } from '@/app/ui/components/official/ContactUs';
import { Courses } from '@/app/ui/components/official/Courses';
import { Features } from '@/app/ui/components/official/Feactures';
import { Hero } from '@/app/ui/components/official/Hero';
import { StudentShowcase } from '@/app/ui/components/official/StudentShowcase';
import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="flex-grow">
      <Hero />
      <Courses />
      <Features />
      <StudentShowcase />
      <ContactUs />
    </div>
  );
};

export default Home;