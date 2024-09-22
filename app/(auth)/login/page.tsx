import Link from "next/link";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center w-[30rem] min-h-screen p-8 gap-12 sm:p-20 m-auto">
      <Link href="/">
        <Image
          className="dark:invert"
          src="https://nextjs.org/icons/next.svg"
          alt="Next.js logo"
          width={200}
          height={38}
          priority
        />
      </Link>
      <form className="flex flex-col gap-4 w-full" action="/api/auth/login" method="POST">
        <label className="flex flex-col gap-2">
          <span className="text-sm">Email</span>
          <input type="email" name="email" className="p-2 rounded-md border-2 border-solid border-black/[.08] dark:border-white/[.145]" placeholder="user@example.com" required />
        </label>
        <label className="flex flex-col gap-2">
          <span className="text-sm">Password</span>
          <input type="password" name="password" className="p-2 rounded-md border-2 border-solid border-black/[.08] dark:border-white/[.145]" required />
        </label>
        <button type="submit" className="bg-black/[.08] dark:bg-white/[.145] p-2 rounded-md text-sm">Log in</button>
      </form>
      <button type="submit" className="bg-black/[.08] dark:bg-white/[.145] p-2 rounded-md text-sm w-full">Log in with Google</button>
    </div>
  );
}
