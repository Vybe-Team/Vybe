import Link from 'next/link'
import Image from 'next/image';

export default function Navbar() {
    return (
      <nav className="fixed flex w-full justify-between h-[4rem] px-12 text-xl shadow-md dark:shadow-lg bg-white dark:bg-black z-[10] text-white">
        {/* <Image src="/logo.svg" alt="Next.js Logo" width={200} height={38} priority /> */}
        <Link className="w-1/3 text-3xl font-bold my-auto" href="/">VYBE</Link>
        <form className="flex w-1/3 items-center">
          <label htmlFor="search" className="sr-only">Search for other users or posts</label>
          <input type="search" id="search" className="w-full text-base rounded-2xl px-4 py-2 outline-none bg-[#f2f2f2]" placeholder="Search" />
        </form>

        <ul className="flex w-1/3 h-full gap-x-2 justify-end items-center">
          <li>
            <Link href="#" className="transition ease-in duration-100 rounded-full py-3 px-6 hover:bg-gray-700">Bell Icon</Link>
          </li>
          <li>
            <Link href="/login" className="transition ease-in duration-100 rounded-full py-3 px-6 hover:bg-gray-700">PF Icon</Link>
          </li>
        </ul>
      </nav>
    );
  }