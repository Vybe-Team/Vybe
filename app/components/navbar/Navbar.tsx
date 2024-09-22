import Link from 'next/link'
export default function Navbar() {
    return (
      <div className="flex flex-col  justify-start w-[30rem] min-h-screen p-8 gap-12 sm:p-20 text-3xl">
        <ul className="space-y-4">
            <li>
              <Link href="#" className="transition ease-in duration-100 rounded-full py-3 px-6 hover:bg-gray-700">Home</Link>
            </li>
            <li>
              <Link href="#" className="transition ease-in duration-100 rounded-full py-3 px-6 hover:bg-gray-700">Messages</Link>
            </li>
            <li>
              <Link href="/login" className="transition ease-in duration-100 rounded-full py-3 px-6 hover:bg-gray-700">Profile</Link>
            </li>
            <li>
              <Link href="#" className="transition ease-in duration-100 rounded-full py-3 px-6 hover:bg-gray-700">Notifications</Link>
            </li>
            <li>
              <Link href="#" className="transition ease-in duration-100 rounded-full py-3 px-6 hover:bg-gray-700">Settings</Link>
            </li>
        </ul>
      </div>
    );
  }