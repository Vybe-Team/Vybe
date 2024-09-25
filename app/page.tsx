import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Posts from "./components/Posts";
import { mockFollowers, mockPosts } from "@/public/mockData";
import Followers from "./components/Followers";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex h-screen justify-between bg-[#fafafa] px-[1rem] pt-[5rem]">
        <aside>
          <div className="w-[18rem] h-[50%] p-4 bg-white rounded-lg shadow-lg border-[1px] border-black border-opacity-5">Left Aside</div>
        </aside>
        
        <main>
          <section className="w-[55rem] h-full p-4 bg-white rounded-lg shadow-lg border-[1px] border-black border-opacity-5">
            Feed
            <Image src="/404.webp" alt="Next.js Logo" width={250} height={50} priority />
            <div className="bg-gray-100 min-h-screen p-8">
              <Posts posts={mockPosts} />
            </div>          
          </section>
        </main>
  
        <aside>
          <div className="w-[22rem] h-[50%] p-4 bg-white rounded-lg shadow-lg border-[1px] border-black border-opacity-5">
          <Followers followers={mockFollowers} />
          </div>
        </aside>
      </div>

      <button className="fixed w-[25rem] bottom-0 right-0 p-4 mr-6 bg-white shadow-chatbox border-[1px]">Chat</button>
    </>
  );
}
