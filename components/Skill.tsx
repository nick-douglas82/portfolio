import Image from 'next/image'

export type TSkill = {
  name: string,
  icon: string,
  hideName?: boolean,
  size?: 'sm' | 'lg',
}

const Skill = ({ name, icon, hideName = false, size = 'lg' }: TSkill) => {
  const iconSize = size === 'sm' ? 'h-6 w-6' : 'h-12 w-12';
  return (
    <>
      <div className={`${iconSize} relative`}>
        <Image src={icon} alt={name} layout="fill" />
      </div>
      {!hideName && (
        <div className="text-lg mt-5 leading-tight">{name}</div>
      )}

    </>
  )
}

export default Skill;
