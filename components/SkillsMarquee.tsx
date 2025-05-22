import React from 'react';
import Marquee from 'react-fast-marquee';
import Image from 'next/image';

const skills: { name: string; file: string }[] = [
  { name: 'Ant Design', file: 'antdesign' },
  { name: 'Babel', file: 'babel' },
  { name: 'Canva', file: 'canva' },
  { name: 'CSS3', file: 'css3' },
  { name: 'Express.js', file: 'express' },
  { name: 'Figma', file: 'figma' },
  { name: 'Framer', file: 'framer' },
  { name: 'Git', file: 'git' },
  { name: 'GitHub', file: 'github' },
  { name: 'HTML5', file: 'html5' },
  { name: 'Inkscape', file: 'inkscape' },
  { name: 'JavaScript', file: 'javascript' },
  { name: 'Jira', file: 'jirasoftware' },
  { name: 'MongoDB', file: 'mongodb' },
  { name: 'MUI', file: 'mui' },
  { name: 'MySQL', file: 'mysql' },
  { name: 'Next.js', file: 'nextdotjs' },
  { name: 'Node.js', file: 'nodedotjs' },
  { name: 'OpenAI', file: 'openai' },
  { name: 'Postman', file: 'postman' },
  { name: 'Python', file: 'python' },
  { name: 'React', file: 'react' },
  { name: 'Tailwind CSS', file: 'tailwindcss' },
  { name: 'TypeScript', file: 'typescript' },
  { name: 'Vercel', file: 'vercel' },
  { name: 'Webpack', file: 'webpack' }
];

const SkillsMarquee: React.FC = () => {
  return (
    <section className="bg-neutral-950 py-10">
      <Marquee pauseOnHover speed={45} gradient={false}>
        {skills.map((skill) => (
          <div
            key={skill.file}
            className="flex flex-col items-center justify-center mx-4 w-28 min-w-[6rem] rounded-2xl p-4 bg-white/10 backdrop-blur-sm border border-white/10 hover:shadow-lg transition-transform duration-300"
          >
            <div className="w-12 h-12 mb-2">
              <Image
                src={`/skills/${skill.file}.svg`}
                alt={skill.name}
                width={48}
                height={48}
                className="object-contain invert "
              />
            </div>
            <span className="text-xs text-neutral-100 text-center font-medium tracking-wide">
              {skill.name}
            </span>
          </div>
        ))}
      </Marquee>
    </section>
  );
};

export default SkillsMarquee;


