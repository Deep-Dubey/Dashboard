import { MdDashboard } from "react-icons/md";
import { FaAnglesLeft } from "react-icons/fa6";
import { HiMiniSquare3Stack3D } from "react-icons/hi2";
import { FaAngleRight } from "react-icons/fa6";
import { MdOutlinePages } from "react-icons/md";
import Dashboard from "./Dashboard";

function App() {
  return (
    <div className="main flex w-full">
      <div
        className="menu h-screen fixed left-0 top-0 bottom-0 p-6 space-y-16"
        style={{ background: "#172330" }}
      >
        <div className="flex items-center justify-between">
          <h1 className="uppercase font-bold text-gray-200 text-2xl">
            DASHBOARD
          </h1>
          <span className="text-gray-200 text-lg">
            <FaAnglesLeft />
          </span>
        </div>
        <div>
          <div className="flex items-center space-x-3">
            <span className="text-xl text-gray-200">
              <HiMiniSquare3Stack3D />
            </span>
            <h1 className="capitalize font-bold text-gray-200 text-xl">
              dashboard
            </h1>
          </div>
          <div>
            <span className="text-gray-400 uppercase mt-10 block text-base">
              custom
            </span>
          </div>
          <div className="mt-6">
            <div className="w-full flex justify-between items-center">
              <div className="flex justify-start items-center text-xl text-gray-200 space-x-3">
                <span>
                  <MdDashboard />
                </span>
                <h4>Applications</h4>
              </div>
              <span className="text-xl text-gray-200 transform rotate-90 cursor-pointer">
                <FaAngleRight />
              </span>
            </div>
            <ul className="space-y-6 mt-7 pl-5 ">
              {["- Users", "- Contacts", "- Chats"].map((data) => {
                return (
                  <li className="text-xl text-gray-300 flex justify-between items-center w-full">
                    <span>{data}</span>
                    <span className="cursor-pointer">
                      <FaAngleRight />
                    </span>
                  </li>
                );
              })}
            </ul>

            <div className="w-full flex justify-between items-center mt-10">
              <div className="flex justify-start items-center text-xl text-gray-200 space-x-3">
                <span>
                  <MdOutlinePages />
                </span>
                <h4>Pages</h4>
              </div>
              <span className="text-xl text-gray-200 cursor-pointer">
                <FaAngleRight />
              </span>
            </div>
          </div>
        </div>
      </div>
      <div className="dashboard">
        <Dashboard />
      </div>
    </div>
  );
}

export default App;
