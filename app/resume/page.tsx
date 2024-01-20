import Image from "next/image";
import Link from "next/link";
import { BsConeStriped } from 'react-icons/bs';
import resume from '../../public/resume.jpg';
export default function Page() {
    return (
        <section className='min-h-screen pt-16 mx-20 md:mx-44'>
            <div className='absolute w-96 h-96 bg-accentGreen rounded-full blur-3xl opacity-40 overflow-hidden -left-56 top-96'></div>
            <div className='absolute w-96 h-96 bg-accentPurple rounded-full blur-3xl opacity-50 overflow-hidden right-72 -top-64'></div>
            <nav className='mb-32 flex justify-between'>
                <h1 className='text-lg md:text-2xl font-bold'>ARAWELADELMO</h1>
                <ul className='flex items-center'>
                    <li>
                    {/* <BsFillMoonStarsFill className='cursor-pointer text-2xl' /> */}
                    </li>
                    <li>
                    <Link className='text-xl bg-accentPurple px-5 py-2 rounded-xl shadow-lg ml-5 hover:bg-transparent hover:border-accentPurple hover:border-2 hover:shadow-lg hover:ring-2 md:text-2xl' href="/">Home</Link>
                    </li>
                </ul>
            </nav>
            <div className="bg-bgskills w-full h-96 rounded-xl mt-7 mb-64 p-12 bg-opacity-50 shadow-lg shadow-accentPurple flex flex-row items-start justify-center gap-5 md:flex-row">
                <div className="w-full">
                    <Image src={resume} alt={'resume'} className="mb-5"/>
                </div>
                {/* <h2 className='text-5xl md:text-8xl font-bold mb-4 text-center'>Coming soon.</h2>
                <BsConeStriped className="text-6xl md:text-9xl text-center text-orange-400"/> */}
            </div>
        </section>
    )
}