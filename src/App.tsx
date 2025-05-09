import { useState } from "react";

import "./App.css";
import Bell from "../img/Bell2.png";
import tree from "../img/chritmas-wreath-Photoroom.png";
import santa from "../img/santa.png";
import deer from "../img/deer.png";

import ranbow from "../img/ป้ายห้อย-removebg-preview.png";

import gifts from "../img/gifts.png";
import ball from "../img/christmas-ball.png";
import bauble from "../img/bauble.png";
import snowman from "../img/snowman.png";
import Christmastree from "../img/christmas-tree (2).png";
import gingercookie from "../img/ginger-cookies.png";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const Popup = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <div className="relative h-screen bg-red-950 overflow-hidden flex justify-center items-center">
        {Array.from({ length: 50 }).map((_, i) => (
          <div
            key={i}
            className="absolute top-[-10%] text-white text-2xl animate-fall"
            style={{
              left: `${Math.random() * 100}%`, //สุ่มตำแหน่งแนวนอน
              animationDelay: `${Math.random() * 10}s`, //ดีเลย์แบบสุ่ม(ระหว่าง 0-10 วินาที)
              animationDuration: `${Math.random() * 5 + 5}s`, // เพิ่มความหลากหลายในการตก
            }}
          >
            <div className="animate-shake">❅</div>
          </div>
        ))}
        <div className="absolute flex flex-col items-center justify-center h-44 w-52">
          <img className="absolute mb-[260px] ml-4 h-28 mt-5" src={deer} />
          <img className="relative" src={tree} />
          <img className="absolute w-20 h-20 mt-44" src={Bell} />

          {/*Open*/}
          <button
            onClick={Popup}
            className="absolute font-Great text-white text-4xl flex flex-col justify-between items-center"
          >
            Open
          </button>
        </div>

        {/* close */}
        {isOpen && (
          <div>
            <div className="relative bg-emerald-950 sm:w-96 w-60 sm:h-96 h-96 flex flex-col items-center justify-between rounded-2xl drop-shadow-lg border-4">
              <img
                className="absolute transform rotate-12 sm:h-28 h-20 sm:right-44 right-24"
                src={ranbow}
              />
              <img
                className="absolute transform -rotate-12 sm:h-28 h-20 sm:left-44 left-24"
                src={ranbow}
              />
              <img
                className="absolute sm:h-36 h-28 sm:w-36 w-28 mr-56 mt-3 ml-56"
                src={santa}
              />
              <img
                className="absolute sm:h-11 h-9 sm:mt-11 mt-8 sm:mr-72 mr-44"
                src={ball}
              />
              <img
                className="absolute sm:h-12 h-9 sm:mt-12 mt-8 sm:ml-72 ml-44"
                src={bauble}
              />
              <div className="text-white font-bold text-center mt-44 font-Kalam sm:w-72 w-44 h-20">
                Merry Christmas 2025!! May Santa bring you to the best presents
              </div>

              <button
                onClick={Popup}
                className="bg-red-800 text-white text-xl sm:px-6 px-2 sm:py-2 py-0 rounded-lg mt-auto mb-6 shadow-2xl font-Kalam"
              >
                Close
              </button>
              <img
                className="absolute sm:h-36 h-20 sm:mt-[225px] mt-[285px] sm:mr-[260px] mr-[165px]"
                src={Christmastree}
              />
              <img
                className="absolute sm:h-10 h-8 sm:mt-[325px] mt-[330px] sm:mr-[190px] mr-[120px]"
                src={gingercookie}
              />
              <img
                className="absolute sm:h-16 h-12 sm:mt-[300px] mt-[315px] sm:ml-[180px] ml-[120px]"
                src={snowman}
              />
              <img
                className="absolute sm:h-16 h-11 sm:mt-[300px] mt-[320px] sm:ml-[295px] ml-[185px]"
                src={gifts}
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;
