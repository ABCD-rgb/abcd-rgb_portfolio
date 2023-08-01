import Image from 'next/image'
import { roboto } from './fonts'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi'
import {
  DiPython, DiJava, DiDart, 
  DiHtml5, DiCss3, DiJavascript1, DiReact,
  DiMongodb 
} from 'react-icons/di';
import { RiFlutterFill, RiGithubFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiMariadb, SiFirebase } from 'react-icons/si';
import avatar from '../public/avatar.png';
import Socials from '../app/components/socials';

export default function Home() {
  return (
    <main>
      <section className='min-h-screen pt-16 px-44'>
        {/* Navbar */}
        <nav className='mb-32 flex justify-between'>
          <h1 className='text-2xl font-bold'>ARAWELADELMO</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
            </li>
            <li>
              <a className='text-2xl bg-accentPurple px-5 py-2 rounded-xl ml-5' href="#">Resume</a>
            </li>
          </ul>
        </nav>
        {/* About Me */}
        <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-8xl font-bold mb-4'>Arawela Delmo</h2>
              <h3 className='text-3xl font-bold mb-14'>Developer. Majoring in Computer Science.</h3>
              <p className={`${roboto.className} text-xl max-w-xl leading-8`}>
                As a dedicated student and developer, I thrive on the challenges
                that web development and mobile app development offer.
                My coding journey is fueled not only by my love for technology
                but also by my insatiable curiosity to uncover the endless possibilities it holds. 
              </p>
            </div>
            <Image src={avatar} alt={'avatar'}/>
        </div>
        {/* Socials */}
        <div className='px-40 pt-20 mb-40 flex justify-around flex-wrap content-between gap-7'>
          <a href='https://github.com/ABCD-rgb' target='_blank'>
            <Socials social={<FiGithub className='text-7xl'/>} />
          </a>
          <a href='https://www.linkedin.com/in/arawela-delmo/' target='_blank'>
            <Socials social={<FiLinkedin className='text-7xl'/>} />
          </a>
          <a href='https://www.facebook.com/aweh.delmo/' target='_blank'>
            <Socials social={<FiFacebook className='text-7xl'/>} />
          </a>
        </div>
        {/* Skills + Tools */}
        <div className='flex flex-col items-center'>
          <h3 className={`${roboto.className} font-bold text-3xl`}>Skills + Tools</h3>
          <h2 className='font-bold text-7xl'>What I've Explored</h2>
          <div className='bg-bgskills w-full h-96 rounded-xl mt-7 mb-64 p-12 flex flex-wrap justify-start gap-4'>
            <DiPython className='text-8xl'/>
            <DiJava className='text-8xl'/>
            <DiDart className='text-8xl'/>
            <RiFlutterFill className='text-8xl'/>
            <FiGithub className='text-8xl'/>
            <DiHtml5 className='text-8xl'/>
            <DiCss3 className='text-8xl'/>
            <DiJavascript1 className='text-8xl'/>
            <DiReact className='text-8xl'/>
            <TbBrandNextjs className='text-8xl'/>
            <SiTailwindcss className='text-8xl'/>
            <DiMongodb className='text-8xl'/>
            <SiMariadb className='text-8xl'/>
            <SiFirebase className='text-8xl'/>
          </div>
        </div>
      </section>
    </main>
  )
}
