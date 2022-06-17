import Image from 'next/image'

export type TSkill = {
  name: string,
  icon: string,
  hideName?: boolean,
  size?: 'sm' | 'lg',
}

const Skill = ({ name, icon, hideName = false, size = 'lg' }: TSkill) => {
  const iconSize = size === 'sm' ? 'h-7 w-7 md:w-8 md:h-8 lg:h-6 lg:w-6' : 'h-10 w-10 md:w-14 md:h-14 lg:h-12 lg:w-12';
  return (
    <>
      <div className={`${iconSize} relative`}>
        <Image src={icon} alt={name} layout="fill" />
      </div>
      {!hideName && (
        <div className="text-sm md:text-lg mt-5 leading-tight">{name}</div>
      )}
    </>
  )
}

export default Skill;
