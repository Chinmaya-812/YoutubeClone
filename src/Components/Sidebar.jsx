import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
import { SiYoutubeshorts } from "react-icons/si";
import { MdOutlineSubscriptions } from "react-icons/md";
import { FaFire } from "react-icons/fa";
import { IoMdMusicalNote } from "react-icons/io";
import { MdMovieCreation } from "react-icons/md";
import { FaGamepad } from "react-icons/fa";
import { IoNewspaperSharp } from "react-icons/io5";
import { FaTrophy } from "react-icons/fa";
import { FaLightbulb } from "react-icons/fa";
import "./sidebar.css";
import { toggleMenu } from "../utils/appSlice";

const Sidebar = () => {
  const isSideBarMenu = useSelector((i) => i.app.isMenuOpen);

  const dispatch = useDispatch();
  const toggleMenuhandler = () => {
    dispatch(toggleMenu());
  };


  
  return (
    <div className={`side-panel ${isSideBarMenu ? "open" : ""}`}>
      <div className="side-panel-content">
        <div className="flex justify-between border-b-2 border-gray-200">
          <img
            src="https://youtube-alpha-tan.vercel.app/static/media/YouTube-Logo.bcf43f61296aa95770c3.png"
            height={60}
            width={120}
            alt=""
          />
          <button onClick={toggleMenuhandler} className="h-16 border-none">
            <span className="text-2xl font-bold transition-transform duration-500 ease-in-out transform hover:scale-125">X</span>
          </button>
        </div>
        <nav className="sidebar-nav">
          <div className="pl-16">
            <Link to={"/"}>
              <button className="mb-1 flex border-2 border-gray-100 p-3 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <h2>
                  <span>Home</span>
                </h2>
                <FaHome size={25} className="absolute left-10 text-black" />
              </button>
            </Link>
            <Link to={"SideSearchPage?q=Shorts"}>
              <button className="mb-1 flex border-2 border-gray-100 p-3 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Shorts</span>
                <div>
                  <SiYoutubeshorts
                    size={25}
                    className="absolute left-10 text-black"
                  />
                </div>
              </button>
            </Link>
            <Link to={"SideSearchPage?q=Subscriptions"}>
              <button className="mb-1 flex border-2 border-gray-100 p-3 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Subscriptions</span>

                <MdOutlineSubscriptions
                  size={25}
                  className="absolute left-10 text-black"
                />
              </button>
            </Link>
            <Link to={"SideSearchPage?q=Explore"}>
              <button className="mb-1 flex border-2 border-gray-100 p-3 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Explore</span>
                <FaFire size={25} className="absolute left-10 text-black" />
              </button>
            </Link>
            <Link to={"SideSearchPage?q=Music"}>
              <button className="mb-1 flex border-2 border-gray-100 p-3 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Music</span>
                <IoMdMusicalNote
                  size={25}
                  className="absolute left-10 text-black"
                />
              </button>
            </Link>
            <Link to={"SideSearchPage?q=Movies"}>
              <button className="mb-1 flex border-2 border-gray-100 p-3 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Movies</span>
                <MdMovieCreation
                  size={25}
                  className="absolute left-10 text-black"
                />
              </button>
            </Link>
            <Link to={"SideSearchPage?q=Gaming"}>
              <button className="mb-1 flex border-2 border-gray-100 p-3 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Gaming</span>

                <FaGamepad size={25} className="absolute left-10 text-black" />
              </button>
            </Link>

            <Link to={"SideSearchPage?q=News"}>
              <button className="mb-1 flex border-2 border-gray-100 p-3 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>News</span>

                <IoNewspaperSharp
                  size={25}
                  className="absolute left-10 text-black"
                />
              </button>
            </Link>
            <Link to={"SideSearchPage?q=Sports"}>
              <button className="mb-1 flex border-2 border-gray-100 p-3 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Sports</span>

                <FaTrophy size={25} className="absolute left-10 text-black" />
              </button>
            </Link>

            <Link to={"SideSearchPage?q=Learning"}>
              <button className="mb-1 flex border-2 border-gray-100 p-3 w-full rounded-lg hover:bg-gray-400 transition duration-700">
                <span>Learning</span>

                <FaLightbulb
                  size={25}
                  className="absolute left-10 text-black"
                />
              </button>
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
