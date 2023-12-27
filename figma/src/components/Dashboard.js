import Icon from "./../resources/Icons/icons.svg";
import Books from "./../resources/Icons/books.svg";
import categories from "./../resources/Icons/categories.svg";
import video from "./../resources/Icons/video.svg";
import security from "./../resources/Icons/security.svg";
import stats from "./../resources/Icons/stats.svg";
import background from "./../resources/Icons/background.svg";
import icon1 from "./../resources/Icons/icon1.svg";
import icon2 from "./../resources/Icons/icon2.svg";
import icon3 from "./../resources/Icons/icon3.svg";
import icon4 from "./../resources/Icons/icon4.svg";
import hr from "./../resources/Icons/hr.svg";
import ktr from "./../resources/Icons/ktr.svg";
import sant from "./../resources/Icons/sant.svg";
import telegram from "./../resources/Icons/telegram.svg";
import cisco from "./../resources/Icons/cisco.svg";
import { HiDocumentAdd } from "react-icons/hi";
import { FaEdit } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import { BsToggles } from "react-icons/bs";

export default function Dashboard() {
  return (
    <div className="w-full">
      <header>
        <div className="w-full bg-white px-12 pt-4 pb-3 border-b border-b-gray-200">
          <div className="w-full flex justify-end items-center space-x-12">
            <div>
              <img src={Icon} alt="Icons" className="h-8" />
            </div>
            <div className="flex items-center space-x-6">
              <span className="text-lg text-gray-400">Nick Thomas</span>
              <span className="w-12 h-12 bg-green-100  text-green-700 text-xl flex justify-center items-center font-bold">
                N
              </span>
            </div>
          </div>
        </div>
        <div className="w-full bg-white px-12 pt-5 pb-5 flex justify-between">
          <div className="flex items-center space-x-12">
            <span className="text-lg text-gray-600">Dashboard</span>
            <span className="text-xl text-gray-400">|</span>
            <button className="bg-orange-50 text-orange-700 text-base px-4 py-3 rounded-md">
              Add New
            </button>
          </div>
          <div className="flex items-center space-x-10">
            <ul className="flex items-center justify-center relative space-x-7">
              {["Today", "Month", "Year"].map((data, index) => {
                return index == 0 ? (
                  <li className="text-base bg-blue-50 text-blue-700 px-3 py-2 rounded-md">
                    {data}
                  </li>
                ) : (
                  <li className="text-base px-3 py-2 rounded-md text-gray-500">
                    {data}
                  </li>
                );
              })}
            </ul>
            <button className="text-base bg-gray-100 text-gray-700 px-3 py-2 rounded-md">
              Actions
            </button>
            <span className="text-3xl text-green-700">
              <HiDocumentAdd />
            </span>
          </div>
        </div>
      </header>
      <div className="bg-transparent px-20 mt-12">
        <ul className="w-full flex justify-between">
          {[
            {
              icon: Books,
              text: "SaaS Applications",
            },
            {
              icon: categories,
              text: "Main Categories",
            },
            {
              icon: video,
              text: "Video Tutorials",
            },
            {
              icon: stats,
              text: "Sales Statistics",
            },
            {
              icon: security,
              text: "ARC Security",
            },
          ].map((data, index) => {
            return index == 2 ? (
              <li
                className="w-64 h-64 rounded-md drop-shadow-sm flex flex-col justify-center items-center p-3 space-y-4"
                style={{ backgroundColor: "#50CD89" }}
              >
                <img src={data.icon} className="w-24 h-24" />
                <p className="text-2xl text-white  text-center">{data.text}</p>
              </li>
            ) : (
              <li className="w-64 h-64 bg-white rounded-md drop-shadow-sm flex flex-col justify-center items-center p-3 space-y-4">
                <img src={data.icon} className="w-24 h-24" />
                <p className="text-2xl text-gray-400 text-center">
                  {data.text.split(" ")[0]}
                  <br />
                  {data.text.split(" ")[1]}
                </p>
              </li>
            );
          })}
        </ul>
      </div>
      <div className="w-full px-20 mt-12 space-x-12 flex">
        <div className="w-1/2 bg-white shadow-sm rounded-lg">
          <img src={background} />
          <div className="w-full h-32"></div>
        </div>
        <div className="w-1/2 bg-white shadow-sm rounded-lg px-12 py-8">
          <div className="flex items-center justify-between">
            <p className="text-2xl text-gray-600 font-bold">Sales Progress</p>
            <div className="flex space-x-2">
              <span className="block w-2 h-2 bg-gray-200 rounded-sm"></span>
              <span className="block w-2 h-2 bg-gray-400 rounded-sm"></span>
            </div>
          </div>
          <div>
            <ul className="mt-8 space-y-10">
              {[
                {
                  classes: "w-12 h-12 bg-violet-50 p-3 rounded-xl",
                  icon: icon1,
                  header: "Briviba SaaS",
                  alt_text: "PHP, SQLite, Artisian CLImm",
                },
                {
                  classes: "w-12 h-12 bg-orange-50 p-3 rounded-xl",
                  icon: icon2,
                  header: "Briviba SaaS",
                  alt_text: "PHP, SQLite, Artisian CLImm",
                },
                {
                  classes: "w-12 h-12 bg-green-50 p-3 rounded-xl",
                  icon: icon3,
                  header: "Briviba SaaS",
                  alt_text: "PHP, SQLite, Artisian CLImm",
                },
                {
                  classes: "w-12 h-12 bg-red-50 p-3 rounded-xl",
                  icon: icon4,
                  header: "Briviba SaaS",
                  alt_text: "PHP, SQLite, Artisian CLImm",
                },
              ].map((data) => (
                <li className="w-full flex space-x-5">
                  <div className={data.classes}>
                    <img src={data.icon} className="w-6" />
                  </div>
                  <div>
                    <p className="text-xl text-gray-700">{data.header}</p>
                    <p className="text-lg text-gray-300">{data.alt_text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="w-full mt-12 px-20 py-3">
        <div className="bg-white w-full shadow-sm rounded-xl p-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-gray-700">New Arrivals</h1>
              <p className="text-gray-400 text-lg">
                More than 400+ new Members
              </p>
            </div>
            <div>
              <ul className="flex items-center justify-center relative space-x-7">
                {["Month", "Week", "Day"].map((data, index) => {
                  return index == 2 ? (
                    <li className="text-lg bg-gray-800 text-gray-100 px-3 py-2 rounded-md">
                      {data}
                    </li>
                  ) : (
                    <li className="text-lg px-3 py-2 rounded-md text-gray-500">
                      {data}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
          <div className="flex justify-between items-center mt-4">
            <div className="ml-4 w-full">
              <ul className="mt-8 space-y-16 w-full">
                {[
                  {
                    classes: "w-12 h-12 bg-gray-100 p-3 rounded-xl",
                    icon: sant,
                    header: "Sant Outstanding",
                    alt_text: "bprow@bnc.cc",
                    amount: "$2000000",
                    status: "approved",
                    li_classes:
                      "bg-violet-50 text-violet-700 text-lg px-3 py-2 rounded-xl",
                  },
                  {
                    classes: "w-12 h-12 bg-gray-100 p-3 rounded-xl",
                    icon: telegram,
                    header: "Telegram Application",
                    alt_text: "bprow@bnc.cc",
                    amount: "$2000000",
                    status: "in-progress",
                    li_classes:
                      "bg-orange-50 text-orange-700 text-lg px-3 py-2 rounded-xl",
                  },
                  {
                    classes: "w-12 h-12 bg-gray-100 p-3 rounded-xl",
                    icon: cisco,
                    header: "Cisco Management",
                    alt_text: "bprow@bnc.cc",
                    amount: "$2000000",
                    status: "success",
                    li_classes:
                      "bg-green-50 text-green-700 text-lg px-3 py-2 rounded-xl",
                  },
                  {
                    classes: "w-12 h-12 bg-gray-100 p-3 rounded-xl",
                    icon: hr,
                    header: "HR Management",
                    alt_text: "bprow@bnc.cc",
                    amount: "$2000000",
                    status: "rejected",
                    li_classes:
                      "bg-red-50 text-red-700 text-lg px-3 py-2 rounded-xl",
                  },
                  {
                    classes: "w-12 h-12 bg-gray-100 p-3 rounded-xl",
                    icon: ktr,
                    header: "KTR Mobile Application",
                    alt_text: "bprow@bnc.cc",
                    amount: "$2000000",
                    status: "in-progress",
                    li_classes:
                      "bg-orange-50 text-orange-700 text-lg px-3 py-2 rounded-xl",
                  },
                ].map((data) => (
                  <li className="w-full flex justify-between items-center">
                    <div className="flex space-x-5">
                      <div className={data.classes}>
                        <img src={data.icon} className="w-6" />
                      </div>
                      <div>
                        <p className="text-2xl text-gray-700">{data.header}</p>
                        <p className="text-lg text-gray-400">
                          <b className="text-gray-900">FTP: </b>
                          {data.alt_text}
                        </p>
                      </div>
                    </div>
                    <div>
                      <ul className="flex space-x-12">
                        <li className="text-right">
                          <h2 className="text-xl">{data.amount}</h2>
                          <span className="text-base text-gray-500">paid</span>
                        </li>
                        <li className={data.li_classes}>{data.status}</li>
                        <li className="text-xl text-blue-500 flex space-x-4 items-center">
                          <span className="w-11 h-11 rounded-lg bg-gray-100  flex justify-center items-center">
                            <BsToggles />
                          </span>
                          <span className="w-11 h-11 rounded-lg bg-gray-100  flex justify-center items-center">
                            <FaEdit />
                          </span>
                          <span className="w-11 h-11 rounded-lg bg-gray-100  flex justify-center items-center">
                            <MdDelete />
                          </span>
                        </li>
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full mt-12 px-20">
        <div className="bg-white w-full shadow-sm rounded-xl p-10">
          <div className="flex justify-between items-center">
            <div>
              <h1 className="text-2xl text-gray-700">Recent Stats</h1>
              <p className="text-gray-400 text-lg">
                More than 400+ new Members
              </p>
            </div>
            <div>
              <ul className="flex items-center justify-center relative space-x-7">
                {["Month", "Week", "Day"].map((data, index) => {
                  return index == 2 ? (
                    <li className="text-lg bg-gray-800 text-gray-100 px-3 py-2 rounded-md">
                      {data}
                    </li>
                  ) : (
                    <li className="text-lg px-3 py-2 rounded-md text-gray-500">
                      {data}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
