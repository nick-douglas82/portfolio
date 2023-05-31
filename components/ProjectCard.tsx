import React from 'react'
import { LocationMarkerIcon, ClockIcon } from '@heroicons/react/outline'
import Skill, { TSkill } from './Skill'


export interface Project {
  title: string;
  location: string;
  type: {
    text: string,
    type: string,
  };
  skills: TSkill[];
  itemIndex: number;
}

const ProjectCard = ({ title, location, type, skills, itemIndex }: Project) => {
  const shadows = [
    'shadow-sky-500/25',
    'shadow-lime-500/25',
    'shadow-yellow-300/25',
    'shadow-cyan-300/25',
    'shadow-red-500/25',
    'shadow-orange-500/25',
    'shadow-fuchsia-500/25',
    'shadow-teal-500/25',
    'shadow-pink-500/25',
    'shadow-lime-500/25',
    'shadow-sky-500/25',
  ]
  return (
    <div className={`bg-white rounded-2xl p-7 h-60 lg:h-72 flex flex-col shadow-lg ${shadows[itemIndex]}`}>
      <h2 className="text-xl leading-snug md:text-lg lg:text-2xl" dangerouslySetInnerHTML={{ __html: title }} />
      <ul className="flex gap-6 mt-2 text-sm text-gray-400 list-none lg:mt-6">
        <li className="flex">
          <LocationMarkerIcon className="w-5 h-5 mr-1 text-gray-400" />
          {location}
        </li>
        <li className="flex">
          <ClockIcon className="w-5 h-5 mr-1 text-gray-400" />
          {type.text}
        </li>
      </ul>
      <div className="flex gap-2 mt-auto">
        {skills.map(skill => (
          <Skill name={skill.name} icon={skill.icon} hideName size="sm" key={skill.name} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard