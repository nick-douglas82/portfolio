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
    <div className={`bg-white rounded-2xl p-7 h-72 flex flex-col shadow-lg ${shadows[itemIndex]}`}>
      <h2 className="text-2xl leading-snug" dangerouslySetInnerHTML={{ __html: title }} />
      <ul className="text-sm flex list-none text-gray-400 mt-6 gap-6">
        <li className="flex">
          <LocationMarkerIcon className="h-5 w-5 text-gray-400 mr-1" />
          {location}
        </li>
        <li className="flex">
          <ClockIcon className="h-5 w-5 text-gray-400 mr-1" />
          {type.text}
        </li>
      </ul>
      <div className="mt-auto flex gap-2">
        {skills.map(skill => (
          <Skill name={skill.name} icon={skill.icon} hideName size="sm" key={skill.name} />
        ))}
      </div>
    </div>
  )
}

export default ProjectCard