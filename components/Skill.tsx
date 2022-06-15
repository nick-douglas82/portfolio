import Image from 'next/image'

export type SkillProps = {
  name: string,
  icon: string,
}

const Skill = ({ name, icon }: SkillProps) => {
  return (
    <>
      <div className="mb-10 pr-7">
        <div className="w-12 h-12 relative">
          <Image src={icon} alt={name} layout="fill" />
        </div>
        <div className="text-lg mt-5">
          {name}
        </div>
      </div>
    </>
  )
}

export default Skill;
