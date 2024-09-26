import Link from 'next/link'
import Image from 'next/image';
import { Bell, User } from 'lucide-react';

export default function Navbar() {
    return (
      <nav className="fixed flex w-full justify-between h-[4rem] px-12 bg-background border-[1px] border-black border-opacity-5 text-xl shadow-md z-[10]">
        {/* <Image src="/logo.svg" alt="Next.js Logo" width={200} height={38} priority /> */}
        <Link className="w-1/3 text-3xl font-bold my-auto" href="/">VYBE</Link>
        <form className="flex w-1/3 items-center">
          <label htmlFor="search" className="sr-only">Search for other users or posts</label>
          <input type="search" id="search" className="w-full text-base rounded-2xl px-4 py-2 outline-none bg-background2" placeholder="Search" />
        </form>

        <ul className="flex w-1/3 h-full gap-x-2 justify-end items-center space-x-4">
          <li>
            <Link href="#" className="transition ease-in duration-100 rounded-full hover:bg-gray-700 flex items-center p-2"><Bell/></Link>
          </li>
          <li>
            <Link href="/login" className="hover:bg-gray-700 flex items-center p-2 rounded-full"><User/></Link>
          </li>
        </ul>
      </nav>
    );
  }