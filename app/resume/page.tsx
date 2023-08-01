import Link from "next/link";
import { BsConeStriped } from 'react-icons/bs';

export default function Page() {
    return (
        <section className='min-h-screen pt-16 mx-44'>
            <nav className='mb-32 flex justify-between'>
                <h1 className='text-2xl font-bold'>ARAWELADELMO</h1>
                <ul className='flex items-center'>
                    <li>
                    {/* <BsFillMoonStarsFill className='cursor-pointer text-2xl' /> */}
                    </li>
                    <li>
                    <Link className='text-2xl bg-accentPurple px-5 py-2 rounded-xl ml-5' href="/">Back to Home</Link>
                    </li>
                </ul>
            </nav>
            <div className="flex items-center justify-center gap-5">
                <h2 className='text-8xl font-bold mb-4 text-center'>Coming soon.</h2>
                <BsConeStriped className="text-9xl text-center text-orange-400"/>
            </div>
        </section>
    )
}