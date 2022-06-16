import type { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import ProjectCard from '../components/ProjectCard'
import Skill from '../components/Skill'

import { projects } from '../data/projects'
import { skills } from '../data/skills'

export const getStaticProps = async () => {
  return {
    props: {
      projects,
      skills,
    },
  }
}

const Home = ({ projects, skills }: InferGetStaticPropsType<typeof getStaticProps>) => {
  return (
    <div className="font-Poppins font-medium h-full relative">
      <Head>
        <title>Nick Douglas | Frontend Web Developer</title>
        <meta name="description" content="Nick Douglas - Frontend web developer - portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
        <link rel="canonical" href="https://www.nick-douglas.co.uk/" />
      </Head>

      <nav className="w-full absolute top-0 left-0 p-2 flex justify-between">
        <h1 className='text-2xl font-semibold tracking-tighter'>Nick Douglas<span className="text-orange-500">.</span></h1>

        <ul className="flex gap-3 fixed top-2 right-2">
          <li className="relative w-8 h-8">
            <Link href="https://www.linkedin.com/in/nickdouglas/" passHref={true}>
              <a rel="noreferrer" target="_blank" className="hover:opacity-60 transition-all">
                <Image src="/images/linkedin.svg" alt="Linkedin" layout="fill" />
              </a>
            </Link>
          </li>
          <li className="relative w-8 h-8">
            <Link href="https://github.com/nick-douglas82" passHref={true}>
              <a rel="noreferrer" target="_blank" className="hover:opacity-60 transition-all">
                <Image src="/images/github.svg" alt="Github" layout="fill" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="container px-4 h-full">
        <header className="h-screen flex justify-center flex-col">
          <h2 className="text-[80px] leading-[90px] mb-6">A passionate frontend web developer building great things for the web<span className="text-orange-500">.</span></h2>
          <h3 className="text-2xl font-light text-gray-700 leading-snug w-3/4">Senior Freelance Frontend Developer<span className="text-orange-500">.</span> Currently I am work as a Senior Frontend Engineer at&nbsp;
            <Link href="https://www.linkedin.com/company/schuettflix/mycompany/" passHref={true}>
              <a className="text-orange-500 hover:text-green-400 transition-colors" rel="noreferrer" target="_blank">Schüttflix</a>
            </Link><span className="text-orange-500">.</span>
          </h3>
        </header>

        <section className="-mt-16 pb-16">
          <h2 className="text-6xl leading-none">Skills<span className="text-orange-500">.</span></h2>
          <h4 className="text-xl font-light text-gray-700 mb-10">Things I know<span className="text-orange-500">.</span></h4>

          <div className="grid grid-cols-6">
            {skills.map(skill => (
              <div className="mb-10 pr-7" key={skill.name}>
                <Skill name={skill.name} icon={skill.icon} />
              </div>
            ))}
          </div>
        </section>

        <section className="pb-36">
          <h2 className="text-6xl leading-tight">Projects<span className="text-orange-500">.</span></h2>
          <h4 className="text-xl font-light text-gray-700 mb-10">Things I&apos;ve worked on<span className="text-orange-500">.</span></h4>

          <div className="grid grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <ProjectCard title={project.title} location={project.location} type={project.type} skills={project.skills} itemIndex={index} key={project.title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}

export default Home
