import { Outlet } from "react-router-dom";
import Top from "./topNav";
import Footer from "./Footer";
export default function Home() {
  return (
    <>
    <div className="bg-zinc-900 flex flex-col lg:px-[12%] min-h-screen text-gray-50">
    <Top />
    <Outlet/>
    <Footer />
    </div>
  </>
  )
}
