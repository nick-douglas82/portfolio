import type { InferGetStaticPropsType } from 'next'
import Image from 'next/image'
import Head from 'next/head'
import Link from 'next/link'
import { DocumentTextIcon } from '@heroicons/react/solid'
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

      <nav className="absolute top-0 left-0 flex justify-between w-full px-4 py-2 lg:p-2">
        <h1 className='text-2xl font-semibold tracking-tighter md:text-4xl lg:text-2xl'>Nick Douglas<span className="text-orange-500">.</span></h1>

        <ul className="fixed flex gap-3 top-2 right-4 lg:right-2">
          <li className="relative w-8 h-9 -top-1">
            <Link href="/nick_douglas_cv.pdf" passHref={true}>
              <a rel="noreferrer" target="_blank" className="transition-all hover:opacity-60">
                <DocumentTextIcon className='w-10 h-10' />
              </a>
            </Link>
          </li>
          <li className="relative w-8 h-8 bg-white rounded-xl">
            <Link href="https://www.linkedin.com/in/nickdouglas/" passHref={true}>
              <a rel="noreferrer" target="_blank" className="transition-all hover:opacity-60">
                <Image src="/images/linkedin.svg" alt="Linkedin" layout="fill" />
              </a>
            </Link>
          </li>
          <li className="relative w-8 h-8 bg-white rounded-xl">
            <Link href="https://github.com/nick-douglas82" passHref={true}>
              <a rel="noreferrer" target="_blank" className="transition-all hover:opacity-60">
                <Image src="/images/github.svg" alt="Github" layout="fill" />
              </a>
            </Link>
          </li>
        </ul>
      </nav>

      <main className="container h-full px-4">
        <header className="flex flex-col justify-center h-screen">
          <h2 className="text-3xl md:text-6xl leading-tight lg:text-[80px] lg:leading-[90px] mb-6">A passionate frontend web developer building great things for the web<span className="text-orange-500">.</span></h2>
          <h3 className="w-full text-xl font-light leading-snug text-gray-700 md:text-2xl md:w-3/4">Senior Freelance Frontend Developer<span className="text-orange-500">.</span> Currently I am work as a Senior Frontend Engineer at&nbsp;
            <Link href="https://www.linkedin.com/company/schuettflix/mycompany/" passHref={true}>
              <a className="text-orange-500 transition-colors hover:text-green-400" rel="noreferrer" target="_blank">Schüttflix</a>
            </Link><span className="text-orange-500">.</span>
          </h3>
        </header>

        <section className="pb-16 -mt-16">
          <h2 className="text-4xl leading-none md:text-6xl">Skills<span className="text-orange-500">.</span></h2>
          <h4 className="mb-10 text-lg font-light text-gray-700 md:text-xl">Things I know<span className="text-orange-500">.</span></h4>
          <div className="grid grid-cols-4 gap-4 md:grid-cols-5 lg:grid-cols-6">
            {skills.map(skill => (
              <div className="h-24 mb-6 lg:mb-10" key={skill.name}>
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
