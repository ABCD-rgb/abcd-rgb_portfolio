import Image from 'next/image';
import Link from 'next/link';
import { roboto } from './fonts';
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi'
import {
  DiPython, DiJava, DiDart, 
  DiHtml5, DiCss3, DiJavascript1, DiReact,
  DiMongodb 
} from 'react-icons/di';
import { RiFlutterFill } from 'react-icons/ri';
import { TbBrandNextjs } from 'react-icons/tb';
import { SiTailwindcss, SiMariadb, SiFirebase } from 'react-icons/si';
import avatar from '../public/avatar.png';
import Socials from './components/socials';

export default function Home() {
  return (
    <main>
      <section className='min-h-screen pt-16 mx-14 md:mx-44'>
        <div className='absolute w-96 h-96 bg-accentGreen rounded-full blur-3xl opacity-40 overflow-hidden -left-56 top-96'></div>
        <div className='absolute w-96 h-96 bg-accentPurple rounded-full blur-3xl opacity-50 overflow-hidden right-48 -top-64'></div>
        {/* Navbar */}
        <nav className='mb-32 flex justify-around md:justify-between'>
          <h1 className='text-lg md:text-2xl font-bold'>ARAWELADELMO</h1>
          <ul className='flex items-center'>
            <li>
              {/* <BsFillMoonStarsFill className='cursor-pointer text-2xl' /> */}
            </li>
            <li>
              <Link className=' text-xl md:text-2xl bg-accentPurple px-5 py-2 rounded-xl shadow-lg ml-5 hover:bg-transparent hover:border-accentPurple hover:border-2 hover:shadow-lg hover:ring-2' href="/resume">Résumé</Link>
            </li>
          </ul>
        </nav>
        {/* About Me */}
        <div className='flex flex-col items-center justify-between md:flex-row'>
            <div>
              <h2 className='text-4xl font-bold mb-4 md:text-8xl'>Arawela Delmo</h2>
              <h3 className='text-xl font-bold mb-8 md:mb-14 md:text-4xl'>Developer. Majoring in Computer Science.</h3>
              <p className={`${roboto.className} text-xs max-w-xl leading-8 md:text-base`}>
                As a dedicated student and developer, I thrive on the challenges
                that web development and mobile app development offer.
                My coding journey is fueled not only by my love for technology
                but also by my insatiable curiosity to uncover the endless possibilities it holds. 
              </p>
            </div>
            <Image src={avatar} alt={'avatar'} className='mt-5'/>
        </div>
        {/* Socials */}
        <div className='px-40 pt-20 mb-40 flex justify-around flex-wrap content-between gap-7 '>
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
          <h3 className={`${roboto.className} font-bold text-lg lg:text-3xl`}>Skills + Tools</h3>
          <h2 className='font-bold text-3xl lg:text-7xl'>What Ive Explored</h2>
          <div className='bg-bgskills w-full h-96 rounded-xl mt-7 mb-64 p-12 flex flex-wrap justify-start gap-4'>
            <DiPython className='m-auto text-5xl lg:text-8xl'/>
            <DiJava className='m-auto text-5xl lg:text-8xl'/>
            <DiDart className='m-auto text-5xl lg:text-8xl'/>
            <RiFlutterFill className='m-auto text-5xl lg:text-8xl'/>
            <FiGithub className='m-auto text-5xl lg:text-8xl'/>
            <DiHtml5 className='m-auto text-5xl lg:text-8xl'/>
            <DiCss3 className='m-auto text-5xl lg:text-8xl'/>
            <DiJavascript1 className='m-auto text-5xl lg:text-8xl'/>
            <DiReact className='m-auto text-5xl lg:text-8xl'/>
            <TbBrandNextjs className='m-auto text-5xl lg:text-8xl'/>
            <SiTailwindcss className='m-auto text-5xl lg:text-8xl'/>
            <DiMongodb className='m-auto text-5xl lg:text-8xl'/>
            <SiMariadb className='m-auto text-5xl lg:text-8xl'/>
            <SiFirebase className='m-auto text-5xl lg:text-8xl'/>
          </div>
        </div>
        {/* Portfolio */}
        <div>
          <h2 className='font-bold text-3xl md:text-7xl py-5'>Portfolio</h2>
          <h3 className={`${roboto.className} font-bold text-lg md:text-3xl pb-20`}>Coming soon.</h3>
        </div>
      </section>
    </main>
  )
}
