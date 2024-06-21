import React from "react";
import Image from "next/image";
import { GiZipper } from "react-icons/gi";
import { AiOutlineHome } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdNotificationsOutline } from "react-icons/io";
import { FaRegMessage } from "react-icons/fa6";
import { CiUser } from "react-icons/ci";
import { TbPremiumRights } from "react-icons/tb";
import { Inter } from "next/font/google";
import FeedCard from "@/components/FeedCard";

const inter = ({ subsets: ["latin"] });
interface zippitSidebarButton {
  title: string;
  icon: React.ReactNode;/*because an icon is a ReactNode */
}

const SidebarMenuIcons: zippitSidebarButton[] = [
  {
    title: 'Home',
    icon: <AiOutlineHome />
  },
  {
    title: 'Explore',
    icon: <CiSearch />
  },
  {
    title: 'Notifications',
    icon: <IoMdNotificationsOutline />

  },
  {
    title: 'Messages',
    icon: <FaRegMessage />

  },
  {
    title:'Premium',
    icon: <TbPremiumRights />
  },
  {
    title: 'Profile',
    icon: <CiUser />

  },
]

export default function Home() {
  return (
    <div>
      <div className="grid grid-cols-12 h-screen w-screen px-56">

        <div className="col-span-3  pt-1">
          <div className="text-4xl h-fit w-fit hover:bg-gray-800 rounded-full p-2 cursor-pointer  transition-all">
            <GiZipper />
          </div>
          <div className="mt-1 text-xl pr-4">

            <ul>
              {SidebarMenuIcons.map((item) =>
                <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-3 py-3 w-fit cursor-pointer " key={item.title}>
                  <span className="text-2xl">{item.icon}</span>
                  <span>{item.title}</span></li>)}
            </ul>
            <div className="mt-5 px-3">
              <button className="bg-[#1d9bf0] py-2 px-2 rounded-full w-full  text-sm">
                Znote
              </button>
            </div>
          </div>
        </div>

        <div className="col-span-6 border-r-[1px] border-l-[1px] border-gray-400">
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
          <FeedCard/>
        </div>

        <div className=" col-span-3"></div>
      </div>
    </div>
  )
}
