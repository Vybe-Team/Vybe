import React from "react";
import Image from "next/image";
import Navbar from "./components/navbar/Navbar";
import Posts from "./components/Posts";
import Followers from "./components/Followers";
import Chat from "./components/chat/Chat";
import { mockFollowers, mockPosts } from "@/public/mockData";

export default function Home() {
  return (
    <>
      <Navbar />

      <div className="flex min-h-screen justify-between bg-background2 px-[1rem] pt-[5rem]">
        <aside>
          <div className="w-[18rem] h-[25rem] p-4 bg-background3 rounded-lg shadow-lg border-[1px] border-black border-opacity-5">Left Aside</div>
        </aside>
        <main>
          <section className="w-[55rem] p-2">
            Write Post Input Form Here
            <Posts posts={mockPosts} />    
          </section>
        </main>
        <aside>
          <div className="w-[22rem] h-[25rem] p-4 bg-background3 rounded-lg shadow-lg border-[1px] border-black border-opacity-5">
          Recommendations
          <Followers followers={mockFollowers} />
          </div>
        </aside>
      </div>
      
      <Chat messages={mockPosts}/>
    </>
  );
}
