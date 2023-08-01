import Image from 'next/image'
import { roboto } from './fonts'
import { BsFillMoonStarsFill } from "react-icons/bs";
import { FiGithub, FiLinkedin, FiFacebook } from 'react-icons/fi'
import avatar from '../public/avatar.png';
import Socials from '../app/components/socials';

export default function Home() {
  return (
    <main>
      <section className='min-h-screen pt-16 px-44'>
        {/* Navbar */}
        <nav className='mb-40 flex justify-between'>
          <h1 className='text-2xl font-bold'>ARAWELADELMO</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
            </li>
            <li>
              <a className='text-2xl bg-accentPurple px-5 py-1 rounded-xl ml-4' href="#">Resume</a>
            </li>
          </ul>
        </nav>
        {/* About Me */}
        <div className='flex items-center justify-between'>
            <div>
              <h2 className='text-8xl font-bold mb-4'>Arawela Delmo</h2>
              <h3 className='text-3xl font-bold mb-14'>Developer. Majoring in Computer Science.</h3>
              <p className={`roboto.className text-xl max-w-lg leading-8`}>
                As a dedicated student and developer, I thrive on the challenges
                that web development and mobile app development offer.
                My coding journey is fueled not only by my love for technology
                but also by my insatiable curiosity to uncover the endless possibilities it holds. 
              </p>
            </div>
            <Image src={avatar} alt={'avatar'}/>
        </div>
        {/* Socials */}
        <div className='px-44 pt-28 flex justify-between'>
          <Socials social={<FiGithub className='text-7xl'/>} />
          <Socials social={<FiLinkedin className='text-7xl'/>} />
          <Socials social={<FiFacebook className='text-7xl'/>} />
        </div>
      </section>
    </main>
  )
}
