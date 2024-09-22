import Image from "next/image";
import Navbar from "./components/navbar/Navbar.tsx";

export default function Home() {
  return (
    <>
      <div className="flex flex-col">
        <Navbar />
      </div>
    </>
  );
}
