import Image from 'next/image'
import { roboto } from './fonts'
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Home() {
  return (
    <main>
      <section className='min-h-screen'>
        <nav className='pt-16 px-44 mb-150 flex justify-between'>
          <h1 className='text-2xl'>ARAWELADELMO</h1>
          <ul className='flex items-center'>
            <li>
              <BsFillMoonStarsFill className='cursor-pointer text-2xl' />
            </li>
              <a className='text-2xl bg-accentPurple px-5 py-1 rounded-xl ml-4' href="#">Resume</a>
            <li>

            </li>
          </ul>
        </nav>
      </section>
    </main>
  )
}
