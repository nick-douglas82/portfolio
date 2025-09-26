import type { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { DocumentTextIcon } from '@heroicons/react/solid'
import LinkedIn from '../components/LinkedIn'
import GitHub from '../components/GitHub'
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
    <div className="relative h-full font-medium font-Poppins">
      <Head>
        <title>Nick Douglas | Frontend Web Developer</title>
        <meta name="description" content="Nick Douglas - Frontend web developer - portfolio" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/icon.png" />
        <link rel="apple-touch-icon" href="/icon.png" />
      </Head>

      <nav className="flex absolute top-0 left-0 justify-between px-4 py-2 w-full lg:p-2">
        <h1 className='text-2xl font-semibold tracking-tighter md:text-4xl lg:text-2xl'>Nick Douglas<span className="text-orange-500">.</span></h1>

        <ul className="flex fixed top-2 right-4 gap-2 lg:right-2">
          <li className="relative -top-1">
            <Link rel="noreferrer" href="/nick_douglas_cv.pdf" passHref={true} target="_blank" className="transition-all hover:opacity-60">
              <DocumentTextIcon className='w-7 h-7 text-gray-400' />
            </Link>
          </li>
          <li className="relative w-6 h-6 bg-white rounded-xl">
            <Link rel="noreferrer" href="https://www.linkedin.com/in/nickdouglas/" passHref={true} target="_blank" className="transition-all hover:opacity-60">
              <LinkedIn className='w-6 h-6 text-gray-400' />
            </Link>
          </li>
          <li className="relative w-6 h-6 bg-white rounded-xl">
            <Link rel="noreferrer" href="https://github.com/nick-douglas82" passHref={true} target="_blank" className="transition-all hover:opacity-60">
              <GitHub className='w-6 h-6 text-gray-400' />
            </Link>
          </li>
        </ul>
      </nav>

      <main className="container px-4 h-full">
        <header className="flex flex-col justify-center h-screen">
          <h2 className="text-3xl md:text-6xl leading-tight lg:text-[80px] lg:leading-[90px] mb-6">A passionate frontend web developer building great things for the web<span className="text-orange-500">.</span></h2>
          <h3 className="w-full text-xl font-light leading-snug text-gray-700 md:text-2xl md:w-3/4">Senior Freelance Frontend Developer<span className="text-orange-500">.</span>
            {/* <span className="text-orange-500">.</span> Currently I am work as a Senior Frontend Developer at&nbsp;
            <Link href="https://www.madebysauce.com/" passHref={true}>
              <a className="text-orange-500 transition-colors hover:text-green-400" rel="noreferrer" target="_blank">Made by Sauce</a>
            </Link><span className="text-orange-500">.</span> */}
          </h3>
        </header>

        <section className="pb-16 -mt-16">
          <h2 className="text-4xl leading-none md:text-6xl">Skills<span className="text-orange-500">.</span></h2>
          <h4 className="mb-10 text-lg font-light text-gray-700 md:text-xl">Things I know<span className="text-orange-500">.</span></h4>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-5 lg:grid-cols-6">
            {skills.map(skill => (
              <div className="mb-6 h-24 lg:mb-10" key={skill.name}>
                <Skill name={skill.name} icon={skill.icon} />
              </div>
            ))}
          </div>
        </section>

        <section className="pb-16 lg:pb-36">
          <h2 className="text-4xl leading-tight md:text-6xl lg:mb-1">Projects<span className="text-orange-500">.</span></h2>
          <h4 className="mb-10 text-lg font-light text-gray-700 md:text-xl">Things I&apos;ve worked on<span className="text-orange-500">.</span></h4>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
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
