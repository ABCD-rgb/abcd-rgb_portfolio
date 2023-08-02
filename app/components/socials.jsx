import Image from "next/image";

const Socials = ({social}) => {
  return (
    <div className="bg-bgsocials bg-opacity-40 w-40 h-28 cursor-pointer flex justify-center items-center rounded-2xl hover:ring-4">
      {social}
    </div>
  )
}

export default Socials